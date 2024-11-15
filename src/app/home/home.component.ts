import { Component ,AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SkillChartComponent } from "./skill-chart/skill-chart.component";


register();



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ RouterOutlet, SkillChartComponent ],
  styleUrls: ['./home.component.css','./layout.css','framework.css'],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  

}