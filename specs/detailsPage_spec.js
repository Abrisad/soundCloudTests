"use strict";

let HomePage = require('../src/pageObjects/HomePage');
let DetailsPage = require('../src/pageObjects/DetailsPage');

describe(`Artist details page:`, function (){
    let homePage = new HomePage();
    let detailsPage = new DetailsPage();

    it('clicking play for track, should make player visible', function () {

        expect(homePage.player.isOpened())
            .toBeFalsy('Player should NOT be visible before clicking play button');

        //IMPLEMENT
        let trackCard = $$('track-card').get(1);
        trackCard.$('a.track-card__username').click();
        browser.sleep(2000);

        expect(detailsPage.player.isOpened())
            .toBeFalsy('Player should NOT be visible before clicking play button');
        
        let details_trackCard = $$('track-card').first();

        details_trackCard.$('.btn--play').click();
        browser.sleep(10000);

        expect(detailsPage.player.isOpened())
            .toBeTruthy('Player should became visible after clicking play button');
    });
});