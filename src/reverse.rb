class StringReverser
  attr_reader :original_string

  def initialize(original_string)
    if original_string.length < 2
      raise 'The string must have 2 or more characters.'
    else
      @original_string = original_string
    end
  end


  def reverse
    reversed_string = "a" * @original_string.length
    forwards_iterator = 0
    backwards_iterator = -1

    reversed_string.each_char do
    reversed_string[forwards_iterator] = @original_string[backwards_iterator]
      forwards_iterator += 1
      backwards_iterator += -1
    end
  end

end