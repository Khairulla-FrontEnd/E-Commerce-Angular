import { Component, inject } from "@angular/core";
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { RouterLink } from "@angular/router";
import { User } from "./profile.interface";
import { ProfileService } from "./profile.service";
import { SkeletonModule } from "primeng/skeleton";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector:'app-profile',
    standalone:true,
    imports:[
        RouterLink,
        SkeletonModule,
        ReactiveFormsModule
    ],
    templateUrl:'./profile.component.html',
    styleUrl:'./profile.component.scss',
})

export class ProfileComponent extends BaseLoadComponent<User>{ 
    
    id:string = '';
    service = inject(ProfileService);
    click:boolean = false;
    form:FormGroup = new FormGroup({
        name:new FormControl(''),
        email:new FormControl(''),
    });

    override getData(): Observable<User> {
        return this.service.getUser(this.id);
    }

    setClick():void {
        this.click = !this.click;
    }
    override ngOnInit(): void {
        const userData = localStorage.getItem('userData');
        if(userData){
            const id:string = JSON.parse(userData).id.toString();
            this.id = id;
        }
        super.ngOnInit();
    }

    onSubmit():void {
        console.log(this.form.value);
    }
}