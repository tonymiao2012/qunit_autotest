// Code goes here

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

function errorHandler(e) {
    var msg = '';

    switch (e.message) {
        case FileError.QUOTA_EXCEEDED_ERR:
            msg = 'QUOTA_EXCEEDED_ERR';
            break;
        case FileError.NOT_FOUND_ERR:
            msg = 'NOT_FOUND_ERR';
            break;
        case FileError.SECURITY_ERR:
            msg = 'SECURITY_ERR';
            break;
        case FileError.INVALID_MODIFICATION_ERR:
            msg = 'INVALID_MODIFICATION_ERR';
            break;
        case FileError.INVALID_STATE_ERR:
            msg = 'INVALID_STATE_ERR';
            break;
        default:
            msg = 'Unknown Error';
            break;
    };

    console.log('Error: ' + msg);
}

function writeFile(fs) {

    fs.root.getFile('log.txt', {
        create: true
    }, function(fileEntry) {

        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function(fileWriter) {

            fileWriter.onwriteend = function(e) {
                console.log('Write completed.');
                window.requestFileSystem(window.TEMPORARY, 1024 * 1024, readFile, errorHandler);
            };

            fileWriter.onerror = function(e) {
                console.log('Write failed: ' + e.toString());
            };

            // Create a new Blob and write it to log.txt.
            var blob = new Blob(['Lorem Ipsum'], {
                type: 'text/plain'
            });

            fileWriter.write(blob);

        }, errorHandler);

    }, errorHandler);

}


function onInitFs(fs) {

    fs.root.getFile('zz11zzlog.txt', {create: true}, function(fileEntry) {

        fileEntry.createWriter(function(fileWriter) {

            fileWriter.onwriteend = function(e) {
                console.log('Write completed.');
                window.requestFileSystem(window.TEMPORARY, 1024 * 1024, readFile, errorHandler);
            };

            fileWriter.onerror = function(e) {
                console.log('Write failed: ' + e.toString());
            };

            // Create a new Blob and write it to log.txt.
            var blob = new Blob(['Tony Miao'], {type: 'text/plain'});

            fileWriter.write(blob);

        }, errorHandler);

    }, errorHandler);

}
window.requestFileSystem(window.TEMPORARY, 1024 * 1024, onInitFs, errorHandler);

function readFile(fs) {

    fs.root.getFile('zz11zzlog.txt', {}, function(fileEntry) {

        // Get a File object representing the file,
        // then use FileReader to read its contents.
        fileEntry.file(function(file) {
            var reader = new FileReader();

            reader.onloadend = function(e) {
                console.log(e.target.result)
            };

            reader.readAsText(file);
        }, errorHandler);

    }, errorHandler);

}