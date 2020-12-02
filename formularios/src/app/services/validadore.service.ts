import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoreService {

  constructor() { }

  noApellido(control:FormControl) : { [s:string]:boolean } {
    if(control.value?.toLowerCase() == 'apellido'){
      return{
        noApellido:true
      }
    }
    else{
      return null;
    }

  }
}
