(function(exports){

  function noteListView(noteList) {
    this.noteList = noteList;
  };

  noteListView.prototype = {

    createHtml: function() {
      var htmlString = ""
      var individualNotes = this.noteList.viewNotes();
      for (var i = 0; i < individualNotes.length; i++) {
        htmlString += `<div><li>${individualNotes[i].viewText().slice(0,20)}</li></div>`;
      }
      return htmlString;
    }
  }
  exports.noteListView = noteListView;
})(this);