import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestquotation',
  templateUrl: './requestquotation.component.html',
  styleUrls: ['./requestquotation.component.css']
})
export class RequestquotationComponent implements OnInit {
  header:any;
  loader:any;
  uname:any;
  requesth:any;
  requesti:any;
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
     this.header=true;
     this.uname = sessionStorage.getItem("uname");
     this.http.post('http://localhost:3000/request', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.requesth = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_REQ_QUOTATION_KNH.Response']['IT_RFQ_HEADER']['item'];
       this.requesti = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_REQ_QUOTATION_KNH.Response']['IT_RFQ_ITEM']['item'];
       console.log(this.requesth);
       this.loader=false;
     })
   }  
showitem(headval:any){
  this.header=false;
  console.log(headval);
  // this.filtereddata=this.showitem.filter ((x:any)=>x.DOC_NUMBER._text==headval);
  this.filtereddata=this.requesti.filter((x:any)=>x.DOC_NUMBER._text==headval);
  console.log(this.filtereddata);
  this.loader=false;
}
goback(){
  this.header=true;
}


}
