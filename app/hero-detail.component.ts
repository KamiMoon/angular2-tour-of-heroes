/**
 * Created by erickizaki on 3/30/16.
 */

import {Component, Input, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams
    ){

    }

    ngOnInit():any {
        //convert to number with +
        let id = +this._routeParams.get('id');

        this._heroService.getHero(id).then(hero => this.hero = hero);
    }

    goBack(){
        window.history.back();
    }
}

