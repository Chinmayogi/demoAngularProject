import { Injectable } from '@angular/core';
import {DataService} from '../services/dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private dataservice: DataService) { }

  connect(req: any) {
    return this.dataservice.getHttpData('/user', req);
  }

}