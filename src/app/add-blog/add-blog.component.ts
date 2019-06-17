import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Blog } from './modals/blog';
import { BlogPublishService } from "../services/BlogPublishService";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.sass']
})
export class AddBlogComponent implements OnInit {

  textBody: string;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '150px',
    minHeight: '50px',
    placeholder: 'Text body here ...',
    translate: 'yes'
  }

  newBlog: Blog

  constructor(private blogPublishService: BlogPublishService, private router: Router) { }

  ngOnInit() {
    this.newBlog = Object.assign({ Blog });
  }

  publishBlog() {
    this.blogPublishService.newBlogAvailable = true;
    this.blogPublishService.sendBlog(this.newBlog);
    this.router.navigate(['/home']);
  }
}
