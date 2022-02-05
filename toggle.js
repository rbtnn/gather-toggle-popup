
function toggle() {
	var es1 = document.getElementsByClassName('ActionBar-container');
	for (var i = 0; i < es1.length; i++)
	{
		es1[i].classList.toggle('__web-inspector-hide-shortcut__');
	}
	var es2 = document.getElementsByClassName('GameVideo-self-video-container');
	for (var i = 0; i < es2.length; i++)
	{
		es2[i].classList.toggle('__web-inspector-hide-shortcut__');
	}
	var es3 = document.getElementsByClassName('GameVideosContainer-videobar-container');
	for (var i = 0; i < es3.length; i++)
	{
		es3[i].classList.toggle('__web-inspector-hide-shortcut__');
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
