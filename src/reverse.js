(function(){
  'use strict'
  var reverser = (window.reverser = window.reverser || {});

  function StringReverser(data){
    this._data = data;
  }

  StringReverser.prototype.getString = function(){
    return this._data['data'];
  };

  StringReverser.prototype.reverseIt = function(){
    var source = this._data['data'];
    var destination = [];
    var i = 0;

    for (i; i< source.length; i++){
      destination.unshift(source[i]);
    }

    return destination.join('');
  };

  reverser.StringReverser = StringReverser;
})();