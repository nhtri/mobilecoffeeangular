import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private networkserviceService: NetworkserviceService) { }
 
  data:any
  ngOnInit(): void {
   this.data = window.history.state;
  }

}
