import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Dish } from 'src/app/dish';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  restaurent:any
  public dish=new Dish("","","",null)
  constructor(
    private route:ActivatedRoute,
    private service: AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    let id=this.route.snapshot.params['id']
    this.service.getresDetail(id).subscribe(
      data=>{
        this.restaurent=data
      }
    )

  }
  
  updateHandeller(id){
    this.service.editRestaurent(id,this.restaurent).subscribe(
      data=>{
        this.router.navigate(['admin-dashboard',sessionStorage.getItem("adminId")])
      }
    )
  }

  radiochangeHandeller(event){
    this.restaurent.isActive=event.target.value
  }


 validate(){
   if(this.dish.dishName==null){
     return 0
   }
   else if(this.dish.shortDescription==null)
   {
     return 0
   }
   else if(this.dish.freeDelivery==null)
   {
     return 0
   } else if(this.dish.imageUrl==null)
   {
     return 0
   }     else if(this.dish.imageUrl.length>255)
   {
     alert("Image URL > 255 characters")
     return 0
   }else if(this.dish.isVeg==null)
   {
     return 0
   }
   else if(this.dish.price==null)
   {
     return 0
   }
   else{
     return 1
   }

 }

  

  radiochangeHandeller2(event){
    this.dish.setfreeDelivery(event.target.value)
  }

  radiochangeHandeller1(event){
    this.dish.setIsveg(event.target.value)
  }
 
  addDishhandeller(restaurentId){
    if(this.validate()){
    this.service.addDishToRestaurent(restaurentId,this.dish).subscribe(
      data=>{
        this.router.navigate(['admin-dashboard',sessionStorage.getItem("adminId")])
      }
    )}
    else{
      alert("Invalid details")
    }
  }

}
