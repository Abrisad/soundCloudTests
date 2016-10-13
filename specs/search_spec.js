"use strict";

describe(`Searching: `, function (){
    it('simple search should be successful', function () {
        $('.btn--search-alt').click();
        browser.sleep(2000);

        let searchRequest = 'Test';
        $('input.search-form__input').sendKeys(searchRequest).submit();
        browser.sleep(5000); //Search might take some time

        expect($$('track-card').first().getText())
            .toMatch(searchRequest, 'First search result should contain what we searched.');
        
        expect($('content-header h1').getText())
            .toBe(searchRequest, 'Page title should contain search request');
    });
    
});