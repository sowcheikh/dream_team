import { Bien } from './../models/bien';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { BiensService } from './../../services/biens.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {

  id: number;
  bien: Bien;

  constructor( private bienService: BiensService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const idBien = +this.route.snapshot.params['id'];
    // this.bien = this.bienService.getBienByID(idBien);

    //for next time that this component will be loaded
    this.route.params
    .subscribe(
      (p: Params) => {
        //console.log('change params');
        const idBien = +p['id'];
        this.bien = this.bienService.getBienByID(idBien);
        
      }
    )
     
  }

}
