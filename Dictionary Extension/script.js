var backgroundData = chrome.extension.getBackgroundPage();  
var word = backgroundData.getmsg;

var div = document.getElementById("word");
var p = document.createElement("p");
p.textContent = `${word} :`;
div.appendChild(p);

fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=82bce7f9-7ac1-46eb-b908-03d9f7783582`)
.then(function(response){
    return response.json();
}).then(function(res){

    function filt(arr){
        
            console.log(arr);
            var div = document.getElementById("div");
            var p = document.createElement("p");
            p.textContent = arr;

            div.appendChild(p)
            console.log(res);
        
        
    }
    res[0].shortdef.filter(filt);
    
})