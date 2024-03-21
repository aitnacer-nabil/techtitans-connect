import { Status } from "src/app/enums/status";

export class FriendRequest {
    id?: number;
    userIdSender?: number;
    friendId?: number;
    status?: Status;
    createdAt?: Date;
    updatedAt?: Date;
}
