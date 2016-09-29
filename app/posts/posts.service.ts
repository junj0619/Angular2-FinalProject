import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class PostsService {

    private _url = "https://jsonplaceholder.typicode.com/posts";
    // https://jsonplaceholder.typicode.com/posts/1/comments
    constructor(private _http: Http) {

    }

    loadPost(filter?) {
        var url = this._url;
        if (filter && filter.userId) url += "?userId=" + filter.userId;
        return this._http.get(url)
            .map(response => response.json());
    }

    getPostCommon(userId) {
        return this._http.get(this.getPostCommonUrl(userId))
            .map(response => response.json());
    }

    private getPostCommonUrl(userId) {
        return this._url + "/" + userId + "/comments";
    }

}