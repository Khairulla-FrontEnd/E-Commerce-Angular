import { Component, inject } from "@angular/core";
import { BaseLoadComponent } from "../../shared/components/classes/base-load.component";
import { Observable } from "rxjs";
import { RouterLink } from "@angular/router";
import { User } from "./profile.interface";
import { ProfileService } from "./profile.service";
import { SkeletonModule } from "primeng/skeleton";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

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
        currentPassword:new FormControl(''),
        newPassword:new FormControl(''),
        confirmPassword:new FormControl(''),
    });

    override getData(): Observable<User> {
        return this.service.getUser(this.id);
    }
    override afterLoadData(data: User): void {
        const userName = localStorage.getItem('userName');
        const email = localStorage.getItem('email');
        const arrInfo = [userName,email];
        if(userName || email){
            const isValid = arrInfo.filter((item:string | null) => item !== null);
            isValid.forEach((item:string) => {
                if(item === userName){
                    this.data().name = item;
                }else{
                    this.data().email = item;
                }
            })
        }else{
            if(data){
                const userName = data.name;
                const email = data.email;
                localStorage.setItem('userName',userName);
                localStorage.setItem('email',email);
            }else {
                const userName = localStorage.getItem('userName');
                const email = localStorage.getItem('email');
                if(userName && email){
                    this.data().name = userName;
                    this.data().email = email;
                }
            }
        }
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
        if(this.form.value.name){
            localStorage.setItem('userName',this.form.value.name);
        }
        if(this.form.value.email){
            localStorage.setItem('email',this.form.value.email);
        }
        this.setClick();
        window.location.reload();
    }
}