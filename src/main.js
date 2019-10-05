

function enableProxy(pacUrl) {
	var config = {
		mode: "pac_script",
		pacScript: {
			url: pacUrl,
			mandatory: true
		}
	};

	chrome.proxy.settings.set(
		{value: config, scope: 'regular'},
		function () {
	});

	console.log("Enabled");
}

function disableProxy() {
	var config = {
		mode: "system"
	};

	chrome.proxy.settings.set(
		{value: config, scope: 'regular'},
		function () {
	});

	console.log("Disabled");
}

var pacUrl = "http://localhost/nordvpn.pac";
enableProxy(pacUrl);
//disableProxy();
