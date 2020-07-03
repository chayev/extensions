chrome.devtools.panels.create("MyPanel", null, 'panel.html');

chrome.devtools.network.onRequestFinished.addListener(request => {
    if( request.request.url.includes("appsflyer")) {
      alert(JSON.stringify(request));
    }
});