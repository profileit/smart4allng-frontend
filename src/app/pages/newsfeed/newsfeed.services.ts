import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/shared/interfaces/News';
import { mockedNewsList } from 'src/mocks/NewsMock';

@Injectable({
    providedIn:  'root'
})

export class newsFeedService {

    private mock = mockedNewsList;

    constructor(private http: HttpClient) { }

    getNews() : Observable<News[]> {
        return of(this.mock);
    }
}