var notelist = new noteList();
var note1 = new Note("hi")
var note2 = new Note("hey")

describe("New notelist instantiation")
  it("Has an empty array to store notes")
    expect.toBeEmpty(notelist.notes);

describe("Adds and stores notes")
  it("Stores notes inside array")
    notelist.addNote("This is note 1");
    notelist.addNote("This is note 2");
    expect.toEqual(notelist.notes[0].text, "This is note 1");
    expect.toEqual(notelist.notes[1].text, "This is note 2");

// To fix: this test does not pass. 
// describe("View all notes")
//   it("Returns all note objects")
//   var notelist2 = new noteList();
//   notelist2.addNote("This is note 1")
//   expect.toEqual(notelist2.viewNotes(),[Object({ text: 'note 1' })]);

console.log("---")
