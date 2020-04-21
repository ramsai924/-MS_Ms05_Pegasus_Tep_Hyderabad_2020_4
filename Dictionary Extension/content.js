window.addEventListener("mouseup",function(){
    var getWord = window.getSelection().toString().trim();
    
    if(getWord.length > 0){
        chrome.runtime.sendMessage(getWord);
    }
})