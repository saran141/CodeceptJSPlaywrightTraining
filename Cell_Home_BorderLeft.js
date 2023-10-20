
Feature('Formatting');
const url="https://inforiverwebtest-dev.azurewebsites.net/?csvLocation=https://sabareesh-r23.github.io/MatrixCsvAndConfig/Sanity.csv&config=https://sabareesh-r23.github.io/MatrixCsvAndConfig/Sanity.json&URLLoad=true";
const { cells } = require("./pages/matrixContent");
const toolBar = require("./pages/toolBar");

Scenario("Cell_Home_BorderLeft", async ({ I }) => {
    await I.amOnPage(url);
    //Border Left
    await I.clickOnHomeTab();
    await I.selectCell(cells.Table_Div_Row6_Column6);
    await I.clickBorderDropDown();
    await I.click(toolBar.HomeTab.Format.borderleft);
    await I.clearSelection(cells.Table_Div_Row6_Column6);
    
    const res1 = await I.verifyBorder(cells.Table_Div_Row6_Column6, "border-left", "1px solid rgb(176, 176, 176)");
    if (res1 === "fail") 
    await I.assert(true, false, "Value comparison failed");

    await I.selectCell(cells.Table_Div_Row6_Column6);
    await I.clickBorderDropDown();
    await I.click(toolBar.HomeTab.Format.borderdefaultline);
    await I.clearSelection(cells.Table_Div_Row6_Column6);
    
  })