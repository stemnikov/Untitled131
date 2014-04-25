var envVars = {};
var resultLines = '';
var sw = new SystemWorker("cmd", "/C set", null, null, null);
sw.onmessage = function ( e ) {
    resultLines += arguments[0].data.toString();
};
sw.onerror= function ( e ) {
    resultLines += arguments[0].data.toString();
};
wait(1000);
resultLines;
