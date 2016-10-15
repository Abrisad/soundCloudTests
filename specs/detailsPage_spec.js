"use strict";

let HomePage = require('../src/pageObjects/HomePage');
let DetailsPage = require('../src/pageObjects/DetailsPage');

describe(`Artist details page:`, function (){
    let homePage = new HomePage();
    let detailsPage = new DetailsPage();

    it('clicking play for track, should make player visible', function () {

        expect(homePage.player.isOpened())
            .toBeFalsy('Player should NOT be visible before clicking play button');

        homePage.tracks(1).openArtistDetails();

        expect(detailsPage.player.isOpened())
            .toBeFalsy('Player should NOT be visible before clicking play button');

        detailsPage.tracks(0).play();

        expect(detailsPage.player.isOpened())
            .toBeTruthy('Player should became visible after clicking play button');
    });
});