chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "copyHighlightLink",
      title: "Copy Highlight Link",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "copyHighlightLink" && info.selectionText) {
      const [prefix, suffix] = extractChunks(info.selectionText);
      const url = new URL(tab.url.split('#')[0]);
      url.hash = `:~:text=${encodeURIComponent(prefix)},${encodeURIComponent(suffix)}`;
  
      // Write to clipboard
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => navigator.clipboard.writeText(text),
        args: [url.toString()]
      });
    }
  });
  
  function extractChunks(text) {
    const words = text.trim().replace(/\s+/g, ' ').split(' ');
    if (words.length <= 6) return [words.join(' '), ''];
    return [
      words.slice(0, 3).join(' '),
      words.slice(-3).join(' ')
    ];
  }
  