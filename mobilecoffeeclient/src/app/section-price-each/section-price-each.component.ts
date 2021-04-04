import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-section-price-each',
  templateUrl: './section-price-each.component.html',
  styleUrls: ['./section-price-each.component.css']
})
export class SectionPriceEachComponent implements OnInit {

  iphone_new: any = [];
  iphone_old: any = [];
  ipad_new: any = [];

  constructor(private networkserviceService: NetworkserviceService) {

  }

  ngOnInit(): void {
    this.networkserviceService.getAllMobile().subscribe(val =>
      this.iphone_new = val.filter(val =>

        val.category == 'iphone_new' 

      )
      
     
    )
    this.networkserviceService.getAllMobile().subscribe(val =>
      this.iphone_old = val.filter(val =>

        val.category == 'iphone_old' 

      )
      
     
    )

    this.networkserviceService.getAllMobile().subscribe(val =>
      this.ipad_new = val.filter(val =>

        val.category == 'ipad_new' 

      )
      
     
    )

  }

}
