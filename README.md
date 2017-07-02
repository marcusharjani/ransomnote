# Hash Tables: HackerRank Ransom Note Challenge

This is an explanation and solution for the [Ransom Note Challenge](https://www.hackerrank.com/challenges/ctci-ransom-note) - I decided on JavaScript for this one!

## The Challenge

So we are told:

```
A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
```

From this we know we will have two arrays containing words. We are also told we will be given values `m` and `n` which are the number of words in each array. 


## The Solution

The hash table. 

With a hash table we can assign keys to elements in our array by running the elements through a hash function.  So what sort of function can we design that will achieve the solution here.  

At the start, we are given:

```
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

}
```

Focusing below the line, we have a function called main. First we want to create an array for storing keys. We want to take in the strings contained in the magazine/ransom arrays, convert those to integers, and map that index in our hash table. 

```
    var hashTable = {}
    for (var i = 0; i < m; i++){
      hashTable[magazine[i]] = (hashTable[magazine[i]] || 0) + 1;
    }
```
Here we make our hash table by defining a varable as an empty array.  We also use a for loop to accomplish two things. First, we create a variable `i` and set it equal to `0`. This variable will run the following operation so long as `i` is less than `m` or the number of elements in the magazine array. While this is true, we map to our hash table the element of the magazine array at index `i` along with a key integer. 

```
    var result = "Yes"
    for (var j = 0; j < n; j++){
      if (hashTable[ransom[j]] && hashTable[ransom[j]] > 0){
          hashTable[ransom[j]] -= 1;
      } else {
          result = "No"
          break;
      }
    }
```

Since our hash function assigns an integer key to each of the elements in magazine, if we were to come across an identical data value in ransom, it should run through the hash function and achieve the same key as when that value ran through the function in analyzing magazine. 

