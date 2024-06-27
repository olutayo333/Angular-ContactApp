import { Injectable } from '@angular/core';
interface Userobj{
  id:number,
  name:string,
  email:string,
  age:number
}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  public firstName:string = "Olutayo"
  public userarray:Userobj[]=[
    {
      id:1,
      name:'Lola Johnson',
      age:23,
      email:'lolajohnson@gmail.com'
    },
    {
      id:2,
      name:'Olu Stephen',
      age:25,
      email:'olustephen@gmail.com'
    },
    {
      id:3,
      name:'olaoluwa Chris',
      age:33,
      email:'olachris@gmail.com'
    },
    {
      id:4,
      name:'Philips Oliutola',
      age:43,
      email:'philipsolutola@gmail.com'
    }
  ]
  
  constructor() { }
  
  public getuserarray(){
    return this.userarray
  }

  public changefirstname(name:string){
    this.firstName="stephen"
    return this.firstName
  }


  
}
