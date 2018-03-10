(function(exports) {

  function singleNoteView(note) {
    this.newNote = note;
  };

  singleNoteView.prototype.viewHtmlNote = function() {
    return "<div><li>" + this.newNote.text + "</li></div>"
  }

exports.singleNoteView = singleNoteView
})(this);