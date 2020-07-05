alert("Creating Panel")
chrome.devtools.panels.create("MyPanel", null, 'panel.html');

// alert("Initializing Listener")
// chrome.devtools.network.onRequestFinished.addListener(request => {
//     if( request.request.url.includes("appsflyer")) {

//       chrome.devtools.network.getHAR((res) => {
//           alert("listener HAR view");
//           alert(JSON.stringify(res));
//       })

//       alert("request: " + JSON.stringify(request));
      
//       request.getContent( body => {
//           alert(body);
//           console.log(body);
//       });

//       // request.getContent((body) => {
//       //   if (request.request && request.request.url) {
//       //     if (request.request.url.includes('appsflyer')) {
//       //         // alert("This?")
//       //       chrome.runtime.sendMessage({
//       //           response: body
//       //       });
//       //     }
//       //   }
//       // });

//     }
// });