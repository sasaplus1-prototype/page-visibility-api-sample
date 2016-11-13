(function(){

  'use strict';

  var hidden, visibilityChange;

  switch (true) {
    case (typeof document.hidden !== 'undefined'):
      hidden = 'hidden';
      visibilityChange = 'visibilitychange';
      break;
    case (typeof document.msHidden !== 'undefined'):
      hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
      break;
    case (typeof document.mozHidden !== 'undefined'):
      hidden = 'mozHidden';
      visibilityChange = 'mozvisibilitychange';
      break;
    case (typeof document.webkitHidden !== 'undefined'):
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
      break;
  }

  var clear = document.getElementById('js-clear'),
      textarea = document.getElementById('js-textarea');

  clear.addEventListener('click', function() {
    textarea.value = '';
  }, false);

  document.addEventListener(visibilityChange, function() {
    console.log(new Date);
    console.log('document.' + hidden + ': ' + document[hidden]);
    console.log('document.visibilityState: ' + document.visibilityState);

    textarea.value = [
      '-----',
      new Date(),
      'document.' + hidden + ': ' + document[hidden],
      'document.visibilityState: ' + document.visibilityState,
      textarea.value
    ].join('\n');
  }, false);

}());
