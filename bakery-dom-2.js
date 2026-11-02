

// ===== BOM - Browser Object Model =====
// PURPOSE: The BOM handles the browser window and the communication with it. It is not a standard,
// so there are small differences between browsers. The DOM is one part of it:
// window is the whole browser window, and document (the page) is a member of window.
// These pop-ups appear when the page loads, one after another, and the program waits for the user each time

// --- window ---
// All global objects, functions and variables are members of window,
// so most commands can be typed without the word "window". These two lines do the same thing
window.document.querySelector('#greeting').innerText = 'Welcome to Kaneli & Korppu Bakery.';
document.querySelector('#greeting').innerText = 'Welcome to Kaneli & Korppu Bakery.';

// --- alert ---
// Opens a pop-up window with text and an OK button. The program is paused until the user presses OK
alert('Welcome to Kaneli & Korppu Bakery!');

// --- confirm ---
// Opens a pop-up window with text and two buttons: OK and Cancel.
// The answer is a boolean value: OK => true, Cancel => false
const wantsNews = confirm('Do you want to receive our bakery news?');
console.log(wantsNews);                      // print the answer to the console

if (wantsNews) {
  document.querySelector('#bomResult').innerText = 'Thank you, we will send you our news.';
} else {
  document.querySelector('#bomResult').innerText = 'No problem, no news for you.';
}

// --- prompt ---
// Opens a pop-up window with a title and a text field. The second parameter is optional:
// it appears automatically in the text field.
// The answer is a string. If the user presses Cancel, the value becomes null
const customerName = prompt('What is your name?', 'Matti');
console.log(customerName);                   // print the answer to the console

if (customerName) {                          // null and an empty string are both "false"
  document.querySelector('#greeting').innerText = 'Welcome, ' + customerName + '!';
}

// --- location ---
// location tells the address information of the document.
// It is usually used to redirect the browser to another address.
console.log(location.href);                  // the address of this page

// Remove the comment marks below to try the redirect. The browser leaves this page!
// location.href = 'http://metropolia.fi';


// ===== Logo pictures (variables) =====
// PURPOSE: This is not a DOM topic. The two pictures are made with SVG and stored in variables,
// so they can be used many times and the page works without any image files
const logoOld = "logo.jpg";
const logoNew = "bread.jpg";

// ===== 6. Change the value of an attribute =====
// PURPOSE: Show that an HTML attribute like src or alt can be changed from JavaScript,
// so the browser shows something different without reloading the page.
// There are two ways: use the attribute name as a property, or use setAttribute().
// Both give the same result. The lesson mentions setAttribute() for older browsers
const logo = document.getElementById('logo');
const logo2 = document.getElementById('logo2');

logo.src = logoOld;                          // the attribute name is used as a property
logo2.setAttribute('src', logoOld);          // the same with setAttribute()

logo.src = logoNew;                          // change to the new logo with the property
logo2.setAttribute('src', logoNew);          // change to the new logo with setAttribute()
logo.alt = 'New logo';                       // alt is also an attribute
logo2.setAttribute('alt', 'New logo');

// ===== 1. getElementById and getElementsByTagName =====
// PURPOSE: Learn to find one element, and then search only INSIDE it.
// The length property tells how many elements were found.
// The same result is done in three ways below (with a variable, chained, and with querySelectorAll()), so you can compare the styles

// select the element with the id "news" and save it as "news"
const news = document.getElementById('news');
// select all the p-elements INSIDE the news element
const newsParagraphs = news.getElementsByTagName('p');
// length tells how many elements were found
document.querySelector('#newsCount').innerText = newsParagraphs.length;

// the same can also be written without an intermediate variable
// (the commands are chained: first the element, then the p-elements inside it)
const newsParagraphs2 = document.getElementById('news').getElementsByTagName('p');
console.log(newsParagraphs2.length);

// or with a single command using the CSS selector (a space means "inside")
const newsParagraphs3 = document.querySelectorAll('#news p');
console.log(newsParagraphs3.length);

// ----- 1b. Key functions of the document interface -----
// The list from the lesson:
//   document.querySelector('#logo')     // retrieves a single element from a document using the css selector. In this case with a certain id
//   document.querySelectorAll('.button') // retrieves elements from a document using the css class selector.
//   document.getElementById('logo')     // retrieves an element with a specific id from the document
//   document.createElement('p')         // creates a new p-element, but it is not yet added to the document
//
//   // commands can also be aligned to the selected element:
//   element.getElementsByTagName("p")   // retrieves all p-elements from the selected element
//   element.appendChild(child)          // add child node to element
//   element.removeChild(child)          // removes the child node from the element
//
//   element.innerHTML                   // The HTML code contained in the element
//   element.innerText                   // The text contained in the element
//
// Below, every line of the list is used once in the bakery.
// PURPOSE: Try every key function from the lesson once, in the bakery.
// The first four start from document. The rest are aligned to a selected element.
// The elements used here are in the HTML section "Key functions" (#keyDemo and #keyInfo)

// document.querySelector: retrieves ONE element using a CSS selector (here: with a certain id)
const logoByQuery = document.querySelector('#logo');

// document.querySelectorAll: retrieves ALL elements that match the CSS selector (here: a class)
const allButtons = document.querySelectorAll('.button');

