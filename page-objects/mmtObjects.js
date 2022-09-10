const {By} = require("selenium-webdriver");
const {assert} = require("chai");

module.exports = {
    siteUrls:{
        makeMyTripHome:'http://makemytrip.com'
    },

    elements:{
        makeMyTripLogo:'//*[@id="SW"]/div[1]/div[1]/a/picture/img'
    },

    elementExistsByXpath: async function(objectKey) {
        var selector = page.mmtObjects.elements[objectKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    },

}