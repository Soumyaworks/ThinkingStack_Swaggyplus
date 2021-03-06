import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName:any;
  adminName:any
  SearchKey:string=""
  constructor(
    public service:UserService,
    public aService:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
 
    
    this.userName=this.service.userName
    this.userName=sessionStorage.getItem("userName")
    
    this.adminName=this.aService.adminName
    this.adminName=sessionStorage.getItem("adminName")
    

 
  }
  

  restaurents(){
    let userId=sessionStorage.getItem("userId")
    this.router.navigate(['user-dashboard',userId]);

  }

  sesclr(){
    sessionStorage.clear();
    this.router.navigate([''])
    
  }

  goadmin(){
    this.router.navigate(['/admin-dashboard',sessionStorage.getItem("adminId")])
  }
  goauser(){
    this.router.navigate(['user-dashboard',sessionStorage.getItem("userId")]);
  }

  carthandle(){
    let userId=sessionStorage.getItem("userId")
    this.router.navigate(['cart',userId])
    
  }
  

SearchValidation(){
  if(this.SearchKey==""){
    alert("Enter the name of restaurent or dishes to be searched")
    return 0
  }
  return 1
}

  Search(){
    if(this.SearchValidation()){
    this.router.navigate(['dummy',this.SearchKey])
   
  }}

}
