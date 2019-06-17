import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Blog } from '../add-blog/modals/blog';
import { ReplaySubject } from 'rxjs';
@Injectable()
export class BlogPublishService {
    public addBLog = new ReplaySubject<Blog>();
    newBlogAvailable: boolean;
    constructor(private http: HttpClient) { }

    // Publishing blog so that subscribers will get as soon as they subscribe to this subject
    sendBlog(value: Blog) {
        this.addBLog.next(value);
    }
    getBlog() {

        console.log(this.addBLog.asObservable());
        return this.addBLog.asObservable();
    }

}
