import {Component, OnInit} from '@angular/core';

import {PostsService} from './posts.service';
import {UsersService} from '../users/users.service';

import {Post} from './post';

import * as _ from 'underscore'; 

@Component({
    selector: 'post',
    templateUrl: 'app/posts/posts.component.html'
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
                this.pagedPosts = _.take(this.posts, this.pageSize);
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
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }
}