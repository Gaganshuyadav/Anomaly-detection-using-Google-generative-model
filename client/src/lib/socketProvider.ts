import { io} from "socket.io-client";
import { manager } from "../config";

const socket = io(manager.server);

export { socket};

