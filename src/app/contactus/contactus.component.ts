import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { ServerService } from './server.service';
import * as $ from 'jquery';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @ViewChild('f') contactusform: NgForm;
  submitted = false;


  contact = {
    name:'',
    email:'',
    mobileNo:'',
    subject:'',
    message:''
  };

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    $('#btnClick').on('click',function(){
      if($('#1').css('display')!='none'){
      $('#content').show().siblings('form').hide();
      }else if($('#2').css('display')!='none'){
          $('#1').show().siblings('div').hide();
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    console.log(this.contactusform);
    
    this.contact.name = this.contactusform.value.userData.name;
    this.contact.email = this.contactusform.value.userData.email;
    this.contact.mobileNo = this.contactusform.value.userData.mobileNo;
    this.contact.subject = this.contactusform.value.userData.subject;
    this.contact.message = this.contactusform.value.userData.message;
    this.serverService.storeServers(this.contact)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      
    );
    this.contactusform.reset();

}

}
