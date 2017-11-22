import {Component, OnInit} from '@angular/core';
import {Crib} from "../crib";
import {CribsService} from "../services/cribs.service";


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit {

  cribInCarts:Array<Crib>=[];

  cribdata:any;
  constructor(private cr:CribsService)
  {

  }
  ngOnInit()
  {

    console.log('NgInit of Shopping called');
    this.cr.cribValue.subscribe(
      data=>
      {
        /*this.cribdata=data;
        console.log('shopping comp'+data);*/
        if(this.cribInCarts.indexOf(data)==-1)
        {
          this.cribInCarts.push(data);
          data.quantity=1;
        }
        else {
          data.quantity++;
                 }

      /*  this.cribInCarts.push( this.cr.getCribDetail(data));*/
      }
    );

  }

  deleteItem(data)
  {
    this.cribInCarts.splice(this.cribInCarts.indexOf(data),1);
  }
  PlusItem(data)
  {
      data.quantity++;
  }
  minusItem(data)
  {
      if (data.quantity == 1){
        this.cribInCarts.splice(this.cribInCarts.indexOf(data),1);
      }
    else{
      data.quantity--;
    }
  }
}

