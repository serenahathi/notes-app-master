describe("Converting note text to html");

  it("Handles note lists that do not contain any notes");
    var notelist = new noteList();
    var notelistview = new noteListView(notelist);
    expect.toEqual(notelistview.createHtml(), "");

  it("Handles note lists that contain a single note");
    var notelist = new noteList();
    notelist.addNote("Lorem ipsum dolor sit amet");
    var notelistview = new noteListView(notelist);
    expect.toEqual(notelistview.createHtml(), "<div><li><a href=#notes/0>Lorem ipsum dolor si</a></li></div>");

  it("Handles note lists that contain multiple notes");
    var notelist2 = new noteList();
    notelist2.addNote("Excepteur sint occaecat cupidatat non proident,");
    notelist2.addNote("sunt in culpa qui officia deserunt mollit anim id est laborum.");
    var notelistview2 = new noteListView(notelist2);
    expect.toEqual(notelistview2.createHtml(), "<div><li><a href=#notes/0>Excepteur sint occae</a></li></div><div><li><a href=#notes/1>sunt in culpa qui of</a></li></div>");

  console.log("---")

