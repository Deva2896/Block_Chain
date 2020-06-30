import { Component, OnInit } from '@angular/core';
import {  BlockChainSystemService } from '../block-chain-system.service';

@Component({
  selector: 'app-shopkeerer',
  templateUrl: './shopkeerer.component.html',
  styleUrls: ['./shopkeerer.component.css']
})
export class ShopkeererComponent implements OnInit {


  producer = "";
  author = "";
  content = "";
  to = "";
  quality = "";
  price = 0;
  enable=false;
  data = "";
  replaceEnable = false;
  transaction = [];
  poststring = "";
  database = "";
  timeIn = "";

  constructor(public serv:BlockChainSystemService) { }

  ngOnInit(): void {
  }


  getValue()
  {
  		let post='"producer":"'+this.producer+'","author":"'+this.author+'","to":"'+this.to+'","content":"'+this.content+'","quality":"'+this.quality+'","price":"'+this.price+'"}';
  		
  		this.poststring = post ;

  		let obj = JSON.parse(post) ;

  		this.serv.shopkeeper(obj).subscribe( data => {
      		this.getData(data);
    });

  		this.enable = true;
  }

  getData(data)
  {
  		this.data = data ;
  		this.database = this.data;

      // this.timeIn = this.

  		// this.transaction.push(data);
  		console.log(this.data);
  }

  mine()
  {
  		this.serv.mine().subscribe( data => {
      		this.getData(data);
    });
  }

  replace()
  {
  		
  		this.serv.replace().subscribe( data => {
      		this.getData(data);
    });
  		this.replaceEnable = true;
  }
}
