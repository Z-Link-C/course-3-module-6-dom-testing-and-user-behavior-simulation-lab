// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
document.addEventListener('submit', (event) => {
    event.preventDefault()
    handleFormSubmit('dynamic-content',document.getElementById('user-input').value)
})
document.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.id === 'simulate-click') {
    simulateClick('dynamic-content', 'Button Clicked!')}
})
// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function addElementToDOM(parentId, content) {
  const parent = document.getElementById(parentId) 
  if (parent) {
    const newElement = document.createElement('div')
    newElement.textContent = content
    parent.appendChild(newElement)
  } else {
    console.error(`Parent element with id ${parentId} not found.`)
  }
}
function removeElementFromDOM(parentId) {
  const parent = document.getElementById(parentId)
    if (parent) {
        parent.remove()
    } else {
        console.error(`Element with id ${parentId} not found.`)
    }
}
function simulateClick(parentId, uInput) {
   const parent = document.getElementById(parentId)
    if (parent) {
        parent.textContent = uInput
    } else {
        console.error(`Element with id ${parentId} not found.`)
    }
}   
function handleFormSubmit(uInput,parentId) {
    const errorMessage = document.getElementById('error-message')
    //uinput is user input
    const userInput = uInput ? document.getElementById('user-input').value : ''
    if (userInput.trim() === '') {
        errorMessage.textContent = 'Input cannot be empty' 
        errorMessage.classList.remove('hidden')
        return
    }
    errorMessage.textContent = ''
    errorMessage.classList.add('hidden')
    const parent = document.getElementById(parentId)
    if (parent) {
        parent.textContent = userInput
        addElementToDOM(parentId, userInput)
    } else {
        console.error(`Element with id ${parentId} not found.`)
    }
    
    
}
// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
}   
