import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule, CommonModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  public firstName:string=""; public lastName:string=""; public phoneNumber:string=""; public email:string="";
  public firstName2:string=""; public lastName2:string=""; public phoneNumber2:string=""; public email2:string="";
  public editfirstName:string=""; public editlastName:string=""; public editphoneNumber:string=""; public editemail:string="";
  
  public contacts:[]=[];  public index2:number=0;
  public contactArr:any=[]; public EcontactArr:any=[]; public contactObj={}; public editcontactObj={};
  public index:number=0; public status:boolean=false;

  constructor(public actR:ActivatedRoute, public serv: ServicesService){}

  ngOnInit(){
    if(localStorage['contact']){
     this.contactArr= JSON.parse(localStorage['contact'])
    }

    console.log(this.serv.firstName);
    console.log(this.serv.changefirstname("Stevo"));
  }

  register(){
    //console.log("izworking");
    this.contactObj={FN:this.firstName, LN:this.lastName, PN:this.phoneNumber, EM:this.email}
    this.contactArr.push(this.contactObj);
    this.firstName=""; this.lastName=""; this.phoneNumber=""; this.email=""
    alert("Contact Saved Successfully")
    localStorage.setItem("contact", JSON.stringify(this.contactArr) )
    
  }
  delete(i:number){
    this.contactArr = this.contactArr.filter((each:object, index:number)=>index !==i )
    localStorage.setItem("contact", JSON.stringify(this.contactArr))
  }
   edit(){
    console.log(this.editfirstName);
    let contacts2 = JSON.parse(localStorage['contact']);
    contacts2[this.index].FN = this.editfirstName; contacts2[this.index].LN = this.editlastName; 
    contacts2[this.index].PN = this.editphoneNumber; contacts2[this.index].EM=this.editemail;
    localStorage.setItem('contact', JSON.stringify(contacts2));
    alert("Edited Succesfully")
    this.editfirstName=""; this.editlastName=""; this.editemail=""; this.editphoneNumber="";
    this.closeModal(); this.ngOnInit();
   }

  closeModal(){
    const modalDiv =  document.getElementById('myModal');
    if(modalDiv != null){
      modalDiv.style.display ='none'; 
    } 
  }
  
  openModal(i:number){
    this.index = i;
    const modalDiv =  document.getElementById('myModal');
    if(modalDiv != null){ modalDiv.style.display ='block'; } 
    
    let contacts2 = JSON.parse(localStorage['contact']);
    this.contacts = contacts2;
    this.firstName2= contacts2[i].FN; this.lastName2=contacts2[i].LN; 
    this.email2=contacts2[i].EM; this.phoneNumber2=contacts2[i].PN;
 }
}
