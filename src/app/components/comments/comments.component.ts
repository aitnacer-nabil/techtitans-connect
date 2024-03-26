import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() commentId!:number;
  @Output() boutonClique = new EventEmitter<void>();
  comment:any=[];

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    console.log(this.commentId);
    this.getCommentById(this.commentId);
  }

    getCommentById(commentId:number){
      this.commentService.getCommentById(commentId).subscribe(
              (response)=>{
                console.log(response);
                this.comment=response;
              },(error)=>{
                console.log(error)
              }
            )
      
    }
    deleteComment(){
      this.commentService.deleteComment(this.commentId).subscribe(
                    (response)=>{
                      console.log(response);
                      this.boutonClique.emit();
                    },(error)=>{
                      console.log(error)
                    }
                  )
    }
}
