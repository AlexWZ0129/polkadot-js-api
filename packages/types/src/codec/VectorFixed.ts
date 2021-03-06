// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor } from '../types';

import { assert, isU8a, u8aConcat, compactToU8a } from '@polkadot/util';

import AbstractArray from './AbstractArray';
import Vector from './Vector';

/**
 * @name VectorFixed
 * @description
 * This manages codec arrays of a fixed length
 */
export default class VectorFixed<T extends Codec> extends AbstractArray<T> {
  private _Type: Constructor<T>;

  constructor (Type: Constructor<T>, length: number, value: VectorFixed<any> | Uint8Array | string | Array<any> = [] as Array<any>) {
    super(
      ...VectorFixed.decodeVectorFixed(Type, length, value)
    );

    this._Type = Type;
  }

  static decodeVectorFixed<T extends Codec> (Type: Constructor<T>, allocLength: number, value: VectorFixed<any> | Uint8Array | string | Array<any>): Array<T> {
    const values = Vector.decodeVector(
      Type,
      isU8a(value)
        ? u8aConcat(compactToU8a(allocLength), value)
        : value
    );

    while (values.length < allocLength) {
      values.push(new Type());
    }

    assert(values.length === allocLength, `Expected a length of exactly ${allocLength} entries`);

    return values;
  }

  static with<O extends Codec> (Type: Constructor<O>, length: number): Constructor<VectorFixed<O>> {
    return class extends VectorFixed<O> {
      constructor (value?: Array<any>) {
        super(Type, length, value);
      }

      static Fallback = Type.Fallback
        ? VectorFixed.with(Type.Fallback, length)
        : undefined;
    };
  }

  /**
   * @description The type for the items
   */
  get Type (): string {
    return this._Type.name;
  }

  toU8a (): Uint8Array {
    return super.toU8a(true);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return `[${new this._Type().toRawType()};${this.length}`;
  }
}
