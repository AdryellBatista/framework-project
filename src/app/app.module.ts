import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DialogConfirmComponent } from './shared/components/dialog-confirm/dialog-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogPhotoComponent } from './shared/components/dialog-photo/dialog-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogConfirmComponent,
    DialogPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    DialogConfirmComponent,
    DialogPhotoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
