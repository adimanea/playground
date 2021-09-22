# Text filter toggles
I need a quick and simple way to filter through a web text I write.
For the time being, I'm satisfied if I:
- have tags/IDs to paragraphs (manually written when writing the article);
- see the tags/IDs as checkboxes at the top of the page;
- check/uncheck the boxes to show/hide that paragraph;
- one extra button to "show all".

More info as I progress with the solution. 
I'm thinking of a simple vanilla Javascript implementation.

## Function
- the user writes paragraphs/divs with certain IDs/tags;
- a set of checkboxes automatically appear at the top of the page and update automatically when the user adds new content in the source;
  - EXTRA: better to have the checkboxes "float" on the side so they are always visible?
- the checkboxes toggle the visibility of the paragraphs/divs with those IDs;
- an extra checkbox for "check all";
- use this for TODOS: just add a `TODO` tag to a paragraph;

## Problems
- maybe just a simple ID/tag is not enough to describe the paragraph one wants to show/hide;
- how to avoid clutter? have some visual hierarchy;


## Further ideas
- have a "show context" button to show some lines below and above selection and/or general outline;
- have an "outline" button to show just titles of selected tags (i.e. titles of sections or of TODOs);