function getResult() {

    let check = true;

    var firstdivisionnumber = document.getElementById("firstdivisionnumber").value;
    var seconddivisionnumber = document.getElementById("seconddivisionnumber").value;
    var loopnumber = document.getElementById("loopnumber").value;
    var result = document.getElementById("result");

    result.innerHTML = "";

    if(firstdivisionnumber == "" || firstdivisionnumber == null)
    {
        alert("You have to enter Bish number");
        check = false;
    }
    if(seconddivisionnumber == "" || seconddivisionnumber == null)
    {
        alert("You have to enter Bosh number");
        check = false;
    }
    if(loopnumber == "" || loopnumber == null)
    {
        alert("You have to enter loop number");
        check = false;
    }
  
    if(check)
    {
        for (let i = 1; i <= loopnumber; i++) 
        {
            if (i % firstdivisionnumber === 0 && i % seconddivisionnumber === 0)  
            {  
                result.innerHTML += "Bish-Bosh";
                console.log("Bish-Bosh");
            }  
            else if (i % firstdivisionnumber === 0)  
            {  
                result.innerHTML += "Bish";
                console.log("Bish");
            }  
            else if (i % seconddivisionnumber === 0)  
            {  
                result.innerHTML += "Bosh";
                console.log("Bosh");
            }  
            else  
            {  
                result.innerHTML += i;  
                console.log(i);
            } 
            
            if(i != loopnumber)
            result.innerHTML += " , ";
        }
    }
    else
    result.innerHTML = "You have to fill all fields";
}
