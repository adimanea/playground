// hide all elements (divs) which contain "math" in their class
const mathPars = document.querySelectorAll("[class*='math']"); // returns a list
mathPars.forEach(node => {node.style.display = "none"} ); // iterate through the list and hide them