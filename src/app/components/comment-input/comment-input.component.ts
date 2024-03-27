import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {
  commentaireForm!: FormGroup;
  @Input() userId!:number;
  @Input() postId!:number;
  @Output() boutonClique = new EventEmitter<void>();

  constructor(  private fb: FormBuilder, private  commentService:CommentService) { }

  ngOnInit(): void {
    this.commentaireForm = this.fb.group({
      commentaire: ['', Validators.required]
    }
    )
  }
  saveComment(){
    console.log(this.commentaireForm.value.commentaire);
   
    this.commentService.saveComment(this.postId,this.commentaireForm.value.commentaire,this.userId).subscribe(
      (response)=>{
        console.log(response)
        this.boutonClique.emit();
        this.commentaireForm.reset();
      },(error)=>{
        console.log(error)
      }
    )
    
  }

  

}
