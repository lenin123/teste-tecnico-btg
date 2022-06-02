import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters.routing';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule],
  exports: [],
  providers: [],
})
export class CharactersModule {}
