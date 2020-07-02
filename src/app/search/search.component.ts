import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   users:any;
  name:string;

  constructor(private service:DetailsService) { }

  public deleteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
  }

  public findUserByName(){
  let resp= this.service.getUserByName(this.name);
  resp.subscribe((data)=>this.users=data);
 }

  ngOnInit(){
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }
}


