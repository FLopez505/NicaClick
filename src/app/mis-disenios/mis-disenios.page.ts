import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-disenios',
  templateUrl: './mis-disenios.page.html',
  styleUrls: ['./mis-disenios.page.scss'],
})
export class MisDiseniosPage implements OnInit {

  constructor(private router: Router) { }

  back(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
