// orignal unminified bookmarklet from README.md
(function(window, document){
	if(!window.location.host.match('video.xin.msn.com')) return;
	var script = document.createElement('script');
	script.src = 'https://github.com/aidilfbk/xinmsn-flash-player-to-html5-video/raw/master/script.js';
	try{
		document.body.appendChild(script);
	} catch(e){
		document.getElementsByTagName('body')[0].appendChild(script);
	};
})(window, document)