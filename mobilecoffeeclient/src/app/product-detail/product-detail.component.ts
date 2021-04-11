import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private networkserviceService: NetworkserviceService) { }

  data: any
  ngOnInit(): void {
    if (window.history.state.category != null) {
      this.data = window.history.state;
      localStorage.setItem('data', JSON.stringify(this.data))
    }
    else {
      this.data = JSON.parse(localStorage.getItem('data'))
    }

  }

}
