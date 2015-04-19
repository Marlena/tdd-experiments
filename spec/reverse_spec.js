(function(){
  'use strict'

  //= require ../src/reverse.js

  describe ("String reverser", function(){
    var subject;

    beforeEach(function(){
      var StringReverser = reverser.StringReverser;

      subject = new StringReverser({data: 'water'});
    });


    it ("should be a thing", function(){
      expect(subject).toEqual(jasmine.anything());
    });

    it ("should pass back a string", function(){
      expect(subject.getString()).toEqual('water');
    });

  });
})();
