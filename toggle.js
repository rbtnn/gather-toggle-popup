
function toggle() {
	var es1 = document.getElementsByClassName('ActionBar-container');
	var es2 = document.getElementsByClassName('GameVideo-self-video-container');
	var es3 = document.getElementsByClassName('GameVideosContainer-videobar-container');
	var classname = '__web-inspector-hide-shortcut__';

	var exists = false;
	for (var i = 0; i < es1.length; i++) {
		exists = exists || es1[i].classList.contains(classname);
	}

	for (var i = 0; i < es1.length; i++) {
		if (exists) {
			es1[i].classList.remove(classname);
		}
		else {
			es1[i].classList.add(classname);
		}
	}
	for (var i = 0; i < es2.length; i++) {
		if (exists) {
			es2[i].classList.remove(classname);
		}
		else {
			es2[i].classList.add(classname);
		}
	}
	for (var i = 0; i < es3.length; i++) {
		if (exists) {
			es3[i].classList.remove(classname);
		}
		else {
			es3[i].classList.add(classname);
		}
	}
}

chrome.action.onClicked.addListener((tab) => {
	if (tab.url.includes('https://gather.town/app/')) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: toggle
		});
	}
});
