import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroHeading1: string;
  heroHeading2: string;
  heroText1: string;
  heroText2: string;
  heroBtnText : string;
  heroBtnUrl:   string ;

  constructor() { 
    this.heroHeading1 =  `We are your ultimate`;
    this.heroHeading2 =  `Winter experience Provider`;
    this.heroText1 =  `With hundreds of winter holidays destinations offered we are your`;
    this.heroText2 = `natural choice for planning it all out!`;
    this.heroBtnText =  `Learn more`;
    this.heroBtnUrl =  `https://codefactory.wien`;

  }

  ngOnInit(): void {
  }

}
