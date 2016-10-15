"use strict";
var Player = require('./fragments/Player');
var Track = require('./fragments/Track');


class BasePage {
    constructor() {
        this.player = new Player();
        this.trackCards = $$('track-card');

        this.searchButton = $('.btn--search-alt');
    }

    tracks(index) {
        return new Track(this.trackCards.get(index));
    }

    search(searchRequest) {
        this.searchButton.click();
        browser.sleep(2000);
        let searchInput = $('input.search-form__input')
        searchInput.sendKeys(searchRequest).submit();
        browser.sleep(5000); //Search might take some time
    }

    getHeaderTitle() {
        $('content-header h1').getText()
    }
}


module.exports = BasePage;