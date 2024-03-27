import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-reaction-icons',
  templateUrl: './reaction-icons.component.html',
  styleUrls: ['./reaction-icons.component.css'],

 
})
export class ReactionIconsComponent implements OnInit {

  @Output() reactionSelected = new EventEmitter<string>();


  constructor() { }



  ngOnInit(): void {
      
  }
  selectReaction(reaction: string) {
    this.reactionSelected.emit(reaction);

  }

}
