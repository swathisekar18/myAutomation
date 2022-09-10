module.exports = function () {

    this.Given(/^I am on the "([^"]*)" page$/, function (objectKey){
        const url = page.mmtObjects.siteUrls[objectKey];
        return helpers.loadPage(url);

    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey){
        return page.mmtObjects.elementExistsByXpath(objectKey);
    });

}