import { Injectable } from '@angular/core';

import { ConfigModel } from '../interfaces/config';
 
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public displayAction: Subject<any> = null;
  public setting: Subject<Object> = null;
  public account_data: any = [];
  currentMenu = '';
  currentActions = '';
  loader: Boolean = false;
  loadertext: String = 'LOADING';
  private config: ConfigModel;
  public btnStyleSource: any = {
    icononly: 0,
    textonly: 1,
    both: 2
  }
  public btnStyle = 1;



  user: any = {};

  env: any = {};

  random: number = 999;   //random number length 3
  marketID: string = '';
  marketCSVName: any = [];
  marketArrayList: any = [];
  csvStrign: string = "";
  sessionMarketShareReport = [];
  server_type: string = "";

  outletID: any;
  franchiseSetting: object = {};


  //Search And DataTable Property
  paginatorRow: number = 20;
  rowsPerPageOptions: any = [10, 15, 20, 50, 100];
  searchLength: number = 3;

  filterGridData: any = {
    inputFilter: []
  }

  shortCuts: any = {
    add: ['meta+a', 'ctrl+a']
  }
 


  constructor( private route: ActivatedRoute,
    private router: Router) {
        this.config = environment;

 

  }

  public setCurrentMenu(value) {
    this.currentMenu = value;
  }

  public getCurrentMenu() {
    return this.currentMenu;
  }
  public setMenuActions(value) {
    this.currentActions = value.split(',');
  }
  public getMenuActions() {
    return this.currentActions;
  }

  public getConfig(): ConfigModel {

    return this.config;
  }

  public reportHeader(item:any){
        var header = [];
        for (var i in item) {
          if (item.hasOwnProperty(i)) {
            header.push(i);
          }
        }
        return header; 
  }
 


  public clearUser() {
    this.user = {};
    localStorage.setItem('user', JSON.stringify({}));
    this.outletID = '';
    localStorage.setItem('outlet', JSON.stringify({}));
    localStorage.setItem('selectedOutlet', JSON.stringify({}));

    this.filterGridData = {
      inputFilter: []
    }

  }

  public getLang(): any {
    return (localStorage.getItem('lang')) || 'en';
  }

  public formatDate(date: any) {
    if (date === '' || date === null) {
      return '';
    }
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return year + '-' + month + '-' + day;

  }

  public setConfig() {

  }

  randomNumber() {
    return (Math.floor(Math.random() * (this.random - 100)) + 100);
  }

  specialReplace(userdata: string, replace: boolean) {
    let returnVal = '';
    returnVal = replace === true ? userdata.replace("'", "~") : userdata.replace("~", "'");
    return returnVal;
  }

  getLocalStoreData(outletArray: any) {
    return this.outletID = outletArray;
  }

  getOutletValue() {
    return this.outletID;
  }

  getSelectedOutletId() {
    const _ou = localStorage.getItem('selectedOutlet');
    this.outletID = JSON.parse(_ou);
    return this.outletID.id;
  }

  getSelectedPropertyId() {
    const _ou = localStorage.getItem('selectedOutlet');
    this.outletID = JSON.parse(_ou);
    return this.outletID.propertyid;
  }

  getFranchiseid() {
    const _ou = localStorage.getItem('selectedOutlet');
    this.outletID = JSON.parse(_ou);
    return this.outletID.franchiseid;
  }

  getFranSchemaId() {
    const _ou = localStorage.getItem('selectedOutlet');
    this.outletID = JSON.parse(_ou);
    return this.outletID.schemaid;
  }

  getSchemaName() {
    const _ou = localStorage.getItem('selectedOutlet');
    this.outletID = JSON.parse(_ou);
    return 'fran' + this.outletID.schemaid;
  }

  showLoader(msg) {
    if (msg === '') {
      this.loadertext = 'Loading';
    } else {
      this.loadertext = msg;
    }
    this.loader = true;
  }

  hideLoader() {
    this.loadertext = 'Loading';
    this.loader = false;
  }

  backButton() {
    return window.history.back();
  }

  getFinalizePeriod() {
    return JSON.parse(localStorage.getItem('finalizeperiod'));
  }

  replaceEscapeSeq(items: string) {
    return items.split("↵").join("").replace(/[\/\\'"<>{}]/g, '');
  }

  headerButtonEnableDisable(buttons: any[], buttonid: string) {
    let index = -1;
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i];
      if (element.id == buttonid) {
        index = i;
        break;
      }
    }
    return index;
  }

  //https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields/38037580
  sortBy = (...props) => (a, b) => {
    for (let i = 0; i < props.length; i++) {
      const ascValue = props[i].startsWith('-') ? -1 : 1;
      const prop = props[i].startsWith('-') ? props[i].substr(1) : props[i];
      if (a[prop] !== b[prop]) {
        return (a[prop] || "") > (b[prop] || "") ? ascValue : -ascValue;
      }
    }
    return 0;
  };

  setToken(token) {
    localStorage.setItem('token', token);
  }

  

 

  getToken() {
    return this.isEmpty(localStorage.getItem('token')) ? null : localStorage.getItem('token');
  }

  hasToken() {
    return this.isEmpty(localStorage.getItem('token')) ? false : true;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('outlet');
    localStorage.removeItem('selectedOutlet');
    localStorage.removeItem('finalizeperiod');
    localStorage.removeItem('finalizeperiodlist');
    this.router.navigate(['/login']);
  }

  

  

  isEmpty(val) {
    return val ? false : true;
  }

  setAccount(account) {
    localStorage.setItem('accountdata', JSON.stringify(account));
  }

  getAccount() {
    return JSON.parse(localStorage.getItem('accountdata'));
  }

  setFranchiseSetting(objSetting: Object) {
    this.franchiseSetting = objSetting;
    if (this.franchiseSetting["dateformat"]) {
      this.franchiseSetting["dateformatp"] = this.franchiseSetting["dateformat"].toLocaleLowerCase().replace('yyyy', 'yy');
      this.franchiseSetting["decimals"] = `1.${this.franchiseSetting["decimals"]}-${this.franchiseSetting["decimals"]}`;
    }
    this.setting.next(this.franchiseSetting);
  }

  getFranchiseSetting() {
    return this.franchiseSetting;
  }

  getFranchiseSettingSubject(): Subject<Object> {
    return this.setting;
  }

  checkblank(value) {
    if ((value == undefined) || (value == null) || (value.toString() == "") || (value == {})) {
      value = null;
    }
    return value;
  }
}
