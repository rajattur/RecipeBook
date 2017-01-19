import { browser, element, by } from 'protractor';

export class BookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bk-root h1')).getText();
  }
}
