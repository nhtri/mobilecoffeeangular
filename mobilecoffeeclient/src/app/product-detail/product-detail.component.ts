import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private networkserviceService: NetworkserviceService) { }
  id:any;
  data:any=[];
  ngOnInit(): void {
    this.networkserviceService.getAllMobile().subscribe(val =>
      this.data = val.filter(val =>{
        val.id == window.history.state;
         
      }
      )
      
     
    )
  }

}
