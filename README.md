# Mr. Roboger's Neighborhood

#### Beginner Arrays & Looping Exercise for Epicodus, 10/30/20

#### Danielle Thompson

## Description
_This web application takes a number from the user and returns a 'robotic', Mr. Rogers-esque range of numbers in response. Any number in range from 0 to the user's inputted value that contains the digit '1' will be replaced with a "Beep!". Any inputted number that contains the digit '2' will be replaced with "Boop!". The number '3' will be exchanged for "Won't you be my neighbor?". Where two or more of the substituted numbers occur simultaneously, the returned word will be attributed to the higher number value (i.e. if 23, then "Won't you be my neighbor?")_ 

_This project focuses on using beginner-level arrays and loops in Javascript, as well as branching, and HTML and CSS styling where appropriate._

## Technologies used
* _Javascript_
* _Bootstrap Library_
* _jQuery Library_

## Complete setup/installation instructions/requirements

Access the live project at https://dani-t-codes.github.io/independent-project3, or follow the instructions to clone the project to your local computer.

* _For Mac users, find Terminal in your Finder, and open a new window. Install the package manager, [Homebrew](https://brew.sh/), on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
* _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._

* _For Windows users, open a new Command Prompt window by typing "Cmd" in your computer's search bar._
* _Once you have Homebrew &/or Git installed on your computer, go to this [GitHub repository](https://github.com/dani-t-codes/independent-project3) and clone this application with the following command:`git clone https://github.com/dani-t-codes/independent-project3`._
* _Open the index.html in your web browser of choice, either by double-clicking the file icon inside the project folder, or by opening File>Open File>"index.html" from the independent-project3 folder that you cloned onto your computer._
* _Read through the prompt on the index page, and enter your number to see Mr. Roboger's response._

## Testing 
###### Setup
_Describe: roboArray_
_Test: The array roboArray = []; should be created to hold incoming user-inputted values._
_Expect: roboArray = [];_

###### Submit Button 
_Describe: Submit Button_
_Test: When the user hits the "Go, Go, Roboger" button, the "roboSays" section of index page should show._
_Expect: .submit(button).show(userInput)_

_Test: The number the user submits into the form should return a number range from 0 to (number) & get pushed to array `roboArray []`._
_Expect: userInput(4).toEqual([0, 1, 2, 3, 4]);_

###### BeepBoop Function
_Describe: `beepBoop();`_
_Test: The function `beepBoop();` should set up a `for` loop with an index of 0 (to set minimum value), index length going until user's inputted number occurs, and i increasing by 1 for each number so that each number in `roboArray` can be evaluated._
_Expect: beepBoop(someNumber){for (let i=0; i <= someNumber; i++)}._

_Test: The function `beepBoop();` should turn number range into a string (so that string.includes() can be used to evaluate numbers in range.)_
_Expect: beepBoop(0, 1, 2, 3, 4).toString(["0, 1, 2, 3, 4"]);_
_Note: see "comparing strings" & "string primitives & string objects" section on MDN for syntax guidance. [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)._

_Test: The function `beepBoop();` should evaluate if the (now) string value .includes(1) and return true._
_Expect: robogered.includes("1").toEqual(true)_

_Test1a: Function should add "Beep!" into the array beepBoop [] in place of "1"._
_Code: if 1..._
_Expect: roboArray(1).toEqual(["0", "Beep!"]);_

_Test1b: Function should return "Boop!" into the array beepBoop [] in place of "2"._
_Code: else if 2..._
_Expect: roboArray(2).toEqual(["0", "1", "Boop!"]);_

_Test1c: Function should return "Won't you be my neighbor?" into the array beepBoop[] in place of "3"._
_Code: else if 3..._
_Expect: roboArray(3).toEqual(["0", "1", "2", "Won't you be my neighbor?"]);_

###### Add Exceptions to BeepBoop with if/else if statement 
_Test2a: '3' takes precedence over '2'._
_If a number entered by user contains both 2 and 3 (e.g. 23), all numbers containing 2 & 3 should be replaced in the array roboArray[] by the higher value's equivalent Roboger response._
_Note: This test must come before all other exceptions, as it is the most specific of the if/else statements and will not run lower in if/else statement._
_Code: if number.includes('2' && '3'), return '3' > '2'. ["Boop!"] < ["Won't you be my neighbor?"]._
_Expect: roboArray(23).toEqual([..."Won't you be my neighbor?", ...])._

_Test2b: '3' is more important than '1'._
_If a number entered by user contains 1, 3 (e.g. 13), the number should be replaced in the array beepBoop[] by the higher value's equivalent Roboger response._
_Note: This line of code when combined with the code from Test2a must come before all other exceptions, as it is the most specific of the if/else statements and will not run lower in if/else statement._
_Code: else if number.includes('1' && '3'), return '3' > '1'. ["Beep!"] < ["Won't you be my neighbor?"]_
_Expect: roboArray(13).toEqual([...8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);_

_Test2c: '2' takes precedence over '1'._
_If a number entered by user contains both 1 and 2 (e.g. 12), the number should be replaced in the roboArray[] by the higher value's equivalent Roboger response._ 
_Code: else if number.includes ('1' && '2'), return '2' > '1'. ["Beep!"] < ["Boop!"]._
_Expect: roboArray(12).toEqual([... "8", "9", "Beep!", "Beep!", "Boop!"]);_

###### Connect User Interface
_Test: The roboArray should get added to the DOM section "roboSays" and display the range of values & substituting words from 0 to userNumber._
_Expect: robogered.text[0:userNum]_ 

### Legal, or License 
_MIT_ Copyright (c) 2020 **_Danielle Thompson_**
