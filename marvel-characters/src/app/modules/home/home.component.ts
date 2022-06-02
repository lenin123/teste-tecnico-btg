import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home/home.service';
import { Characters } from 'src/app/models/characters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeS: HomeService) { }

  ngOnInit() {
    this.homeS
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
