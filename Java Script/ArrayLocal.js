let begin1=()=>
{
     flowersname=["lotus","Jasmine","Rose","lily","Hibiscus","Daisy"]

    localStorage.setItem("Flower",JSON.stringify(flowersname))
// sessionStorage,setItem(key,value)
    alert("initialized")
}   

let adding=()=>
{
    let newvalue=document.getElementById('user').value;

    let oldvalues=localStorage.getItem("Flower");

    let convertstringtoobj=JSON.parse(oldvalues)
    
    convertstringtoobj["Flower"].push(newvalue)

    alert(convertstringtoobj)
    localStorage.setItem("Flower",JSON.stringify(jsontoobject))

    alert(newvalue+" yourfav value is added local storage")
}


let remove=()=>
{
    let removevalue=document.getElementById("user").value;
    localStorage.removeItem(removevalue);
}

let clear1=()=>
{
    localStorage.clear()
}