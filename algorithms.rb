class Algorithms

  def binary_search(array:, value:, min: 0, max: nil)
    max = array.size - 1 unless max
    mid = avg(min, max)
    if value < array[mid]
      return binary_search(array: array, value: value, min: min, max: mid-1)
    elsif value > array[mid]
      return binary_search(array: array, value: value, min: mid + 1, max: max)
    else
      return mid
    end
  end

  def avg(*nums)
      sum(nums)/nums.size
  end

  def sum(array) #sum iterates, so it is linear
    array.inject(0, :+)
  end

end

array = [1,2,3,4,5,6,7,8,9]
value = 6
puts binary_search(array: array, value: value)
