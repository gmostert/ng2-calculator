import { Ng2CalculatorPage } from './app.po';

describe('ng2-calculator App', function() {
  let page: Ng2CalculatorPage;

  beforeEach(() => {
    page = new Ng2CalculatorPage();
  });

  it('should display heading: Calculator', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Calculator');
  });
});
