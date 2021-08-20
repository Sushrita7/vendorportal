import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit {

  uname:any;
  purchaseh:any;
  purchasei:any;
  header:any;
  loader:any;
  filtereddata:any;
 
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
     this.header=true;
     this.http.post('http://localhost:3000/purchase', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.purchaseh = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_PURCHASE_ORDER_KNH.Response']['IT_PO_HEADER']['item'];
       this.purchasei = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_PURCHASE_ORDER_KNH.Response']['IT_PO_ITEMS']['item'];
       console.log(this.purchaseh);
       this.loader=false;
     })
   }  
   showitem(headval:any){
    this.header=false;
    console.log(headval);
    // this.filtereddata=this.showitem.filter ((x:any)=>x.DOC_NUMBER._text==headval);
    this.filtereddata=this.purchasei.filter((x:any)=>x.PO_NUMBER._text==headval);
    console.log(this.filtereddata);
    this.loader=false;
  }
  goback(){
    this.header=true;
  }

}
