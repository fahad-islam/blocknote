/// <reference no-default-lib="true"/>
/// <reference types="@cloudflare/workers-types" />

import type { PartyKitServer } from "partykit/server";
import { onConnect } from "y-partykit";

export default {
  onConnect(ws, room) {
    console.log("ws: ", ws);
    console.log("storage: ", room);
    return onConnect(ws, room, { persist: true });
  },
  onmessage(m) {
    console.log("m", m);
  },
} satisfies PartyKitServer;
