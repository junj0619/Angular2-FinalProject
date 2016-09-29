import {Component, OnInit} from 'angular2/core';

import {SpinnerComponent} from './spinner.component';
import {PostsService} from './posts.service';
import {PaginationComponent} from './pagination.component';
import {UsersService} from './users.service';

import {Post} from './post';

@Component({
    selector: 'post',
    templateUrl: 'app/posts.component.html',
    directives: [SpinnerComponent, PaginationComponent],
    providers: [PostsService, UsersService]
})



export class PostsComponent implements OnInit {

    posts = [];
    postComments = [];
    currentPost;
    postLoading;
    commentsLoading;
    users = [];
    pageSize = 10;
    pagedPosts = [];

    constructor(private _postsService: PostsService, private _usersService: UsersService) {

    }

    ngOnInit() {
        this.loadUser();
        this.loadPost();
    }

    private loadPost(filter?) {
        this.postLoading = true;
        this._postsService.loadPost(filter).subscribe(
            response => {
                this.posts = response;
                this.pagedPosts = this.getPageInPost(1);
            },
            null,
            () => this.postLoading = false
        );
    }

    private loadUser() {
        this._usersService.GetUsers().subscribe(
            response => this.users = response
        );
    }

    select(post: Post) {
        this.currentPost = post;
        this.commentsLoading = true;
        this._postsService.getPostCommon(post.userId)
            .subscribe(response => {
                this.postComments = response
                // console.log(response);
            },
            null,
            () => this.commentsLoading = false);
    }

    reloadPosts(filter) {
        this.currentPost = null;
        this.loadPost(filter);
    }

    onPageChanged(page) {
        this.pagedPosts = this.getPageInPost(page);
    }

    private getPageInPost(page) {
        var result = [];
        for (let i = (page - 1) * this.pageSize; i < (page * this.pageSize); i++)
            result.push(this.posts[i]);
        //console.log(result);
        return result;
    }
}