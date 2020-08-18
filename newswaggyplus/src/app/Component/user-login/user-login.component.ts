import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private router:Router,
    private apiservice:UserService
  ) { }


  public user:User=new User("","");
  message:any;
  alert:string;
  userName:any;
  ngOnInit(): void {
  }
  loginValidation(){
  if(this.user.userId==""){
    alert("Enter your user Id")
    return 0
  }
  else if(this.user.password==""){
    alert("Password cannot be kept empty !!!")
    return 0
  }
  else {
    return 1
  }

  }

  loginHandle(){
      
    if(this.loginValidation()){
    let resp=this.apiservice.userValidation(this.user);
    
    resp.subscribe(
      data=>{
        
        this.message=data
        sessionStorage.setItem("userId",this.message)

        this.apiservice.getUserName(this.message).subscribe(data=>{
          this.userName=data;
          
          sessionStorage.setItem("userName",this.userName)
          sessionStorage.setItem("userType","USER")
          this.apiservice.userName=this.userName
          if(this.message==this.user.userId){
        
            this.router.navigate(['user-dashboard',this.message]);
            
            }
          else{
            alert("Enter valid information");
          }
        })
      },
      err=>{
        alert("Inavlid information!! Try again")
      }
      );
     
        
  
    }
    

  }


}
