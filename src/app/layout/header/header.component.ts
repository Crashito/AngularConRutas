import { Component, OnInit } from '@angular/core';
import { faHeart, faMobileAlt, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faSearch = faSearch;
  faMobileAlt = faMobileAlt;
  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
