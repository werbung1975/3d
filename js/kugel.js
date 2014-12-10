var gProcessor=null;

// Show all exceptions to the user:
OpenJsCad.AlertUserOfUncaughtExceptions();

function onload()
{
  gProcessor = new OpenJsCad.Processor(document.getElementById("viewer"));
  updateSolid();
}

function updateSolid()
{
  gProcessor.setJsCad(document.getElementById('code').value);
}

function getParameterDefinitions() {
  return [
    { name: 'radius', caption: 'Radius der Kugel:', type: 'float', default: 10 },
  ];
}

function createblob() {
    var textFileAsBlob = gProcessor.currentObjectToBlob();
    var fileNameToSaveAs = "myNewFile.stl";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "My Hidden Link";
    window.URL = window.URL || window.webkitURL;
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function destroyClickedElement(event)
{
// remove the link from the DOM
    document.body.removeChild(event.target);
}
