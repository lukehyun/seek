// ==UserScript==
// @name         seek
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.seek.com.au/job/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=seek.com.au
// @grant        none
// ==/UserScript==
for(x of document.getElementsByTagName('a')) if(x.href.endsWith('/apply')) x.click()

setInterval(function(){
    document.querySelector('[data-testid=continue-button]').click()
},3333)

setInterval(function(){
    document.querySelector('[id=newToWorkforce]').click()
    document.querySelector('[data-testid=continue-button]').click()
},3333)


setInterval(function(){
    document.querySelector('[data-testid=review-submit-application]').click()
},3333)
