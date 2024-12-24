import { Pipe, PipeTransform } from "@angular/core";
import { Resources, getResourceById } from "../../resources";


@Pipe({
    name:'resourceById',
    standalone:true
})

export class ResourceByIdPipe implements PipeTransform {
    transform(resource: Resources, id:number | string) {
        return getResourceById(resource,id);
    }
}