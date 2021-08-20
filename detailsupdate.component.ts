import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailsupdate',
  templateUrl: './detailsupdate.component.html',
  styleUrls: ['./detailsupdate.component.css']
})
export class DetailsupdateComponent implements OnInit {
  // fname:any;
  // lname:any;
  // addr:any;
  // city:any;
  // country:any;
  // pincode:any;
  // dist:any;
  // mobile:any;
  // uname:any;
  // id:any;


  // constructor(private router: Router, private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.fname = sessionStorage.getItem("fname");
  //   this.lname = sessionStorage.getItem("lname");
  //   this.city = sessionStorage.getItem("city");
  //   this.dist = sessionStorage.getItem("district");
  //   this.addr = sessionStorage.getItem("address");
  //   this.pincode = sessionStorage.getItem("pincode");
  //   this.mobile = sessionStorage.getItem("mobile");
  //   this.country = sessionStorage.getItem("country");
  // }

  // update() {
  //   this.uname = sessionStorage.getItem('uname');
  //   var cust_details = {
  //     uname: this.uname, fname: this.fname, lname: this.lname,
  //     dist: this.dist, city: this.city, addr: this.addr,
  //     pincode: this.pincode, country: this.country, mobile: this.mobile
  //   }
  //   this.http.post('http://localhost:3000/detailsupdate', cust_details).subscribe((data:any) => {
  //     console.log(data);
  //     this.id = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].VENDOR;
  //     this.fname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].NAME;
  //     this.lname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].LNAME;
  //     this.city = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].CITY;
  //     this.country = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].COUNTRY;
  //     this.dist = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].DISTRICT;
  //     this.addr = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].ADDRESS;
  //     this.mobile = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].TELEPHONE;
  //     this.pincode = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].PINCODE;

  //   })
  //   this.router.navigate(['/details']);
  // }

  
  // constructor( ,private http:HttpClient) { }
  fname:any;
  lname:any;
  addr:any;
  city:any;
  country:any;
  pincode:any;
  dist:any;
  mobile:any;
  uname:any;
  id:any;
  constructor(private http:HttpClient, private router:Router) { }
 
  
  ngOnInit(): void {
    this.fname = sessionStorage.getItem("fname");
      this.lname = sessionStorage.getItem("lname");
      this.city = sessionStorage.getItem("city");
      this.dist = sessionStorage.getItem("district");
      this.addr = sessionStorage.getItem("address");
      this.pincode = sessionStorage.getItem("pincode");
      this.mobile = sessionStorage.getItem("mobile");
      this.country = sessionStorage.getItem("country");
  }
  update(){
    this.uname=sessionStorage.getItem("username");
    var vendor_details = {

      username:this.uname, firstname: this.fname, lastname: this.lname, 

      district: this.dist, city: this.city, address:this.addr,

      pincode: this.pincode, country: this.country, mobile: this.mobile

    }
    this.http.post('http://localhost:3000/detailsupdate',vendor_details).subscribe((data:any)=>{
     
      this.id=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].VENDOR;
      this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].NAME;
      this.lname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].LNAME;
      this.mobile=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].TELEPHONE;
      this.country=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].COUNTRY;
      this.dist=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].DISTRICT;
      this.city=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].CITY;
      this.pincode=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].PINCODE;
      this.addr=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_UPDATE_KNH.Response'].ADDRESS;
      console.log(data);
   
  
    
     
  })
  this.router.navigate(['/details'])
  }


}
