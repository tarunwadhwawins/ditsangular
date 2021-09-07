import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzGridModule,
    NzLayoutModule
  ],
  exports: [
    CommonModule,
    NzGridModule,
    NzLayoutModule
  ]
})
export class UiComponentModule { }
