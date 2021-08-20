import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentaging',
  templateUrl: './paymentaging.component.html',
  styleUrls: ['./paymentaging.component.css']
})
export class PaymentagingComponent implements OnInit {

  uname:any;
  pay:any;


 
   constructor(private http: HttpClient, private router: Router) {
     this.uname = sessionStorage.getItem('uname');
     //alert(this.uname);
     if (this.uname == null) {
       // alert('hello');
       this.router.navigate(['']);
     }
   }
 
   ngOnInit(): void {
     // this.uname = localStorage.getItem('uname');
 
     this.uname = sessionStorage.getItem("uname");
     
     this.http.post('http://localhost:3000/payment', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.pay = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_VENDOR_PAYMENT_AGING_KNH.Response']['IT_OUTPUT']['item'];
       
       
     })
   }  



}
