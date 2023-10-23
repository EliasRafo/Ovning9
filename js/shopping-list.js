var itemInput = document.getElementById("item-input");
var list = document.getElementById("list");
var mark = document.getElementById("mark");

function addToList() {
    if(itemInput.value === '')
    {
        alert("You have to write something");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = itemInput.value;
        list.append(li);
        itemInput.value = '';

        let span = document.createElement("span");
        span.innerHTML = "Remove";
        li.append(span);

        localStorage.setItem("list", list.innerHTML);
    }    
}

list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI")
    {        
        e.target.classList.toggle("selected");        
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }

    localStorage.setItem("list", list.innerHTML);
});

mark.addEventListener("click", (e)=>{
    if(mark.checked)
    {
        document.querySelectorAll('li')
            .forEach(function(x)
            {
                if(!x.classList.contains("selected"))
                x.classList.add("selected");
            });
    }
    else
    {
        document.querySelectorAll('li')
            .forEach(function(x)
            {
                x.classList.toggle("selected");
            });
    }
    
    localStorage.setItem("list", list.innerHTML);
});

window.addEventListener("load", (e)=>{
    const loadList = localStorage.getItem("list");
    if(loadList){
        list.innerHTML = loadList;
    }
});
