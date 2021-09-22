// hide all elements (divs) which contain "math" in their class
const mathPars = document.querySelectorAll("[class*='math']"); // returns a list
mathPars.forEach(node => {node.style.display = "none"} ); // iterate through the list and hide them

// dynamically create a checkbox inside the "checkboxes" div
// create the checkbox
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

// add labels and IDs
var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('text for label after checkbox'));

// add it to the "checkboxes" element (div)
document.getElementById("checkboxes").appendChild(checkbox);
document.getElementById("checkboxes").appendChild(label);

// TODO:
// - get all words in div classes
// - create checkboxes for them
// - make the checkboxes work as show/hide
// - create 2 additional CBs: "show all", "show TOC"
// - add some kind of visual cues;