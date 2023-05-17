import { Component, OnInit } from '@angular/core';
import { Cantante } from 'src/app/Models/cantante.model';

@Component({
  selector: 'cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.css']
})
export class CantantesComponent implements OnInit {

  inputNombre:string="";
  inputEdad:number=0;
  inputVivo:boolean=false;


  cantantes:Cantante[] = [
    {
      nombre: "Freddy Mercury",
      edad:45,
      vivo:false,
    },
   
    {
      nombre: "Michael Jackson",
      edad:50,
      vivo:false,
    },
    
    {
      nombre: "Eddie Vedder",
      edad:58,
      vivo:true,
    },
    
    {
      nombre: "Chris Cornell",
      edad:52,
      vivo:false,
    },
    
    {
      nombre: "Eric Clapton",
      edad:78,
      vivo:true,
    },
    
    {
      nombre: "Andrea Bocelli",
      edad:64,
      vivo:true,
    },
    
    {
      nombre: "Enya",
      edad:61,
      vivo:false,
    },
    
    {
      nombre: "Jake Smith",
      edad:39,
      vivo:true,
    },
    
    {
      nombre: "Steven Tyler",
      edad:75,
      vivo:false,
    },
    
    {
      nombre: "Elton John",
      edad:33,
      vivo:false,
    },
    
    

  ]  


  ngOnInit(): void {
    console.log("hola");
    console.log(this.cantantes[0].nombre);
    console.log(this.cantantes[0].nombre.length);
    console.log(this.cantantes[0].nombre.charAt(1));
    console.log(this.cantantes[0].nombre.substring(1,4));
    console.log(this.cantantes[0].nombre.replace("Mercury","Mercurio"));
    console.log(this.cantantes[0].nombre.toUpperCase());
    console.log(this.cantantes[0].nombre.concat(" Sanchez"));
    console.log(this.cantantes[0].nombre.indexOf("Mercury"));
    console.log(this.cantantes[0].nombre.includes("Mercury"));
    console.log(this.cantantes[0].nombre.startsWith("Fre"));
    console.log(this.cantantes);
    console.table(this.cantantes[2]);
    console.log(this.cantantes.length);
    this.cantantes.pop(); //pop elimina el ultimo elemento
    this.cantantes.shift();//shift quita el primero
    this.cantantes.splice(2,1);//el dos es la  pos. desde donde va a eliminar, y el 1 la cantidad de elementos que va a eliminar
    let nuevoCantante: Cantante = { //let agrega una variable
      nombre:"Lionel Richie",
      edad:73,
      vivo:true,
    }
    this.cantantes.push(nuevoCantante);//push agrega un elemento nuevo
    console.log(this.cantantes);

    let nombres= this.cantantes.map(cantante => cantante.nombre.toUpperCase()).sort().reverse();//arreglo de strings
    console.log(nombres);

    let sumas=this.cantantes.map(cantante => cantante.edad +2);
    console.log(sumas);

    let raices=this.cantantes.map(cantante => Math.sqrt (cantante.edad) );
    console.log(raices);

    let potencia=this.cantantes.map(cantante => Math.pow (cantante.edad,2) );
    console.log(potencia);
  }
  agregarCantante(){
    console.log("funcion click");
    let nuevoCantante:Cantante={
      nombre:this.inputNombre,
      edad:this.inputEdad,
      vivo:this.inputVivo,
    
    }
    this.cantantes.push(nuevoCantante);
    this.reset();
  }

  reset()[
    this.inputEdad();
    this.inputNombre();
    this.inputVivo();
  ]

}

