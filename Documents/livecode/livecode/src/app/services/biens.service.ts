import { Bien } from './../biens/models/bien';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiensService {

  biens: Bien[] = [
    {
      id: 1, title: 'voiture', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price:'4000$', image:'https://source.unsplash.com/car/1080x720',
      sale:false, category:'4*4', createAt: new Date('1:23:33')
    },
    {
      id: 2, title: 'home', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price:'30000$', image:'https://source.unsplash.com/house/1080x720',
      sale:false, category:'F4', createAt: new Date('20/03/10')
    },
    {
      id: 3, title: 'voitures', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price:'35000$', image:'https://source.unsplash.com/car/1080x720',
      sale:false, category:'VOLVO', createAt: new Date('20/03/10')
    },
    {
      id: 4, title: 'voiture', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price:'8000$', image:'https://source.unsplash.com/random/1080x720',
      sale:false, category:'4*4', createAt: new Date('20/03/10')
    },
    {
      id: 5, title: 'voiture', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price:'2000$', image:'https://source.unsplash.com/building/1080x720',
      sale:false, category:'4*4', createAt: new Date('20/03/10')
    },
    {
      id: 7, title: 'voiture', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price:'30500$', image:'https://source.unsplash.com/maison/1080x720',
      sale:false, category:'4*4', createAt: new Date('20/03/10')
    }
    
  ]

  constructor() { }

  getAllBien(): Bien[] {
    return this.biens;
  }

  /**
   * permet de rechercher un bien par son ID
   * @param id 
   * retourne bien
   */

  getBienByID(id: number): Bien {
   const bienFound = this.biens.find(
      (b: Bien) => {
        return b.id === id;
      }

    );
    return bienFound;
  }

  addBien(newbien: Bien) {
    this.biens.push(newbien);
  }

  updateBien(bienUpdate: Bien){
    var oldBien:Bien = this.biens.find(
      (b:Bien ) =>{
        return b.id === bienUpdate.id;
      }
    );
    if (oldBien) {
      //spred operator
      oldBien = {...bienUpdate}
      
    }
  }

  getlastID(): number {
    return this.biens[this.biens.length - 1].id ? 
    this.biens[this.biens.length - 1].id : 0;
  }

  deleteBien(id:number) {

  }
}
