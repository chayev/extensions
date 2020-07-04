alert("Panel JS Initialized")

chrome.devtools.network.onRequestFinished.addListener(request => {
  if( request.request.url.includes("appsflyer")) {
    alert(JSON.stringify(request));
  }
  // request.getContent((body) => {
  //   alert(body);
  //     console.log('req',request.request)
  //   if (request.request && request.request.url) {
  //     if (request.request.url.includes('<url-to-intercept>')) {
  //       chrome.runtime.sendMessage({
  //           response: body
  //       });
  //     }
  //   }
  // });
});


