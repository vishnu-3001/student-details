import { Component,OnInit} from '@angular/core';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poc1';
  constructor(private user:UserService){}
  nub=10;
  userdet:any=[];
  userfulldet:any={};
  detform:FormGroup;
  reqid:number;
  ngOnInit(){
    this.detform=new FormGroup({
      id:new FormControl()
    })
      this.user.getData().subscribe((data:any)=>{
        this.userdet=data;
      })
  }
  submitted(){
     this.reqid=this.detform.value['id'];
     console.log(this.reqid);
    this.userfulldet=this.userdet[this.reqid];
  }
}
