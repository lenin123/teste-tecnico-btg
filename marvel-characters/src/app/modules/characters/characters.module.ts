import { NgModule } from '@angular/core';

import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters.routing';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CharactersRoutingModule],
  exports: [],
  providers: [],
})
export class CharactersModule {}
