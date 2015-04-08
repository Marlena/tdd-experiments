class StringReverser
  attr_reader :original_string

  def initialize(original_string)
    if original_string.length < 2
      raise 'The string must have 2 or more characters.'
    else
      @original_string = original_string
    end
  end

end