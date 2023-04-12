import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'CuraPets';
  edad:number = 23;
  pasaLaMateria: boolean= true;
  dato:any= "equis de";
  contador: number=0;

  aumentar(){
   this.contador = this.contador + 1 ;
  }

  
  reducir(){
    this.contador = this.contador - 1;
  }

multiplicar(){
  this.contador = this.contador * 2;
}

dividir(){
  this.contador = this.contador / 2;
}

resetear(){
  this.contador = this.contador = 0;
}

esPar(numero :number):boolean{
  if(numero % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

estudiantes:string[]=["Luisa","Walter","Nathalie","Romario","Alejandro","Daniela","Leidy"]


}
