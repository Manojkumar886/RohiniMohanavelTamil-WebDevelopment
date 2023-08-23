function sample1()
{
    alert("Java script is used by programmers across the world to create a dynamic and interactive web content like browsers and applications.")
}

function sample2(username,password)
{
    document.write("my username is "+username+"\nmy password is "+password);
}

let sample3=()=>
{
    console.log(45+66);
}

var sample4=(X,Y,Z)=>
{
    if(X>Y)
    {
        alert('X is biggest value compare to Y')
    }
    else if(X<Y)
    {
        alert('Y is biggest value compare to X')
    }

    return X+Y+Z;
}