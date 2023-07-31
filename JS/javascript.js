// document.write("<h1>","Hello world...","<h1>");
// document.write("<h1>","Hello world...","<h1>");
// document.write("<h1>","Hello world...","<h1>");

// x = alert('hello!');
// document.write(x);

// x = 20;
// y = 30;
// z = x+y;
// alert(z);
// document.write(z);


// age = prompt("Enter your age ");
//     if(age){
// document.write("Your age is :- ",age);


//     }
//     else{
// document.write("You can't entered your age");



//     }


// del = confirm("Are you sure you want to delete this content ");
//      if(del){
//         document.write("Deleted.");

//     }else{
//         document.write("Not Deleted.");


//      }


            //  LOOPS IN JAVASCRIPT 
            //  LOOPS IN JAVASCRIPT 


// let counter = 0;
// while(counter <= 20){
//     if(counter==10){
//         continue;

//     }
//     document.write(counter,"HELLO WORLD","<br>");
//     counter=counter+1;

// }

// let do_while = 0;
// do{
//     document.write(do_while,"<br>");
//     do_while++;
// }
// while(do_while>=10);


// for(let x = 10 ; x > 0; x--){
//     document.write(x,"<br>");
//     for(let y = 0; y<2;y++){
//         document.write("hello...","<br>");
//     }
// }


// outer: for(let x = 0; x <= 6; x++){
   
//     inner: for(let y = 0; y<=6;y++){
       
//         document.write("  * ");
//     }
//     document.write('<br>');

// }

// for(let x = 0; x <= 8; x++){
//     if(x == 4){
//     document.write("HELLO WORLD.");

//         continue;


//     }
//     document.write("HELLO","<br>");
// }

        //    ALERT PROMPT CONFIRM


// let age = prompt("enter your age");

// if(age){
//     document.write("your age is ",age);

// }
// else{
//     document.write("age field is blank ");
// }

// let con = confirm("do you like this webpage ");
// if(con){
//     document.write("THANKS...");

// }
// else{
//     document.write("SORRY!!!");


// }



        //   DATA TYPE CONVERSIONS
        //   DATA TYPE CONVERSIONS
        //   DATA TYPE CONVERSIONS


// let x = "19" * "hello";
// document.write(x,"____",typeof(x));

// let type = "hello";
// document.write(type,"___",typeof(type));
// let new_type = Boolean(type);
// document.write("<br>");
// document.write(new_type,"___",typeof(new_type));


// let num = false;
// document.write(num,"___",typeof(num),"<br>");
// let bool = Number(num);
// document.write(bool,"___",typeof(bool));

// let str = "Hello javascript Hello";
// document.write(str.length);


// let str = "Hilal Ahmad Ganie";
// // let str_2 = `Hi ${str}`;
// document.write(str[6]);

// let str = "Hilal Ahmad Ganie";
// let str_2 = "Hilal Ahmad Ganie";

// document.write(str +" hello "+ str_2);

// let str = "Hilal Ahmad Ganie";
// let str_2 = "Hilal Ahmad ganie";

// if(str == str_2){
//         document.write("Equal");

// }
// else{
//         document.write("Not Equal");


// 


// let str ="hilal ahmad ";
// let str_2 ="waseem ahmad ";
// str_3 = str.concat(str_2);
// document.write(str_3);


// let str ="hilal ahmad ganie";
// let str_2 = str.substring(0 , 11);
// document.write(str_2)


// let str ="wel come to javascript programming language";
// let position = str.lastIndexOf('j');
// document.write(position)


// let str =" wel come to javascript programming language " ;
// let trm = str.trim();
// console.log(str);
// console.log(trm);


// let str =" wel come to javascript programming language " ;

// let upper = str.toLowerCase();
// document.write(upper);


// let str =" wel come to javascript programming language " ;

// let rep = str.replace('wel come to','Hello');
// document.write(rep);


// let str =" wel come to javascript programming language " ;

// let inc = str.includes('javascript');
// document.write(inc);

/*
let str = "wel come to javascript programming programming"; 
let str2 = str.toString(); 
document.write(str2+200);*/

//arrays  in javascript programmingegh
/*
ary = ["Hilal","waseem","FDH","Gowher","junaid"];
for(let x=0;x<=10;x++){
        document.write("<i>","<u>","<li>",ary,"<br>");
}*/


