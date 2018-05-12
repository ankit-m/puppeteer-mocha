/**
 * This file contains tests for the form in index.html
 */

describe('/ > form section', function () {
  describe('ui', function () {
    let page;

    before(async function () {
      page = await browser.newPage();

      await page.goto('http://localhost:8080');
    });

    after(async function () {
      await page.close();
    });

    it('should have a heading', async function () {
      const HEADER_SELECTOR = 'section#form-section h4';
      const title = await page.$eval(HEADER_SELECTOR, e => e.innerText);

      expect(title).to.equal('Form Section');
    });

    it('should have a form', async function () {
      const FORM_SELECTOR = 'section#form-section form';

      expect(await page.$(FORM_SELECTOR)).to.exist;
    });

    it('should have an email field', async function () {
      const EMAIL_SELECTOR = 'section#form-section form input#user-email';
      const EMAIL_LABEL_SELECTOR = 'section#form-section form label[for="user-email"]';
      const label = await page.$eval(EMAIL_LABEL_SELECTOR, e => e.innerText);

      expect(await page.$(EMAIL_SELECTOR)).to.exist;
      expect(label).to.equal('Email address');
    });

    it('should have a password field', async function () {
      const PASSWORD_SELECTOR = 'section#form-section form input#user-password';
      const PASSWORD_LABEL_SELECTOR = 'section#form-section form label[for="user-password"]';
      const label = await page.$eval(PASSWORD_LABEL_SELECTOR, e => e.innerText);

      expect(await page.$(PASSWORD_SELECTOR)).to.exist;
      expect(label).to.equal('Password');
    });

    it('should have a select field', async function () {
      const SELECT_SELECTOR = 'section#form-section form select#user-select';
      const SELECT_LABEL_SELECTOR = 'section#form-section form label[for="user-select"]'
      const label = await page.$eval(SELECT_LABEL_SELECTOR, e => e.innerText);

      expect(await page.$(SELECT_SELECTOR)).to.exist;
      expect(label).to.equal('Example select');
    });

    // test for button
    // test for checkbox
  });
});