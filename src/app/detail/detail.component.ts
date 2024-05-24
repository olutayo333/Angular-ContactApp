import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ContactInterface{
  FN: String,
  LN: String,
  EM: String,
  PN: String
}
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  constructor(public actR:ActivatedRoute){}
  public contactArr:ContactInterface[] = [];
  public contactObj:ContactInterface={
    FN:'', LN:'', EM:'', PN:''
  };
  public id:number=0;
  
  ngOnInit(){
    this.contactArr= JSON.parse(localStorage['contact'])
    // console.log(this.contactArr);
    
     this.id=this.actR.snapshot.params['id']
     console.log(this.id);
    
     this.contactObj=this.contactArr[this.id]
     console.log(this.contactObj);
     
  }

     
}
