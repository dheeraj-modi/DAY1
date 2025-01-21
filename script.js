// Here is a collection of 100 JavaScript questions, divided into groups of 10, based on topics 1-8, with increasing complexity.

// 1. Basic Console Usage (10 Questions)
// 	1.	Log your name and favorite hobby to the console
//    console.log("My name is Dheeraj and my favorite hobby is chess");

// 	2.	Perform and log the result of 45 * 2 - 10.
// console.log(45*2-10);

// 	3.	Use console.log() to display the current year.
//    console.log(new Date().getFullYear());

// 	4.	Create two variables for first and last name. Concatenate and log them.
// var firstName = "Dheeraj";
// var lastName = "Modi";
// console.log(firstName+" "+lastName);

// 	5.	Track the value of a variable by logging it before and after updating.
//  let a = 10;
//  console.log(a);
//  a=12;
//  console.log(a);
 
// 	6.	Use console.error() to simulate an error message.
// console.error("Error");
// 	7.	Log the square of the number 12 to the console.
// console.log(12**2);
// 	8.	Print the type of a variable holding the value true.
// let value = true;
// console.log(typeof value);

// 	9.	Create a variable holding your age and log whether it’s greater than 18.
// let age=20;
// if(age>18)
// {
//     console.log("it’s greater than 18");   
// }

// 	10.	Log the result of 100 / 0 and observe the output.
// console.log(100/0);

// 2. Variables and Data Types (10 Questions)
// 	11.	Declare a variable using let and log its value.
// let a=5;
// console.log(a);

// 	12.	Create a constant to store the value of PI and log it.
// const PI = 3.14;
// console.log(PI);

// 	13.	Reassign a value to a variable declared with let and log the result.
// let a =10;
// a=12;
// console.log(a);

// 	14.	Check the type of null and log it.
// console.log(typeof null);

// 	15.	Create a variable with a number as a string (e.g., "25") and log its type.
// let num = "25";
// console.log(typeof num);

// 	16.	Use typeof to check the type of a boolean variable.
// var value = true;
// console.log(typeof value);

// 	17.	Create three variables of types string, number, and boolean, and log their values.
// let name = "Dheeraj";
// let age = 21;
// let isSingle = true;
// console.log(name, age, isSingle);
 
// 	18.	Declare a variable without assigning a value. Log its type.
// let a;
// console.log(typeof a);

// 	19.	Create a variable with undefined and log its type.
// let a = undefined;
// console.log(typeof a);

// 	20.	Use const to create an array. Try reassigning the array and observe the error.
// const arr = [12,13,14];
// arr = [15,33,34,35,36,37,38];

// 3. Loops (10 Questions)
// 	21.	Write a for loop to print numbers from 1 to 50.
// for(let i = 1; i < 51; i++)
// {
//     console.log(i);
    
// }

// 	22.	Use a while loop to sum the numbers from 1 to 10.
// let i=1;
// while(i<11)
// {
//     console.log(i);
//     i++;
// }

// 	23.	Create a for...of loop to log each character of the string "JavaScript".
// var value = "JavaScript";
// for(var charc of value)
// {
//     console.log(charc);
// }

// 	24.	Write a for loop that skips even numbers between 1 and 20.
// for(let i = 0; i < 20; i++)
// {
//     if(i%2!=0)
//         console.log(i);
// }

// 	25.	Use a do...while loop to log numbers from 5 to 1.
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<6);

// 	26.	Create a for loop that calculates the factorial of 5.
// let num=5;
// let res =1;
// for(let i= 2;i<=num;i++)
// {
//     res = res*i;
// }
// console.log(res);

// 	27.	Write a nested loop to print a 3x3 grid of numbers.
// var grid = [[1,2,3],[4,5,6],[7,8,9]]
// for(let i=0;i<3;i++)
// {
//   for(let j=0;j<3;j++)
//  {
//     console.log(grid[i][j]);
//  }
// }

