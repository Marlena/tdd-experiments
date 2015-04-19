(function(){
  'use strict'
  var reverser = (window.reverser = window.reverser || {});

  function StringReverser(data){
    this._data = data;
  };

  StringReverser.prototype.getString = function(){
    return this._data['data'];
  };

  reverser.StringReverser = StringReverser;
})();