// ReactDOM.render(<h1>Some text</h1>, document.getElementById('root'))

/**
 * Challenge 1: - Recreate the above line of code in vanillajs by creating and appending 
 * an h1 to the div#root (without using innerHTML)
 * 
 * ~ Create a new h1 element
 * ~ Give it some textContent
 * ~ Give it a class name of "header"
 * ~ Append it as a child of the div#root
*/

/**
 * Challenge 1 Answer
 * const theRootId = document.getElementById('root');
 * const childHeading = document.createElement('h1');
 * childHeading.classList.add('header')
 * childHeading.textContent = 'Some text... Interesting!'
 * theRootId.appendChild(childHeading)
 */

