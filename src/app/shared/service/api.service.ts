import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import urlJoin from "url-join";

export const BASE_URL = environment.apiUrl;

@Injectable({ providedIn:'root' })

export class ApiService {
    constructor(public http:HttpClient) { }
    get<T=any>(prefix:string, params: any = {}) {
        return this.http.get<T>(urlJoin(BASE_URL,prefix), {
            params:params
        })
    }
    post<T=any>(prefix:string,body: any = {}, params:any = {}) { 
        return this.http.post<T>(urlJoin(BASE_URL,prefix),body, {
            params:params
        })
    }
    put<T=any>(prefix:string, body: any = {},params:any = {}) {
        return this.http.put<T>(urlJoin(BASE_URL,prefix),body,{
            params:params
        })
    }
    patch<T=any>(prefix:string, body:any = {}, params:any = {}){
        return this.http.patch<T>(urlJoin(BASE_URL,prefix),body, {
            params:params
        })
    }
}