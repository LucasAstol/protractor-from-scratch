class homepage {
    constructor() {

        let firstNumber = element(by.model('first'));
        let secondNumber = element(by.model('second'));
        let goButton = element(by.css('[ng-click="doAddition()"]'));
        let myResult = element(by.css('h2.ng-binding'));

        this.enterFirstNumber = function (firstNo) {

            firstNumber.sendKeys(firstNo);
        };

        this.enterSecondNumber = function (secondNo) {

            secondNumber.sendKeys(secondNo);
        };

        this.makeCalculation = function () {

            goButton.click();
        };

        this.verifyResult = function (expectedValue) {

            expect(myResult.getText()).toEqual(expectedValue);
        };
    }
}

module.exports = new homepage();