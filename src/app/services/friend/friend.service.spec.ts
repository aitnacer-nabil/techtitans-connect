import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FriendService } from './friend.service';

describe('FriendService', () => {
  let service: FriendService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FriendService]
    });
    service = TestBed.inject(FriendService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve friends', () => {
    const mockFriends = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'John Doe' }
    ];

    service.getFriends().subscribe(friends => {
      expect(friends).toEqual(mockFriends);
    });

    const req = httpMock.expectOne('http://localhost:8222/api/friend/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockFriends);
  });

  it('should retrieve a friend by ID', () => {
    const mockFriend = {
      // Add your mock friend object here
    };
    const friendId = 1;

    service.getFriendById(friendId).subscribe(friend => {
      expect(friend).toEqual(mockFriend);
    });

    const req = httpMock.expectOne(`http://localhost:8222/api/friend/${friendId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockFriend);
  });

 

  it('should delete a friend by ID', () => {
    const friendId = 1;

    service.deleteFriend(friendId).subscribe();

    const req = httpMock.expectOne(`http://localhost:8222/api/friend/${friendId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});