// books.length=0;
// let position = books.indexOf('computer science');
//let books_1 = "mathus";
//document.write(Array.isArray(books_1));
// num = [1,10,20,30,40];
// document.write(num[4])
// let books = new Array("math","science","computer");
// document.write(books[0]);


//let text = "this is a random text";
//let word = text.split(' ');
//document.write(word);

//let arry = ["math","science","english","computer science"];
//let arry_2 = ["physics","chemestry","english","computer science"];
//let arry_3 = ["physics","chemestry","english","computer science"];
//let con = arry.concat(arry_2,arry_3);
//let jon = arry.join('-')
//document.write(con);


// let book = ["math","science","english","computer science"];
// let boolpages = [
//         ["Science" , " -- 300"] , 
//          ["Physics" , " -- 400"] , 
//          ["biology" , " -- 675"]];
// document.write(boolpages[0],"<br>");
// document.write(boolpages[1],"<br>");
// document.write(boolpages[2],"<br>");

// document.write(boolpages[2]);

// let book = ["math","science","english","computer science"];
// let revr = book.find('english');
// document.write(revr);

// let books = [
//         ["english" , " :- 550"],
//         ["math" , " :- 567"],
//         ["science" , " :- 342"],
//         ["computer" , " :- 1111"]
// ];

// document.write(books[0],"<br>");
// document.write(books[1],"<br>");
// document.write(books[2],"<br>");
// document.write(books[3],"<br>");

// var arry = ["hilal","waseeem","gowher","junaid"];
// arry.fill('HILAL');
// document.write(arry);


// document.write("wel come to javascript");

// var now = new Date();
// document.write(now.toDateString());
// document.write(now.getFullYea());
// document.write(now.getMonth());
// document.write(now.setDate());

// var now = new Date();
// document.write(now.toDateString(),"<br>");
// document.write(now.getHours(),"<br>");
// document.write(now.getMinutes(),"<br>");
// document.write(now.getSeconds(),"<br>");

// // document.write(now.setDate(1000));

// var update = now.setDate(1000);
// document.write(update);

// let arry = [["english","4567"],
//            ["science" , "344"],
//             ["maths" , "444"],
//             ["computer","55555"]
//         ];
// fetc = arry[0][1];
// document.write(fetc);



// let books = ["English" , "math" , "science" ,"computer science","urdu"];
// let arrylength = books.length;
// console.log(arrylength);
// for(i=0;i<arrylength;i++){
//         document.write(`Element ${i} is ${books[i]}`,"<br>");
// } 

// let books = ["English" , "math" , "science" ,"computer science","urdu"];

// books.forEach(fetc);

// function fetc(value) {
//         console.log("Element :- ",value);

// }



                        // FUNCTIONS IN JAVASCRIPT PROGRAMMIG LANGUAGE
                        // FUNCTIONS IN JAVASCRIPT PROGRAMMIG LANGUAGE
                        // FUNCTIONS IN JAVASCRIPT PROGRAMMIG LANGUAGE
// function print(){
//         document.write("wel come to functions");
// }
// print();
// print();
// print();
// let x = 5;
// for(let i=1;i<=10;i++){
//         // document.write("<b>",x ,"*",i,"=",5*i,"</b>","<br>"); 
//         document.write(`5 * ${i} = ${5 * i}`,"<br>");

// }
// function multiplication(num){
// for(let i=1;i<=10;i++){
//         document.write(` ${num} * ${i} = ${num * i}`,"<br>");

// }
// }
// multiplication(7);

// function addition(a,b){
//         document.write(a+b);

// }
// addition(10,20);

// function compression(num1,num2){
//         if(num1>num2){
//                 document.write(num1," is greater than ",num2);
//         }
//         else{
//                 document.write(num2," is greater than ",num1);
//         }
// }
// compression(10,16);

// function addition(){
//         if(arguments.length == 0){
//                 document.write("No argument passed.");
//         }
//         else{
//                 let sum = 0;
//                 for(let i=0;i<arguments.length;i++){
//                         sum = sum + arguments[i];
//                 }
//                document.write(sum);
//         }
// }
// let add = addition;
// add(40,3);
// addition();

