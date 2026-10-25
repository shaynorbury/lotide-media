var IND=[["Financial services", "Lending, debt, insurance and wealth firms.", ["Lenders", "Debt relief", "Insurance", "Wealth management"]], ["Tax and accounting", "Resolution, preparation and advisory practices.", ["Tax resolution", "CPA firms", "Bookkeeping", "Payroll"]], ["Professional services", "Legal, consulting and specialist firms.", ["Law firms", "Consultants", "Specialist advisors"]], ["Trades and home services", "Contractors and field service companies.", ["General contractors", "Roofing", "HVAC", "Solar"]], ["B2B software", "SaaS and platform companies.", ["SaaS", "Fintech", "Vertical software"]]];
(function(){
function sun(){document.querySelectorAll('.sky .sun').forEach(function(s){var y=Math.min(scrollY,400);s.style.animation='none';s.style.transform='translate(-50%,'+(-62-y*.2)+'%)'})}
addEventListener('scroll',sun,{passive:true});
var tr=document.querySelector('.car .tr');if(tr){var bi=document.querySelector('.car .bar i');
tr.addEventListener('scroll',function(){var m=tr.scrollWidth-tr.clientWidth;bi.style.left=(m?tr.scrollLeft/m*67:0)+'%'},{passive:true});
document.querySelectorAll('.car .ctl button').forEach(function(b){b.addEventListener('click',function(){var c=tr.querySelector('.cd');tr.scrollBy({left:+b.dataset.d*(c.offsetWidth+20),behavior:'smooth'})})})}
document.querySelectorAll('.sw li').forEach(function(li){function s(){var i=+li.dataset.i;document.querySelectorAll('.sw li').forEach(function(x){x.classList.toggle('on',x===li)});
document.querySelectorAll('.sw .st svg circle').forEach(function(c){c.classList.toggle('on',+c.dataset.i===i)});
document.getElementById('sh').textContent=IND[i][0];document.getElementById('sd').textContent=IND[i][1];
document.getElementById('sc').innerHTML='<div class="chips">'+IND[i][2].map(function(x){return '<span>'+x+'</span>'}).join('')+'</div>'}
li.addEventListener('mouseenter',s);li.addEventListener('click',s);li.addEventListener('focus',s)});
var mp=document.querySelector('.nm .map');if(mp)mp.addEventListener('mousemove',function(e){var r=mp.getBoundingClientRect(),x=((e.clientX-r.left)/r.width-.5)*-30,y=((e.clientY-r.top)/r.height-.5)*-20;mp.querySelector('svg').style.transform='translate('+x+'px,'+y+'px)'});
})();