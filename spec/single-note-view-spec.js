var note = new Note("Testing single note view")
var singleNoteView = new singleNoteView(note)

describe("Single note view instantiation")
  it("Single note is instantiated with note as a paramter")
  expect.toEqual(singleNoteView.newNote.text, "Testing single note view")
  
describe("Add html to note text")
  it("HTML is added to note text")
  expect.toEqual(singleNoteView.viewHtmlNote(), "<div><li>Testing single note view</li></div>")
  
  console.log("---")
