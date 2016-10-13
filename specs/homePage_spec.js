"use strict";

describe(`Home page:`, function (){

    it('clicking play for track, should make player visible', function () {

        expect($('player.open').isPresent())
            .toBeFalsy('Player should NOT be visible before clicking play button');

        let trackCard = $$('track-card').get(2);
        trackCard.$('.btn--play').click();
        browser.sleep(2000);

        expect($('player.open').isDisplayed())
            .toBeTruthy('Player should became visible after clicking play button');
    });
});