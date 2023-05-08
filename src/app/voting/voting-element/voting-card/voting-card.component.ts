import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.css'],
})
export class VotingCardComponent {
  closeCard() {
    //TODO add logic for new category
  }
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
  @Input()
  get text(): string {
    return this._text;
  }
  set text(name: string) {
    this._text = (name && name.trim()) || '<no name set>';
  }
  private _text = '';
}