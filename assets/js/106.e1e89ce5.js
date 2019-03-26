(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{375:function(t,r,e){"use strict";e.r(r);var s=e(2),a=Object(s.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"polkadot-rpc-provider-ws"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-rpc-provider-ws","aria-hidden":"true"}},[t._v("#")]),t._v(" @polkadot/rpc-provider/ws")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("name")])]),t._v(": WsProvider")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("description")])]),t._v(": The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("example")])]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Api "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api/promise'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WsProvider "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/rpc-provider/ws'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WsProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://127.0.0.1:9944'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Api")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("em",[e("strong",[t._v("see")])]),t._v(": [[HttpProvider]]")]),t._v(" "),e("h1",{attrs:{id:"hierarchy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),e("p",[e("strong",[t._v("WsProvider")])]),t._v(" "),e("h1",{attrs:{id:"implements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implements","aria-hidden":"true"}},[t._v("#")]),t._v(" Implements")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("WSProviderInterface")])])]),t._v(" "),e("h1",{attrs:{id:"constructors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructors","aria-hidden":"true"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),e("p",[e("a",{attrs:{id:"constructor"}})]),t._v(" "),e("h2",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),e("p",[t._v("⊕ "),e("strong",[t._v("new WsProvider")]),t._v("(endpoint?: "),e("em",[e("code",[t._v("string")])]),t._v(", autoConnect?: "),e("em",[e("code",[t._v("boolean")])]),t._v("): "),e("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")])],1),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L78",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:78"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default value")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("Default value")]),t._v(" endpoint")]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("defaults.WS_URL")]),t._v(" "),e("td",[t._v("The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Default value")]),t._v(" autoConnect")]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Whether to connect automatically or not.")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")])],1),t._v(" "),e("hr"),t._v(" "),e("h1",{attrs:{id:"accessors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessors","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessors")]),t._v(" "),e("p",[e("a",{attrs:{id:"hassubscriptions"}})]),t._v(" "),e("h2",{attrs:{id:"hassubscriptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hassubscriptions","aria-hidden":"true"}},[t._v("#")]),t._v(" hasSubscriptions")]),t._v(" "),e("p",[e("strong",[t._v("get hasSubscriptions")]),t._v("(): "),e("code",[t._v("boolean")])]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L105",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:105"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("summary")])]),t._v(": "),e("code",[t._v("true")]),t._v(" when this provider supports subscriptions")]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("boolean")])]),t._v(" "),e("hr"),t._v(" "),e("h1",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("p",[e("a",{attrs:{id:"clone"}})]),t._v(" "),e("h2",{attrs:{id:"clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clone","aria-hidden":"true"}},[t._v("#")]),t._v(" clone")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("clone")]),t._v("(): "),e("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")])],1),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L112",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:112"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("description")])]),t._v(": Returns a clone of the object")]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")])],1),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{id:"connect"}})]),t._v(" "),e("h2",{attrs:{id:"connect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connect","aria-hidden":"true"}},[t._v("#")]),t._v(" connect")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("connect")]),t._v("(): "),e("code",[t._v("void")])]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L121",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:121"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("summary")])]),t._v(": Manually connect")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("description")])]),t._v(": The "),e("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")]),t._v(" connects automatically by default, however if you decided otherwise, you may connect manually using this method.")],1),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("void")])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{id:"disconnect"}})]),t._v(" "),e("h2",{attrs:{id:"disconnect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disconnect","aria-hidden":"true"}},[t._v("#")]),t._v(" disconnect")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("disconnect")]),t._v("(): "),e("code",[t._v("void")])]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L137",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:137"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("description")])]),t._v(": Manually disconnect from the connection, clearing autoconnect logic")]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("void")])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{id:"isconnected"}})]),t._v(" "),e("h2",{attrs:{id:"isconnected"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isconnected","aria-hidden":"true"}},[t._v("#")]),t._v(" isConnected")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("isConnected")]),t._v("(): "),e("code",[t._v("boolean")])]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L154",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:154"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("summary")])]),t._v(": Whether the node is connected or not.")]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("boolean")]),t._v("\ntrue if connected")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{id:"on"}})]),t._v(" "),e("h2",{attrs:{id:"on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on","aria-hidden":"true"}},[t._v("#")]),t._v(" on")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("on")]),t._v("(type: "),e("em",[e("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_emitted"}},[t._v("ProviderInterface$Emitted")])],1),t._v(", sub: "),e("em",[e("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_emitcb"}},[t._v("ProviderInterface$EmitCb")])],1),t._v("): "),e("code",[t._v("void")])]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L163",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:163"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("summary")])]),t._v(": Listens on events after having subscribed using the "),e("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html#subscribe"}},[t._v("subscribe")]),t._v(" function.")],1),t._v(" "),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[e("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_emitted"}},[t._v("ProviderInterface$Emitted")])],1),t._v(" "),e("td",[t._v("Event")])]),t._v(" "),e("tr",[e("td",[t._v("sub")]),t._v(" "),e("td",[e("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_emitcb"}},[t._v("ProviderInterface$EmitCb")])],1),t._v(" "),e("td",[t._v("Callback")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("void")])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{id:"send"}})]),t._v(" "),e("h2",{attrs:{id:"send"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send","aria-hidden":"true"}},[t._v("#")]),t._v(" send")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("send")]),t._v("(method: "),e("em",[e("code",[t._v("string")])]),t._v(", params: "),e("em",[e("code",[t._v("Array")]),t._v("<"),e("code",[t._v("any")]),t._v(">")]),t._v(", subscription?: "),e("em",[e("code",[t._v("SubscriptionHandler")])]),t._v("): "),e("code",[t._v("Promise")]),t._v("<"),e("code",[t._v("any")]),t._v(">")]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L173",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:173"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("summary")])]),t._v(": Send JSON data using WebSockets to configured HTTP Endpoint or queue.")]),t._v(" "),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("method")]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("The RPC methods to execute")])]),t._v(" "),e("tr",[e("td",[t._v("params")]),t._v(" "),e("td",[e("code",[t._v("Array")]),t._v("<"),e("code",[t._v("any")]),t._v(">")]),t._v(" "),e("td",[t._v("Encoded paramaters as appliucable for the method")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Optional")]),t._v(" subscription")]),t._v(" "),e("td",[e("code",[t._v("SubscriptionHandler")])]),t._v(" "),e("td",[t._v("Subscription details (internally used)")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("Promise")]),t._v("<"),e("code",[t._v("any")]),t._v(">")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{id:"subscribe"}})]),t._v(" "),e("h2",{attrs:{id:"subscribe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscribe","aria-hidden":"true"}},[t._v("#")]),t._v(" subscribe")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("subscribe")]),t._v("(type: "),e("em",[e("code",[t._v("string")])]),t._v(", method: "),e("em",[e("code",[t._v("string")])]),t._v(", params: "),e("em",[e("code",[t._v("Array")]),t._v("<"),e("code",[t._v("any")]),t._v(">")]),t._v(", callback: "),e("em",[e("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_callback"}},[t._v("ProviderInterface$Callback")])],1),t._v("): "),e("code",[t._v("Promise")]),t._v("<"),e("code",[t._v("number")]),t._v(">")]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L227",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:227"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("name")])]),t._v(": subscribe")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("summary")])]),t._v(": Allows subscribing to a specific event.")]),t._v(" "),e("p",[e("em",[e("strong",[t._v("example")])]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WsProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://127.0.0.1:9944'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rpc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rpc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrpc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeStorage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("storage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freeBalance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subscriptionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'balance changes subscription id: '")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subscriptionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("Subscription type")])]),t._v(" "),e("tr",[e("td",[t._v("method")]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("Subscription method")])]),t._v(" "),e("tr",[e("td",[t._v("params")]),t._v(" "),e("td",[e("code",[t._v("Array")]),t._v("<"),e("code",[t._v("any")]),t._v(">")]),t._v(" "),e("td",[t._v("Parameters")])]),t._v(" "),e("tr",[e("td",[t._v("callback")]),t._v(" "),e("td",[e("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_callback"}},[t._v("ProviderInterface$Callback")])],1),t._v(" "),e("td",[t._v("Callback")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("Promise")]),t._v("<"),e("code",[t._v("number")]),t._v(">\nPromise resolving to the dd of the subscription you can use with [[unsubscribe]].")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{id:"unsubscribe"}})]),t._v(" "),e("h2",{attrs:{id:"unsubscribe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribe","aria-hidden":"true"}},[t._v("#")]),t._v(" unsubscribe")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("unsubscribe")]),t._v("(type: "),e("em",[e("code",[t._v("string")])]),t._v(", method: "),e("em",[e("code",[t._v("string")])]),t._v(", id: "),e("em",[e("code",[t._v("number")])]),t._v("): "),e("code",[t._v("Promise")]),t._v("<"),e("code",[t._v("boolean")]),t._v(">")]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/c827bdb/packages/rpc-provider/src/ws/Provider.ts#L236",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:236"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("summary")])]),t._v(": Allows unsubscribing to subscriptions made with "),e("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html#subscribe"}},[t._v("subscribe")]),t._v(".")],1),t._v(" "),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[e("code",[t._v("string")])])]),t._v(" "),e("tr",[e("td",[t._v("method")]),t._v(" "),e("td",[e("code",[t._v("string")])])]),t._v(" "),e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[e("code",[t._v("number")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("code",[t._v("Promise")]),t._v("<"),e("code",[t._v("boolean")]),t._v(">")]),t._v(" "),e("hr")])},[],!1,null,null,null);r.default=a.exports}}]);