import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-skill-chart',
  standalone: true,
  imports: [],
  templateUrl: './skill-chart.component.html',
  styleUrl: './skill-chart.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]

})
export class SkillChartComponent {

}
