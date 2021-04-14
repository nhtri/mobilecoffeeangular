import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = 'appBootstrap';
  
  closeResult: string;

  constructor(private networkserviceService: NetworkserviceService,private modalService: NgbModal) { }


  showModal: boolean;
  showModal1: boolean;
  showModal2: boolean;
  showModal3: boolean;
  show()
  {
    this.showModal = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  show1()
  {
    this.showModal1 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide1()
  {
    this.showModal1 = false;
  }
  show2()
  {
    this.showModal2 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide2()
  {
    this.showModal2 = false;
  }
  show3()
  {
    this.showModal3 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide3()
  {
    this.showModal3 = false;
  }
  
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
