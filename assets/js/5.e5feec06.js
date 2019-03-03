(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{334:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_0-46-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-46-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.46.1")]),t._v(" "),a("ul",[a("li",[t._v("Extended type registration to now handle internal types as well. Additionally the built-in Extrinsic type can now we overridden with a custom version.")]),t._v(" "),a("li",[t._v("Where "),a("code",[t._v("Extrinsic")]),t._v(" and "),a("code",[t._v("Method")]),t._v(" is used as types, considder importing "),a("code",[t._v("{ IMethod, IExtrinsic }")]),t._v(" from "),a("code",[t._v("@polkadot/types/types")]),t._v(", especially in the cases where this is uased from a "),a("code",[t._v("SubmittableExtrinsic")])]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("typeRegistry")]),t._v(" constant is now "),a("code",[t._v("getTypeRegistry()")]),t._v(" as a function")])]),t._v(" "),a("h1",{attrs:{id:"_0-45-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-45-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.45.1")]),t._v(" "),a("ul",[a("li",[t._v("Storage with option values now correctly return "),a("code",[t._v("Option<Type>")]),t._v(" and is indicated as such in the documentation")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// old")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ll "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastLengthChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ll "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* BlockNumber */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// would be 0 if not set yet")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" llo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastLengthChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'llo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" llo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrapOr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not set'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Option<BlockNumber> */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h1",{attrs:{id:"_0-44-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-44-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.44.1")]),t._v(" "),a("ul",[a("li",[t._v("Split primitives and types into seperate folders. This should not affect external use since the exports remain the same, however does have an impact where classes are referenced directly. e.g.")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// old (affected)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Method "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/Method'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Signature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/Signature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new locations")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Method "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/primitive/Method'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Signature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/type/Signature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unaffected")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Signature "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h1",{attrs:{id:"_0-43-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-43-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.43.1")]),t._v(" "),a("ul",[a("li",[t._v("Intrduces support for the new keyring with sr25519 support in addition to ed25519. While this does not change the exposed API, it is considerred breaking since @polkadot/keuyring has interface changes. (Unless needed, don't rush the upgrade)")])]),t._v(" "),a("h1",{attrs:{id:"_0-42-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-42-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.42.1")]),t._v(" "),a("ul",[a("li",[t._v("Support for substrate hash signing with implVersion >= 18")]),t._v(" "),a("li",[t._v("Changed signatures for Extrinsic signing, this should not have (much) of an impact since it is generally not used directly. SubmittableExtrinsic (as exposed by the API), supports the old-style use.")])]),t._v(" "),a("h1",{attrs:{id:"_0-41-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-41-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.41.1")]),t._v(" "),a("ul",[a("li",[t._v("Support the V1 metadata specification from Substrate in addition to the currently testnet-active V0 version")])]),t._v(" "),a("h1",{attrs:{id:"_0-40-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-40-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.40.1")]),t._v(" "),a("ul",[a("li",[t._v("The API interfaces now require a WS-compatible provider, e.g. subscription support is a must. Previously the HTTPProvider could be use (although it was very limited in the interactions).")])]),t._v(" "),a("h1",{attrs:{id:"_0-39-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-39-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.39.1")]),t._v(" "),a("ul",[a("li",[t._v("The Promise API now returns a "),a("code",[t._v("Promise<UnsubFunction>")]),t._v(" instead of "),a("code",[t._v("UnsubFunction")]),t._v(" when making subscriptions.")])]),t._v(" "),a("h1",{attrs:{id:"_0-38-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-38-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.38.1")]),t._v(" "),a("p",[t._v("Substrate has been updated with a breaking new transaction format where the Index/Nonce is now encoded as a Compact. This change is being rolled out to both Alexander (Polkadot testnet) as well as Charred Cherry (Substrate testnet) - transactions between old and new are not compatible.")]),t._v(" "),a("h1",{attrs:{id:"_0-37-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-37-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.37.1")]),t._v(" "),a("p",[t._v("api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derivates like was included in api-observable into the base.")]),t._v(" "),a("p",[t._v("Tuples now return single types when only one type is available, i.e. "),a("code",[t._v("(AccountId)")]),t._v(" would now resolve as "),a("code",[t._v("AccountId")]),t._v(". The extra type wrapper adds no benefit to users here.")]),t._v(" "),a("h1",{attrs:{id:"_0-36-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-36-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.36.1")]),t._v(" "),a("p",[t._v("Api Promise has been updated in the way we deal with subscriptions. Previously a subscription returned "),a("code",[t._v("Promise<number>")]),t._v(" where the caller was to keep track of the id and use it in subsequent unsubscribes. Now any subscriptions return an unsubscribe/destroy function "),a("code",[t._v("(): void")]),t._v(", that is use for removing the subscriptions, e.g.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unsubscribe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeBalance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Alice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// here we destroy the subscription")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h1",{attrs:{id:"_0-35-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-35-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.35.1")]),t._v(" "),a("p",[t._v("Swapped to new metadata structures from Substrate. If the API is not working with your node, update Substrate to latest master branch. (Or 0.9.1 for Charred Cherry). Dropped support for old metadata as found as far back as BBQ Birch.")]),t._v(" "),a("h1",{attrs:{id:"_0-34-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-34-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.34.1")]),t._v(" "),a("p",[t._v("Changed the send signature (for future expansion of eg. events) to return "),a("code",[t._v("result: { status: ExtrinsicStatus }")]),t._v(" instead of "),a("code",[t._v("status: ExtrinsicStatus")]),t._v(". For most cases where only status "),a("code",[t._v("type")]),t._v(" checks are used, i.e. "),a("code",[t._v("status.type === 'Finalised'")]),t._v(" this should not be a breaking change. Deep inspection of the status object however will need to adapt.")])])},[],!1,null,null,null);s.default=n.exports}}]);