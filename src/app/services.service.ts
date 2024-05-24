import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  public firstName:string = "Olutayo"
  
  constructor() { }
  
  public changefirstname(name:string){
    this.firstName="stephen"
    return this.firstName
  }


  
}