// function add(a,b){
//       if(a>b){
//         return 1;
//       }
//       else if(b>a){
//         return -1;

//       }
//       else{
//         return 0;
//       }

// }
// let c = add(10,50);
// // add(100,10);
// document.write(c);


//global variable and local varaible
// var glo = "hello global variable.";

// function show(){
//         // var glo ="HEllo javascript"; 
//         document.write("hello world");
//         console.log(glo);

// }
// show();
// function show(){
//         // var glo ="HEllo javascript"; 
//         document.write("hello world");
//         console.log(glo);
// }
// show();

// ANONYMOUS FUNCTION IN JAVASCRIPT PROGRAMMING LANGUAGE
// ANONYMOUS FUNCTION IN JAVASCRIPT PROGRAMMING LANGUAGE
// ANONYMOUS FUNCTION IN JAVASCRIPT PROGRAMMING LANGUAGE

// let ANONYMOUS = function  (){
//         console.log("hello world");
// }
// ANONYMOUS();


// immadate invoked function
// immadate invoked function

// (function  (){
//         console.log("hello world and javascript programming language...");
// }) ();



                // local and global variables 
                // local and global variables 
                // local and global variables 



// let glo = "hello global variables"; //global variable javascript programming 
// function show(){
//         var loc = ("hello local variables");//local variable in javascript programming
//         console.log(loc);
//         console.log(glo);
// }
// show();
// console.log(glo);


// ANONMOUS FUNCTION IN JAVASCRIPT PROGRAMMING LANGUAGES
// ANONMOUS FUNCTION IN JAVASCRIPT PROGRAMMING LANGUAGES

        //function expression
// let show = function (){
//         console.log("hello world");
// }
// show();


// let show = function (){
//         console.log("hello world");
// }
// setTimeout(show,3000);


// setTimeout(function (){
//         console.log("hello world");
// },3000);


// IMMADATE INVOKED Function
// IMMADATE INVOKED Function



// (function (){
//          let str = "hello";
//          console.log("hello world");
//          console.log(str);

//         alert("hiii")
// })();


// document.write("🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯");




// OBJECTS IN JAVASCRIPT PROGRAMMING 
// OBJECTS IN JAVASCRIPT PROGRAMMING 
// OBJECTS IN JAVASCRIPT PROGRAMMING 



// var person = {
//         "Hilal" : "Software Developer",
//         "Waseem" : "web Developer",
//         "Gowher" : "app Developer"
// };
// document.write(person);

// let books_pages = {
//         book_1 : "Computer Fundamentals",
//         book_2 : "Computer networking",
//         book_3 : "Computer programming" 
// }
// console.log(books_pages['book_1']);




// let books_pages = {
//         book_1 : "Computer Fundamentals",
//         book_2 : "Computer networking",
//         book_3 : "Computer programming" 
// }
// books_pages.book_1 = "Javascript programmng book";
// books_pages.book_4 = "python programming book"; 
// delete books_pages.book_4;
// console.log('book_1' in books_pages);




// let books_pages = {
//         book_1 : "Computer Fundamentals",
//         book_2 : "Computer networking",
//         book_3 : "Computer programming" 
// }
// for(let x in n = books_pages){
//         console.log(x+ " : " +books_pages[x]);

// }



// METHODS IN JAVASCRIPT PROGRAMMING LANGUAGE
// METHODS IN JAVASCRIPT PROGRAMMING LANGUAGE

// person.sayhello = function () {
//         console.log("HELLO USERS.!!!");

// }
// person.sayhello();


// var books = {
//         book1 : "COMPUTER FUNDAMENTALS",
//         book2 : "JAVASCRIPT PROGRAMMING FUNDAMENTALS",
//         book3 : "ARTIFICAL INTELEGENGE FUNDAMENTALS",
//         book4 : "MECHINE LEARNING FUNDAMENTALS"
// }
// console.log(books["book1"]);
// console.log(books["book2"]);
// console.log(books["book3"]);
// // console.log(books.book1);
// // console.log(books.book2);
// // console.log(books.book3);
// // console.log(books);


             //immedate function in javascript
             //immedate function in javascript

// (function (){
//         console.log("hello javascript prgramming");
//         console.log("hello javascript prgramming");

