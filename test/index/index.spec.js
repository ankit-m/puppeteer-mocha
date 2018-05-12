/**
 * This contains tests for the high level structure of
 * the page. The details of each components are tested seperately.
 */
 
describe('/', function () {
  describe('ui', function () {
    let page;

    before(async function () {
      page = await browser.newPage();

      await page.goto('http://localhost:8080');
    });

    after(async function () {
      await page.close();
    });

    it('should have the correct page title', async function () {
      expect(await page.title()).to.equal('Puppeteer Mocha');    
    });

    it('should have a navbar', async function () {
      const NAVBAR_SELECTOR = 'nav.navbar';

      expect(await page.$(NAVBAR_SELECTOR)).to.exist;
    });

    it('should have a form section', async function () {
      const FORM_SECTION = 'section#form-section';

      expect(await page.$(FORM_SECTION)).to.exist;
    });

    it('should have a jumbotron section', async function () {
      const JUMBOTRON_SECTION = 'section.jumbotron';

      expect(await page.$(JUMBOTRON_SECTION)).to.exist;
    });

    it('should have a list section', async function () {
      const LIST_SECTION = 'section#list-section';

      expect(await page.$(LIST_SECTION)).to.exist;
    });
  })
});
