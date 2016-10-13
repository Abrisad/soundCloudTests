"use strict";

var Player = require('./fragments/Player');

class HomePage {

    constructor() {
        this.title = $('.content-header h1');
        this.trackCards = $$('track-card');

        this.player = new Player();
    }

    getTitleText() {
        return this.title.getText();
    }

    tracks(index) {
        return new Track(this.trackCards.get(index));
    }
    
}

class Track {
    constructor (trackElement) {
        this.trackElement = trackElement;

        this.playButton = this.trackElement.$('.btn--play');
    }

    play() {
        this.playButton.click();
        browser.sleep(3000);
    }

    openArtistDetails() {
        this.trackElement.$('a.track-card__username').click();
        browser.sleep(3000);
    }

}


module.exports = HomePage;