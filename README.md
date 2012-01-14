xinmsn video to &lt;video /&gt;
=============

A small javascript bookmarklet to replace [video.xin.msn.com](http://video.xin.msn.com)'s Flash Player with the HTML5 &lt;video /&gt; tag. Useful with devices that do not support Flash (i.e. iOS) or those who would rather defer video playback to the OS.

Installation
---
Add a bookmark of this page and modify the bookmark's location/address to the line of code below. You'll only have to do this once and it'll always be up to date. If you're using an iOS device, follow the [step-by-step guide](https://github.com/aidilfbk/xinmsn-flash-player-to-html5-video/wiki/iOS-Installation-Usage) to installing and using this project.

	javascript:(function(c,a){if(c.location.host.match("video.xin.msn.com")){var b=a.createElement("script");b.src="https://github.com/aidilfbk/xinmsn-flash-player-to-html5-video/raw/master/script.js";try{a.body.appendChild(b)}catch(d){a.getElementsByTagName("body")[0].appendChild(b)}}})(window,document);

Usage
---
Load a video page (maybe an episode of some show from [Catch-up TV](http://video.xin.msn.com/browse/catch-up-tv)) on [video.xin.msn.com](http://video.xin.msn.com) then activate the saved bookmark after the page has completely loaded.