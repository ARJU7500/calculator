let display = document.querySelector("#display h1");
let buttons = document.getElementsByTagName("button");

for(let i=0 ; i<buttons.length ; i++ )
{
    buttons[i].addEventListener("click", function(event)
    {
      console.log(event.target.innerHTML);
    // display.innerHTML = display.innerHTML + event.target.innerHTML;
    switch(event.target.innerHTML)
    {
        case "c": display.innerHTML = ""; break;
        case "=":display.innerHTML = eval(display.innerHTML); break;
        case "←": display.innerHTML= display.innerHTML.slice(0,-1); break;
        default: display.innerHTML += event.target.innerHTML;
    }
    })
}

