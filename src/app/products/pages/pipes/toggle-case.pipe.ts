import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toggleCase'
})
export class toggleClasePipe implements PipeTransform {

    transform ( value: string, toUpper: boolean = false): string {
        return ( toUpper ) ? value.toLocaleUpperCase()
                           : value.toLocaleLowerCase();
    }

}