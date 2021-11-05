function welcomeMessage(){
    hlink = document.querySelector('.link')
    hlink.href = "https://www.stackroute.in"
    console.log(hlink.href)
    hlink.style = "background-color: blue;"
    hlink.style.border="2px solid black"

    var myButton = document.getElementById("mybutton")
    var age = 44;

    if(age>=18){
        myButton.classList.add("green-button")
        myButton.addEventListener('click', function(e){
            alert("You are eligible to vote")
        })
    }
    else{
        myButton.classList.add("red-button")
        alert("You are not eligible to vote")
    }
}

function addChildren(){
    link = document.createElement('a')

    para = document.getElementById("para-remove")
    parentContainer = document.getElementById('parent-container')

    link.href="https://www.stackroute.in"
    link.innerText = "Click me"
    link.id = "stackroute-link"
    link.style = "background-color:green; font-size:20px;"

    parentContainer.appendChild(link)
    parentContainer.removeChild(para)
}