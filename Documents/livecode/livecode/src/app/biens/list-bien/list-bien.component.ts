import { Bien } from './../models/bien';
import { BiensService } from './../../services/biens.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {

  search: string = '';
    // biens :
    // {id: 1, title: string, description:string, price:string, image:string,
    // sale:boolean, category:string, createAt:Date} [] = 
    // [
    //   {id: 1, title: 'voiture', description:'BMW', price:'3000$', image:'',
    //     sale:false, category:'4*4', createAt: new Date}, {id: 1, title: 'voiture', description:'TOYOTA', price:'3500$', image:'',
    //     sale:false, category:'4*4', createAt: new Date}, {id: 1, title: 'voiture', description:'VOLVO', price:'4000$', image:'',
    //     sale:false, category:'4*4', createAt: new Date},
    // ]:

    biens: Bien[];

  @Input() searchB: string ='';   
  constructor(private biensService: BiensService) {
  }
  ngOnInit(): void {
   this.biens = this.biensService.getAllBien();
  }

  

}