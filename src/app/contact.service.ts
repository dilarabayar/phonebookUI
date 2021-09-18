import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "./contact";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private apiServerURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  public getAllContactsInfo (): Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.apiServerURL}/contact/all`);
  }

  public addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiServerURL}/contact/add`, contact);
  }
}
