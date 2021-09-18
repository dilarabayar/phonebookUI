import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "./contact.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'PhoneBook UI'
  public contacts: Contact[] = [];

  constructor(private contactService: ContactService){}

  ngOnInit() {
    this.getAllContactsInfo();
  }

  public getAllContactsInfo(): void {
    this.contactService.getAllContactsInfo().subscribe(
      (response: Contact[]) => {
        this.contacts = response;
        console.log(this.contacts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
