import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentService } from './comment.service';
import { CommentDto } from '../../models/comment-dto.model';
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

describe('CommentService', () => {
 let service: CommentService;
 let httpMock: HttpTestingController;

 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService]
    });
    service = TestBed.inject(CommentService);
    httpMock = TestBed.inject(HttpTestingController);
 });

 afterEach(() => {
    httpMock.verify();
 });

 it('should be created', () => {
    expect(service).toBeTruthy();
 });

 it('should fetch comments by postId', () => {
    const dummyComments: CommentDto[] = [{ id: 1, commentText: 'Test comment', postId: 1, userId: 1,createdAt: new Date }];
    const postId = 1;

    service.getCommentsByPostId(postId).subscribe(comments => {
      expect(comments.length).toBe(1);
      expect(comments).toEqual(dummyComments);
    });

    const req = httpMock.expectOne(`http://localhost:8222/api/v1/comments/post/${postId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyComments);
 });

 //

  it('should save a comment', () => {
    // les paramètres de test
    const postId = 1;
    const userId = 'user123';
    const commentText = 'Test comment';

    service.saveComment(postId, commentText, userId).subscribe(comment => {
      // Vérifie si le commentaire retourné correspond aux attentes
      expect(comment).toBeDefined();
      expect(comment.id).toBeTruthy();
      expect(comment.postId).toBe(postId);
      expect(comment.userId).toBe(Number.parseFloat(userId));
      expect(comment.commentText).toBe(commentText);
    });

    // Intercepte la requête HTTP POST envoyée vers l'URL du service et vérifie la demande
    const request = httpMock.expectOne(`http://localhost:8222/api/v1/comments/post/${postId}`);
    expect(request.request.method).toBe('POST'); // Vérifie la méthode HTTP utilisée
    request.flush({ id: 1, postId, userId, commentText, createdAt: new Date() }); // Renvoie des données factices comme réponse
  });

 //
});
