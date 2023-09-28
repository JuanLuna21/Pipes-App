import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toggleCase'
})
export class toggleClasePipe implements PipeTransform {

    transform (value: string): string {
        return value.toLocaleUpperCase();
    }

}