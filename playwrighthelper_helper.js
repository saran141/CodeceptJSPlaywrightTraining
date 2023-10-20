const Helper = require('@codeceptjs/helper');

class PlaywrightHelper extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async getURL(){
    const { page } = this.helpers.Playwright;
    return await page.url(); 
  }
}

module.exports = PlaywrightHelper;
