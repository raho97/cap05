let fact=0;

let num = 10;

for(let i=1; i<=num; i++)
{
   if(num%i==0)
  {
    fact++;
  }
}

if(fact==2)
{
console.log("Prime")
}
else
{
console.log("Not Prime")
}