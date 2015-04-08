require 'rspec'
require_relative '../src/reverse'

describe "Given a string reverser" do

  describe "when given a string of at least 2 characters" do
    before (:each) do
      @subject = StringReverser.new('Simplicity is the glory of expression.')
    end

    it "has the original string" do
      expect(@subject.original_string).to eq('Simplicity is the glory of expression.')
    end
  end

  describe "when it is given a string of less than 2 characters" do

    it "returns an error message" do
      expect{StringReverser.new('a')}.to raise_error("The string must have 2 or more characters.")
    end
  end

end

