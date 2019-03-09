import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realimentacion',
  templateUrl: './realimentacion.page.html',
  styleUrls: ['./realimentacion.page.scss'],
})
export class RealimentacionPage implements OnInit {

  constructor(private router:Router) { }
  back(){
    this.router.navigate(['/home']); 
  }
  ngOnInit() {
  }

}
