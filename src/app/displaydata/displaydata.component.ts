import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebService } from '../web.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

  details: Object;
  UserId: Object;
  
  @Output() passData = new EventEmitter();
  constructor(private service:WebService,private router:Router) { }

  getDetails() {
    this.service.getAll().subscribe(response =>{
      console.log(response);
      this.details = response;
    })
  }
  getByDetailId(userId) {
    // this.service.getByUser(userId).subscribe(reponse =>{
    //   console.log(reponse);
    //   this.UserId = reponse;
    //   this.passData.emit(this.UserId)
    console.log("Heelo", userId)
      this.router.navigate(['data',userId]);
    // })
  }

  ngOnInit(): void {
    this.getDetails();
  }

}
