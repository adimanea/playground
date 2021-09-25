// hide all elements (divs) which contain "math" in their class
// const mathPars = document.querySelectorAll("[class*='math']"); // returns a list
// mathPars.forEach(node => {node.style.display = "none"} ); // iterate through the list and hide them

// // dynamically create a checkbox inside the "checkboxes" div
// // create the checkbox
// var checkbox = document.createElement('input');
// checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
// checkbox.id = "id";

// // add labels and IDs
// var label = document.createElement('label')
// label.htmlFor = "id";
// label.appendChild(document.createTextNode('text for label after checkbox'));

// // add it to the "checkboxes" element (div)
// document.getElementById("checkboxes").appendChild(checkbox);
// document.getElementById("checkboxes").appendChild(label);

// // TODO:
// // - get all words in div classes
// // - create checkboxes for them
// // - make the checkboxes work as show/hide
// // - create 2 additional CBs: "show all", "show TOC"
// // - add some kind of visual cues;

// // select all divs whose class contains "filter"
// const allDivClasses = document.querySelectorAll("[class*='filter']");
// allDivClasses.forEach(node => {console.log(node)}); // PRINTS THE WHOLE DIV

// CRISTI
function createNewCheckbox(name, id)
{
    var checkbox = document.createElement("input"); 
    checkbox.type= "checkbox";
    checkbox.name = name;
    checkbox.id = "checkbox" + name;
	checkbox.checked = true;
	
	checkbox.onclick = (thisCheckBox) => 
	{
		var elementsWithClass = document.getElementsByClassName(name);

		for (var i = 0; i < elementsWithClass.length; i ++) 
		{
			elementsWithClass[i].style.display = thisCheckBox.target.checked ? "inline" : "none";
		}
	};
	
    return checkbox;
}

function createNewLabel(name, id)
{
	var label = document.createElement("label");
	label.htmlFor = "id";
	label.appendChild(document.createTextNode(name));
	label.appendChild(document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0' ));
	return label;
}

const allClasses = Array.from(document.querySelectorAll('[class]')).
	flatMap(e => e.className.toString().split(/\s+/));
	
const classes = new Set();
allClasses.forEach(c => classes.add(c));

var checkBoxesParent = document.getElementById("checkboxes");

classes.forEach((c, index) => { 
	var newCheckbox = createNewCheckbox(c, index);
	var newLabel = createNewLabel(c, index);

	checkBoxesParent.insertAdjacentElement("beforeend", newCheckbox);
	checkBoxesParent.insertAdjacentElement("beforeend", newLabel);
});