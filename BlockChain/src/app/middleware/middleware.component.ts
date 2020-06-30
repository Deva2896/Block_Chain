import { Component, OnInit } from '@angular/core';
import {  BlockChainSystemService } from '../block-chain-system.service';
import { RetailerComponent } from '../retailer/retailer.component';

@Component({
  selector: 'app-middleware',
  templateUrl: './middleware.component.html',
  styleUrls: ['./middleware.component.css']
})
export class MiddlewareComponent implements OnInit {

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

  constructor(public serv:BlockChainSystemService) { }

  ngOnInit(): void {
  }


  getValue()
  {

  		// this.producer = RetailerComponent.author;

  		let post='{"producer":"'+this.producer+'","author":"'+this.author+'","to":"'+this.to+'","content":"'+this.content+'","quality":"'+this.quality+'","price":"'+this.price+'"}';
  		
  		this.poststring = post ;

  		let obj = JSON.parse(post) ;

  		this.serv.retailer(obj).subscribe( data => {
      		this.getData(data);
    });

  		this.enable = true;
  }

  getData(data)
  {
  		this.data = data ;
  		this.database = this.data;
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
