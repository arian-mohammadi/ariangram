import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AriangramPageRoutingModule } from './ariangram-routing.module';

import { AriangramPage } from './ariangram.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AriangramPageRoutingModule
  ],
  declarations: [AriangramPage]
})
export class AriangramPageModule {}
