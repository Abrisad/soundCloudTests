"use strict";


describe(`Home page 2`, function (){

    it('test 3', function () {
        const firstSong = $$('.track-card__username').first();
        let firstSongText = firstSong.getText();
        firstSong.click();

        const card_title = $('.user-card__title').getText();

        expect(firstSongText).toBe(card_title);
    });

    it('should have correct title', function () {
        expect(browser.getTitle()).toBe('SoundCloud • Angular2 NgRx', 
                  'Expecting title to be correct');

        let title = $('.content-header__title');

        expect(title.getText()).toBe('Featured Tracks',
         'Title on home page should be for Featured tracks');        
    });


    it('test 2', function () {
        const firstSong = $$('.track-card__username').first();
        let firstSongText = firstSong.getText();
        firstSong.click();

        const card_title = $('.user-card__title').getText();

        expect(firstSongText).toBe(card_title);
    })

});