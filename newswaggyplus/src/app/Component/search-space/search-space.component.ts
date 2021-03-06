import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search-space',
  templateUrl: './search-space.component.html',
  styleUrls: ['./search-space.component.css']
})
export class SearchSpaceComponent implements OnInit {

  SearchKey:any
  restaurents:any
  dishes:any
  message:any
  constructor(
    private route:ActivatedRoute,
    public service:UserService,private router:Router
  ) {}

  ngOnInit(): void {

    this.SearchKey=this.route.snapshot.params['searchKey']
    this.refresh()
   

  }
 
  refresh(){
    
    this.SearchKey=this.route.snapshot.params['searchKey']
    if(this.SearchKey.length){
      this.service.searchHandle(this.SearchKey).subscribe(
        data=>{
          this.restaurents=data
          this.service.searchHandleDish(this.SearchKey).subscribe(
            data=>{
              this.dishes=data
            }
          )
        }
      )
    }
    else{
      this.router.navigate(['user-dashboard',sessionStorage.getItem("userId")])
    }


  }

  addtoCart(dishId,dishName,restaurantId){
    let userId=sessionStorage.getItem("userId")
    this.service.getrestaurentId(userId).subscribe(
      data=>{
        if(data!=-1){

          if(data==restaurantId){
            this.service.addToCart(userId,dishId).subscribe(
              data=>{
                this.refresh()
                this.message=`${dishName} added to cart`
                alert(this.message)
              }
            )
          }else{
           let r=confirm("Previously You have added dish from another restaurant. Do you want to delete previous Items?")
           if (r == true) {
            this.service.addToCart(userId,dishId).subscribe(
              data=>{
                this.refresh()
                this.message=`${dishName} added to cart`
                alert(this.message)
              }
            )
          } else {
            console.log("nothing")
          }
          }

        }else{
          this.service.addToCart(userId,dishId).subscribe(
            data=>{
              this.refresh()
              this.message=`${dishName} added to cart`
              alert(this.message)
            }
          )
        } 
      }
    )
  }

}
