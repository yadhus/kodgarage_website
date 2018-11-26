import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import * as $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css','./service.media.css'],
  // animations: [
  //   trigger('scrollAnimation', [
  //     state('show', style({
  //       opacity: 1,
  //       transform: "translateX(0)"
  //     })),
  //     state('hide',   style({
  //       opacity: 0,
  //       transform: "translateX(-50%)"
  //     })),
  //     transition('show => hide', animate('200ms ease-out')),
  //     transition('hide => show', animate('200ms ease-in'))
  //   ]),
  //   trigger('scrollAnimation1', [
  //     state('show', style({
  //       opacity: 1,
  //       transform: "translateX(0)"
  //     })),
  //     state('hide',   style({
  //       opacity: 0.5,
  //       transform: "translateX(-50%)"
  //     })),
  //     transition('show => hide', animate('300ms ease-out')),
  //     transition('hide => show', animate('300ms ease-in'))
  //   ])
  // ]

})
export class ServicesComponent implements OnInit {

  state = 'show'
  constructor(public el: ElementRef) { }


  ngOnInit() {
    AOS.init();
  }


    // @HostListener('window:scroll') scrolling(){
    //   this.scroll = "w3-animate-top";
    //   console.log('jus scrolled');
    //   this.scroll.replace;
    // }
    // @HostListener('window:scroll', ['$event'])
    // checkScroll() {
    //   const componentPosition = this.el.nativeElement.offsetTop
    //   const scrollPosition = window.pageYOffset

    //   if (scrollPosition <= componentPosition) {
    //     this.state = 'show'
    //   } else {
    //     this.state = 'hide'
    //   }

    // }
}