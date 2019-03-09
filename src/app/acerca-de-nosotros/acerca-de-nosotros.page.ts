import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de-nosotros',
  templateUrl: './acerca-de-nosotros.page.html',
  styleUrls: ['./acerca-de-nosotros.page.scss'],
})
export class AcercaDeNosotrosPage implements OnInit {

  constructor(private router:Router) { }
  back(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
