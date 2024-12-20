import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root',
})

export class AuthGuard {
    canActivate(){
        const userData = localStorage.getItem('userData');
        if(!userData){
            return false;
        }else{
            return true;
        }
    }
}