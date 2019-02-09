import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mis-plantillas',
  templateUrl: './mis-plantillas.page.html',
  styleUrls: ['./mis-plantillas.page.scss'],
})
export class MisPlantillasPage implements OnInit {

  
    constructor(private router:Router){}
    go(){
      this.router.navigate(['/crear-banner']);
    }
  

  ngOnInit() {
  }

}
