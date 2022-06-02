import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from './../../services/characters/characters.service';
import { Characters } from 'src/app/models/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public charactersObs$: Observable<Characters[]>;

  constructor(private charactersS: CharactersService) {
    this.charactersObs$ = this.charactersS.getCharacters();
  }

  ngOnInit() {  }

}
