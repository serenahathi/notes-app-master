console.log("---")
describe("New note instantiation")
it("Creates a new note with text")
var note = new Note("My favourite language is Javascript!");
expect.toEqual(note.text, "My favourite language is Javascript!")
console.log("---")