import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.page.html',
  styleUrls: ['./compartir.page.scss'],
})
export class CompartirPage implements OnInit {

  constructor(private router: Router) { }
  back(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
