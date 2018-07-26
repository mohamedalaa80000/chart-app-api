import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { bpsin } from '../bpsin';
import { bpsout } from '../bpsout';

@Injectable({
  providedIn: 'root'
})
export class GetapisService {

  constructor(public http : HttpClient) {
   }
   getbpsin():Observable<bpsin[]>{
    
     return this.http.get<bpsin[]>('http://snmp-col-dev.fra1.proio.com/v1/bpsin?switch=core1&interface=ae3&sort=datedesc&limit=3000');
   }
   getbpsout():Observable<bpsout[]>{
    
    return this.http.get<bpsout[]>('http://snmp-col-dev.fra1.proio.com/v1/bpsout?switch=core1&interface=ae3&sort=datedesc&limit=3000');
  }
}
