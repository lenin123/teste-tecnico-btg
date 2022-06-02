import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CreatorsService } from './../../services/creators/creators.service';
import { Creators } from './../../models/creators';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  public creatorObs$: Observable<Creators[]>;

  constructor(private creatorsS: CreatorsService) {
    this.creatorObs$ = this.creatorsS.getCreators();
  }

  ngOnInit() {  }

}
