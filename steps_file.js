// in this file you can append custom step methods to 'I' object
const toolBar = require("./pages/toolBar");
module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of this.
    // It is recommended to place a general 'login' function here.
    async clickOnHomeTab() {
      // await this.moveCursorTo(toolBar.HomeTab.Common.Home_header);
      const Layoutbutton = await tryTo(() =>
        // this.waitForElement(toolBar.AdvancedTab.Display.Appearance, 10)
        this.waitForElement(toolBar.HomeTab.Style.navigationdropdown, 10)
      );
      //await this.click(toolBar.HomeTab.Common.Home_header);
      await this.say(`Home Layout Button ...${Layoutbutton}`);
      if (Layoutbutton === false) {
        await this.say("Layout button not there");
        //console.log("Layout button not there");
        await this.click(toolBar.HomeTab.Common.Home_header);
      }
    },

    //Select a cell
    async selectCell(element) {
      await this.waitForElement(element, 30);
      await this.click(element);
      await this.say(`Selected value on grid ${(await this.grabTextFrom(element)).toString()}`);
    },

    async clearSelection(element) {
      await this.click(element);
    },


    //Click ScalingDropDown
  async clickBorderDropDown() {
    await this.click(toolBar.HomeTab.Format.borderdropdown);
    await this.say('clicked on "BorderDropdown" button on toolbar');
  },

   //Verify Border
   async verifyBorder(element, bordertype, bordervalue) {
   
    const expectedvalue = `${bordertype}: ${bordervalue}`;
    const attrib = "style";
    let res = "";
    await this.wait(5);
    try {
      const propertyValue = await this.extractstyleattributevalue(element,bordertype);
      await this.assert(propertyValue, bordervalue);
      res = "pass";
    } catch (err) {
      res = "fail";
    }
    return res;
  },

  async extractstyleattributevalue(ele, attrib) {
    const attrtype = "style";   
    const propertyValue = await this.grabAttributeFrom(ele, attrtype);
    const styleattArray = propertyValue.split(";");
    let i = 0;
    let attribValue = "";
    for (i = 0; i < styleattArray.length; i++) {
      if (styleattArray[i].includes(attrib) > 0) {
        attribValue = styleattArray[i].replace(`${attrib}:`, "").trim();
        console.log(attribValue);
        break;
      }
    }
    return attribValue;
  },

  });
}
