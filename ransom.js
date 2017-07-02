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

    var hashTable = {}
    for (var i = 0; i < m; i++){
      hashTable[magazine[i]] = (hashTable[magazine[i]] || 0) + 1;
    }

    var result = "Yes"
    for (var j = 0; j < n; j++){
      if (hashTable[ransom[j]] && hashTable[ransom[j]] > 0){
          hashTable[ransom[j]] -= 1;
      } else {
          result = "No"
          break;
      }
    }

    console.log(result)
}