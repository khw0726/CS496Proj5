// /* Takes a screenshot and uses it in a callback as a canvas */
// takeScreenshot: function(callback) {
//     chrome.extension.sendMessage({name: 'screenshot'}, function(response) {
//         var data = response.screenshotUrl;
//         var canvas = document.createElement('canvas');
//         var img = new Image();
//         img.onload = function() {
//             canvas.width = $(window).width();
//             canvas.height = $(window).height()
//             canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);

//             var $canvas = $(canvas);
//             $canvas.data('scrollLeft', $(document.body).scrollLeft());
//             $canvas.data('scrollTop', $(document.body).scrollTop());

//             // Perform callback after image loads
//             callback($canvas);
//         }
//         img.src = data;
//     });
// }

// /* Returns a canvas containing a screenshot of $element */
// renderPreview: function($element, $screenshotCanvas) {
//     var previewCanvas = document.createElement('canvas');
//     previewCanvas.width = $element.width();
//     previewCanvas.height = $element.height();

//     // Calculate the correct position of the element on the canvas
//     var prevTop = $element.offset().top - $screenshotCanvas.data('scrollTop');
//     var prevLeft = $element.offset().left - $screenshotCanvas.data('scrollLeft');

//     var ctx = previewCanvas.getContext("2d");
//     ctx.drawImage($screenshotCanvas[0], prevLeft, prevTop,
//                                         $element.width(), $element.height(),
//                                         0, 0,
//                                         $element.width(), $element.height());

//     return $(previewCanvas)
//                 .css({ border:'1px solid black' });
// }

function setScreenshotUrl(url, coords) {
  let statusText = 'startX ' + coords.startX + ' startY ' + coords.startY + ' endX ' + coords.endX + ' endY ' + coords.endY
  window.alert(statusText)
  let canvas = document.getElementById('test')
  let ctx = canvas.getContext('2d')
  let img = new Image()
  let startX = coords.startX
  let startY = coords.startY
  let sWidth = (coords.endX - coords.startX)>0?coords.endX - coords.startX:-(coords.endX - coords.startX)
  let sHeight = (coords.endY - coords.startY)>0?coords.endY - coords.startY:-(coords.endY - coords.startY)
  canvas.width = sWidth
  canvas.height = sHeight
  img.addEventListener('load', function () {
    ctx.drawImage(img, startX, startY, sWidth, sHeight, 0, 0, sWidth, sHeight)
  })
  img.src = url

}

// function setStatus(statusText) {
//   window.alert(statusText)
//   document.getElementById('status').innerText = statusText
// }
