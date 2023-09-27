import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Juan';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeClient():void{

    this.name = 'LERITA';
    this.gender= 'female';
  }


  //i18nPlural
  public clients: string [] = ['Juan','Valeria','Margu','Mati','Kelo','David','Kelo','Martin','Bernardino','Nico'];
  public clientsMap ={
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos 2 esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  deleteClient():void{
    this.clients.shift();
  }


  //KeyValue Pipe
  public person = {
    name: 'Juan',
    age: 24,
    address: 'Tandil,Argentina',
  }


  //Async Pipe
    public myObservableTimer:Observable<number> = interval(2000)
      .pipe(tap(v => console.log('tap:',v)));

      public promiseValue:Promise<string> = new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve('Tenemos data en la promesa')
          console.log('Tenemos daa en la Promesa,');
          this.person.name ='Otro nombre';
        }, 3500);
      })
        
      

}
