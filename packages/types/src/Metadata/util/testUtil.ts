// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';

import createType from '../../codec/createType';
import Metadata from '../Metadata';
import Method from '../../primitive/Method';
import { MetadataInterface } from '../types';
import { Codec } from '../../types';

/**
 * Given the static `rpcData` and the `latestSubstrate` JSON file, Metadata
 * should decode `rpcData` and output `latestSubstrate`.
 */
export function decodeLatestSubstrate<Modules extends Codec> (
  version: number,
  rpcData: string,
  latestSubstrate: object
) {
  it('decodes latest substrate properly', () => {
    const metadata = new Metadata(rpcData);

    console.error(JSON.stringify(metadata.toJSON()));

    expect(metadata.version).toBe(version);
    expect((metadata[`asV${version}` as keyof Metadata] as unknown as MetadataInterface<Modules>).modules.length).not.toBe(0);
    expect(metadata.toJSON()).toEqual(latestSubstrate);
  });
}

/**
 * Given a `version`, MetadataV5 and MetadataV{version} should output the same
 * unique types.
 */
export function toV5<Modules extends Codec> (version: number, rpcData: string) {
  it('converts to V5', () => {
    const metadata = new Metadata(rpcData)[`asV${version}` as keyof Metadata];
    const metadataV5 = new Metadata(rpcData).asV5;

    expect(
      (metadata as unknown as MetadataInterface<Modules>).getUniqTypes(true)
    ).toEqual(metadataV5.getUniqTypes(true));
  });
}

/**
 * Given a Metadata, no type should throw when given its fallback value.
 */
export function defaultValues (rpcData: string) {
  describe('storage with default values', () => {
    const metadata = new Metadata(rpcData);
    Method.injectMethods(extrinsicsFromMeta(metadata));

    metadata.asV5.modules
      .filter(({ storage }) => storage.isSome)
      .map((mod) =>
        mod.storage.unwrap().forEach(({ fallback, name, type }) => {
          it(`creates default types for ${mod.prefix}.${name}, type ${type}`, () => {
            expect(
              () => createType(type.toString(), fallback)
            ).not.toThrow();
          });
        })
      );
  });
}
