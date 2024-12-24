import { Injectable } from "@angular/core";
import { ApiService } from "../../../../../shared/service/api.service";
import { Observable } from "rxjs";


@Injectable({ providedIn:"root" })
// MAKE BASE LOAD COMPONENT LIKE GRANTFRONTEND

export class CategoriesService{

    constructor(private apiService:ApiService){ }

    getCategories(params: any = {}):Observable<any>{
        return this.apiService.get('categories',params);
    }
    getProductsByCategory(categoryId:number):Observable<any>{
        return this.apiService.get('categories' + categoryId);
    }
}