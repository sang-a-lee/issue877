import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DualSelectorComponent } from './dual-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DualSelectorComponent],
  exports: [DualSelectorComponent]
})
export class DualSelectorModule { }