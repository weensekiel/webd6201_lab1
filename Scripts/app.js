/*
*   Names: Ryan Taylor | Ezekiel Evangelista
*   Student IDs: 100790840 | 100577786
*   Date Completed: Feb 11, 2022
*/


/* sends user information to the console */
function sendToConsole()
{
    let username = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(username);
    console.log(number);
    console.log(email);
    console.log(message);
}

/* redirects the user to the homepage after a 3 second delay */
function redirect()
{
    setTimeout(function(){ document.getElementById("button");   
    location.href = "home.html"; }, 3000)
}

document.body.onload = addElement;

function createHR()
{
    
    var newLi = document.createElement("li");
    newLi.classList.add("nav-item");
    newLi.innerHTML = "<a class=\"nav-link\" href=\"humanResources.html\"> Human Resources</a>";

    document.getElementById("myList").insertBefore(newLi, document.getElementsByClassName("nav-item")[1]);
  
}

function createServicesPage()
{
    // Description variables
    let webDevDesc = "Our team is very well-versed in web development with multiple years of experience between us, thus we " + 
        "have the ability to create a variety of different types of websites. With proficiency in HTML, CSS, and JavaScript, " + 
        "as well as back-end languages such as PHP, C#, and Java, we can supply you with a website to suit your needs!";
    
    let softDevDesc = "With our experience in C# and Microsoft .NET, we can quickly provide a variety of different " + 
    "types of applications. Additionally, we also have experience in a number of other languages like Java. C++, and Python, " + 
    "so we can utilize the advantages of multiple technologies in your software.";

    let dbDevDesc = "In addition to designing websites and software, we can also design and include databases in our " + 
    "systems, allowing you to easily store, filter, and search for your data. We have experience working with both PostGreSQL " + 
    "and SSMS, so we can use what best suits your needs.";


    // Main header
    document.writeln("<h1 class=\"services-header\">Our Services</h1>");

    document.writeln("<br/><br/>");


    // Web dev section
    document.writeln("<h3 class=\"web-dev\" id=\"web-dev-header\">Web Development</h3>");

    document.writeln("<img src=\"./Content/images/web-dev-logo.png\" width=\"645\" height\"320\"/>");

    document.writeln("<p class=\"web-dev\">" + webDevDesc + "</p>");

    // Application development section
    document.writeln("<h3 class=\"web-dev\" id=\"web-dev-header\">Software Development</h3>");

    document.writeln("<img src=\"./Content/images/software-dev.jpg\" width=\"600\" height\"320\"/>");

    document.writeln("<p class=\"web-dev\">" + softDevDesc + "</p>");

    // Database development section
    document.writeln("<h3 class=\"web-dev\" id=\"web-dev-header\">Database Development</h3>");

    document.writeln("<img src=\"./Content/images/db-dev.jpg\" width=\"601\" height\"401\"/>");

    document.writeln("<p class=\"web-dev\">" + dbDevDesc + "</p>");
} 