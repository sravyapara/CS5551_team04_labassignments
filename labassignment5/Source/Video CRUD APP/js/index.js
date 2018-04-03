var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $scope.trans = function () {
        // get text from input text box
        var a = document.getElementById("a").value;
        // get text from language selected option
        var l = "fr";
        var b;
        //using youtube api
        $http.get("https://www.googleapis.com/youtube/v3/search?" +
            "key=AIzaSyA9spYNxTzOfOXSJLnUO4m9iXllxAwmDfs&videoEmbeddable=any" +
            "&q=" + a + "&type=video&part=snippet&maxResults=3")
            .then(function (response) {
                var comId = response.data.items[0].id.videoId;
                var comId1 = response.data.items[1].id.videoId;
                $scope.labelText = "Translation:";
                $scope.labelImage = "Video1:";
                $scope.Des1 = "Description:";
                $scope.Date1 = "Date:";
                $scope.displayImage = response.data.items[0].snippet.thumbnails.medium.url;
                $scope.title = response.data.items[0].snippet.title;
                $scope.publishedAt = response.data.items[0].snippet.publishedAt;
                $scope.description = response.data.items[0].snippet.description;
                var lin = "https://www.youtube.com/embed/";
                b = lin + comId;
                $scope.displayTitle = b;
            });
    }