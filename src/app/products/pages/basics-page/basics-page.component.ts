import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {


  public nameUpper: string =  'JUAN';
  
  public nameLover: string = 'Juan';

  public fullName: string = 'JuAN IgNaCIO';


  public customDate: Date = new Date();




}
