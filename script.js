let time=60;
let el=document.getElementById("timer");
setInterval(()=>{
time--;
let m=Math.floor(time/60);
let s=time%60;
el.innerHTML=`${m}:${String(s).padStart(2,'0')}`;
if(time<=0) time=60;
},1000);
