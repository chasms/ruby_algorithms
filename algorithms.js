/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var count = 0;
    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        println(guess);
        count++;
        if (array[guess] === targetValue) {
            println(count);
            return guess; }
        else if (array[guess] > targetValue){              max = guess - 1; }
        else {min = guess + 1; }
    }
    println(count);
    return -1;
};

var doLinearSearch = function(array, targetValue) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === targetValue) {
			return i;
		}
	}
}

var selectionSort = function(array) {							//	O(n^2)
    for(var i = 0; i < array.length; i++) {
        swap(array, i, indexOfMinimum(array, i)); //	O(n)
    }
};

var insertionSort = function(array) {
	for (var i = 1; i < array.length; i++) {
		insert(array, i - 1, array[i]);
	}
}

var swap = function(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:
    var minValue = array[startIndex];
    var minIndex = startIndex;

    // Loop over items starting with startIndex,
    // updating minValue and minIndex as needed:
    for(var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
            minIndex = i;
        }
    }
    return minIndex;
};

var insert = function(array, rightIndex, value) {
	var j
	for(j = rightIndex; j >= 0 && array[j] > value; j--) {
		array[j + 1] = array[j];
	}
	array[j + 1] = value;
}

// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if (str.length <= 1) {
        return true;
    } else if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }
    else {
        return isPalindrome(middleCharacters(str));
    }
    // base case #2
    // recursive case
};

var checkPalindrome = function(str) {
    println("Is this word a palindrome? " + str);
    println(isPalindrome(str));
};

var println = function(x) {
  console.log(x)
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
println("Array after inserting 2:  " + array);

insert(array, 5, 9);
println("Array after inserting 9:  " + array);

insert(array, 6, 6);
println("Array after inserting 6:  " + array);

var result = doSearch(primes, 73);
println("Found prime at index " + result);

checkPalindrome("a");
checkPalindrome("motor");
checkPalindrome("rotor");
