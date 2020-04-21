var getmsg;
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
     getmsg = request;
});