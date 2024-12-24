import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import urlJoin from "url-join";

export const BASE_URL = environment.apiUrl;

@Injectable({ providedIn:'root' })

export class ApiService {
    constructor(public http:HttpClient) { }
    get(prefix:string, params: any = {}) {
        return this.http.get(urlJoin(BASE_URL,prefix), {
            params:params
        })
    }
    post(prefix:string,body: any = {}, params:any = {}) { 
        return this.http.post(urlJoin(BASE_URL,prefix),body, {
            params:params
        })
    }
    patch(prefix:string, body:any = {}, params:any = {}){
        return this.http.patch(urlJoin(BASE_URL,prefix),body, {
            params:params
        })
    }
}