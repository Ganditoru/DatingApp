import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    TabsModule.forRoot(),
    HttpClientModule,
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
