describe('dom validation', function () {
  const routes = ['/', '/about'];
  const baseUrl = 'http://localhost:8080';

  routes.forEach(function (route) {
    describe(route, function () {
      let page;

      before(async function () {
        page = await browser.newPage();

        await page.goto(`${baseUrl}${route}`);
      });

      after(async function () {
        await page.close();
      });

      it('should have an h1, nav, body, main, and section tag', async function () {
        expect(await page.$('h1'), 'expected h1 tag to exist').to.exist;
        expect(await page.$('nav'), 'expected nav tag to exist').to.exist;
        expect(await page.$('body'), 'expected body tag to exist').to.exist;
        expect(await page.$('section'), 'expected section tag to exist').to.exist;
      });

      it('should not have any class name with an underscore', async function () {
        // find all elements with a class attribute
        const elementClasses = await page.$$eval('[class]', function (elems) {
          return elems.map(e => e.className);
        });;

        elementClasses.forEach(function (className) {
          expect(className).to.not.include('_');
        });
      });

      it('should not have a button without aria-label', async function () {
        const BUTTON_NOT_ARIA_SELECTOR = 'button:not([aria-label])';

        expect(await page.$$(BUTTON_NOT_ARIA_SELECTOR), 'expected to find 0 buttons without aria-label').to.have.lengthOf(0);
      });
    });
  })
});
