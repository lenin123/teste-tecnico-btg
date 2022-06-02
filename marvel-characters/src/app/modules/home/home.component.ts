import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home/home.service';


import { Characters } from './../../models/characters';
import { Creators } from './../../models/creators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public creatorObs$: Observable<Creators[]>;
  public charactersObs$: Observable<Characters[]>;

  constructor(private homeS: HomeService) {
    this.creatorObs$ = this.homeS.getCreators();
    this.charactersObs$ = this.homeS.getCharacters();
  }

  ngOnInit() {  }

}