// 	28.	Use a for loop to reverse an array [1, 2, 3, 4].
// var arr = [1, 2, 3, 4];
// for(let i=arr.length-1; i>=0; i--)
// {
//     console.log(arr[i]);
// }

// 	29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
// let n=1;
// while(n<=100)
// {
//     if(n%5==0)
//         console.log(n," is divisible by 5");
//     n++;
// }

// 	30.	Use a for...in loop to iterate over an object and log its keys.
// var obj = {
//     name:"Dheeraj",
//     age:21
// }
// for(var key in obj) {
//     console.log(key)
// }

// 4. Arrays (10 Questions)
// 	31.	Create an array of your top 5 favorite movies and log it.
// let movies = ["A","B","C","D","E"];
// console.log(movies);

// 	32.	Find and log the second element of an array.
// let movies = ["A","B","C","D","E"];
// console.log(movies[1]);

// 	33.	Add two new elements to the start of an array using .unshift().
// let movies = ["A","B","C","D","E"];
// movies.unshift("P");
// console.log(movies);

// 	34.	Remove the last element of an array and log the updated array.
// let movies = ["A","B","C","D","E"];
// movies.pop();
// console.log(movies);

// 	35.	Use .slice() to extract the first three elements of an array.
// let movies = ["A","B","C","D","E"];
// let sliced = movies.slice(0,3);
// console.log(sliced);
// console.log(movies);

// 	36.	Find the index of a specific element in an array using .indexOf().
// let movies = ["A","B","C","D","E"];
// console.log(movies.indexOf("A"));

// 	37.	Check if a value exists in an array using .includes().
// let movies = ["A","B","C","D","E"];
// console.log(movies.includes("A"));

// 	38.	Combine two arrays [1, 2] and [3, 4] using .concat().
// let arr1 = [1,2];
// let arr2 = [3,4];
// console.log(arr1.concat(arr2));

// 	39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
// let arr = [2,2,11,2,3,1];
// console.log(arr);
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);

// 	40.	Write a program that creates a copy of an array without mutating the original.
// let arr1 = [1,2,3,4,5,6,7,8];
// let arr2 = [...arr1];
// arr2[0] = 5;
// console.log(arr1);
// console.log(arr2);

// 5. Functions (10 Questions)
// 	41.	Write a function to check if a number is even or odd.
// function isEvenOrOdd(num)
// {
//     if(num%2==0)
//         return "even";
//     else
//     return "odd";
// }
// console.log(isEvenOrOdd("5"));

// 	42.	Create a function to calculate the area of a circle with a given radius.
// function area(radius) {
//     console.log(Math.PI);
//     return Math.PI * radius *radius ;
// }
// console.log(area(7));

// 	43.	Write a function that accepts an array and returns the sum of its elements.
// function sum(arr)
// {
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sum([10,20,30,40,50]));

// 	44.	Create a function that checks if a string starts with a specific character.
// function check(str,char){
//     if(str.startsWith(char)){
//         console.log(str+" starts with "+char);
//     }
//     else{
//         console.log("not starting");
//     }
// }
// check("Dheeraj",'D');

// 	45.	Write a function to find the maximum of two numbers.
// function max(a,b){
//     if(a>=b)
//     {
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// console.log(max(10,20));

// 	46.	Create a function that takes a number and returns its factorial.
// function factorial(number){
//     let res = 1;
//     for(var i=2;i<=number;i++){
//         res = res*i;
//     }
//     return res;
// }
// console.log(factorial(5));

// 	47.	Write a function that accepts a string and returns its reverse.
// function reverse(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverse("Dheeraj"));

// 	48.	Create a function to find the largest number in an array.
// function largest(arr){
//     let max = arr[0];
//     for(var i=0; i<arr.length; i++)
//     {
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(largest([-10,-20,10,-8]));

// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").
// function kebabCase(str) {
//     return str.toLowerCase().replace(" ","-");
// }
// console.log(kebabCase('Hello World'));

// 	50.	Create a function that logs "Hello, World!" every time it is called.
// function call() {
//     console.log("Hello, World!");
// }
// call();
// call();

