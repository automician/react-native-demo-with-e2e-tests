# React Native Demo App(s)

A demo project with React Native and End-to-End tests with SelenideJs + WebdriverIO based Appium implementation.

The project is developed as a bunch of demo applications showing different aspects of mobile elements to be automated with SelenideJs. You can think of it as a mobile version of https://the-internet.herokuapp.com/ ;)

## TODOs

* cover ios app in tests
* consider adding $ helper to globals,
  * should we use browser & drivers from globals explicitely too? ;) (not via shared...)
* click to switch apps, longPress to open dialog to select the app you want
* move src files to root src/ dir for cleaner structure
* improve selenidejs to be able
  * either
    * to use `import {lambda} from 'selenidejs'`
    * or use `import {lambda} from 'selenidejs/utils'`
    * instead `import {lambda} from 'selenidejs/built/utils'`
  * OR making Selenide namespace
    * with all Element, Collection, etc inside
    * and even available from global without import
    * or maybe do it not as part of selenidejs but selenidejs-globals package ;)
