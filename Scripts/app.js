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
    location.href = "index.html"; }, 3000)
}


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

function createProject1()
{
    let projectDesc = "This is one of our favourite projects because we got to learn a new language for it. " +
    "Although COBOL may be a little annoying to work with compared to the languages we have today, it was " + 
    "still fun learning something new. We can see how useful learning COBOL can be and want to use more of it.";

    document.writeln("<img src=\"./Content/images/project1a.png\" width=\"601\" height\"401\"/>");
    document.writeln("<img src=\"./Content/images/project1b.png\" width=\"601\" height\"401\"/>");
    document.writeln("<p class='center'>" + projectDesc + "</p>");
}

function createProject2()
{
    let projectDesc = "This was a project that we did in semester 3. We had to use a lot of back end scripting and this gave us a " + 
    "lot of practice. We created functionality that was used to create a user/admin, create customers, change passwords, create a " +
    "call log and more. This deepend our knowledge in this area significantly."

    document.writeln("<img src=\"./Content/images/project2.png\" width=\"601\" height\"401\"/>");
    document.writeln("<p class='center'>" + projectDesc + "</p>");
}

function createProject3()
{
    let projectDesc = "This project was fun because this was something that we could see being used today. In this project, " + 
    "we created a program that kept track of equipment being lent out. The system allowed the user to search for a specific " + 
    "employee to see what they have taken out. All the information was stored on a database."

    document.writeln("<img src=\"./Content/images/project3.png\" width=\"601\" height\"401\"/>");
    document.writeln("<p class='center'>" + projectDesc + "</p>");
    
}