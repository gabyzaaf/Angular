import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'spaceConvertor'
})


export class ConvertSpace implements PipeTransform{
    transform(value: string, character:string) {
        return value.replace(character,'-');
    }

}