import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { CommonModule } from '@angular/common';

interface Userobj{
  id:number,
  name:string,
  email:string,
  age:number
}

@Component({
  selector: 'app-dropdown-basic-component',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './dropdown-basic-component.component.html',
  styleUrl: './dropdown-basic-component.component.css'
})
export class DropdownBasicComponentComponent {
  constructor(public serv:ServicesService){}
  public userarray:Userobj[]=[]; 

  ngOnInit(){
    console.log(this.serv.firstName);
    this.userarray= this.serv.getuserarray()
   }




  openModal(){
    const modalDiv =  document.getElementById('myModal');
    if(modalDiv != null){
      modalDiv.style.display ='block';
    }
  }
  closeModal(){
    const modalDiv =  document.getElementById('myModal');
    if(modalDiv != null){
      modalDiv.style.display ='none';
      
    }
    
  }
}
