var m=0;
var y;
function start()
{
    y=setInterval(run,10);

function run()
{
   if(m==1300)
   {
       clearInterval(y);
       m=0;
   }
   else 
   {
    m+=05;
    var x=document.getElementById("img");
    x.style.marginLeft=m+'px';
   }
}
}
function stop()
{
clearInterval(y);
}