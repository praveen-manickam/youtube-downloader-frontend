import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  import{ MatToolbarModule} from '@angular/material/toolbar';
  import{ MatTableModule} from '@angular/material/table';
  import{ MatDialogModule} from '@angular/material/dialog';
  import{ MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
  import{ MatDatepickerModule} from '@angular/material/datepicker';
  import{ MatSelectModule} from '@angular/material/select';
  import{ MatCardModule } from '@angular/material/card';
  import{ MatFormFieldModule } from '@angular/material/form-field';


import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }