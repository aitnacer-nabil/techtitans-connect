import { Component, Input, OnInit } from '@angular/core';
import { CommentDto } from 'src/app/models/comment-dto.model';
import { CommentService } from 'src/app/services/comment/comment.service';
import { InteractionService } from 'src/app/services/interaction/interaction.service';


@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() postId!: number;
  @Input() userId!:number;
  commentId!:number;
  comments: CommentDto[] = [];
  interaction!: any;

  constructor(
    private commentService: CommentService,
    private interactionService: InteractionService
  ) { }

  ngOnInit(): void {
    this.getAllComments();
    this.getAllInteractions();
  }
  handleBoutonClique(){
    this.getAllComments();
  }

  getAllComments() {
    this.commentService.getAllComments().subscribe(
      (response)=>{
        this.comments=response;
        console.log(this.comments);
      },(error)=>{
        console.log(error)
      }
    )

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
}
