import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ConfigModel } from '../interfaces/config';
import { Router } from '@angular/router';
 
import { finalize } from 'rxjs/operators';
import { GlobalService } from './global.service';
declare var $;

@Injectable({
    providedIn: 'root'
})

export class DataService {
    config: ConfigModel;
    httpOptions: object;

    constructor(private http: HttpClient, private rounter: Router, private global: GlobalService) {
        this.config = global.getConfig();
    }
    httpCount = 0;
    public getHttpData(reqURL: string, objData: any) {
        
        this.httpCount = this.httpCount + 1;
        this.global.loader = true;
        let token = '';
        // if (localStorage.getItem('user') !== undefined) {
        //     token = JSON.parse(localStorage.getItem('user'))['token'];
        // }
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        if (objData === undefined) {
            objData = {};
        }
        // let params = $.param(objData);
        let params = $.param(objData);
        
     
        params = params.replace(/'/g, "''");
        return this.http.get(this.config.api_root + reqURL + '?' + params).pipe(finalize(() => {
            // console.log('loaded');
            this.httpCount = this.httpCount - 1;
            if (this.httpCount == 0) {
                this.global.loader = false;
            }
        }));
    }

    public postHttpData(reqURL: string, objData: any) {
        this.httpCount = this.httpCount + 1;
        this.global.loader = true;
        let token = '';
        if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {
            token = JSON.parse(localStorage.getItem('user'))['token'];
        }
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        objData = JSON.stringify(objData).replace(/'/g, "''");
        objData = JSON.parse(objData);
        return this.http.post(this.config.api_root + reqURL, objData, this.httpOptions).pipe(finalize(() => {
            // console.log('loaded');
            this.httpCount = this.httpCount - 1;
            if (this.httpCount == 0) {
                this.global.loader = false;
            }

        }));
    }




    // public demoD(reqURL: string, objData: any) {
    //     debugger
    //     this.httpCount = this.httpCount + 1;
    //     this.global.loader = true;
    //     let token = '';
    //     // if (localStorage.getItem('user') !== undefined) {
    //     //     token = JSON.parse(localStorage.getItem('user'))['token'];
    //     // }
    //     this.httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + token
    //         })
    //     };
    //     if (objData === undefined) {
    //         objData = {};
    //     }
    //     let params = $.param(objData);
     
    //     params = params.replace(/'/g, "''");
    //     return this.http.get('http://localhost:8082/' + reqURL + '?' + params,
    //      this.httpOptions).pipe(finalize(() => {
    //         // console.log('loaded');
    //         this.httpCount = this.httpCount - 1;
    //         if (this.httpCount == 0) {
    //             this.global.loader = false;
    //         }
    //     }));
    // }
}