// })();
            

        //       anonymous function in js
//         //       anonymous function in js

// let anon = function () {
//         console.log("hello anonyomous function in javascript");
//         console.log("hello anonyomous function in javascript");
// }
// anon();



//  function show() {
//         console.log("hello anonyomous function in javascript");
//         console.log("hello anonyomous function in javascript");
// }
// setTimeout(show , 2000);




// setTimeout( function show() {
//         console.log("hello anonyomous function in javascript");
//         console.log("hello anonyomous function in javascript");
// } , 3000);


// (function () {
//         console.log("hello anonyomous function in javascript");
//         console.log("hello anonyomous function in javascript");

// })();

// let massage = "hello origional javascript file";
// function show() {
//         console.log(massage);
//         console.log(massage);
// }
// show();

// var obj = {
//         car : "tesla",
//         book : "javascript",
//         place : "kupwara",
//         mobile : "samsung"
// }
// obj.laptop = "dell",
// obj.book = "python programming fundamentals";
//  for(let show in obj){
//         console.log(show + " : " + obj[show]);

//  }


// delete obj.book;
// console.log(obj);
// console.log(obj.name); 
// console.log('mobile' in obj);

// var person = {
//         name : "Hilal Ahmad ",
//         age : "12222",
//         sayhello () {
//                 console.log("Hello i am "+ this.name +"and i need a "+ car.car_1 +" car.");
//         }

// };
// let car = {
//         car_1 : "tesla",
//         cae_2 : "rangrover"
// }
// person.sayhello();
// person.saying = function () {
//         console.log("HELLO WORLD!!!");
// }
// person.saying();


// function greet() {
//         console.log("hello!!!");

// }
// person.sayhello = greet;
// person.sayhello();

      
//console.log(Math.E);
// var x = Math.round(4.4);
// console.log(x);




// MATH OBJECTS
// MATH OBJECTS

// const x = Math.PI
// console.log(x);


// const x = Math.E
// console.log(x);


// const x = Math.round (5.7);
// console.log(x);

// const x = Math.ceil (4.1);
// console.log(x);

// const x = Math.floor(6.7);
// console.log(x);


// const x = Math.trunc (10.7);
// console.log(x);         


// DATE OBJECTS IN JAVASCRIPT
// DATE OBJECTS IN JAVASCRIPT

// let x = "22 feb 2023";
// console.log(x);

// let date = new Date("oct 13, 2021 11:55:33");
// date.setDate(date.getDate() + 5000);

// console.log(date);

// date.setFullYear(2023)
// date.setMonth(2)
// date.setDate(2)
// date.setMinutes(2)
// date.setHours(2)
// date.setSeconds(2)

// var time = new Date();
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());

// var x = {
//         name : "hilal",
//         age : "20",


//         set setname(a){
//                 this.name = a.toUpperCase();

//         }
// }
// x.setname = "waseem";
// console.log(x);

// var person = new Object();
// person.name = "Hilal ahmad ganie";
// person.age = "20";
// console.log(person.name)
// console.log(person.age)

// var student_1 = {
//         firstname : "hilal",
//         lastname : "waseem",
//         age : "23",
//         class : "12th"
// }

// function student(first , last , age , cls) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.class = cls;
// }
// student.prototype.address = "KalarooS";
// var stdunt_1 = new student("Hilal Ahmad Ganie, Hilal ", 23 , 12);
// var stdunt_2 = new student("Hilal Ahmad Ganie, Hilal ", 23 , 12);



// console.log(stdunt_1);


// var user = {
//         id : 1001001,
//         email : "abc@gmail.com",

//         personal_info : {
//                 name : "Hilal",
//                 address : {
//                         district : "Kupwaera",
//                         married_unmarried : "unmarried",
//                         address : "kalaroos kupwara",


//                 }
//         }
// }
// console.log(user.personal_info.address.address);

                      //hosting in javascript programming
                      //hosting in javascript programming
// hello();

// function hello(){
//         console.log("Hello World...");
// }

// let x;
// console.log(x);
// x = 9;
// console.log(x);
// var x = 10;
// x=10;


// console.log(x);
// let x;
// x=10;

