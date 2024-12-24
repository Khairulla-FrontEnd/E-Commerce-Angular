import { Component, OnDestroy } from "@angular/core";
import { Resources } from "../../../resources";
import { Subject } from "rxjs";


@Component({
    template:''
})

export abstract class BaseComponent implements OnDestroy {

    protected readonly Resources = Resources;

    protected _unsubscribeAll = new Subject();

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();        
    }
}