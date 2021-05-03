import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-section-price-each',
  templateUrl: './section-price-each.component.html',
  styleUrls: ['./section-price-each.component.css']
})
export class SectionPriceEachComponent implements OnInit {

  iphone_new: any = [];
  air_pods_new: any = [];
  ipad_new: any = [];
  macbook_new:any=[];
  apple_watch_new:any=[];
  sim_data_wifi_new:any=[];
  showModal:boolean;

  constructor(private networkserviceService: NetworkserviceService) {

  }

  ngOnInit(): void {


    this.networkserviceService.getAllMobile().subscribe(val =>{

      this.iphone_new = val.filter(val =>

        val.category == 'iphone_new' && val.active == true

      ),
      this.air_pods_new = val.filter(val =>

        val.category == 'air_pods_new' && val.active == true

      ),
      this.ipad_new = val.filter(val =>

        val.category == 'ipad_new' && val.active == true

      )
      this.macbook_new = val.filter(val =>

        val.category == 'macbook_new' && val.active == true

      )
      this.apple_watch_new = val.filter(val =>

        val.category == 'apple_watch_new' && val.active == true

      )
      this.sim_data_wifi_new = val.filter(val =>

        val.category == 'sim_data_wifi_new' && val.active == true

      )
     
    }
     
    )



  }

  test(data){
    console.log(data)
  }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide()
  {
    alert("Bạn đã đăng ký nhận tin khuyến mãi thành công")
  }

}
