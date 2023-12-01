document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('saveNote');
  
    saveButton.addEventListener('click', function() {
      const note = document.getElementById('note').value;
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        const url = activeTab.url;
        
        alert('Note attached and saved!');
        
    });
    

    });
  });
  