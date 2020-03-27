import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigateToProducts() {
    // this.router.navigate(['/my-book-listing']);
  }

}