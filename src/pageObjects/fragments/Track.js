"use strict";

class Track {
    constructor (trackElement) {
        this.trackElement = trackElement;

        this.playButton = this.trackElement.$('.btn--play');
    }

    getTrackInfo() {
        return this.trackElement.getText();
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

module.exports = Track;