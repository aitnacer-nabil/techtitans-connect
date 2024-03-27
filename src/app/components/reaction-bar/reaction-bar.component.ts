import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ReactionsService } from 'src/app/services/reaction/reactions.service';
import { response } from 'express';
import { InteractionService } from 'src/app/services/interaction/interaction.service';
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
  numberOfLikes:number=0;
  numberOfComments:number=0;
  numberOfSahre:number=0;
  shared:boolean=false;
  @Output() commentButtonClick = new EventEmitter<void>();
  @Input() postId!: number; 
  @Input() userId!:number;
  interaction!: any;
  reactionId!:number;

  count:number=0;

  constructor( 
    private sharedService: SharedService,
    private reactionService: ReactionsService,
    private interactionService: InteractionService
  ) {}

  ngOnInit(): void {
    this.getAllInteractions();
    this.getReactionById();
  }
  getReactionById(){
    this.reactionService.getReactionById(this.postId, this.userId).subscribe(
      (res: any) => {
        this.reaction = res.reaction;
        this.reactionColor = res.reactionColor;
        this.shared = res.shared;
        this.numberOfLikes = res.numberOfLikes;
        this.numberOfComments = res.numberOfComments;
        this.numberOfSahre = res.numberOfSahre;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllInteractions(){
    this.interactionService.getAllInteractions(this.postId).subscribe(
          res => {
           this.interaction=res;
           console.log(this.interaction)
          },
          err => {
            console.log(err);
          }
        );
      }

  

  toggleReactionIcons() {
    this.showReactionIcons = !this.showReactionIcons;
  }
  // LIKE,
  // ANGRY,
  // LOVE,
  // HAHAH,
  // WOW,
  // SAD
  handleReaction(reaction: string) {
    this.count++;
    switch (reaction) {
      case 'like':
        this.reaction = 'like';
        this.reactionColor = 'blue';
        break;
      case 'love':
        this.reaction = 'love';
         this.reactionColor = 'red';
        break;
      case 'hahah':
        this.reaction = 'hahah';
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
if(this.count==1){
  this.reactionService.saveReaction(this.postId,{
    "userId":1,
    "reactionType":reaction.toUpperCase()
}).subscribe(
    (response)=>{
      console.log(response);
      this.reactionId=response.id;
    },(error)=>{
      console.log(error);

    }
  )

}else{
  this.reactionService.updateReaction(this.postId,{
    "userId":1,
    "reactionType":reaction.toUpperCase()
  }).subscribe(
    (response)=>{
      console.log("update");
      console.log(response);
      this.reactionId=response.id;
    },(error)=>{
      console.log(error);
    }
  )
}

  }
  onCommentButtonClick() {
    this.commentButtonClick.emit();
    this.commentColor=!this.commentColor;
  }
  sharePost(){
    this.sharedService.sharePost(this.postId,this.userId).subscribe(
      (response) => {
        console.log("Post Partager avec succes", response);
        this.shared=true;
      
      },
      (error) => {
        console.error('Erreur lors de envoi des données au backend', error);
      }
    );
   

  }
}
