import { Component, inject, OnInit, signal, WritableSignal } from "@angular/core";
import { BaseComponent } from "../../../common/classes/base-component/base.component";
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { Observable } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Resources } from "../../../resources";


@Component({
    standalone:true,
    template:''
})

export abstract class BaseLoadComponent<T> extends BaseComponent implements OnInit {
    public defaultData:any = null;
    public data:WritableSignal<T> = signal(this.defaultData);
    public isLoading = signal(true);
    public loadOnInit = true;
    public redirectError = false;
    public router = inject(Router)
    protected api = inject(ApiService);
    
    ngOnInit(): void {
        if(this.loadOnInit){
            this.reload();
        }
    }

    abstract getData():Observable<T>;

    loadData() {
        this.isLoading.set(true);
        this.getData().subscribe({
            next:(data) => {
                this.data.set(data);
                this.afterLoadData(data);
                this.isLoading.set(false);
            },
            error:(err) => {
                this.onError(err)
            }
        })
    }

    reload() {
        this.data.set(this.defaultData);
        if(this.loadOnInit) {
            setTimeout(() => this.loadData());
        }
    }

    afterLoadData(data: T) {}

    onError(err:HttpErrorResponse){
        if(this.redirectError){
            if(err.status === 404){
                return this.router.navigate([Resources.Error404])
            }
        }
        return;
    }
}