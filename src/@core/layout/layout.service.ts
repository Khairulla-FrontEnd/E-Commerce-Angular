import { Injectable, signal } from "@angular/core";

@Injectable({providedIn : 'root'})

export class LayoutService {
    isShowAccount = signal(false);
}