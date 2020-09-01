import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-particulardata',
  templateUrl: './particulardata.component.html',
  styleUrls: ['./particulardata.component.css']
})
export class ParticulardataComponent implements OnInit {
  UserData;
  UserId;
  userId;

  constructor(private route: ActivatedRoute,private service:WebService,private router:Router) { }
 
  ngOnInit(): void {
    this.getData()
  }
  main() {
    this.router.navigate(['']);
  }
  getData() {
    this.userId = +this.route.snapshot.paramMap.get('userId');
    //this.UserData = this.route.snapshot.paramMap.get('userId')
     this.service.getByUser(this.userId).subscribe(reponse =>{
      this.UserId = reponse;
     
    })
  }

}
