import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { User } from "./models/user.model";
import { UserData } from "./models/user.mock";

export class InMemoryData implements InMemoryDbService {

    createDb(): {users: User[]} {
        const users = UserData.usersMock;
        return {users};
    }
}