// 6. Conditionals (10 Questions)
// 	51.	Write a program to check if a number is positive, negative, or zero.
// let number = 10;
// if(number>0)
// {
//     console.log("number is positive");
// }
// else if(number<0){
//     console.log("number is negative");
// }
// else{
//     console.log("number is zero");
// }

// 	52.	Create a program to check if a year is a leap year.
// let year = 2000;
// let flag=0;
// if(year % 4 == 0)
//     {
//         if(year % 100 == 0 && year % 400 == 0)
//         {
//             console.log("leap year");
//             flag=1;
//         }
//         if(flag==0)
//         console.log("leap year");
//     }
// else {
//     console.log("not leap year");
// }

// 	53.	Write an if...else statement to determine if a person can vote based on their age.
// let age = 20;
// if(age>=18)
// {
//     console.log("person can vote");
// }
// else {
//     console.log("person can't vote");
// }

// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
// let number = 4;
// switch(number){
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break;
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break
//     case 6: console.log("Saturday"); break;
//     case 7: console.log("Sunday"); break;
//     default: console.log("Invalid number");
// }


// 	55.	Write a program to check if a number is divisible by 3 and 5.
// let num = 15;
// if(num%3 == 0 && num%5 == 0)
//     console.log("Number divisible");
// else 
//    console.log("Number not divisible");

// 	56.	Create a program to check the grade of a student based on marks.
// let marks = 30;
// if(marks>90 && marks<=100)
//     console.log("A grade");
// else if(marks>80 && marks<=90)
//     console.log("B grade");
// else if(marks>70 && marks<=80)
//     console.log("C grade");
// else if(marks>60 && marks<=70)
//     console.log("D grade");	
// else
//   console.log("E grade/fail");

// 	57.	Write an if condition to compare two strings and log if they are equal.
// let name1 = "Dheeraj";
// let name2 = "Prakash";
// if(name1==name2)
//     console.log("equal");
// else console.log("not equal");

// 	58.	Use a ternary operator to check if a number is even or odd.
// let n = 23;
// n%2==0?console.log("even"):console.log("odd");

// 	59.	Write a program to find the largest of three numbers using if...else.
// let n1 = 12;
// let n2 = 12;
// let n3 = 14;
// if(n1>=n2 && n1>=n3)
// {
//     console.log("n1 is largest of three numbers")
// }
// else if(n1<n2 && n2>n3)
// {
//     console.log("n2 is largest of three numbers")
// }
// else {
//     console.log("n3 is largest of three numbers")
// }

// 	60.	Create a program to calculate the discount based on the price of an item.
// let price = 80;
// let markedPrice = 100;
// let sellingPrice = 50;
// let discount = markedPrice - sellingPrice;
// console.log(discount);

// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.
// var obj = {
//     name:"Dheeraj",
//     age: 20,
//     city: "Bhopal"
// }
// console.log(obj);

// 	62.	Add a new property isStudent to the object above and set it to true.
// var obj = {
//     name:"Dheeraj",
//     age: 20,
//     city: "Bhopal"
// }
// obj.isStudent = true;
// console.log(obj);

// 	63.	Access and log the value of the city property using bracket notation.
// console.log(obj["city"]);

// 	64.	Delete the age property from an object and log the updated object.
// delete obj.age;
// console.log(obj);

// 	65.	Write a function that accepts an object and logs all its keys.
// function logAllKeys(obj) {
//    console.log(obj);
//    console.log(Object.keys(obj));
// }
// logAllKeys({
//     name:"Dheeraj",
//     age:20
// })

// 	66.	Create an array of objects representing books with title and author properties.
// const books = [
//     {
//         title: "ABC",
//         author:"John"
//     },
//     {
//         title: "PQR",
//         author:"Johny"
//     }
// ]
// console.log(books);

// 	67.	Access and log the author of the second book in the array.
// console.log(books[1].author);

