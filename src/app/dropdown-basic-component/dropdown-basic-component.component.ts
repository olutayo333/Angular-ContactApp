import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-basic-component',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-basic-component.component.html',
  styleUrl: './dropdown-basic-component.component.css'
})
export class DropdownBasicComponentComponent {

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
