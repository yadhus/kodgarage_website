import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-termsconditions',
  templateUrl: './termsconditions.component.html',
  styleUrls: ['./termsconditions.component.css']
})
export class TermsconditionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(this).scrollTop(0);
  });
  }

}
