require 'rspec'

class StringReverser
  attr_reader :original_string

  def initialize
    @original_string = 'Simplicity is the glory of expression.'
  end
end

describe "Given a string reverser" do
  before (:each) do
    @subject = StringReverser.new
  end

  it "prints a string" do
    expect(@subject.original_string).to eq('Simplicity is the glory of expression.')
  end

end