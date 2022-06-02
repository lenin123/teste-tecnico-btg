import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { CreatorsRoutingModule } from './creators.routing';

@NgModule({
  declarations: [CreatorsComponent],
  imports: [CommonModule, CreatorsRoutingModule],
  exports: [],
  providers: [],
})
export class CreatorsModule {}
