import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-reaction-bar',
  templateUrl: './reaction-bar.component.html',
  styleUrls: ['./reaction-bar.component.css'],
  animations: [
    trigger('toggleReactionIcons', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        })
      ),
 transition('show <=> hide', animate('300ms ease-in-out')),
    ]),
  ]
})
export class ReactionBarComponent implements OnInit {
  showReactionIcons: boolean = false;
  reaction: String = 'like';
  reactionColor: string = 'black';
  commentColor: boolean = false;
  @Output() commentButtonClick = new EventEmitter<void>();
  @Input() postId!: number; 


  constructor( private Sh) {}

  ngOnInit(): void {}

  toggleReactionIcons() {
    this.showReactionIcons = !this.showReactionIcons;
  }
  handleReaction(reaction: string) {
    switch (reaction) {
      case 'like':
        this.reaction = 'like';
        this.reactionColor = 'blue';
        break;
      case 'love':
        this.reaction = 'love';
         this.reactionColor = 'red';
        break;
      case 'haha':
        this.reaction = 'hahaha';
         this.reactionColor = '#F5CF6A';
        break;
      case 'wow':
        this.reaction = 'wow';
        this.reactionColor = 'orange';
        break;
      case 'sad':
        this.reaction = 'sad';
        this.reactionColor = 'gray';
        break;
      case 'angry':
        this.reaction = 'angry';
        this.reactionColor = 'purple';
        break;
      case 'dislike':
        this.reaction = 'dislike';
        this.reactionColor = 'brown';
        break;
      default:
        this.reaction = 'like';
        break;
    }
  }
  onCommentButtonClick() {
    this.commentButtonClick.emit();
    this.commentColor=!this.commentColor;
  }
  sharePost(){

  }
}
