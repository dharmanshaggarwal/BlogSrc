import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./blog/blog.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogPublishService } from './services/BlogPublishService';

@NgModule({
  declarations: [AppComponent, BlogComponent, HomeComponent, AddBlogComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, AngularEditorModule, FormsModule],
  providers: [BlogPublishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
