var notelist = new noteList
var noteController = new noteController(notelist)
notelist.addNote("Hi")

describe("New note controller instantiation")
  it("Creates a new instance of controller")
  expect.toEqual(noteController.notelist, "Hi");


  console.log("---")


