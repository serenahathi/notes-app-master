(function(exports) {

  function noteList() {
    this.notes = [];
  };

  noteList.prototype = {
    
    addNote: function(text) {
      this.notes.push(new Note(text));
    },

    viewNotes: function() {
      return this.notes;
    },

  }
exports.noteList = noteList
})(this);