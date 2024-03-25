import { Status } from "src/app/enums/status";
import {Profile} from "./profile";

export class FriendRequest {
    id?: number;
    userIdSender?: number;
    friend?: Profile;
    status?: Status;
    createdAt?: Date;
    updatedAt?: Date;
}
