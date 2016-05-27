import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <h2>My Favorite hero is: {{myHero}}`
})
export class AppComponent { 
    title = 'Tour of Heros';
    myHero = 'Windstorm';
}
