import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentDto } from '../../models/comment-dto.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8222/api/v1/comments';

  constructor(private http: HttpClient) { }

  // Méthode pour enregistrer un commentaire pour un article spécifique
  saveComment(postId: number, comment: string, userId: number): Observable<CommentDto> {
    return this.http.post<CommentDto>(`${this.baseUrl}/post/${postId}`, comment, {
      headers: {
        'id': userId.toString()
      }
    });
  }

  // Méthode pour récupérer tous les commentaires pour un article spécifique
  getCommentsByPostId(postId: number): Observable<CommentDto[]> {
    return this.http.get<CommentDto[]>(`${this.baseUrl}/post/${postId}`);
  }

  // Méthode pour supprimer un commentaire par son ID
  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Méthode pour récupérer tous les commentaires
  getAllComments(): Observable<CommentDto[]> {
    return this.http.get<CommentDto[]>(this.baseUrl);
  }

  // Méthode pour récupérer un commentaire par son ID
  getCommentById(id: number): Observable<CommentDto> {
    return this.http.get<CommentDto>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour mettre à jour un commentaire
  updateComment(id: number, commentDto: CommentDto): Observable<CommentDto> {
    return this.http.put<CommentDto>(`${this.baseUrl}/${id}`, commentDto);
  }
}
