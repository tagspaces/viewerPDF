Patch viewer.js by removing the following line to allow opening PDFs on TagSpaces with S3 location.

https://github.com/mozilla/pdf.js/issues/7153

if (fileOrigin !== viewerOrigin) {
throw new Error('file origin does not match viewer's');
}
