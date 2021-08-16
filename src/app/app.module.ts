import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/components/admin/admin.component';
import { EndUserComponent } from './components/components/end-user/end-user.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticalUserComponent } from './components/components/analytical-user/analytical-user.component';
import { ShadowComponent } from './components/components/shadow/shadow.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EndUserComponent,
    AppNavBarComponent,
    AnalyticalUserComponent,
    ShadowComponent,
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
