// ==UserScript==
// @name         Add Rapid editor to OpenStreetMap
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Adds the Rapid editor as an option for editing OpenStreetMap
// @author       Andrew Welch
// @match        https://www.openstreetmap.org/**
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var coords = window.location.toString().match(/#map=(\d+)\/([^\/]+)\/(.+)/);
    var rapidUrl = "https://rapideditor.org/edit#map=" + coords[1] + "/" + coords[2] + "/" + coords[3];
    var primaryNavSection = document.getElementsByClassName('primary')[0];
    var primaryEditDropdown = primaryNavSection.getElementsByClassName('dropdown-menu')[0];
    var rapidButton = document.createElement("li");
    var rapidLink = document.createElement("a");
    rapidLink.setAttribute("href", rapidUrl);
    rapidLink.innerText = "Edit with Rapid";
    rapidLink.classList.add("geolink");
    rapidLink.classList.add("editlink");
    rapidLink.classList.add("dropdown-item");
    rapidButton.appendChild(rapidLink);
    primaryEditDropdown.appendChild(rapidButton);
})();
