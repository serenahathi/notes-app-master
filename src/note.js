(function(exports) {

var id = -1;

  function Note(text) {
    this.id = id++;
    this.text = text;
  }

  Note.prototype = {
    viewText: function() {
      return this.text
    },

    viewId: function() {
      return this.id;
    },

  }
  exports.Note = Note;
})(this);
