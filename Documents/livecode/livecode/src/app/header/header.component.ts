import { Bien } from './../biens/models/bien';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText: string ='';
  biensSearch: Bien[];
  @Output() searchcriteria = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }
  searchThis() {
    this.searchcriteria.emit(this.searchText)
}

}