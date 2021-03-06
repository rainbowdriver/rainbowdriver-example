/*globals console */
var webdriver = require('wd'),
    assert = require('assert');

var browser = webdriver.remote("localhost", 8080);

browser.on('status', function (info) {
    console.log('\x1b[36m%s\x1b[0m', info);
});

browser.on('command', function (meth, path) {
    console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

browser.init({
    browserName: 'firefox',
    tags : ["examples"],
    name: "This is an example test"
}, function () {
    browser.elementByCssSelector('.win-item', function (err, el) {
        if (err) {
            console.log(err);
            browser.quit();
            return;
        }
        el.click(function () {
            browser.elementByCssSelector(".pagetitle", function (err, e2) {
                if (err) {
                    console.log(err);
                    browser.quit();
                    return;
                }
                e2.textPresent("Group Title: 1", function (err, present) {
                    assert.ok(present, "Not on the right page");
                    browser.elementByCssSelector('.win-backbutton', function (err, el) {
                        if (err) {
                            console.log(err);
                            browser.quit();
                            return;
                        }
                        el.click(function () {
                            browser.quit();
                        });
                    });
                });
            });
        });
    });
});