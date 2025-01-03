import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/service/api.service";
import { User, UserUpdate } from "./profile.interface";
import { Observable } from "rxjs";

@Injectable({ providedIn:'root' })

export class ProfileService {
    constructor(private api:ApiService) { }

    getUser(id:string):Observable<User> {
       return this.api.get<User>('/users/' + id);
    }
    updateUser(id:string,data:UserUpdate):Observable<UserUpdate> {
       return this.api.put<UserUpdate>('/users/' + id,data);
    }
}