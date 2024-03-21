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
    const mockFriends = [{ id: 1, name: 'Friend 1' }, { id: 2, name: 'Friend 2' }];

    service.getFriends().subscribe(friends => {
      expect(friends).toEqual(mockFriends);
    });

    const req = httpMock.expectOne('http://localhost:8222/api/friend/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockFriends);
  });

  it('should retrieve friend requests', () => {
    const mockFriendRequests = [{ id: 1, name: 'Friend Request 1' }, { id: 2, name: 'Friend Request 2' }];

    service.getFriendsRequest().subscribe(friendRequests => {
      expect(friendRequests).toEqual(mockFriendRequests);
    });

    const req = httpMock.expectOne('http://localhost:8222/api/friend/requests/received');
    expect(req.request.method).toBe('GET');
    req.flush(mockFriendRequests);
  });

  it('should send friend request', () => {
    const friendId = 1;

    service.sendFriendRequest(friendId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`http://localhost:8222/api/friend/requests/user/`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(friendId);
    req.flush({});
  });

  // Add more test cases for other methods...

});