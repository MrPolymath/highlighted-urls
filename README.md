# Highlighted URLs
Extremely easy chrome extension. Just select some text on a website, right click, and select "Copy Link to Highlight". This will copy a new url of the current website that automatically opens it with the text highlighted.

## 🚧 Limitations
While this extension makes it super easy to generate :~:text highlight links, there are a few important limitations to keep in mind:

### 🔗 Browser Support
- ✅ Fully supported in Chromium-based browsers (e.g., Chrome, Edge, Brave)
- ❌ Not supported in Firefox, Safari, or some mobile browsers

### 🧠 Exact Text Match Required
- The selected text must appear exactly on the page as-is
- Minor differences (extra spaces, newlines, punctuation changes) can break the highlight
- Dynamic content loaded after page load (e.g. via JavaScript) may not be matched reliably

### 🔍 First Match Only
If the selected text appears multiple times on the page, the browser will highlight only the first occurrence.

### 📏 Long Selections Are Trimmed
To keep links reliable, the extension uses only the first and last few words of your selection.

This mimics how Chrome generates shareable text fragments, but can occasionally fail if the resulting chunk is not unique enough.

### ❌ No Error Feedback
If the browser fails to find or highlight the text, the link will just open the page with no indication that something went wrong.

### 🪄 No Custom Styling
The browser controls the appearance of the highlight (usually yellow) and it cannot be customized.