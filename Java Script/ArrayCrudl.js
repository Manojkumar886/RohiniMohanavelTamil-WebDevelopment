let flowersname=["Rose","Jasmine","Lotus","sunflower","hibiscus","Davis","lily"]

let adding=()=>
{
    let newvalue=document.getElementById("uservalue").value;

    flowersname.push(newvalue);

    alert(newvalue+" flower added in my datatbase")
    viewing()
}

let viewing=()=>
{
    let temp=""

    flowersname.map((myflower)=>
    {
        temp+="<tr><td>"+myflower+"</td></tr>"
    })

    document.getElementById('listall').innerHTML="<table><thead><tr><th>Flowernames</th></tr></thead><tbody>"+temp+"</tbody></table>"
}

const erasing=()=>
{
    let deletevalue=document.getElementById("uservalue").value;

    flowersname=flowersname.filter((getting)=>
    {
        if(getting!==deletevalue)
        {
            return flowersname;
        }
    })

    viewing()
}