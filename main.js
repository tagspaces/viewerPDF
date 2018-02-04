/* Copyright (c) 2013-present The TagSpaces Authors.
 * Use of this source code is governed by the MIT license which can be found in the LICENSE.txt file. */

'use strict';

(() => {
  function getParameterByName (paramName) {
    const name = paramName.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // const locale = getParameterByName('locale');
  const filePath = getParameterByName('file') || '../../example.pdf';

  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const pdfViewer = document.getElementById('pdfviewer');
      pdfViewer.setAttribute('src', 'generic/web/viewer.html?file=' + filePath);
    }
  };
})();
