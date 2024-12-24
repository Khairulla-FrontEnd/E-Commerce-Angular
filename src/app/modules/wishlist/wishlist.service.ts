import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/service/api.service";
import { Observable } from "rxjs";


@Injectable({ providedIn:'root' })

export class WishlistService {
    constructor(private api:ApiService) { }

    getRecommendedProducts(params:any = {}):Observable<any>{
        return this.api.get('products',params);
    }
}