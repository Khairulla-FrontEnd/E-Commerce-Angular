import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root',
})

export class AuthGuard {
    canActivate(){
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(isLoggedIn !== 'true'){
            return false;
        }else{
            return true;
        }
    }
}