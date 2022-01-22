import { Injectable, VERSION } from '@angular/core';



// import * as apiconfiglocal from 'assets/appconfig.json';
// import * as apiconfigprod from 'assets/appconfig-prod.json';
// import { environment } from '../../../environments/environment';
// let apiconfig: any = {};
// if (environment.production) {
//     apiconfig = apiconfigprod;
// } else {
//     apiconfig = apiconfiglocal;
// }

export interface DomainEnv {
    doc_path?: any,
    cloudinary_url?: any
}

@Injectable({
    providedIn: 'root'
})
export class GlobalService {


    setUser() {
         
        let value = { 'id': '1', 'name': 'chinmay' };
        localStorage.setItem('user', JSON.stringify(value));
    }

    getUser() {
         
        let userData;
        const user = localStorage.getItem('user');
        userData= user != null ? JSON.parse(user) : {};
        return userData;
    }

    removeUser(){
        localStorage.setItem('user', null)
       
    }













}
