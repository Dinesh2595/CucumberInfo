$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Bigw.feature");
formatter.feature({
  "name": "User validate the Bigw functuinality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BigW"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User validate  create Account functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User click create account icon",
  "keyword": "When "
});
formatter.step({
  "name": "User fill \"\u003cfirst\u003e\" and \"\u003clast\u003e\" name and  required details",
  "keyword": "And "
});
formatter.step({
  "name": "User click create account",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first",
        "last"
      ]
    },
    {
      "cells": [
        "dinesh",
        "kumar"
      ]
    },
    {
      "cells": [
        "nandha",
        "kumar"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User go to bigw home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainClass.user_go_to_bigw_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User validate  create Account functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BigW"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User click create account icon",
  "keyword": "When "
});
formatter.match({
  "location": "MainClass.user_click_create_account_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill \"dinesh\" and \"kumar\" name and  required details",
  "keyword": "And "
});
formatter.match({
  "location": "MainClass.user_fill_and_name_and_required_details(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create account",
  "keyword": "Then "
});
formatter.match({
  "location": "MainClass.user_click_create_account()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (1160, 639)\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-Q1R03KU\u0027, ip: \u0027192.168.43.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49888}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d88aee59284dcd0089858acc9333f771\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat org.baseclass.Baseclass.click(Baseclass.java:67)\r\n\tat org.stepdefinition.MainClass.user_click_create_account(MainClass.java:107)\r\n\tat ✽.User click create account(file:src/test/resources/Bigw.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User go to bigw home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MainClass.user_go_to_bigw_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User validate  create Account functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BigW"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User click create account icon",
  "keyword": "When "
});
formatter.match({
  "location": "MainClass.user_click_create_account_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill \"nandha\" and \"kumar\" name and  required details",
  "keyword": "And "
});
formatter.match({
  "location": "MainClass.user_fill_and_name_and_required_details(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create account",
  "keyword": "Then "
});
formatter.match({
  "location": "MainClass.user_click_create_account()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (710, 919)\n  (Session info: chrome\u003d96.0.4664.45)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-Q1R03KU\u0027, ip: \u0027192.168.43.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.45, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50105}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7f5d77b9f7135d728e1338352e42f583\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat org.baseclass.Baseclass.click(Baseclass.java:67)\r\n\tat org.stepdefinition.MainClass.user_click_create_account(MainClass.java:106)\r\n\tat ✽.User click create account(file:src/test/resources/Bigw.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});