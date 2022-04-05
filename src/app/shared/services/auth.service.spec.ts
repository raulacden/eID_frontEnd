import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { User } from '../user';

describe('AuthserviceService', () => {
  let authService: AuthService;
  let mockApiService : ApiService;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: RouterTestingModule, useValue: routerSpy},
        {provide: ApiService, useValue: mockApiService},
      ]
    });
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('not be able to login', () => {
    let formData = new FormData();
    formData.append('user', 'user');
    formData.append('password', 'password');
    (done: DoneFn) => {
      mockApiService.getUser().subscribe((data) => {
        authService.signIn(formData);       
        done();
      });
    }
    
    //expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  });

  xit('should be able to login', () => {
    let formData = new FormData();
    formData.append('user', 'erer');
    formData.append('password', 'erverF');
    authService.signIn(formData)
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/list']);
  });
});
