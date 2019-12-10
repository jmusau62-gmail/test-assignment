import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GithubRequestService } from './search-gh/gh-search.service';

@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  
  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
