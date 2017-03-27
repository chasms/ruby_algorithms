
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

def linear_search(array:, value:)
  array.each_with_index do |item, index|
    return index if item == value
  end
  nil
end

def selection_sort(array:)
  array.each_with_index do |value, index|
    swap(array, index, index_of_minimum(array, i))
  end
end

def insertion_sort(array:)
  i = 1
  (array.length - 1).times do
    insert(array: array, right_index: i - 1, value: array[i])
    i+=1
  end
  array
end

def factorial(n:)
  if n == 0
    return 1
  else
    return n * factorial(n: n-1)
  end
end

def insert(array:, right_index:, value:)
  i = right_index
  while i >= 0 && array[i] > value
    array[i + 1] = array[i]
    i-=1
  end
  array[i + 1] = value
  array
end

def swap(array:, index1:, index2:)
  temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
end

def avg(*nums)
    sum(nums)/nums.size #size is constant
end

def sum(array) #sum iterates, so it is linear
  array.inject(0, :+)
end

def index_of_minimum(array:, start_index:)
  min = array[startIndex]
  min_index = start_index
  array.each_with_index do |value, index|
    if value < min
      min = value
      min_index = index
    end
  end
  min_index
end

def test_insert(array:)
  puts "Testing insert for unsorted array #{array}"
  i = 1
  (array.length-1).times do
    print "\nInsert #{array[i]} (array[#{i}]) into #{array}:\n#{insert(array: array, right_index: i-1, value: array[i])}\n"
    i+=1
  end
  puts "\nArray sorted! #{array}"
end

array = [4,5,1,7,2,3,9,6,8]
sorted_array = [1,2,3,4,5,6,7,8,9]
value = 6
puts "\nBinary Search for #{value} in #{sorted_array}:\narray[#{binary_search(array: sorted_array, value: value)}] = #{value}\n"
puts "\nLinear Search for #{value} in #{sorted_array}:\narray[#{linear_search(array: sorted_array, value: value)}] = #{value}\n"
puts "\nFactorial #{value}:\n#{factorial(n: value)}\n\n"
test_insert(array: array)
array = [4,5,1,7,2,3,9,6,8]
puts "\nInsertion Sort for #{array}:\n#{insertion_sort(array: array)}\n"
