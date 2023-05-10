import { Component } from '@angular/core';
import { Cantante } from './Models/cantante.model';

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
  plantas: string[] = ["p1","p2"]

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
  let nombre = "Jair";
  if(numero % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

estudiantes:string[]=["Luisa","Walter","Nathalie","Romario","Alejandro","Daniela","Leidy"]
/*Data types 105*/
// let length = 16;
// let lastName="Johnson";
// let x = {firstNAme:"John" , lastName: "Doe"};

// let verdadero = true;
// let falso = false;

brasil = {
  name: "Selección de fútbol de Brasil",
  country_name: "Brasil",
  alt_names: ["ncanarinha","n'Verde-amarela","Scratch du Oro"],
  colors: ["Amarillo","Verde","Azul","Blanco"],
  won_titles: 20 ,
  captain_name:"Casemiro",
  coach_name:"Ramon Menezes",
  logo_url:"https://www.google.com/search?q=logo+seleccion+de+brasil&rlz=1C1CHBF_esCO884CO884&sxsrf=APwXEdfPeJnOSYUAFOhCf2ktuMMaoCNSVQ:1683079293657&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjwy7T7htj-AhXEgYQIHSNqBvgQ_AUoAXoECAEQAw&biw=1920&bih=969&dpr=1#imgrc=tzYmUtWg3N6ZGM",
  abreviation:"BRA",
    top_scorer: {
    name: "Neymar Jr.",
    number_goals: 77
  },
  stadium: {
    name: "Estadio Jornalista Mário Filho",
    nickname: "Estadio del Maracaná",
    location: "Ciudad de Río de Janeiro",
    capacity:78.838,
  },
  players: [
    {
      name: "Ederson",
      lastname: " Santana de Moraes",
      height:188,
      place_of_birth: "Osasco",
      position:"Portero",
      current_club:"Manchester City",
      shirt_number:31,
      age: 29
    },
    {
      name: "Weverton",
      lastname: "Pereira da Silva",
      height:189,
      place_of_birth:"Brasil",
      position:"portero",
      current_club:"Palmeiras",
      shirt_number:21,
      age: 35
    },
    {  
      name: "Ëder",
      lastname:"Militão" ,
      height: 186 ,
      place_of_birth:"Sertãozinho",
      position:"defensa central",
      current_club:"Real Madrid",
      shirt_number:3,
      age: 25
    },  {
      name: "Rodrigo",
      lastname: "Caio",
      height:183,
      place_of_birth:"Dracena",
      position:"defensa",
      current_club:"Flamengo",
      shirt_number:3,
      age: 29
    },
    {
      name: "Gleison",
      lastname: "Bremer",
      height:188,
      place_of_birth:"Itapitanga",
      position:"defensa",
      current_club:"Juventus",
      shirt_number:4,
      age: 26
    },  {
      name: "Alex",
      lastname: "Tellez" ,
      height:181,
      place_of_birth:"Pinhas",
      position:"defensa",
      current_club:"Sevilla",
      shirt_number:6,
      age: 30
    },  
     {
      name: "Roger",
      lastname: "Ibañez",
      height:185,
      place_of_birth:"canela",
      position:"Defensa",
      current_club:"Atlanta",
      shirt_number: 14,
      age: 24
    },  
   {
      name: "Renan",
      lastname: "Lodi",
      height:173,
      place_of_birth:"Serrana",
      position:"defensa",
      current_club:"Atletico de Madrid",
      shirt_number:16,
      age: 25
    },
    {
      name: "Gabriel",
      lastname: "Magalhaes",
      height:190,
      place_of_birth:"Sao Paulo",
      position:"defensa",
      current_club:"Juventus",
      shirt_number:22,
      age: 25
    },  {
      name: "Carlos",
      lastname: "Casemiro" ,
      height:185,
      place_of_birth:"Sao jose",
      position:"Centrocampista",
      current_club:"Bayer M",
      shirt_number:18,
      age: 31
    },  {
  


}

  ]};




}



