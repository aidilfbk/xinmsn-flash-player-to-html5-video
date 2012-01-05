(function(window, undefined){
	if(!window.location.host.match('video.xin.msn.com')) return;
	
	var original_vxpPreWait = window.vxpPreWait,
	scriptCode = document.querySelector('.vxp_richEmbedContainer + script').innerText;
	
	window.vxpPreWait = function(fn){
		var obj = {
			'embedMsnPlayer': function(id, obj, html){
				if(obj.h264Available){
					var mp4files = obj.videoData.videoFiles.filter(function(item, index, array){
						return (item.url.search('.mp4') !== -1);
					}),
					mp4files = mp4files.sort(function(a, b){return (b.bitrate - a.bitrate)});

					document.getElementById(id).innerHTML = '<video src="'+mp4files[0]['url']+'" controls style="height:100%; width:100%;" />';
				};
			},
		};
		return fn.call(window, obj);
	};
	
	var script = document.createElement('script');
	script.innerText = scriptCode;
	document.body.appendChild(script);
})(window);