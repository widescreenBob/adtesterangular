'use strict';


// Declare app level module which depends on filters, and services
//var app = angular.module('ShuffleModule', []);
var app = angular.module('AdModule', []);




app.controller('AdController', function($scope, $http) {


 $scope.getRandomSpan = function() {
    return Math.floor((Math.random() * 99999) + 1);
 }
 
 $scope.randomNumberForAds = $scope.getRandomSpan(); //for Correlator/cache-busting parameter
 $scope.adurl = "";
 $scope.adImageSrc = "";
 
 $scope.openAd = function() {
    if ($scope.adurl) {
       window.open($scope.adurl, "_system"); //using inAppbrowser plugin
    }
 }
 
//ng-hide ad section in the footer if offline
$scope.isOffline = 'onLine' in navigator && !navigator.onLine;
if (!$scope.isOffline) {
   $http({
     method: 'GET',
     url: "http://pubads.g.doubleclick.net/gampad/adx?iu=/299043/adunit&sz=300x250&c=" + $scope.randomNumberForAds
    //url: "http://pubads.g.doubleclick.net/gampad/adx?iu=/12345/adunit&sz=320x50&c=" + $scope.randomNumberForAds
   }).success(function(data, status, headers, config) {
    console.log("here");
      var doc = document.createElement("html");
      doc.innerHTML = data;
      //links
      var links = doc.getElementsByTagName("a")
      var urls = [];
      for (var i = 0; i < links.length; i++) {
         urls.push(links[i].getAttribute("href"));
      }
      $scope.adurl = urls[0];
      console.log(urls);
      //images
      var imgs = doc.getElementsByTagName("img");
      var imgSrcs = [];
      for (var i = 0; i < imgs.length; i++) {
         imgSrcs.push(imgs[i].src);
      }
      $scope.adImageSrc = imgSrcs[0];
 
   }).error(function(data, status, headers, config) {
    $scope.isOffline = true;
    console.log("I Failed");
   });
}

});

