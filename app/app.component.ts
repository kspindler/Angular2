import {Component} from '@angular/core';
import {Hero} from './hero';
import {ClickMeComponent} from './click-me.components';
import {KeyUpComponent_v1} from './keyup.components';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ClickMeComponent,
        KeyUpComponent_v1
    ]
})
export class AppComponent { 
    title: string;
    myHero: string;
    heroes: Hero[];
    
    constructor(){
        this.title = 'Tour of Heros';        
        this.heroes = [new Hero(1, 'Windstorm'),
                      new Hero(13, 'Bombasto'),
                      new Hero(15, 'Magneta'),
                      new Hero(20, 'Tornado')];
                      
        this.myHero = this.heroes[0].name;
    }
}
