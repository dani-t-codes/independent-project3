# Mr. Roboger's Neighborhood"

#### Beginner Arrays & Looping Exercise for Epicodus, 10/30/20

#### Danielle Thompson

## Description

_This web application takes a number between zero and 50,000 from the user and returns a 'robotic', Mr. Rogers-esque greeting in response. Any inputted number that contains the digit '1' will replace that value with a "Beep!". Any inputted number that contains the digit '2' will replace that  value with "Boop!". The number '3' will be exchanged for "Won't you be my neighbor?"._ 

_For example, if the user enters the number 61,2322, the page will return the following list of values: "6", "Beep!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!"._

_The project will focus on using beginner-level arrays and loops in Javascript, as well as branching, and HTML and CSS styling where appropriate._

## Testing 

Setup

Describe: beepBoop [];
TestA: The array beepBoop []; should be created. 
Expect: beeBoop = [];

Describe: robogerMe()
TestB: Function should return an array of numbers when a number is entered.
Expect: robogerMe(4).toEqual([4]);

Add to function:  

Test1a: Function should add "Beep!" into the array beepBoop [] instead of "1" when a number is entered that contains "1".
Code: if 1...
Expect: robogerMe(1).toEqual(["Beep!"]);

Test1b: Function should return "Boop!" into the array beepBoop [] instead of "2" when a number is entered that contains "2". 
Code: else if 2...
Expect: robogerMe(2).toEqual(["Boop!"]);

Test1c: Function should return "Won't you be my neighbor?" into the array beepBoop[] instead of "3" when a number is entered that contains "3". 
Code: else if 3...
Expect: robogerMe(3).toEqual(["Won't you be my neighbor?"]);


Add Exceptions: 

Test2a: '2' is more important than '1'. 
If a number entered by user contains both 1 and 2 (e.g. 12), the number should be replaced in the array beepBoop[] by the higher value's equivalent Roboger response. 
Code: else if '1' + '2', '2' > '1'.
["Beep!"] < ["Boop!"]
Expect: robogerMe(12).toEqual(["Boop!"]);

Test2b: '3' is more important than '2'. 
If a number entered by user contains both 2 and 3 (e.g. 32), the number should be replaced in the array beepBoop[] by the higher value's equivalent Roboger response. 
Code: else if '2' + '3', '3' > '2'. ["Boop!"] < ["Won't you be my neighbor?"]
Expect: robogerMe(12).toEqual(["Won't you be my neighbor?"]);

Test3b: '3' is more important than '1'. 
If a number entered by user contains 1, 3 (e.g. 13), the number should be replaced in the array beepBoop[] by the higher value's equivalent Roboger response. 
Code: else if '1' + '3', '3' > '1'. ["Beep!"] < ["Won't you be my neighbor?"]
Expect: robogerMe(13).toEqual(["Won't you be my neighbor?"]);


## Technologies used

_Javascript_
_Bootstrap Library_
_jQuery Library_

## Complete setup/installation instructions/requirements

* _For Mac users, find Terminal in your Finder, and open a new window. Install the package manager, (Homebrew) [https://brew.sh/], on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
* _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._

* _For Windows users, open a new Command Prompt window by typing "Cmd" in your computer's search bar._
* _Once you have Homebrew &/or Git installed on your computer, go to this (GitHub repository)[https://github.com/dani-t-codes/independent-project2] and clone this application with the following command:`git clone https://github.com/dani-t-codes/independent-project2`._
* _Open the index.html in your web browser of choice, either by double-clicking the file icon inside the project folder, or by opening File>Open File>"index.html" from the independent-project2 folder that you cloned onto your computer._
* _Read through the prompt on the index page, and enter your number to see Mr. Roboger's response._

## (Optional) Known bugs

_{I am a *bug* that needs fixing. I need resolving. I might impact this app by doing xyz. But you can do abc to get around me. Can do future fix me plz!}_


### Legal, or License 

_{License info w/ copyright & date, license type (MIT, GPL, etc), list of contributors/company name}_

_MIT_ Copyright (c) 2020 **_Danielle Thompson_**