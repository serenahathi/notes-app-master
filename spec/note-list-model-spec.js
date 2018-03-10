var notelist = new noteList();
var note1 = new Note("hi")
var note2 = new Note("hey")

console.log("---")

describe("New noteList instantiation")
it("Stores an empty array of note models")
expect.toBeEmpty(notelist.noteModels);

describe("Store note models")
it("Stores note models inside array")
notelist.addNote("This is note 1");
expect.toEqual(notelist.noteModels[0].text, "This is note 1");

describe("View note models")
it("Displays all note models stored inside array")
var notelist2 = new noteList();
notelist2.addNote("hi")
expect.isTrue(notelist2.viewNoteModels() === [Note]);


console.log("---")