// "use strict"
// x = 10;
// console.log(x);




                        //DOM DOCUMENT OBJECT MODEL IN JAVASCRIPT PROGRAMMING LANGUAGE    !IMPORTANT!
                        //DOM DOCUMENT OBJECT MODEL IN JAVASCRIPT PROGRAMMING LANGUAGE    !IMPORTANT!
                        //DOM DOCUMENT OBJECT MODEL IN JAVASCRIPT PROGRAMMING LANGUAGE    !IMPORTANT!





// var elm = document.getElementById("heading1");
        // elm.innerHTML = "<b> hello bold tag </b>";

        // var elm = document.getElementsByClassName("para");
        // // console.log(elm.length);
        // for(let i = 0; i < elm.length; i++){
        //     elm[i].innerHTML = "<h1> HELLO JAVASCRIPT </h1>"
        // }

        // var elm = document.getElementsByTagName("h1");
        // // console.log(elm);
        // for(let i = 0; i < elm.length; i++){
        //     elm[i].innerHTML = "<h6> HEADINGS IN JAVASCRIPT </h6>";
        //     // console.log(elm[i]);
        // }
        // var box = document.getElementById("div");

        // var elm = box.getElementsByTagName("h1");

        // for(let i = 0; i < elm.length; i++){
        //     elm[i].innerHTML = "HII I AM JAVASCRIPT";
        // }


        // var elm = document.querySelector("p.para");
        // elm.innerHTML = "<b> HII I AM JAVASCRIPT </b>";
        

        // var elm = document.querySelectorAll("h1");
        // for(let i=0;i<elm.length;i++){
        //     elm[i].innerHTML = "JAVASCRIPT PROGRAMMING LANGUAGE";
        //     // console.log(elm[i])
        // }

        // let elm = document.getElementById("child");
        // var parent = elm.parentElement;
        // parent.innerHTML = "HILAL";
        
        // console.log(parent);
        
        // console.log(parent);
        // console.log(elm);

        // let elm = document.getElementById("parent");
        // let child = elm.children;
        // // console.log(child.length);

        // for(i=0;i<child.length;i++){
        //     child[i].innerHTML = "HELLO JAVASCRIPT";
        // }

        // var elm = document.getElementById("child");
        // var child = elm.nextElementSibling.nextElementSibling;
        // console.log(child);

        // var elm = document.getElementById("child");
        // var get = elm.innerHTML;
        // console.log(get);

        // var elm = document.getElementById("child");
        // elm.innerHTML = "HILAL AHMAD GANIE ";
        // console.log(elm);



        // var elm = document.getElementById("parent");
        // var adding = document.createElement("h1");
        // elm.appendChild(adding);

        // let text = document.createTextNode("HELLO WORLD AND JAVASCRIPT");
        // adding.appendChild(text);


        // var elm = document.getElementById("parent");
        // var add = document.createElement("h1");
        // elm.appendChild(add);
        // var text = document.createTextNode("WEL COME TO DOM IN JAVASCRIPT");
        // add.appendChild(text);
        // add.appendChild(text);

        // var elm = document.getElementById("parent");
        // var tag = document.createElement("h2");
        // // var id = tag.id = "headings";
        // var cls = tag.className = "headings";
        // // elm.appendChild(tag);
        // var content = document.createTextNode("HII I AM HILAL AHMAD GANIE");
        // tag.appendChild(content);
        // elm.appendChild(tag);

        
        // var elm = document.getElementById("parent");
        // var tag = document.createElement("h2");
        // var cls = tag.className = "headings";
        // var content = document.createTextNode("HII I AM HILAL AHMAD GANIE");
        // tag.appendChild(content);
        // document.body.appendChild(tag);


        // var elm = document.getElementById("parent");
        // var tag = document.createElement("h2");
        // var add = tag.textContent = "HII I AM HILAL";

        // elm.appendChild(tag);

        // var elm = document.getElementById("parent");
        // var newtag = document.createElement("h2");
        // newtag.textContent = "HILAL AHMAD GANIE";
        // // elm.appendChild(newtag);
        // document.body.appendChild(newtag)

       

        // var elm = document.getElementById("para");
        // console.log(elm.textContent);


        // var elm = document.getElementById("parent");
        // var item = document.createElement("li");
        // item.textContent = "list-5";
        // elm.appendChild(item);


        // var elm = document.getElementById("parent");
        // var add = document.createElement("li");
        // add.textContent = "item-5";
        
        // var pos = elm.firstElementChild.nextElementSibling.nextElementSibling;
        // elm.insertBefore(add , pos);

               
        
                // var parent = document.body;
                // var elm = document.createElement("h1");
                // elm.textContent = "HELLO JAVASCRIPT PROGRAMMING LANGUAGE";

                // var id = document.getElementById("parent");
                // parent.insertBefore(elm,id);

                // var parent = document.body;
                // var elm = document.createElement("h2");
                // elm.textContent = "HELLO JAVASCRIPT PROGRAMMING LANGUAGE";

                // var id = document.getElementById("parent");
                // parent.insertBefore(elm , id);


    
    //  var parent = document.getElementById("parent");
    //  let elm = parent.firstElementChild;
    //  console.log(elm);
    //  document.body.removeChild(parent);

    //  parent.removeChild(elm);


    
        // let button = document.getElementById("btn");
        // button.setAttribute("class" , "form_1");
        // console.log(button);
                

        // let button = document.getElementById("btn");
        // button.setAttribute("class" , "hilal");

        // let val = button.getAttribute("class");
        // console.log(val);


        // let button = document.getElementById("btn");
        // let val = button.removeAttribute("name");
        // console.log(val);

        // var button = document.getElementById("btn");
        // button.setAttribute("class" , "button");
        // console.log(button);

        // var button = document.getElementById("btn");
        // var get = button.getAttribute("id")
        // console.log(get);
        // var get2 = button.getAttribute("class");
        // console.log(get2)
        // var get3 = button.getAttribute("name");
        // console.log(get3)



        // var button =  document.getElementById("btn");
        // var rem = button.removeAttribute("class");
        // console.log(rem);


        // var btn = document.getElementById("btn");
        // var avl = btn.hasAttribute("class");
        // console.log(avl)



 // var button = document.getElementById("btn");
        // button.style.color = "white";
        // button.style.background = "orange";
        // button.style.padding = "10px";
        // button.style.border = "none";

        // var btn = document.getElementById("btn");
        // btn.style.cssText = "text-transform :uppercase;"
        // var css = getComputedStyle(btn);
        // console.log(css);

        // var btn = document.getElementById("btn");
        // btn.style.cssText = "background-color:red;"
        // var css = getComputedStyle(btn);
        // console.log(css.background);
        
                        // css classes
                        // css classes
                        // css classes
    
    // var box = document.getElementById("box");
    // box.className += "dim";
    // console.log(box.className);
    // console.log(box);

    // var box = document.getElementById("box");
    // // console.log(box.classList);
    // for(let css of box.classList){
    //     console.log(css);

    // }

    // var box = document.getElementById("box");
    // box.classList.toggle("color");

                    // width and height
                    // width and height
                    // width and height
    
    // var box = document.getElementById("box");
    // let width = box.offsetWidth;
    // let height = box.offsetHeight;
    // console.log(width);
    // console.log(height);


    // var box = document.getElementById("box");
    // let width = box.clientWidth;
    // let height = box.clientHeight;
    // console.log(width);
    // console.log(height);

    // var box  = document.getElementById("box");
    // let width = box.offsetWidth;
    // let height = box.offsetHeight;
    // console.log(width);
    // console.log(height);

    
    // var box  = document.getElementById("box");
    // let width = box.clientWidth;
    // let height = box.clientHeight;
    // console.log(width);
    // console.log(height);

    


