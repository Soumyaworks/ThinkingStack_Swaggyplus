import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/dish';
import { Restaurent } from 'src/app/restaurent';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  public dish=new Dish("","","",null)
  public restaurent=new Restaurent("","",null)
  constructor(
    private service:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  radiochangeHandeller(event){
    this.restaurent.setisActive(event.target.value)
  }

  radiochangeHandeller1(event){
    this.dish.setIsveg(event.target.value)
  }

  radiochangeHandeller2(event){
    this.dish.setfreeDelivery(event.target.value)
  }
  
  addResValidation(){
     if(this.restaurent.restaurentName==""){
      alert("Restaurant name is Empty")
      return 0
    }
    else if(this.restaurent.restaurentAdress==""){
      alert("Restaurant address is Empty")
      return 0
    }else if(this.restaurent.restaurentRating==null){
      alert("Restaurant Rating is Empty")
      return 0
    }
   else if(this.restaurent.isActive==null){
     alert("Please choose if the restaurent is active or inactive")
     return 0
    }
    
    else if(this.dish.dishName==""){
      alert("Dish Name is Empty")
      return 0
    } 
      else if(this.dish.shortDescription==""){
      alert("Short description of the dish is Empty")
      return 0
    }
    else if(this.dish.imageUrl==""){
      alert("Image Url is empty")
      return 0
    }else if(this.dish.price==null){
      alert("Dish Price is Empty")
      return 0
    }else if(this.dish.isVeg==null){
      alert("Please select if the Dish is veg or non-veg")
      return 0
    }else if(this.dish.freeDelivery==null){
      alert("Please select if the Dish is available for free delivery or not")
      return 0
    }
    else if(this.dish.imageUrl.length>255)
 {
   alert("Image link length > 255 characters, give smaller url")
   return 0
 }
    return 1
  }
  addhandeller(){
    if(this.addResValidation()){
    this.restaurent.addDish(this.dish)
    let adres=this.service.addRestaurent(this.restaurent)
    adres.subscribe(
      data=>{
        this.router.navigate(['admin-dashboard',sessionStorage.getItem("adminId")])
        alert("Restaurent is added !!!")
      }
    )
    }
  }

}
