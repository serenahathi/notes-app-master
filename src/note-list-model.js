(function(exports) {

  function noteList() {
    this.noteModels = [];
  };

  noteList.prototype.addNote = function(text) {
    this.noteModels.push(new Note(text));
  };

  noteList.prototype.viewNoteModels = function() {
    return this.noteModels
  };

  // this pushes the new note object into the array
exports.noteList = noteList
})(this);