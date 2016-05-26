var app = angular.module('reddit', ['ngMessages', 'ngAnimate', 'angularMoment']);
app.controller('MainController', function($scope) {
  $scope.data = {};
  $scope.state = {};
  $scope.newPost = {};
  $scope.state.createNewPost = false;
  $scope.posts = [
    { 
      id: 0,
      title: "Outside Aspen, CO",
      author: "Chris Chang",
      image: "https://s-media-cache-ak0.pinimg.com/736x/01/47/70/014770be8e203cee4a6ed7cbe2019df9.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta.",
      date: "2016-05-25T20:34:25.970Z",
      votes: -3,
      newComment: false,
      showComment: false,
      comments: [
        {
          author: "Chris",
          text: "Hello",
          date: "2016-05-25T23:55:38.073Z"
        }
      ],
      comment: {}
    },
    { 
      id: 1,
      title: "San Francisco, CA",
      author: "Alex Chang",
      image: "http://www.sanfrancisco.travel/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta.",
      date: "2016-05-25T20:34:25.970Z",
      votes: 4,
      newComment: false,
      showComment: false,
      comments: [
        {
          author: "Chris",
          text: "Hello",
          date: "2016-05-25T23:55:38.073Z"
        }
      ],
      comment: {}
    },
    { 
      id: 2,
      title: "Tokyo, Japan",
      author: "Charlie Yang",
      image: "http://s1.it.atcdn.net/wp-content/uploads/2015/08/6-Tokyo.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta.",
      date: "2016-05-25T20:34:25.970Z",
      votes: 5,
      newComment: false,
      showComment: false,
      comments: [
        {
          author: "Chris",
          text: "Hello",
          date: "2016-05-25T23:55:38.073Z"
        }
      ],
      comment: {}
    },
    { 
      id: 3,
      title: "Taipei, Taiwan",
      author: "Katie Low",
      image: "http://www.taiwan.gov.tw/public/Data/5722104102.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta.",
      date: "2016-05-25T20:34:25.970Z",
      votes: 6,
      newComment: false,
      showComment: false,
      comments: [
        {
          author: "Chris",
          text: "Hello",
          date: "2016-04-24M20:34:25.970Z"
        }
      ],
      comment: {}
    },
    { 
      id: 4,
      title: "London, United Kingdom",
      author: "Andrew Nguyen",
      image: "http://www.swap.ca/img/destinations/uk/swap-uk-splash.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta.",
      date: "2016-05-25T04:34:25.970Z",
      votes: 0,
      newComment: false,
      showComment: false,
      comments: [],
      comment: {}
    },
    {
      id: 5,
      title: "Ain't Nobdoy Got Time for That",
      author: "Chris Chang",
      image: "http://i.imgur.com/TONDq.gif",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus fuga pariatur alias labore sapiente in voluptatibus inventore, assumenda animi veniam officiis illum eum sit vero nihil sequi atque soluta.",
      date: "2016-05-25T19:55:38.073Z",
      votes: 200,
      newComment: false,
      showComment: false,
      comments: [
        {
          author: "Chris",
          text: "Hello",
          date: "2016-05-25T23:55:38.073Z"
        },
        { 
          author: "Michelle",
          text: "Ain't nooooobodyy",
          date: "2016-05-25T23:55:38.073Z"
        },
        {
          author: "Jason",
          text: "Woohoooooo!!!",
          date: "2016-05-25T23:55:38.073Z"
        }
      ],
      comment: {}
    }
  ];
  $scope.method = {};
  $scope.method.upVote = function (id) {
    var obj = $scope.posts.find(val => {
      return val.id === id;
    });
    obj.votes++
  }
  $scope.method.downVote = function (id) {
    var obj = $scope.posts.find(val => {
      return val.id === id;
    });
    obj.votes--
  }
  $scope.method.createPost = function () {
    $scope.state.createNewPost = !$scope.state.createNewPost;
  }

  $scope.method.showComment = function (id) {
    var obj = $scope.posts.find(val => {
      return val.id === id;
    });
    obj.showComment = !obj.showComment;
  }

  $scope.method.onSubmit = function () {
    var obj = Object.assign({}, $scope.data, {id: $scope.posts.length, votes: 0, date: new Date().toISOString(), newComment: false, showComment: false, comments: [], comment: {}});
    $scope.posts.push(obj);
    $scope.data = {};
    $scope.newPost.$setUntouched();
    $scope.method.createPost();
  }
  $scope.method.newComment = function (id) {
    var obj = $scope.posts.find(val => {
      return val.id === id;
    });
    obj.newComment = !obj.newComment;
  }
  $scope.method.addComment = function (id) {
    var obj = $scope.posts.find(val => {
      return val.id === id;
    });
    var newComment = Object.assign({}, obj.comment, {date: new Date().toISOString()})
    obj.comments.push(newComment);
    obj.comment = {};
    obj.newComment = !obj.newComment;
  }
});

