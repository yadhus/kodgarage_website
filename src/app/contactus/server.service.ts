import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http){}
    storeServers(contacts: any){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://34.218.61.56:8001/contactUs', contacts, {headers: headers});
    }

}