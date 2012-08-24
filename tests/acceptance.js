var webdriver = require('wd'),
assert = require('assert');

var browser = webdriver.remote("localhost", 8080);

browser.on('status', function(info){
  console.log('\x1b[36m%s\x1b[0m', info);
});

browser.on('command', function(meth, path){
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

browser.init({
    browserName:'firefox',
    tags : ["examples"],
    name: "This is an example test"
}, function() {
    browser.elementByCssSelector('.win-item', function(err, el) {
        if(err) {
            console.log(err);
            return;
        }
        el.click(function() {

        });
    });
});