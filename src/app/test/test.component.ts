import { Component } from '@angular/core';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper' ;
import { from } from 'rxjs';

// register Swiper custom elements
register();

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]

})

export class TestComponent {

  // Type assertions and TypeScript-safe code
  
}
