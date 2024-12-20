import { ServerHeaders } from "../../../net/protocol/server/server-headers";
import { ServerMessage } from "../../../net/protocol/server/server-message";

export class CharacterDisconnectedOutgoing extends ServerMessage {
	constructor(id: number, worldId: number) {
		super(ServerHeaders.DisconnectCharacter);

		this.putInt32(id);
		this.putInt32(worldId);
	}
}
