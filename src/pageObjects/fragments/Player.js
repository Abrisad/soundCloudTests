"use strict";

class Player {

    constructor() {
        this.playerElement = $('player');
    }

    isOpened() {
        return this.playerElement.$('.player-controls').isDisplayed()
            .then(undefined, err => false); 
    }

}

module.exports = Player;