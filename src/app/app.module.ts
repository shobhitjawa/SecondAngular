import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ViewModule} from './view/view.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
