import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/definition';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card:Card;
  constructor() { }

  ngOnInit() {
  }
  upvote(){
       this.card.votes++;
  }
  downvote(){
    this.card.votes--;
  }
}



