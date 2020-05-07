//Create fortune array
let fortunes = ['great life', 'bad life', 'long life', 'short life'];
let colors = ['purple', 'yellow', 'green', 'blue', 'red']

document.addEventListener('DOMContentLoaded', function(){
    // create HTML element
    let message = document.createElement('p');
    message.innerHTML = "hello";
    console.log(message)

    // add button
    let button = document.createElement('button');
    button.innerHTML = 'Click me'

    // access the div.root
    let root = document.querySelector('#root');

    //append a child
    root.appendChild(message);
    root.appendChild(button);

    //Click Event Button
    button.addEventListener('click', function(){
        //grab random message from fortunes
        let randomNumber = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomNumber];
        let randomColor = colors[randomNumber];
        //fill in message with fortune innerHTML
        message.innerHTML = randomFortune;
        message.style.color = randomColor;
    })
})