describe("Converting note text to html");

  it("Handles note lists that do not contain any notes");
    var notelist = new noteList();
    var notelistview = new noteListView(notelist);
    expect.toEqual(notelistview.createHtml(), "");

  it("Handles note lists that contain a single note");
    var notelist = new noteList();
    notelist.addNote("Hi");
    var notelistview = new noteListView(notelist);
    expect.toEqual(notelistview.createHtml(), "<li><div>Hi</li></div>");

  it("Handles note lists that contain multiple notes");
    var notelist2 = new noteList();
    notelist2.addNote("Hi");
    notelist2.addNote("Bonjour");
    var notelistview2 = new noteListView(notelist2);
    expect.toEqual(notelistview2.createHtml(), "<li><div>Hi</li></div><li><div>Bonjour</li></div>");

  console.log("---")

