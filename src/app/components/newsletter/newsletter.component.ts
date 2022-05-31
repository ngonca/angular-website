import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  username: string = "";
  list: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  getVal(event: any) {
    console.warn(event.value);

  }
  addToList() {

    if (!this.list.includes(this.username)) {
      this.list.push(this.username);
      console.log(`${this.username} added list`);
      alert(`${this.username} added list`);
    }
    else {
      console.log(`${this.username} already in the list`);
      alert(`${this.username} already in the list`);
    }



  }

}
