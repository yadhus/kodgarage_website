import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kodgarage';
  careerField = '';
  display = true;

  // constructor(public router: Router) { }
  public ngOnInit()
  {

    AOS.init();

  }

  onNavigateCareer(careers:string){
    this.careerField = careers;
    this.display = false;
  }
  

}
