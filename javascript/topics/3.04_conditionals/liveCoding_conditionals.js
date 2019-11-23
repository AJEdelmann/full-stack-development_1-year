// if / else statements
//Exampl 1

var x=1;
var y=2;

/*
if (x > y) 
{
   console.log('x is greater than y');
}
else
{
  console.log('x is not greater than y');
}
*/

if (x > y) 
{
   console.log('x is greater than y');
}
else if (y >x )
{
  console.log('y is greater than x');
}
else
{
  console.log('x is equal y');
}

//Example 2

var isMarried=false;

if(isMarried==0)
{
  console.log('Bob is married');
}
else
{
  console.log('Bob will hopefully marry soon');
}

if(undefined)
{
  console.log('yes');
}
else{
  console.log('no');
}


if(true)
{
  console.log('yes');
}
else{
  console.log('no');
}

if(23=="23")3=="23" // Javascript is weakly typed language, it means auto convert one data type to another data type. hence we do not have to do this way
//if (23 == parseInt("23"))
{
  console.log("23=string 23 is correct or not");
}

//Example 3
var age=20;
if(age < 20)
{
  console.log('John is teenager');
}
else if (age >= 20 || age < 30 )
{
  console.log('John is a young man');
}
else if (!( age >30))
{
  console.log('Here not equal call...');
}
else {
  console.log('John is man');
}