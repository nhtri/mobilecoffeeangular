import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NetworkserviceService } from '../services/networkservice.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Url } from 'url';


@Pipe({ name: 'safety' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = 'appBootstrap';

  closeResult: string;

  constructor(private sanitizer: DomSanitizer,
    private networkserviceService: NetworkserviceService, private modalService: NgbModal) { }


  showModal: boolean;
  showModal1: boolean;
  showModal2: boolean;
  showModal3: boolean;
  showModal4: boolean;
  showModal5: boolean;
  show() {
    this.showModal = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  show1() {
    this.showModal1 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide1() {
    this.showModal1 = false;
  }
  show2() {
    this.showModal2 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide2() {
    this.showModal2 = false;
  }
  show3() {
    this.showModal3 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide3() {
    this.showModal3 = false;
  }

  show4() {
    this.showModal4 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide4() {
    this.showModal4 = false;
  }

  show5() {
    this.showModal5 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide5() {
    this.showModal5 = false;
  }
  trustedDashboardUrl : SafeResourceUrl;
  data: any
  video:String
  ngOnInit(): void {
    if (window.history.state.category != null) {
      this.data = window.history.state;
      localStorage.setItem('data', JSON.stringify(this.data))
      this.video = this.data.video
    }
    else {
      this.data = JSON.parse(localStorage.getItem('data'))
    }

  }

  getSafeUrl(){
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.video); 
}

}
