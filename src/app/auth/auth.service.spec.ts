import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Angulartics2, Angulartics2Module } from 'angulartics2';

describe('AuthService', () => {
    let service: AuthService;
    let http: HttpClient;
    let angulartics2: Angulartics2;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule, Angulartics2Module],
            providers: [
                AuthService,
                {
                    provide: Angulartics2,
                    useValue: {
                        eventTrack: {
                            next: () => { }
                        }
                    }
                }]
        });
    });

    beforeEach(() => {
        service = TestBed.get(AuthService);
        http = TestBed.get(HttpClient);
        angulartics2 = TestBed.get(Angulartics2);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('signinUser', () => {
        it('should do nothing if userName is undefined', () => {
            const httpGetSpy = spyOn(http, 'get').and.callFake(() => { });
            service.signinUser(undefined, '<<<testpass>>>');
            expect(httpGetSpy).not.toHaveBeenCalled();
        });

        it('should do nothing if userName is empty', () => {
            const httpGetSpy = spyOn(http, 'get').and.callFake(() => { });
            service.signinUser('', '<<<testpass>>>');
            expect(httpGetSpy).not.toHaveBeenCalled();
        });

        it('should do nothing if password is undefined', () => {
            const httpGetSpy = spyOn(http, 'get').and.callFake(() => { });
            service.signinUser('<<<testuser>>>', undefined);
            expect(httpGetSpy).not.toHaveBeenCalled();
        });

        it('should do nothing if password is empty', () => {
            const httpGetSpy = spyOn(http, 'get').and.callFake(() => { });
            service.signinUser('<<<testuser>>>', '');
            expect(httpGetSpy).not.toHaveBeenCalled();
        });

        it('should hit URL https://api.github.com/user with headers', (done) => {
            const httpGetSpy = spyOn(http, 'get').and.returnValue({
                map: (func: (any) => any) => {
                    expect(func('<<<testuserdata>>>')).toBe('<<<testuserdata>>>');
                }
            });
            const sessionStorageSpy = spyOn(sessionStorage, 'setItem').and.callFake(() => { });

            service.signinUser('<<<testuser>>>', '<<<testpass>>>');

            expect(httpGetSpy).toHaveBeenCalledWith('https://api.github.com/user',
                { headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa('<<<testuser>>>:<<<testpass>>>')) });

            setTimeout(() => {
                expect(sessionStorageSpy).toHaveBeenCalledWith('currentUser', '"<<<testuserdata>>>"');
                done();
            }, 0);
        });

    });

    describe('signinUserWithPersonalAuth', () => {
        it('should do nothing if token is undefined', () => {
            const httpGetSpy = spyOn(http, 'get').and.callFake(() => { });
            service.signinUserWithPersonalAuth(undefined);
            expect(httpGetSpy).not.toHaveBeenCalled();
        });

        it('should do nothing if token is empty', () => {
            const httpGetSpy = spyOn(http, 'get').and.callFake(() => { });
            service.signinUserWithPersonalAuth('');
            expect(httpGetSpy).not.toHaveBeenCalled();
        });

        it('should hit URL https://api.github.com/user with headers', (done) => {
            const httpGetSpy = spyOn(http, 'get').and.returnValue({
                map: (func: (any) => any) => {
                    expect(func('<<<testuserdata>>>')).toBe('<<<testuserdata>>>');
                }
            });
            const monitorSpy = spyOn(service, 'monitor').and.callFake(() => { });
            const sessionStorageSpy = spyOn(sessionStorage, 'setItem').and.callFake(() => { });

            service.signinUserWithPersonalAuth('<<<testtoken>>>');

            expect(httpGetSpy).toHaveBeenCalledWith('https://api.github.com/user',
                { headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa('<<<testtoken>>>')) });

            setTimeout(() => {
                expect(monitorSpy).toHaveBeenCalledWith('Authentication', 'URL', 'https://api.github.com/user');
                expect(sessionStorageSpy).toHaveBeenCalledWith('currentUser', '"<<<testuserdata>>>"');
                done();
            }, 0);
        });

    });

    describe('logout', () => {
        it('should call removeItem twice', () => {
            const removeItemSpy = spyOn(sessionStorage, 'removeItem').and.callFake(() => { });
            service.logout();
            expect(removeItemSpy).toHaveBeenCalledTimes(3);
            expect(removeItemSpy).toHaveBeenCalledWith('currentUser');
            expect(removeItemSpy).toHaveBeenCalledWith('selectedUserProfile');
            expect(removeItemSpy).toHaveBeenCalledWith('repoData');
        });
    });

    describe('monitor', () => {
        it('should call angulartics2.eventTrack.next with passed-in parameters', () => {
            const nextSpy = spyOn(angulartics2.eventTrack, 'next');
            service.monitor('<<<testaction>>>', '<<<testcategory>>>', '<<<testlabel>>>');
            expect(nextSpy).toHaveBeenCalledWith({
                action: '<<<testaction>>>',
                properties: {
                    category: '<<<testcategory>>>',
                    label: '<<<testlabel>>>',
                },
            });
        });

    });

});
