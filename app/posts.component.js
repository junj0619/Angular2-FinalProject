System.register(['angular2/core', './spinner.component', './posts.service', './pagination.component', './users.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, spinner_component_1, posts_service_1, pagination_component_1, users_service_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.posts = [];
                    this.postComments = [];
                    this.users = [];
                    this.pageSize = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUser();
                    this.loadPost();
                };
                PostsComponent.prototype.loadPost = function (filter) {
                    var _this = this;
                    this.postLoading = true;
                    this._postsService.loadPost(filter).subscribe(function (response) { _this.posts = response; }, null, function () { return _this.postLoading = false; });
                };
                PostsComponent.prototype.loadUser = function () {
                    var _this = this;
                    this._usersService.GetUsers().subscribe(function (response) { return _this.users = response; });
                };
                PostsComponent.prototype.select = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this.commentsLoading = true;
                    this._postsService.getPostCommon(post.userId)
                        .subscribe(function (response) {
                        _this.postComments = response;
                        // console.log(response);
                    }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    this.currentPost = null;
                    this.loadPost(filter);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'post',
                        templateUrl: 'app/posts.component.html',
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map