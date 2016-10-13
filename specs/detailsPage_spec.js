"use strict";

describe(`Artist details page:`, function (){

    it('clicking play for track, should make player visible', function () {

        expect($('player.open').isPresent())
            .toBeFalsy('Player should NOT be visible before clicking play button');

        let trackCard = $$('track-card').get(1);
        trackCard.$('a.track-card__username').click();
        browser.sleep(2000);

        expect($('player.open').isPresent())
            .toBeFalsy('Player should NOT be visible before clicking play button');
        
        let details_trackCard = $$('track-card').first();

        details_trackCard.$('.btn--play').click();
        browser.sleep(2000);

        expect($('player.open').isDisplayed())
            .toBeTruthy('Player should became visible after clicking play button');
    });
});