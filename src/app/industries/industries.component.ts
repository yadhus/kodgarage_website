import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
