import { Component, OnInit } from '@angular/core';
import { CharactersService } from './../../services/characters/characters.service';
import { Characters } from 'src/app/models/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private characterS: CharactersService) { }

  ngOnInit() {
    this.characterS
    .getCharacters()
    .subscribe({
        next: (characters: Characters[]) => {
          console.log(characters);
        },
        error: (e) => {
          console.error(e)
        }
    });
  }

}
