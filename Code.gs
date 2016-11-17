function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createAddonMenu()
  .addItem("Autobuild", "main")
  .addToUi();
}

function main() {
  var mainDocument = DocumentApp.getActiveDocument();
  var outputBody = mainDocument.getBody();
  var text = outputBody.editAsText();
  text.setFontFamily("Roboto");
  outputBody.setText("");
  var titleParagraph = outputBody.insertParagraph(0, "Table of Contents");
  titleParagraph.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  var titleText = titleParagraph.editAsText();
  titleText.setForegroundColor("#BE6D00");
  titleText.setBold(true);
  titleText.setFontSize(30);

  var mainFolders = DriveApp.getFileById(mainDocument.getId()).getParents();
  while (mainFolders.hasNext()) {
    var subFolders = mainFolders.next().getFolders();
    while (subFolders.hasNext()) {
      var folder = subFolders.next();
      var files = folder.getFiles();
      outputBody.appendHorizontalRule();
      var paragraph = outputBody.appendParagraph("");
      var paragraphText = paragraph.editAsText();
      paragraph.appendText("\n" + folder.getName());
      paragraphText.setForegroundColor("#000000");
      paragraphText.setBackgroundColor("#FFFFFF");
      paragraphText.setFontSize(16);
      paragraphText.setBold(true);
      var tableParagraphText = outputBody.appendParagraph("").editAsText();
      tableParagraphText.setForegroundColor("#000000");
      tableParagraphText.setBackgroundColor("#FFFFFF");
      tableParagraphText.setFontSize(12);
      tableParagraphText.setBold(false);
      var table = outputBody.appendTable();
      while (files.hasNext()) {
        var file = files.next();
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        var row = table.appendTableRow();
        row.appendTableCell(file.getName()).setLinkUrl(file.getUrl());
        row.appendTableCell(file.getDateCreated().toString().replace(/^[a-zA-Z]+ ([a-zA-Z]+) ([0-9]+) ([0-9]+).*/, "$1 $2, $3")).setWidth(outputBody.getPageWidth() * 0.25);
      }
    }
  }
}
