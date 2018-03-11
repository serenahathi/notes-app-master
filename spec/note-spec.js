describe("New note instantiation")
  it("Creates a new note with text")
  var note = new Note("My favourite language is Javascript!");
  expect.toEqual(note.viewText(), "My favourite language is Javascript!")

  it("Each note is given a unique id that increments by one")
  var aNote = new Note("My favourite language is Javascript!");
  var anotherNote = new Note("My favourite language is Javascript!");
  expect.toEqual(aNote.viewId(), 1)
  expect.toEqual(anotherNote.viewId(), 2)

  console.log("---")
