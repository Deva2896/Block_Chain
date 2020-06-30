import { Component, OnInit } from '@angular/core';
import {  BlockChainSystemService } from '../block-chain-system.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

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

      
  		let post='{"author":"'+this.author+'","to":"'+this.to+'","content":"'+this.content+'","quality":"'+this.quality+'","price":"'+this.price+'"}';
  		
  		this.poststring = post ;

  		let obj = JSON.parse(post) ;

  		this.serv.product(obj).subscribe( data => {
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
