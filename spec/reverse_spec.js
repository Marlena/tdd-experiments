(function(){
  'use strict'

  //= require ../src/reverse.js

  describe ("String reverser", function(){
    var subject;

    beforeEach(function(){
      var StringReverser = reverser.StringReverser;

      subject = new StringReverser('water');
    });

    it ("should be a thing", function(){
      expect(subject).toEqual(jasmine.anything());
    });

    it ("should pass back a string", function(){
      expect(subject.getString()).toEqual('water');
    });

    it ("should reverse the string", function(){
      expect (subject.reverseIt()).toEqual('retaw');
    });

  });
})();
