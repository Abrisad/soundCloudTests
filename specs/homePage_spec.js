"use strict";
let HomePage = require('../src/pageObjects/HomePage');

describe(`Home page:`, function (){
    let homePage = new HomePage();
    

    it('clicking play for track, should make player visible', function () {
        let player = homePage.player;

        expect(player.isOpened())
            .toBeFalsy('Player should NOT be visible before clicking play button');

        homePage.tracks(2).play();

        expect(player.isOpened())
            .toBeTruthy('Player should became visible after clicking play button');
    });
});