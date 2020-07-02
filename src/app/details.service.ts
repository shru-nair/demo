import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }


  public doRegistration(user){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:9090/getAllEmployee");
  }

  public getUserByName(name){
    return this.http.get("http://localhost:9090/findEmployee/"+name);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}
