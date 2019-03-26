import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-calificanos',
  templateUrl: './calificanos.page.html',
  styleUrls: ['./calificanos.page.scss'],
})
export class CalificanosPage implements OnInit {

  constructor(private router:Router) { }
  
  go(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
