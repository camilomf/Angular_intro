import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre : string = 'Capitán Ámerica';
  nombre2: string = 'cAmilO FuENtes';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('Llego la data');
    },4500);
  });


}
