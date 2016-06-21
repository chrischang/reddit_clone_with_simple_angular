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
      description: `Tokyo (東京 Tōkyō?, "Eastern Capital") (Japanese: [toːkjoː] ( listen), English /ˈtoʊki.oʊ/), officially Tokyo Metropolis (東京都 Tōkyō-to?),[4] is one of the 47 prefectures of Japan,[5] and is both the capital and largest city of Japan. The Greater Tokyo Area is the most populous metropolitan area in the world.[6] It is the seat of the Emperor of Japan and the Japanese government. Tokyo is in the Kantō region on the southeastern side of the main island Honshu and includes the Izu Islands and Ogasawara Islands.[7] Formerly known as Edo, it has been the de facto seat of government since 1603 when Shogun Tokugawa Ieyasu made the city his headquarters. It officially became the capital after Emperor Meiji moved his seat to the city from the old capital of Kyoto in 1868; at that time Edo was renamed Tokyo. Tokyo Metropolis was formed in 1943 from the merger of the former Tokyo Prefecture (東京府 Tōkyō-fu?) and the city of Tokyo (東京市 Tōkyō-shi?).`,
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
      description: `Taipei (/ˌtaɪˈpeɪ/), officially known as Taipei City (Chinese: 臺北市), is the capital city and a special municipality of the Republic of China, commonly known as Taiwan. Sitting at the northern tip of Taiwan, Taipei City is an enclave of the municipality of New Taipei City. It is about 25 km (16 mi) southwest of the northern port city Keelung. Most of the city is located on the Taipei Basin, an ancient lakebed bounded by the two relatively narrow valleys of the Keelung and Xindian rivers, which join to form the Tamsui River along the city's western border.[5] The city proper is home to an estimated population of 2,693,672 in 2009,[6] forming the core part of the Taipei–Keelung metropolitan area which includes the nearby cities of New Taipei and Keelung with a population of 6,900,273,[7] the 40th most-populous urban area in the world.`,
      date: "2016-05-25T20:34:25.970Z",
      votes: 6,
      newComment: false,
      showComment: false,
      comments: [
        {
          author: "Chris Chang",
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
      author: "Kyle M",
      image: "http://i.imgur.com/TONDq.gif",
      description: `Ain't Nobody Got Time for That is a viral YouTube video of Kimberly "Sweet Brown" Wilkins which originally aired on Oklahoma City NBC affiliate KFOR-TV, where she escaped a fire in an apartment complex.[1][2] It garnered Sweet Brown many appearances on television, including a visit to ABC's The View.[3][4][5] Brown also plays a cameo role in the Tyler Perry movie A Madea Christmas saying a part of her line from her television interview during an interview at the end of the movie.[citation needed] As of March 2016, the original video has 62 million views.`,
      date: "2016-05-25T19:55:38.073Z",
      votes: 20,
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
    var obj = $scope.posts.find(function (val) {
      return val.id === id;
    });
    obj.votes++
  }
  $scope.method.downVote = function (id) {
    var obj = $scope.posts.find(function (val) {
      return val.id === id;
    });
    obj.votes--
  }
  $scope.method.createPost = function () {
    $scope.state.createNewPost = !$scope.state.createNewPost;
  }

  $scope.method.showComment = function (id) {
    var obj = $scope.posts.find(function (val) {
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
    var obj = $scope.posts.find(function (val) {
      return val.id === id;
    });
    obj.newComment = !obj.newComment;
  }
  $scope.method.addComment = function (id) {
    var obj = $scope.posts.find(function (val) {
      return val.id === id;
    });
    var newComment = Object.assign({}, obj.comment, {date: new Date().toISOString()})
    obj.comments.push(newComment);
    obj.comment = {};
    obj.newComment = !obj.newComment;
  }
});

