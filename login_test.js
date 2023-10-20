
Feature('login');

Scenario('test something',async  ({ I }) => {
    await I.amOnPage('http://todomvc.com/examples/react/');    
     // Get the url of the current page
    console.log(await I.getURL());
    pause();
});
