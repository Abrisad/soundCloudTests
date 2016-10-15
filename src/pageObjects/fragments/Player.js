"use strict";

class Player {

    constructor() {
        this.playerElement = $('player');
    }
    /**
     * @returns true if player is visible, so this means as 'opened', otherwise - catch error and return false.
     */
    isOpened() {
        return this.playerElement.$('.player-controls').isDisplayed()
            .then(undefined, err => false); 
    }

}

module.exports = Player;