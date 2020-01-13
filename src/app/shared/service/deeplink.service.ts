import { Injectable } from "@angular/core";

@Injectable()
export class DeeplinkService {
  constructor() {}

  deeplink() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    var isIphone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
    if (isIphone == true) {
      var app = {
        launchApp: function() {
          setTimeout(function() {
            window.location.href =
              "https://itunes.apple.com/us/app/HeyNetwork/id1475451212";
          }, 25);
          window.location.href = "heynetworkapp://heynetwork.com";
        },
        openWebApp: function() {
          window.location.href =
            "https://itunes.apple.com/us/app/HeyNetwork/id1475451212"; 
        }
      };
      app.launchApp();
    } else if (isAndroid == true) {
      var app = {
        launchApp: function() {
          window.location.replace("heynetworkapp://heynetwork.com");
          setTimeout(this.openWebApp, 500);
        },
        openWebApp: function() {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.app.heynetwork";
        }
      };
      app.launchApp();
    } else {
      window.location.href = "https://heynetwork.com";
    }
  }

  // deeplink() {

  //   var ua = navigator.userAgent.toLowerCase();
  //   var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  //   var isIphone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
  //   if (isIphone == true) {

  //     var app = {
  //       launchApp: function () {

  //         window.location.replace("eekhoeapp://admin.eekhoe.com");
  //         this.timer = setTimeout(this.openWebApp, 1000);
  //       },
  //       openWebApp: function () {
  //         window.location.href = 'https://admin.eekhoe.com/';
  //       }
  //     };
  //     app.launchApp();
  //   } else if (isAndroid == true) {

  //     var app = {
  //       launchApp: function () {

  //         window.location.replace("eekhoeapp://admin.eekhoe.com");
  //         this.timer = setTimeout(this.openWebApp, 1000);
  //       },
  //       openWebApp: function () {

  //         window.location.href = 'https://admin.eekhoe.com/';
  //       }
  //     };
  //     app.launchApp();
  //   }
  //   else {
  //     window.location.href = 'https://admin.eekhoe.com';
  //   }
  // }
}
