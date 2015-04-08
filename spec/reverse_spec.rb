require 'rspec'
require_relative '../src/reverse'

describe "Given a string reverser" do

  describe "when given a string of at least 2 characters" do
    before (:each) do
      @subject = StringReverser.new('Simplicity is the glory of expression.')
    end

    it "saves the original string into a member" do
      expect(@subject.original_string).to eq('Simplicity is the glory of expression.')
    end

    it "gets a string back from reverse" do
      expect(@subject.reverse).to be_a_kind_of(String)
    end

    it "returns the reverse of the original string" do
      expect(@subject.reverse).to eq('.noisserpxe fo yrolg eht si yticilpmiS')
    end
  end

  describe "when it is given a string of less than 2 characters" do

    it "raises an error" do
      expect{StringReverser.new('a')}.to raise_error("The string must have 2 or more characters.")
    end
  end

end