//     box.classList.add("dim");
    // box.classList.add("color");

    // box.classList.remove("color");
    // box.classList.remove("dim");

    // box.classList.replace("dim","color");
    // box.classList.replace("color","dim");

    // var res = box.classList.contains("color");
    // console.log(res);

    // box.classList.toggle("color")
    // box.classList.toggle("dim")




    // // var cls = box.className += "dim";
    // // console.log(cls)
    // // console.log(box.classList);

    // for(let css of box.classList){
    //     console.log(css);

    // }





    
    // check width and Height 
                // check width and Height 

        // var box = document.getElementById("box");
        // let width = box.offsetWidth;
        // let height = box.offsetHeight;
        // console.log(width);
        // console.log(height);


                
        // var box = document.getElementById("box");
        // let width = box.clientWidth;
        // let height = box.clientHeight;
        // console.log(width);
        // console.log(height);
       



    // DOM events in javascript programming  !important//
        // DOM events in javascript programming  !important//
        // DOM events in javascript programming  !important//


        // function btnclick() {
        //     alert("button was clicked...")
        // }

    
        // var btn = document.getElementById("button");
        // btn.addEventListener('click' , btnclick);
        // function btnclick() {
        //     alert("button was clicked...")
        // }



        //   var btn = document.getElementById("button");
        // btn.addEventListener("click" , function(){
        //     alert("button was clicked")
        //     document.write("<b>HELLO BUTTON </b.");

        // });



        // var btn = document.getElementById("btn");
        // btn.addEventListener('click', function(){
        //     alert("hello MouseOver....");
        // });

        //   var btn = document.getElementById("button");
        // btn.addEventListener("click" , function(){
        //     alert("mouse-Click is done")

        // });

        // btn.addEventListener("mouseover" , function(){
        //     alert("mouse-over is done")

        // });

        // btn.addEventListener("mouseout" , function(){
        //     alert("mouse-out is done")

        // });

        // window.addEventListener('DOMContentLoaded', function(){
        //     console.log("DOM IS PROPERLY LOADED...")
        // })
        // var image = document.getElementById("img")
        // image.addEventListener('load', function(){
        //     // console.log("DOM IS fully LOADED...")
        //     console.log(image)
        // })


        // var btn = document.getElementById("button");

        // function click1() {
        //     alert("event 1 is done...");
        // }

        // function click2() {
        //     document.write("event 2 is done...");
        // }
    
        // btn.addEventListener('click',click1);
        // btn.addEventListener('click',click2);


        // btn.removeEventListener('click',click2);

        // function fun() {
        //     alert("double is clicked");
        // }
       

        // var click = document.getElementById("box");
        // click.addEventListener('dblclick', function(){
        //     alert("Double click is clicked");

        // });
    

        // window.addEventListener('keydown' , checkkey);
        // function checkkey(store) {
        //     console.log(store.key);

        // }

        // window.addEventListener('keyup' , checkkey);
        // function checkkey(store) {
        //     console.log(store.key);

        // }


        // window.addEventListener('wheel', function (event){
        //     if(event.deltaY < 0){
        //         console.log("scrolling Up...");

        //     }
          
        //     else if(event.deltaY > 0){
        //         console.log("scrolling down...");
            
        //     }
          
        // });

        
        // window.addEventListener('scroll' , function(){

        //     if(window.pageYOffset > 150){
        //        document.body.style.background = "royalblue";

        
        //     }
           
        //     else if(window.pageYOffset < 150){
        //        document.body.style.background = "white";

        //     }
        // });

