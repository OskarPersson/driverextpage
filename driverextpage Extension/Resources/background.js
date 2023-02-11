browser.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    sendResponse(browser.runtime.getURL("popup.html"));
});
