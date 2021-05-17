import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class NetworkserviceService {

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllMobile() {
    const getAllMobile = 'https://mobilecoffeeserver.herokuapp.com/detail';
    return this.httpClient.get<any>(getAllMobile);    
  }

  getAllMobileLess() {
    const getAllMobileLess = 'https://mobilecoffeeserver.herokuapp.com/detailLess';
    return this.httpClient.get<any>(getAllMobileLess);    
  }

  getMobile(data): Observable<any> {
    const getMobileAPI = `https://mobilecoffeeserver.herokuapp.com/detail/${data}`;
    return this.httpClient.get(getMobileAPI)
  }
     
  getAirPod(): Observable<any> {
    const getAirPodAPI = `https://mobilecoffeeserver.herokuapp.com/airpod`;
    return this.httpClient.get(getAirPodAPI)
  }

  getIpad(): Observable<any> {
    const getIpadAPI = `https://mobilecoffeeserver.herokuapp.com/ipad`;
    return this.httpClient.get(getIpadAPI)
  }

  getAppleWatch(): Observable<any> {
    const getAppleWatchAPI = `https://mobilecoffeeserver.herokuapp.com/applewatch`;
    return this.httpClient.get(getAppleWatchAPI)
  }

  getMacbook(): Observable<any> {
    const getMacbookAPI = `https://mobilecoffeeserver.herokuapp.com/macbook`;
    return this.httpClient.get(getMacbookAPI)
  }

  getSimData(): Observable<any> {
    const getSimDataAPI = `https://mobilecoffeeserver.herokuapp.com/simdata`;
    return this.httpClient.get(getSimDataAPI)
  }

  getDienthoaicu(): Observable<any> {
    const getDienthoaicuAPI = `https://mobilecoffeeserver.herokuapp.com/dienthoaicu`;
    return this.httpClient.get(getDienthoaicuAPI)
  }

  getIphone(): Observable<any> {
    const getIphoneAPI = `https://mobilecoffeeserver.herokuapp.com/iphone`;
    return this.httpClient.get(getIphoneAPI)
  }

  getPhukien(): Observable<any> {
    const getPhukienAPI = `https://mobilecoffeeserver.herokuapp.com/phukien`;
    return this.httpClient.get(getPhukienAPI)
  }

  getAndroid(): Observable<any> {
    const getAndroidAPI = `https://mobilecoffeeserver.herokuapp.com/android`;
    return this.httpClient.get(getAndroidAPI)
  }

  getSanphamkhac(): Observable<any> {
    const getSanphamkhacAPI = `https://mobilecoffeeserver.herokuapp.com/sanphamkhac`;
    return this.httpClient.get(getSanphamkhacAPI)
  }
}
