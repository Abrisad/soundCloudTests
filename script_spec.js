"use strict";


describe(`Home page`, function (){
    
    
    it('should have correct title', function () {
        browser.get('https://soundcloud-ngrx.herokuapp.com/');

        expect(browser.getTitle()).toBe('SoundCloud • Angular2 NgRx', 
                  'Expecting title to be correct');

        //let title = element(by.css('.content-header__title'));
        // equals
        let title = $('.content-header__title');

        expect(title.getText()).toBe('Featured Tracks',
         'Title on home page should be for Featured tracks');

        //let link = element.all(by.css('.track-card__username')).first();
        //const firstSong = $$('.track-card__username').first();
        const firstSong = $$('.track-card__username').first();
        let firstSongText = firstSong.getText();
        firstSong.click();

        const card_title = $('.user-card__title').getText();


        expect(firstSongText).toBe(card_title);

        firstSong.$('.nextelement').takeScreenshot();
        
    });

});