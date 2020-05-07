document.addEventListener('DOMContentLoaded', function(){
    // create HTML element
    let message = document.createElement('p');
    message.innerHTML = "hello";
    console.log(message)

    // access the div.root
    let root = document.querySelector('#root');
    console.log(root);

    //append a child
    root.appendChild(message);
})