import { browser, element, by } from 'protractor';

export class Ng2CalculatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.tagName('h1')).getText();
  }
}
