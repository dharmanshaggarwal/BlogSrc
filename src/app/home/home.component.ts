import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HomeService } from './home.component.service';
import { Observable, Subscription } from 'rxjs';
import { BlogPublishService } from "../services/BlogPublishService";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {

  cardData$: Observable<any>;
  data1: Array<any>;
  data2: any;
  newBlog$: Observable<any>;
  newBlog: any;


  constructor(private router: Router, private homeService: HomeService, private activatedRoute: ActivatedRoute, private blogPublishService: BlogPublishService) { }

  ngOnInit() {

    this.data1 = new Array();
    if (this.blogPublishService.newBlogAvailable) {
      this.getPublishedData();
    }
    this.getDataForCards();
  }

  getPublishedData() {
    this.newBlog$ = this.blogPublishService.getBlog();
    console.log("*********newBlog$", this.newBlog$);
    this.newBlog$.subscribe((blog) => {
      console.log("Published data: ", blog)
      //this.data1.push(blog);
      //console.log("Published data", this.data1);
      this.newBlog = blog;

    })
  }

  getDataForCards() {
    this.cardData$ = this.homeService.getData();
    console.log(this.cardData$);
    this.cardData$.subscribe(res => {
      this.data1 = res;
      if (!this.isEmpty(this.newBlog)) {

        this.data1.push(this.newBlog)
      }

      console.log("*********Data1", this.data1);
    });
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  navTo() {
    this.router.navigate(['add']);

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
