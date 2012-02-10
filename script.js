(function(window, undefined){
	if(!window.location.host.match('video.xin.msn.com')) return;
	
	var original_vxpPreWait = window.vxpPreWait,
	scriptCode = document.querySelector('.vxp_richEmbedContainer + script').innerText,
	mp4Regex = /(.mp4)$/,
	sourceHTML = function(url){
		return ['<source src="', url, '" type="video/mp4" />'].join('')
	},
	removeSilverlightOverlay = function(embedDiv){
		// gets rid of "We're sorry, but your browser does not support Silverlight" message overlay
		if(embedDiv.parentNode.style.display === 'none'){
			embedDiv.parentNode.style.display = '';
			document.getElementsByClassName('silverlightInstall')[0].parentNode.style.display = 'none'
			var stylesheet = document.createElement('style');
			stylesheet.innerText = '.dimBg{ display:none }';
			document.getElementsByTagName('body')[0].appendChild(stylesheet)
		}
	};
	
	window.vxpPreWait = function(fn){
		var obj = {
			'embedMsnPlayer': function(id, obj, html){
				if(obj.h264Available){
					var embedDiv = document.getElementById(id),
					mp4files = obj.videoData.videoFiles.filter(function(item){
						return mp4Regex.test(item.url);
					}),
					mp4files = mp4files.sort(function(a, b){return (b.bitrate - a.bitrate)}),
					html = ['<video controls style="height:100%; width:100%;">'];
					mp4files.forEach(function(element, index, array){
						this.push(sourceHTML(element.url))
					}, html);
					html.push('</video>')
					embedDiv.innerHTML = html.join('');
					
					removeSilverlightOverlay(embedDiv)
				};
			},
		};
		return fn.call(window, obj);
	};
	
	var script = document.createElement('script');
	script.innerText = scriptCode;
	document.body.appendChild(script);
})(window);