// 	68.	Write a program to check if a specific key exists in an object.
// if(Object.keys(books[0]).includes("author"))
// {
//     console.log("key exist");
// }
//     or
// console.log(books[0].hasOwnProperty("author")) // gives true
// or
// let key  = "author" in books[0];
// console.log(key);

// 	69.	Create a function to count the number of keys in an object.
// var obj = {
//         name:"Dheeraj",
//         age: 20,
//         city: "Bhopal"
//     }
// let keys = Object.keys(obj);
// console.log(keys);
// console.log(keys.length);

// 	70.	Use Object.assign() to merge two objects.
// var obj1 = {
//         name:"Dheeraj",   
//     }
//  var obj2 = {
//         age: 20,
//         city: "Bhopal"
//  }   
 
//  var newObj = Object.assign(obj1, obj2)

//  console.log(newObj);

// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.
// let name = "Dheeraj";
// console.log(name.length);

// 	72.	Extract the last 4 characters of a string.
// console.log(name.slice(name.length - 4, name.length));
// console.log(name.substring(name.length-4, name.length));

// 	73.	Convert a string to lowercase and log it.
// let name = "DHEERAJ";
// console.log(name.toLowerCase());

// 	74.	Split a sentence into words using .split() and log the result.
// let sentence = "My name is Dheeraj Kumar Modi"
// let splitted = sentence.split(" ");
// console.log(splitted);

// 	75.	Find the position of the first occurrence of "a" in a string.
// let str = "rajan";
// console.log(str.indexOf("a"));

// 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
// let str = "I Love JavaScript";
// str = str.replace("JavaScript", "JS");
// console.log(str);

// 	77.	Repeat a string 3 times using .repeat().
// let str = "Dheeraj";
// str = str.repeat(3);
// console.log(str);

// 	78.	Create a function that checks if a string contains a specific word.
// let str = "My name is Dheeraj";
// if(str.includes("Dheeraj")) {
//     console.log("yes exists!");
// }

// 	79.	Write a program to remove whitespace from both ends of a string.
// let str1 = "    Dheeraj      ";
// console.log(str1.trim());

// 	80.	Create a function to count the number of vowels in a string.
// let name = "Dheeraj";
// let vowels = "aeiouAEIOU";
// let count = 0;
// for(let i= 0; i<name.length; i++)
// {
//     if(vowels.indexOf(name[i])!=-1)
//         count++;
// }
// console.log(count);

// Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.
// function evenNumbers(arr)
// {
//    const arr1 = arr.filter((elem)=>{
//      return elem%2==0
//    })
//    return arr1;
// }
// console.log(evenNumbers([10,21,22,11,46]));

// 	82.	Create a program to count the occurrences of a specific value in an array.
// var arr = [1,2,3,4,5,6,7,8,4,43,4,4,4,4,4,4,4];
// let count = 0;
// for (var i = 0; i < arr.length;i++) {
//     if(arr[i] == 4)
//         count++;
// }
// console.log(count);

// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.
// let str = "jahaj";

// function palindrome(str)
// {
//     let str1 = str.split("").reverse().join("");
//     if(str1===str)
//         console.log("Palindrome");
//     else
//      console.log("Not");  
// }
// palindrome(str);

    
// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****
// for(var i=1;i<=4;i++)
//  {
//     var l = ""
//     for(var j=1;j<=i;j++)
//     {
//         l+="*"
//     }
//     console.log(l) ;
//  }  

// 	85.	Write a function that returns the square of each number in an array.
// let arr = [1,2,3,4,5,6,7,8];
// function squareFunction(arr)
// {
//     const arr1 = arr.map((elem)=>{
//         return elem**2;
//     })
//     return arr1;
// }
// console.log(squareFunction(arr));

// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
// let sum =0;
// for(var i=1;i<=49;i++)
//     {
//        if(i%2!=0)
//        {
//         sum+=i;
//        }
//     }
// console.log(sum);

// let num = 50;
// let total = Math.floor((num/2))+(num%2);
// let res = total*total;
// console.log(res);


// 	87.	Create an object representing a person and log their full name.
// var person = {
//     fullName: 'John Mishra',
//     age: 18
// }
// console.log(person.fullName);

// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
// let numS = "10";
// let num = Number(numS)+5;
// console.log(num);

// 	89.	Write a program to reverse an array without using .reverse().
// let arr = [1,2,3,4,5];
// let i=0;
// let j = arr.length-1;
// while (i<j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]
//     i++;
//     j--;
// }
// console.log(arr);

// 	90.	Create a program to check if an array is empty.
// let arr =[];
// if(arr.length === 0) {
//     console.log("empty")
// }
// else{
//     console.log("not empty");    
// }

// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
// let year = new Date().getFullYear();
// let month = new Date().getMonth()+1;
// let day = new Date().getDate();
// let date = day+"/"+month+"/"+year;
// console.log(date);

// 	92.	Write a program to find the smallest number in an array.
// let arr = [10,11,-3,8,-9];
// let small = arr[0];
// for(let i=1; i<arr.length; i++)
// {
//     if(arr[i] < small)
//     {
//         small = arr[i];
//     }
// }
// console.log(small);

// 	93.	Create a function to return the Fibonacci sequence up to n terms.
// function fibonacci(n)
// {
//     let res = "0 1 "
//     let a=0;
//     let b=1;
//     for(let i=3;i<=n;i++)
//     {
//         let c = a+b;
//         res+=c + " ";
//         a=b;
//         b=c;
//     }
//     return res;
// }
// console.log(fibonacci(10));

// 	94.	Use a try...catch block to handle division by zero.
// let num = 20;
// let div = 8;
// try{
//     if(div>0)
//         console.log(num/div);
//     else 
//      throw new Error("not divisible by zero")

// }catch(e)
// {
//     console.log(e);
// }

// 	95.	Write a program to find the index of the first vowel in a string.
// let string = "Dheeraj";
// let vowel = "aeiouAEIOU";
// for(let i = 0; i <string.length; i++){
//     if(vowel.indexOf(string[i])!=-1)
//     {
//         console.log(i,string[i]);
//         break;
//     }
// }

// 	96.	Create a function that accepts an array and returns only unique values.
// var arr = [1,2,3,4,4,6,7,1,3];
// let newarr = []
// for(let i=0; i<arr.length; i++)
// {
//     if(newarr.indexOf(arr[i])==-1)
//         newarr.push(arr[i]);
// }
// console.log(newarr);

// 	97.	Write a program to merge two sorted arrays into one sorted array.
// var arr1 = [1,2,3,4,5];
// var arr2 = [3,5,7,8];
// var arr3=[];
// let i=0,j=0;
// let n1 = arr1.length;
// let n2 = arr2.length;
// while(i<n1 && j<n2)
// {
//     if(arr1[i]<arr2[j])
//     {
//         arr3.push(arr1[i]);
//         i++;
//     }
//     else
//     {
//         arr3.push(arr2[j]);
//         j++;
//     }
// }
// while(i<n1)
// {
//     arr3.push(arr1[i]);
//     i++;
// }
// while(j<n2)
// {
//     arr3.push(arr2[j]);
//     j++;
// }
// console.log(arr3);

// 	98.	Create a function to count the number of words in a string.
// let str = "hello world hello world and world";
// function count(str,match) {
//     let count = 0;
//     let splitted  = str.split(" ");
//     for(let i = 0; i < splitted.length; i++) {
//         if(splitted[i]===match)
//             count++;
//     }
//     return count;
// }
// console.log(count(str,"world"));

// 	99.	Write a program to toggle a button’s background color when clicked.
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(e){
//     btn.style.backgroundColor ="blue";
// });

// 	100.	Write a function to check if all elements in an array are greater than a specific value.
// let arr = [12, 13, 14, 15];
// let val = 110;
// let flag=1;
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < val){
//         console.log("not all");
//         flag=0;
//         break;
//     }
// }
// if(flag==1)
//     console.log(" yes all");


// These questions cover a wide range of fundamental JavaScript concepts. Let me know if you’d like further clarification or solutions for any of these!