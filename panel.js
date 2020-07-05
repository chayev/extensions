alert("Panel JS Initialized")

var element = document.getElementById("data");
alert(element); //this returns null - need to figure out why

chrome.devtools.network.onRequestFinished.addListener(request => {
  if( request.request.url.includes("appsflyer")) {
    var output = JSON.stringify(request);
    alert(output);
    element.innerHTML += output;
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


