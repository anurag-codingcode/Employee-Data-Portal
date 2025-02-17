import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';

// this is from material Ui
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import {MatSelectModule} from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import {  HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipe/search.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    BasicInfoComponent,
    DashboardComponent,
    DetailsCardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material UI
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,

    //
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   


  ],
  providers: [SearchPipe,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
