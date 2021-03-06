import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import './home.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../feedback/feedback.service.js';

declare var navSlide: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('dgcontainer') dgcontainer: ElementRef
  // @ViewChild('navbarTogglerDemo02') navbarTogglerDemo02: ElementRef

  LogoUrl = '../../assets/Logo.png';
  feedbackForm: FormGroup;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: FeedbackService,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name : ['', [Validators.required]],
      email : ['', [Validators.required]],
      comments : ['', [Validators.required]]
    });

    this.metaTagService.addTags([
      { name: 'description', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'keywords', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { charset: 'UTF-8' }
    ]);
  }

  ngAfterViewInit() {
    console.log(this.dgcontainer);
  }

  modernhistory() {
    this.router.navigate(['modern-history']);
  }

  artculture() {
    this.router.navigate(['art&culture']);
  }

  environment() {
    this.router.navigate(['environment']);
  }

  gallery() {
    this.router.navigate(['gallery']);
  }

}
