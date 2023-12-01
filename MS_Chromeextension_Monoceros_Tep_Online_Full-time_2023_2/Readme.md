# Milestone-5: Chrome Extension: 21st century bookmarker

## Learning Competencies

By the end of this milestone ensure that you

- How the browser works?
- How to build an extension
- Asynchronous javascript
  - Understand what synchronous and asynchronous code in Javascript means
  - Understand the Event loop in JavaScript and how code is executed in JavaScript
- Iterators and Generators
- OddsEnds: Functional Programming

## Problem Statement

When Chrome was first released, users praised its speed, but many said they couldn’t switch from Firefox because of the add-ons. Google fixed that in 2009, and the numbers show Chrome gaining users at a much more rapid pace than Firefox is now.  
Can you guess how many extensions are there in Chrome and add-ons in firefox now?

### What is Chrome extension ?

> According to Chrome, it is a small software program that customizes the browsing experience. They enable users to tailor Chrome functionality and behavior to individual needs or preferences. They are built on web technologies such as HTML, JavaScript, and CSS. Learn more [here](https://developer.chrome.com/extensions).

**Ever wondered How to create a chrome extension ?** Well, this week you are going to build a chrome extension that has the following features

- **Notes and Annotations**  
   Instead of making notes in external applications, attach notes to websites, and pieces of text in them. All without leaving the browser.
- **Power-Search your History**  
   Instead of bookmarking things, instantly find websites you’ve seen with anything you remember. Search for every word in the text and filter by time, domain, custom tags, bookmarks. Soon also if you shared/liked or cited it on social media.
- **Cite with precision**  
   Instead of copy-pasting a quote from the article and the url, highlight any piece of text and create a link you can share with anybody. Anyone opening the link will be brought straight to the text you are referring to.
- **Flexibly Organise**  
   Tag, bookmark and organise websites into lists.
- **User Privacy**  
   Approach allows us to leave user in full control of their data. By default, all is stored on your computer

## Guide
Watch this [quick start guide](https://drive.google.com/open?id=1dROTX0CMX5urmAXtnLZlz7FGJ9qCpa5a)

You can implement any API into your chrome extension. Examples include:

1. [Word Qui](https://rapidapi.com/twinword/api/word-quiz/pricing)z API → Displays a short word association quiz 
2. [Daily Quotes](https://rapidapi.com/martin.svoboda/api/quotes15/) API → gives you a random quote every day 
3. [Yahoo FInance](https://rapidapi.com/apidojo/api/yahoo-finance1/) API → Displays the data of the stocks of your choice when you open a new tab
4. [Football Score](https://rapidapi.com/api-sports/api/api-football/pricing) API → Displays the score of your football team when you open a new tab. 

## **Releases** 

1. Start with setting up your extension. Create a `manifest.json` file and add the following details to it
    1. add the name of your extension
    2. a short description
    3. version number
    4. add newtab.html to override chrome's new tab, since our extension will open up every time someone opens up a new tab. 
2. in the `background` property look for `scripts.` Here goes the JS file that will run in the background. 
3. [Explore this list](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/) of chrome extension permissions and add the permissions that you need according to the extentsion you choose to build in the `permissions` property. 
4. add the skeleton of your website to your `popup.html` file. This may include any image wrappers, buttons, inputs etc. 
5. Create an accompanying `popup.js` file that contains all the javascript logic for your extension popup. 
6. Now, load your extension into chrome and test it in chrome://extensions.
    1. go to chrome://extensions
    2. Click on **Load Unpackaged**  and select the folder of your extension. 
    3. switch developer mode ON
    4. Keep refreshing whenever you make a change to look at the results.
7. Create an accompanying `style.css` file → so that your extension doesn't look bland.  
8. Sign in to the API service of your choice and get your API key (you may need to wait a couple of minutes). It's used to identify your project, so don't share it with anyone else.
    
    **Making the API call** 
    
9. Now use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to call your API by using your API Key. Don't forget to use **[.catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)**  for handling error cases. 
10. use fetch to call the API and send that data as a response to the frontend. 
11. add a `.catch` condition to handle any errors you may get. 
12. [Follow these instructions](https://developer.chrome.com/docs/webstore/publish/) to publish your chrome extension to the chrome extensions marketplace