// document.getElementById: retrieves the element with a specific id
const logoById = document.getElementById('logo');
console.log(logoByQuery === logoById);       // true: both commands found the same element

// document.createElement: creates a new p-element, but it is NOT yet added to the document
const keyNew = document.createElement('p');
keyNew.innerText = 'This paragraph was created with createElement.';

// from here on the commands are aligned to a selected element
const keyDemo = document.getElementById('keyDemo');
const keyOld = document.getElementById('keyOld');

// element.getElementsByTagName: retrieves all the p-elements from the selected element
const pBefore = keyDemo.getElementsByTagName('p').length;

// element.appendChild: adds the new paragraph as a child of keyDemo.
// At this point the new HTML appears in the document
keyDemo.appendChild(keyNew);

// element.removeChild: removes the old paragraph from keyDemo
keyDemo.removeChild(keyOld);

// element.innerHTML: the HTML code contained in the element
console.log(keyDemo.innerHTML);
// element.innerText: the text contained in the element
console.log(keyDemo.innerText);

// show the results on the page
document.querySelector('#keyInfo').innerText =
  `querySelectorAll found ${allButtons.length} elements with the class button. ` +
  `keyDemo had ${pBefore} p-element before and ${keyDemo.getElementsByTagName('p').length} after appendChild and removeChild.`;

// ===== 2. Select the second item of the list =====
// PURPOSE: Selection commands return a list, and you pick one item from it with an index.
// The indexes start at zero, so 1 means the second <li>
const second = document.querySelectorAll('#menuList li')[1];
second.classList.add('sale');                // mark it with a class

// ===== 3. Go through all the <li> elements and make the text bold =====
// PURPOSE: Repeat an action for every element in a list with for...of (forEach is an alternative).
// Also shows innerHTML: the old HTML of the item is wrapped in new tags
const items = document.querySelectorAll('#menuList li');

// for...of takes one item at a time from the list
for (let item of items) {
  // the old HTML of the item is put inside <b> tags using a template string
  item.innerHTML = `<b>${item.innerHTML}</b>`;
}

// alternative syntax using forEach():
/*
items.forEach(function (item) {
  item.innerHTML = `<b>${item.innerHTML}</b>`;
});
*/

// ===== 4. All p-elements that have the class "bulletin" =====
// PURPOSE: Select by tag and class together. This is useful when the page has many paragraphs
// but you want only some of them.
// p.bulletin means: a p-element with the class bulletin
const bulletins = document.querySelectorAll('p.bulletin');
for (let bulletin of bulletins) {
  bulletin.classList.add('fresh');
}

// ===== 5. Change the content of an element =====
// PURPOSE: innerHTML replaces EVERYTHING inside an element, including other tags.
// Here the <span> with "Closed" is replaced by a new <span> with the opening hours
document.getElementById('hours').innerHTML = '<span class="open">Open today 8 to 16</span>';

// ===== 7. Adding HTML to a document =====
// PURPOSE: Compare two ways to add the same thing to the page.
// A) innerHTML: write the HTML as one string. It is short and easy to read.
// B) DOM functions: build the elements one by one. It is longer, but it shows how the tree is built:
//    the p is the parent, and the text and the image are its children.
//    The new HTML appears only at the last appendChild, when the element is attached to the document

// The address of the picture. It is saved in a variable so both ways below use the same one
const photoUrl = 'https://img.magnific.com/free-photo/close-up-view-delicious-cinnamon-rolls_23-2148779659.jpg';
const photoAlt = 'Close-up view of delicious cinnamon rolls';

// A) using innerHTML
const divA = document.querySelector('#specialA');
const html =                                  // backticks make a multiline string
  `<p>
     Today's special: cinnamon bun with cardamom.
     <img src="${photoUrl}" alt="${photoAlt}">
   </p>`;
divA.innerHTML = html;                        // the string becomes the HTML inside the div

// B) the same with DOM functions
const divB = document.querySelector('#specialB');

const img = document.createElement('img');    // create an img element
img.src = photoUrl;                           // set the src attribute
img.alt = photoAlt;                           // set the alt attribute

const text = document.createTextNode("Today's special: cinnamon bun with cardamom.");  // create a text node

const p = document.createElement('p');        // create a p element
p.appendChild(text);                          // add the text to the p element
p.appendChild(img);                           // add the image to the p element

divB.appendChild(p);                          // add the p to the div. At this point the new HTML appears in the document

// ===== 8. CSS handling =====
// PURPOSE: Compare two ways to change the appearance of an element.
// The style attribute replaces the WHOLE inline style.
// The class attribute lets you switch a ready-made look on or off (toggle) or swap it for another (replace).
// The looks are written in the CSS, and JavaScript only chooses the class name

// Method 1: the style attribute (inline). The old style text is replaced completely
document.querySelector('#styleSign').style = 'color: #888888; background-color: #eeeeee; padding: 3rem;';

// Method 2: the class attribute
// toggle: add the class if it is missing, remove it if it is there
document.querySelector('#toggleSign').classList.toggle('sale');
// replace: change one class to another
document.querySelector('#replaceSign').classList.replace('fresh', 'soldout');
