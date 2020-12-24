import { BiensService } from './../../../services/biens.service';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { UtilsService } from './../../../utils.service';
import { Bien } from './../../models/bien';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {
  
  biens: Bien;

  @Input() bien: Bien;


  constructor() { }

  ngOnInit(): void {  
   
  }


}
