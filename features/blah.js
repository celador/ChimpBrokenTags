module.exports = function(){
    this.Given(/^I am on the Cucumber\.js GitHub repository$/, function () {
        console.log('Given');
        return true;
    });
    this.When(/^I go to the README file$/, function () {
        console.log('When');
        return true;
    });
    this.Then(/^I should see "([^"]*)" as the page title$/, function (arg1) {
        console.log('Then');
        return true;
    });
       
    this.Before({tags: ["@foo"]}, function (scenario) {
        console.log('HOOK');
        return true;
    });
}
