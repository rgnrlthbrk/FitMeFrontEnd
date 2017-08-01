import { browser, by, element } from 'protractor';
import { promise } from 'selenium-webdriver';

export class FitMeFrontEndPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
