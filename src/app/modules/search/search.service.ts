import { Injectable } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Injectable({
    providedIn:'root'
})

export class SearchService {
    value:FormControl = new FormControl('',Validators.required);
    filteredData:any;

    filterValue(data:any):void {
        this.value.valueChanges.subscribe((val:any) => {
            if(typeof val === 'string'){
                this.filteredData = data.filter((item:any,index:number) => item.title.toLowerCase().includes(val.toLowerCase()));
            }
        });
    }
}