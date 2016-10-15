"use strict";

var BasePage = require('./BasePage');

class HomePage extends BasePage {
    constructor() {
        /** 
         * IMPORTANT, please call in case inheritance!
         * If this will be not called - you will get an error - object fields will not be initialized.
        */
        super(); 
    }
}
//Exporting, so it will be available when importing this file.
module.exports = HomePage;