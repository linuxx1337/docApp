import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  today: number = Date.now(); // Angular DatePipe to show current date

  constructor() { }

  ngOnInit() {
  }

}
