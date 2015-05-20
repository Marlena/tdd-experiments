(function(){
  'use strict';

  describe('reduce', function(){

    describe('numbers', function(){
      var subject;

      beforeEach(function(){
        subject = [0, 1, 2, 3, 4];
      });

      it("produces a sum", function(){
        subject  = subject.reduce(function(previousValue, currentValue){
          return previousValue + currentValue;
        });

        expect(subject).toBe(10);
      });

      it("can take a base number as an argument to produce a sum", function(){
        subject = subject.reduce(function(previousValue, currentValue){
          return previousValue + currentValue;
        }, 10);

        expect(subject).toEqual(20);
      });
    });
  });

    describe('strings', function(){
      it('reduces to one string', function(){
        var subject = ['Simplicity', 'is', 'the', 'glory', 'of', 'expression.'];

        subject = subject.reduce(function(previousValue, currentValue){
          return previousValue.concat(' ').concat(currentValue);
        });

        expect(subject).toEqual('Simplicity is the glory of expression.');

      });
    });

  describe('flattener', function(){

    it('exists', function(){
      var Flattener = require('../src/flattener.js');
      var flattener = new Flattener();
      expect(flattener).toEqual(jasmine.anything());
    });
  })




})();