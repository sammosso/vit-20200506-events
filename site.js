function sayHello() {
    console.log('Hello World');
}
//content loads when website loads
document.addEventListener('DOMContentLoaded', sayHello)

//anonymous function 
document.addEventListener('DOMConetentLoaded', function(){console.log('Hey')})