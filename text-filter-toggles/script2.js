// DAN
// TODO:
// - [x] get all words in div classes
// - [x] create checkboxes for them
// - [x] make the checkboxes work as show/hide
// - [ ] create 2 additional CBs: "show all", "show TOC"
// - [ ] add some kind of visual cues;

// hide all elements (divs) which contain "math" in their class
const mathPars = document.querySelectorAll("[class*='math']"); // returns a list
mathPars.forEach(node => {node.style.display = "none"} ); // iterate through the list and hide them

function addCheckbox(name) {
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = name;
  checkbox.id = "checkbox-" + name;

  // add labels and IDs
  let label = document.createElement('label')
  label.htmlFor = name;
  label.appendChild(document.createTextNode(name));

  // add it to the "checkboxes" element (div)
  document.getElementById("checkboxes").appendChild(checkbox);
  document.getElementById("checkboxes").appendChild(label);
}

DISPLAY = {
  true: "block",
  false: "none",
}

function toggleClass(className, isChecked) {
  document.querySelectorAll("." + className).forEach(node => { node.style.display = DISPLAY[isChecked] } );
}

// select all divs whose class contains "filter"
const allDivClasses = document.querySelectorAll("[class*='filter']");
const allClassesSet = new Set(Array.from(allDivClasses).map((node) => Array.from(node.classList)).flat());
allClassesSet.delete("filter")
const allClasses = Array.from(allClassesSet);

allClasses.forEach(addCheckbox);

document.addEventListener("click", function (event) {
  if (event.target.matches("input")) {
    toggleClass(event.target.name, event.target.checked);
  }
}, false);