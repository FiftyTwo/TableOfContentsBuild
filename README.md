Table of Contents Build
=======================
Builds a table of contents from documents in subfolders in Google Drive _(Intended mainly for my English notes)_
Add this script (Code.gs) to the table of contents (Tools -> Script Editor) and either run it manually through the menu or automatically (such as every hour, etc.)

Example:
========
Some Folder
|-- Table of Contents document `<-- Script goes here`
|-- Some Notes Folder
     |-- Some Notes 1
     |-- Some Notes 2
     |-- Some Notes 3
|-- Some Other Notes Folder
     |-- Some Notes 1
     |-- Some Notes 2
     |-- Some Notes 3

This will create categories for Some Notes Folder and Some Other Notes Folder, with each file under them added to their category
