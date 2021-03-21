import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'livecode';
  ok = false;
  message = 'activer';
  @Input() searchcriteria: string ='';

  onClickBtn() {
    this.ok = !this.ok;
    this.message = this.ok ? 'desactiver' : 'activer';
  }

   
  searchThis(data) {
    this.searchcriteria = data;
    return data;
}
  }
