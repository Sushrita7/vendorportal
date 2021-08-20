import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-invoicee',
  templateUrl: './invoicee.component.html',
  styleUrls: ['./invoicee.component.css']
})
export class InvoiceeComponent implements OnInit {
  inv_num:any;
  uname:any;
  year:any;
  inv_data:any;
  PathReportString:any;
  inv=true;
  card=false;
  show_inv:any;
  show_table:any;
  loader=false;
  constructor( private router: Router, private http: HttpClient,private sanitizer:DomSanitizer) { }
  logout() {
    // this.authenticationService.logout();
    // sessionStorage.clear();
  }
  ngOnInit(): void {
    this.uname = sessionStorage.getItem("uname");

    
  }
  get_invoice(){
    this.loader=true;
    this.http.post('http://localhost:3000/invoicecall', {
       uname: this.uname,inv_num:this.inv_num, year:this.year}).subscribe((data:any) => {
      console.log(data);
      this.inv_data = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_VENDOR_INVOICE_KNH_CALL.Response']['E_PDF']._text;
      console.log(this.inv_data);
      this.PathReportString = 'data:application/pdf;base64,'+(this.sanitizer.bypassSecurityTrustResourceUrl(this.inv_data) as any).changingThisBreaksApplicationSecurity;
      document.getElementById('inv').setAttribute("src",this.PathReportString);
      this.loader=false;
    })

  }
  show_invoice_num(){
    this.show_table=true;
    this.loader=true;
    this.http.post('http://localhost:3000/invoicedetail', { uname: this.uname}).subscribe((data:any) => {
      console.log(data);
      this.show_inv = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_VENDOR_INVOICE_DETAILS_KNH.Response']['E_DETAILS']['item'];
      console.log(this.show_inv);
      this.loader=false;
    })
    

  }

  populate_value(a:any,b:any){
    this.inv_num=a;
    this.year=b;
    this.show_table=false;
  }

  toogle(){
    this.inv=false;
    this.card=true;
  }


}
