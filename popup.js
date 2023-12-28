

chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
    if (!tab.url.includes("douban")) {
        document.getElementById("hint").innerText = "Not in douban page!";
        document.getElementById("button").style.display = "inline";
    }
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: execute,
    });});

function execute() {
    function changeHeight(height) {
        const comment = document.getElementById("comment");
        if (comment == null) {
            return false;
        }
        document.getElementById("comment").style.height = "300px";
        console.log("Douban comment area height changed to 300px!");
        return true;
    }

    if (!changeHeight(300)) {
        console.log("Not in douban page!  ");
        return;
    }
};