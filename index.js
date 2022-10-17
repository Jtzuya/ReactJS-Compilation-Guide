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

////////////////////////////////////////////////////////////////////////////////////////////////
// const page = (
// 	<div>
// 		<h1 className="header">This is JSX</h1>
// 		<p>This is a p tag line</p>
// 	</div>
// )

/**
 * Challenge 2: - Create a navbar in JSX
 * 
 * ~ Use the semantic 'nav' element as the parent wrapper
 * ~ Have h1 element with the brand name of your 'website'
 * ~ Insert an unordered list for the other nav elements
 * 		- Inside the 'ul', have 3 'li' elements for 'Pricing', 'About', and 'Contact'
 * Note: Do not worry about the styling yet, because I'd like to see plain HTML
 */

/**
 * Challenge 2 Answer
 *	const navbar = (
 *		<nav>
 *			<h1 className="text-8xl">Jtzuya</h1>
 *			<ul>
 *				<li>Pricing</li>
 *				<li>About</li>
 *				<li>Contact</li>
 *			</ul>
 *		</nav>
 *	)
 *	ReactDOM.render(navbar, document.getElementById('root'))
 */