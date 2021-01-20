"use strict";
var GlobalNamespace;
(function (GlobalNamespace) {
    var myVar = "Beeeep";
    function colorLog(message, color) {
        console.log("%c " + message, "color:" + color);
    }
    GlobalNamespace.colorLog = colorLog;
})(GlobalNamespace || (GlobalNamespace = {}));
GlobalNamespace.colorLog("Some purple log!", "purple");
