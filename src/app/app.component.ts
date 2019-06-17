import { Component } from '@angular/core';
import { BlogPublishService } from './services/BlogPublishService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BlogPublishService]
})
export class AppComponent {
  title = 'blogApp';
}
