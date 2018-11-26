import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() careerClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onCareer(careers:string){
    this.careerClicked.emit(careers);
  }

}
