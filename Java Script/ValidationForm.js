let RegularExpression=()=>
{
    let a=document.forms['generalform'].username.value;
    let b=document.forms['generalform'].email.value;
    let c=document.forms['generalform'].gender.value;
    let d=document.forms['generalform'].option.value;
    let e=document.forms['generalform'].texting.value;

    let reload=true;

    if(b.length==0)
    {
        document.getElementById('email1').innerHTML="please enter your email id";
        reload=false;   
    }
    else if(!((/^[a-zA-Z0-9.!#$%~*+/=?^_~]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/).test(b)))
    {
        document.getElementById('email1').innerHTML="please enter valid gmail id`" ;
        reload=false;   
    }



    if(a.length==0)
    {
    
        document.getElementById('username1').innerHTML="please enter your name";
        reload=false;
    }
    else if(!((/^[A-Za-z]+$/)).test(a))
    {
        document.getElementById('username1').innerHTML=" should be enter only alphabetical";
        reload=false;   
    }

    if(e.length==0)
    {
        document.getElementById('texting1').innerHTML=" plese enter somethig";
        reload=false;  
    }
    if(e.length>=30)
    {
        document.getElementById('texting1').innerHTML=" plese enter minimun 30 + charcters";
        reload=false;  
    }

    // if(!((/^[0-9]{10,10}$/))
   
    return reload;
}