let homepage = require('../pages/homepage')

describe('demo calculator tests', function(){

        it('addition test', function(){
            browser.get('https://juliemr.github.io/protractor-demo/');

            homepage.enterFirstNumber(3);
            homepage.enterSecondNumber(5);
            homepage.makeCalculation();
            homepage.verifyResult('8');

        })

})