import { Component, OnInit } from '@angular/core';
import { CreatorsService } from './../../services/creators/creators.service';
import { Creators } from './../../models/creators';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  constructor(private creatorsS: CreatorsService) { }

  ngOnInit() {
    this.creatorsS
    .getCreators()
    .subscribe({
        next: (creatorss: Creators[]) => {
          console.log(creatorss);
        },
        error: (e) => {
          console.error(e)
        }
    });
  }

}