//         var input = document.getElementById("myinput");

//         input.addEventListener('focus' , focusfun);
//         input.addEventListener('blur' , blurfun);

//         function focusfun() {
//             input.style.background = "green";
//             input.style.color = "white";

//         }
//         function blurfun() {
//             input.style.background = "white";
//             input.style.color = "black";

// }

        // var input = document.getElementById("myinput");
        // input.addEventListener('focus' , focusfun);
        // input.addEventListener('blur' , blurfun);

        // function focusfun() {
        //     input.style.background = "orange";
        //     input.style.color = "white"
        //     input.style.width = "400px";

        // }
        // function blurfun() {
        //     input.style.background = "white";
        //     input.style.color = "black";
        //     input.style.width = "50px";

  
        // }


       
        // var input = document.getElementById("myinput");
        // input.addEventListener("input" , changefun);

        // function changefun() {
        //     console.log(this.value);
        // }


        // var div = document.getElementById("div");
        // var btn = document.getElementById("btn");

        // btn.addEventListener("click" , btnclick);
        // div.addEventListener("click" , divclick );
        // document.body.addEventListener("click" , bodyclick );

        // function btnclick(event) {
        //     console.log("Button was clicked");
        //     event.stopPropagation();

        // } 
        // function divclick(event) {
        //     console.log("div was clicked");
        //     event.stopPropagation();


            
        // } 
        // function bodyclick(event) {
        //     console.log("body was clicked");
        //     event.stopPropagation();


            
        // }


        // PREVENT DEFAULT 


        // let anchor = document.getElementById("link");
        // anchor.addEventListener("click" , function(event){
        //     console.log("Link clicked...");
        //     event.preventDefault();

        // })


        // var div = document.getElementById("div");
        // var btn = document.getElementById("button");
        // var body = document.body;

        // div.addEventListener("click" , divfun);
        // btn.addEventListener("click" , buttonfun);
        // body.addEventListener("click" , bodyfun);

        // function divfun(event){
        //     console.log("div is clicked");
        //     event.stopPropagation();
            

        // }
        // function buttonfun(event){
        //     console.log("button is clicked");
        //     event.stopPropagation();



            
        // } function bodyfun(event){
        //     console.log("body is clicked");
        //     event.stopPropagation();



            
        // }


        // var input = document.getElementById("input");
        // input.addEventListener("click" , inputfun);

        // function inputfun(event) {
        //     console.log("link Clicked...")
        //     event.preventDefault();
        // }


         // var x = "hello...";
        // console.log(window.x);

        // function fun() {
        //     console.log("HELLO WORLD !!!");
        // }
        // window.fun();

        // window.alert("Hello world !!!")
        //window.prompt("Hello world !!!")
       //window.confirm("Hello world !!!")

        // var x = "hello...";
        // console.log(window.x);


        // var width = window.innerWidth;
        // var height = window.innerHeight;
        // document.write("Inner width = ",width,"<br>");
        // document.write("Inner height = ",height);

        // document.write("<br> <br>")

        // var o_width = window.outerWidth;
        // var o_height = window.outerHeight;
        // document.write("Outer width = ",o_width,"<br>");
        // document.write("Outer height = ",o_height);
    
        // document.write(window.innerWidth,"<br>");
        // document.write(window.innerHeight);

        // console.log(window.outerWidth);
        // console.log(window.outerHeight);
    
        // var button1 = document.getElementById("btn1");
        // var button2 = document.getElementById("btn2");
        // var button3 = document.getElementById("btn3");
        // let win ;
        
        // button1.addEventListener("click" , function() {
        //     win = window.open("https://www.google.com" , "google" , "height=500 ,width=500px");
        // })

        // button2.addEventListener("click" ,function() {
        //     win = window.open("https://www.yahoo.com" , "google","width=600 , height=600");
        // })

        // button3.addEventListener("click" ,function(){
        //     win.close();


        // });


        // setTimeout(() => {
        //     alert("HELLO I AM ALERT FUNCTION !!! ")
            
        // }, 5000);
    
        // setTimeout( timefun , 2000);
        // function timefun() {
        //     alert("hello world...")
        // }
    
        // let set = setTimeout( function() {
        //     alert("hiin i am alert...");
        // },2000);

        // clearTimeout(set);
    
    
        // setInterval(function() {
        //    document.write("hello i am alert function...");

        // },1000);
    
        // var btn = document.getElementById("clear_btn")

        // var time = setInterval( () => {
        //     console.log("Hello World...")
        // },1000);

        // btn.addEventListener("click" , function() {
        //     clearInterval(time);
        // })
    

        // console.log(window.location.href);
        // console.log(location.pathname);
        // console.log(location.protocol);
        // console.log(location.port);

        //     var btn = document.getElementById("btn");
        //     btn.addEventListener("click" ,  function() {
        //     location.assign("https://www.google.com") ;
        // });
       



                                                                                                                                                                                     
            // var btn = document.getElementById("btn");
            //     btn.addEventListener("click" ,  function() {
            //     location.replace("https://www.google.com") ;
            // });


            // var btn = document.getElementById("btn");
            //     btn.addEventListener("click" ,  function() {
            //     location.reload("http://127.0.0.1:5500/javascript.html") ;
            // });
       

            // console.log(window.navigator.appName);
            // console.log(window.navigator.appVersion);
            // console.log(window.navigator.appCodeName);
            // console.log(window.navigator.cookieEnabled);

            // console.log(window.navigator.userAgent);
            // console.log(window.navigator.platform);
            // console.log(window.navigator.javaEnabled());
            
            // console.log(screen.width);
            // console.log(screen.height);
            // console.log(screen.colorDepth);
            // console.log(screen.orientation); 