import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root',
})

export class AuthGuard {
    canActivate(){
        const userData = localStorage.getItem('isLoggedIn');
        if(userData !== 'true'){
            return false;
        }else{
            return true;
        }
    }
}