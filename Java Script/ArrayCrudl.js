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

const rearranging=()=>
{
    let updateindex=document.getElementById("uservalue").value;

    let newflowername=prompt("please tell us your new value"+flowersname[updateindex]+" Replace to");

    flowersname[updateindex]=newflowername;
    alert(newflowername+"updates value")
    viewing()
}

const checking=()=>
{
    let searchingvalue=document.getElementById("uservalue").value;

    for(i=0;i<flowersname.length;i++)
    {
        if(searchingvalue===flowersname[i])
        {
            return i;
        }
        else{
           return "your value is not founded"
        }
    }
}


const sorting=()=>
{
    flowersname.sort();
    viewing()
}