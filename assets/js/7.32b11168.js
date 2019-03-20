(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{246:function(e,v,_){"use strict";_.r(v);var t=_(2),s=Object(t.a)({},function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"events"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v(" Events")]),e._v(" "),_("p",[e._v("Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime.")]),e._v(" "),_("ul",[_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#balances"}},[e._v("balances")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#contract"}},[e._v("contract")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#council"}},[e._v("council")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#councilMotions"}},[e._v("councilMotions")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#councilVoting"}},[e._v("councilVoting")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#democracy"}},[e._v("democracy")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#fees"}},[e._v("fees")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#grandpa"}},[e._v("grandpa")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#indices"}},[e._v("indices")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#session"}},[e._v("session")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#staking"}},[e._v("staking")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#sudo"}},[e._v("sudo")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#system"}},[e._v("system")])])])]),e._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#treasury"}},[e._v("treasury")])])])])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"balances"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#balances","aria-hidden":"true"}},[e._v("#")]),e._v(" balances")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("NewAccount")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A new account was created.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("ReapedAccount")]),e._v("("),_("code",[e._v("AccountId")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   An account was reaped.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Transfer")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("Balance")]),e._v(", "),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Transfer succeeded (from, to, value, fees).")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"contract"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#contract","aria-hidden":"true"}},[e._v("#")]),e._v(" contract")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("CodeStored")]),e._v("("),_("code",[e._v("Hash")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Code with the specified hash has been stored.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Dispatched")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("bool")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A call was dispatched from the given account. The bool signals whether it was  successful execution or not.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Instantiated")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("AccountId")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Contract deployed by address at the specified address.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("ScheduleUpdated")]),e._v("("),_("code",[e._v("u32")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Triggered when the current schedule is updated.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Transfer")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Transfer happened "),_("code",[e._v("from")]),e._v(" -> "),_("code",[e._v("to")]),e._v(" with given "),_("code",[e._v("value")]),e._v(" as part of a "),_("code",[e._v("message-call")]),e._v(" or "),_("code",[e._v("create")]),e._v(".")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"council"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#council","aria-hidden":"true"}},[e._v("#")]),e._v(" council")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("BadReaperSlashed")]),e._v("("),_("code",[e._v("AccountId")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   slashed reaper")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("TallyFinalised")]),e._v("("),_("code",[e._v("Vec<AccountId>")]),e._v(", "),_("code",[e._v("Vec<AccountId>")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A tally (for approval votes of council seat(s)) has ended (with one or more new members).")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("TallyStarted")]),e._v("("),_("code",[e._v("u32")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A tally (for approval votes of council seat(s)) has started.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("VoterReaped")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("AccountId")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   reaped voter, reaper")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"councilmotions"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#councilmotions","aria-hidden":"true"}},[e._v("#")]),e._v(" councilMotions")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Approved")]),e._v("("),_("code",[e._v("Hash")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A motion was approved by the required threshold.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Disapproved")]),e._v("("),_("code",[e._v("Hash")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A motion was not approved by the required threshold.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Executed")]),e._v("("),_("code",[e._v("Hash")]),e._v(", "),_("code",[e._v("bool")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A motion was executed; "),_("code",[e._v("bool")]),e._v(" is true if returned without error.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Proposed")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("ProposalIndex")]),e._v(", "),_("code",[e._v("Hash")]),e._v(", "),_("code",[e._v("u32")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A motion (given hash) has been proposed (by given account) with a threshold (given u32).")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Voted")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("Hash")]),e._v(", "),_("code",[e._v("bool")]),e._v(", "),_("code",[e._v("u32")]),e._v(", "),_("code",[e._v("u32")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A motion (given hash) has been voted on by given account, leaving  a tally (yes votes and no votes given as u32s respectively).")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"councilvoting"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#councilvoting","aria-hidden":"true"}},[e._v("#")]),e._v(" councilVoting")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("TallyCancelation")]),e._v("("),_("code",[e._v("Hash")]),e._v(", "),_("code",[e._v("u32")]),e._v(", "),_("code",[e._v("u32")]),e._v(", "),_("code",[e._v("u32")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A voting tally has happened for a referendum cancellation vote.  Last three are yes, no, abstain counts.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("TallyReferendum")]),e._v("("),_("code",[e._v("Hash")]),e._v(", "),_("code",[e._v("u32")]),e._v(", "),_("code",[e._v("u32")]),e._v(", "),_("code",[e._v("u32")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A voting tally has happened for a referendum vote.  Last three are yes, no, abstain counts.")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"democracy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#democracy","aria-hidden":"true"}},[e._v("#")]),e._v(" democracy")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Cancelled")]),e._v("("),_("code",[e._v("ReferendumIndex")]),e._v(")")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Executed")]),e._v("("),_("code",[e._v("ReferendumIndex")]),e._v(", "),_("code",[e._v("bool")]),e._v(")")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("NotPassed")]),e._v("("),_("code",[e._v("ReferendumIndex")]),e._v(")")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Passed")]),e._v("("),_("code",[e._v("ReferendumIndex")]),e._v(")")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Proposed")]),e._v("("),_("code",[e._v("PropIndex")]),e._v(", "),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Started")]),e._v("("),_("code",[e._v("ReferendumIndex")]),e._v(", "),_("code",[e._v("VoteThreshold")]),e._v(")")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Tabled")]),e._v("("),_("code",[e._v("PropIndex")]),e._v(", "),_("code",[e._v("Balance")]),e._v(", "),_("code",[e._v("Vec<AccountId>")]),e._v(")")]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"fees"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fees","aria-hidden":"true"}},[e._v("#")]),e._v(" fees")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Charged")]),e._v("("),_("code",[e._v("u32")]),e._v(", "),_("code",[e._v("Amount")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Fee charged (extrinsic_index, fee_amount)")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"grandpa"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#grandpa","aria-hidden":"true"}},[e._v("#")]),e._v(" grandpa")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("NewAuthorities")]),e._v("("),_("code",[e._v("Vec<(SessionKey,u64)>")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   New authority set has been applied.")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"indices"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#indices","aria-hidden":"true"}},[e._v("#")]),e._v(" indices")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("NewAccountIndex")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("AccountIndex")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A new account index was assigned.   This event is not triggered when an existing index is reassigned  to another "),_("code",[e._v("AccountId")]),e._v(".")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"session"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#session","aria-hidden":"true"}},[e._v("#")]),e._v(" session")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("NewSession")]),e._v("("),_("code",[e._v("BlockNumber")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   New session has happened. Note that the argument is the session index, not the block  number as the type might suggest.")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"staking"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#staking","aria-hidden":"true"}},[e._v("#")]),e._v(" staking")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("OfflineSlash")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   One validator (and their nominators) has been slashed by the given amount.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("OfflineWarning")]),e._v("("),_("code",[e._v("AccountId")]),e._v(", "),_("code",[e._v("u32")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   One validator (and their nominators) has been given a offline-warning (they're still  within their grace). The accrued number of slashes is recorded, too.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Reward")]),e._v("("),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   All validators have been rewarded by the given balance.")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"sudo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sudo","aria-hidden":"true"}},[e._v("#")]),e._v(" sudo")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("KeyChanged")]),e._v("("),_("code",[e._v("AccountId")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   The sudoer just switched identity; the old key is supplied.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Sudid")]),e._v("("),_("code",[e._v("bool")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   A sudo just took place.")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"system"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#system","aria-hidden":"true"}},[e._v("#")]),e._v(" system")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("ExtrinsicFailed")]),e._v("()")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   An extrinsic failed.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("ExtrinsicSuccess")]),e._v("()")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   An extrinsic completed successfully.")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"treasury"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#treasury","aria-hidden":"true"}},[e._v("#")]),e._v(" treasury")]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Awarded")]),e._v("("),_("code",[e._v("ProposalIndex")]),e._v(", "),_("code",[e._v("Balance")]),e._v(", "),_("code",[e._v("AccountId")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Some funds have been allocated.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Burnt")]),e._v("("),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Some of our funds have been burnt.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Proposed")]),e._v("("),_("code",[e._v("ProposalIndex")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   New proposal.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Rollover")]),e._v("("),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   Spending has finished; this is the amount that rolls over until next spend.")])]),e._v(" "),_("p",[e._v("▸ "),_("strong",[e._v("Spending")]),e._v("("),_("code",[e._v("Balance")]),e._v(")")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("summary")]),e._v(":   We have ended a spend period and will now allocate funds.")])])])},[],!1,null,null,null);v.default=s.exports}}]);