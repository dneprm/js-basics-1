function squaresOfMax(a, b, c) {
  // Write a function that takes three numbers and returns
  // sum of squares of two largest
  if (a>=b) {
    if (b>=c) {
      return a*a + b*b;
    } else {
      return a*a + c*c;
    } 
  } else if (a>=c) {
      if(c>=b) {
        return a*a + c*c;
      } else {
        return a*a + b*b;
      }
    } else {
      return b*b + c*c;
  }
}

function drawTriangle() {
  // Write a loop that makes seven calls to console.log to output the following triangle:
  //
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
 
  var b = "#";
  for (var i = 0; i<7; i++) {
    console.log(b);
    b += "#";
  };
}

function fizzBuzz() {
  // Write a program that uses console.log to print all the numbers from 1 to 100,
  // with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  // and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  //
  // When you have that working, modify your program to print "FizzBuzz",
  // for numbers that are divisible by both 3 and 5 (and still print "Fizz"
  // or "Buzz" for numbers divisible by only one of those).
for (var i=1; i<=100; i++) {
  if(i%3===0) {
    if(i%5===0) {
      console.log("FizzBuzz");
    } else {
    console.log("Fizz");
  }
  } else if (i%5===0) {
    if (i%3===0) {
      console.log("FizzBuzz");
    } else {
    console.log("Buzz");
  }
  } else {
    console.log(i);
  } 
}
}

function chessBoard(size) {
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the
  // grid there is either a space or a “#” character. The characters
  // should form a chess board.
  //
  // Passing this string to console.log should show something like this:
  //
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //
  // When you have a program that generates this pattern,
  // define a variable size = 8 and change the program so that
  // it works for any size, outputting a grid of the given width and height.
  var white = " ";
  var black = "#";
  var newline = "\n";
  var grid ="";
  for (var i=0; i<size; i++) {
    for (var j=0; j<size; j++) {
      if((i+j)%2===0) {
        grid += white;
      } else {
        grid += black;
      }
    }
     if(i<size-1) {
        grid += newline;
      }
  }
  return grid;
}
module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;