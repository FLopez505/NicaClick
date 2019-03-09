import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-banner',
  templateUrl: './crear-banner.page.html',
  styleUrls: ['./crear-banner.page.scss'],
})
export class CrearBannerPage implements OnInit {

  constructor(private router: Router) { }
  back(){
    this.router.navigate(['/mis-plantillas']);
  }
  ngOnInit() {
  }

}
