import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentDto } from '../../models/comment-dto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8222/api/v1/comments';
 

  constructor(private http: HttpClient) { }

  // Méthode pour enregistrer un commentaire pour un article spécifique
  saveComment(postId: number, comment: string, userId: number): Observable<CommentDto> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    });
    return this.http.post<CommentDto>(`${this.baseUrl}/post/${postId}`, {userId ,commentText:comment}, { headers });
  }

  // Méthode pour récupérer tous les commentaires pour un article spécifique
  getCommentsByPostId(postId: number): Observable<CommentDto[]> {
    return this.http.get<CommentDto[]>(`${this.baseUrl}/post/${postId}`);
  }

  // Méthode pour supprimer un commentaire par son ID
  deleteComment(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    });
    return this.http.delete(`${this.baseUrl}/${id}`,{ headers });
  }

  // Méthode pour récupérer tous les commentaires
  getAllComments(): Observable<CommentDto[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    });
    return this.http.get<CommentDto[]>(this.baseUrl, { headers });
  }
  // Méthode pour récupérer un commentaire par son ID
  getCommentById(id: number): Observable<CommentDto> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    });
    return this.http.get<CommentDto>(`${this.baseUrl}/${id}`, { headers });
  }

  // Méthode pour mettre à jour un commentaire
  updateComment(id: number, commentDto: CommentDto): Observable<CommentDto> {
    return this.http.put<CommentDto>(`${this.baseUrl}/${id}`, commentDto);
  }
}
