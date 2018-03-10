// window.onload = function() {

(function(exports){

  function noteController(notelist = new noteList()) {
    notelist.addNote("Favourite drink: seltzer");
    this.noteListView = new noteListView(notelist)
  };
  
  noteController.prototype.insertHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.createHtml();
  };

  exports.noteController = noteController;
})(this);
controller = new noteController();
controller.insertHtml();
// };