import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { disenios } from './modelo.disenios';
import { MisdiseniosService } from './misdisenios.service';

@Component({
  selector: 'app-mis-disenios',
  templateUrl: './mis-disenios.page.html',
  styleUrls: ['./mis-disenios.page.scss'],
})
export class MisDiseniosPage implements OnInit {


  __disenios: disenios[];

  constructor(private router: Router,private diseniosservice:MisdiseniosService) { }

  back(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    this.__disenios = this.diseniosservice.getallDisenios();
  }

}
