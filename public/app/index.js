window.ENV = 'dev';


function _addScript(src, main) {
	var script = document.createElement('script');
	script.src = src + '?r=' + (new Date()).getUTCMilliseconds();
	script.async = false;

	if (main) {
		script.setAttribute('data-main', main);
	}

	document.getElementsByTagName('head')[0].appendChild(script);
}

if (window.ENV == 'dev') {
	_addScript('bower_components/requirejs/require.js', 'app/dev/bootstrap');
} else if (window.ENV == 'prod') {
	_addScript('bower_components/requirejs/require.js');
	_addScript('build/vendors.js');
	_addScript('build/app.js');
}