const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const D=[
["1 Series","c","sedan","Compact agility with a sporty soul.","2.0L Turbo I4",265,6.1,250],
["3 Series","s","sedan","The benchmark sports sedan.","2.0L Turbo I4",255,5.8,250],
["5 Series","s","sedan","Executive comfort, athletic dynamics.","2.0L Turbo I4",258,6.2,250],
["7 Series","s","sedan","Flagship luxury and presence.","3.0L Turbo I6",375,5.6,250],
["X5","u","suv","The original Sports Activity Vehicle.","3.0L Turbo I6",375,5.4,250],
["X6","u","suv","Coupe silhouette, SUV command.","4.4L Twin-Turbo V8",523,4.3,250],
["X7","u","suv","Three rows of first-class space.","3.0L Turbo I6",375,5.8,250],
["M3","s","m","Four doors, pure track DNA.","3.0L Twin-Turbo I6",503,3.5,250],
["M4","c","m","Iconic coupe, uncompromising.","3.0L Twin-Turbo I6",503,3.5,250],
["M5","s","m","The super saloon, now hybrid.","4.4L V8 PHEV",717,3.5,250],
["i4","c","ev","Electric Gran Coupe (M50).","Dual-motor electric",536,3.9,225],
["i5","s","ev","Electric executive (M60).","Dual-motor electric",601,3.8,230],
["i7","s","ev","Electric flagship (M70).","Dual-motor electric",650,3.7,240]];
const COL=[["Alpine White","#eef0f4"],["Black Sapphire","#0c0d14"],["Portimao Blue","#1c69d4"],["Brooklyn Grey","#7a7f87"],["Toronto Red","#b1112c"]];
function car(c="#1c69d4",t="s",id=Math.random().toString(36).slice(2,7)){
const b=t=="u"?"M18 104L30 64Q50 36 130 32H270Q330 38 360 72L386 92V110H18Z":t=="c"?"M18 104L40 84Q90 56 160 50H240Q300 52 350 80L386 94V110H18Z":"M18 104L38 82Q84 52 150 48H255Q315 52 354 80L386 94V110H18Z";
const w=t=="u"?"M60 64Q80 42 135 40H265Q315 44 338 70H60Z":t=="c"?"M70 82Q105 62 160 58H238Q285 60 325 80Z":"M64 80Q95 58 152 55H252Q300 58 332 80Z";
return `<svg viewBox="0 0 410 140"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient></defs><ellipse cx="205" cy="128" rx="190" ry="8" fill="#000" opacity=".6"/><path d="${b}" fill="${c}"/><path d="${b}" fill="url(#g${id})"/><path d="${w}" fill="#0b1830" stroke="#ffffff33"/><path d="M200 50V104" stroke="#0006"/><rect x="352" y="90" width="12" height="9" rx="2" fill="#0008" stroke="#aab3c2" stroke-width=".8"/><rect x="368" y="90" width="12" height="9" rx="2" fill="#0008" stroke="#aab3c2" stroke-width=".8"/><path d="M380 84L392 88" stroke="#9fd0ff" stroke-width="3"/><g><circle cx="100" cy="108" r="22" fill="#0a0a0c"/><circle cx="100" cy="108" r="13" fill="#9aa3b2"/><circle cx="310" cy="108" r="22" fill="#0a0a0c"/><circle cx="310" cy="108" r="13" fill="#9aa3b2"/></g></svg>`}
const sp=d=>`<div><b>${d[5]} hp</b>Power</div><div><b>${d[6]} s</b>0–100 km/h</div><div><b>${d[7]} km/h</b>Top speed</div><div><b style="font-size:12px">${d[4]}</b>Engine</div>`;
// loader
const tl=gsap.timeline({onComplete:()=>{gsap.to("#ld",{yPercent:-100,duration:.9,ease:"power4.inOut",onComplete:()=>{$("#ld").remove();intro()}})}});
tl.to("#lc",{strokeDashoffset:0,duration:1})
  .to(".lq",{opacity:1,stagger:.15,duration:.3},"-=.3").to("#ld svg",{scale:1.1,duration:.5},"+=.2");
function intro(){
 const h=$("#h1");h.innerHTML=h.textContent.split(" ").map(w=>`<span class="ch"><span>${w}&nbsp;</span></span>`).join("");
 gsap.from("#h1 .ch span",{yPercent:110,stagger:.12,duration:1,ease:"power4.out"});
 gsap.from("#hp",{opacity:0,y:20,delay:.8,duration:1});gsap.from(".hc .btn",{opacity:0,y:30,delay:1.1,stagger:.15});
 gsap.from("#hcar",{x:300,opacity:0,duration:1.6,ease:"power3.out"});}
const SL=[["1 Series", "images/1-series.webp"], ["3 Series", "images/3-series.webp"], ["5 Series", "images/5-series.webp"], ["7 Series", "images/7-series.webp"]];
const FB={u:"7 Series",c:"1 Series",s:"5 Series"};
const ph=(n,t)=>(SL.find(x=>x[0]==n)||SL.find(x=>x[0]==FB[t]||x[0]==n)||SL[0])[1];
const pic=(n,t)=>`<div class="pw"><img src="${ph(n,t)}" alt="BMW ${n}"></div>`;
const HS=["3 Series","7 Series","5 Series","1 Series"];
$("#hcar").innerHTML=HS.map(n=>`<img class="hs" src="${ph(n)}" alt="BMW ${n}">`).join("")+`<div class="cap"><b id="sc"></b></div>`;
let si=0;function show(n){si=n;$$("#hcar .hs").forEach((e,i)=>e.classList.toggle("on",i==n));$("#sc").textContent="BMW "+HS[n]}
show(0);setInterval(()=>show((si+1)%HS.length),4500);
// nav
const nv=$("#nv");addEventListener("scroll",()=>nv.classList.toggle("sc",scrollY>40));
$("#bg").onclick=()=>$("#ln").classList.toggle("on");$$("#ln a").forEach(a=>a.addEventListener("click",()=>$("#ln").classList.remove("on")));
// models
function draw(f="all"){const g=$("#grid");g.innerHTML=D.filter(d=>f=="all"||d[2]==f).map((d,i)=>`<div class="card">${pic(d[0],d[1])}<h3>BMW ${d[0]}</h3><p>${d[3]}</p><div class="sp">${sp(d)}</div><a class="btn" href="#sh" data-m="${d[0]}">Explore Model</a></div>`).join("");
 gsap.from("#grid .card",{opacity:0,y:40,stagger:.05,duration:.6});
 $$("#grid .card").forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg)`};c.onmouseleave=()=>c.style.transform=""});
 $$("#grid [data-m]").forEach(a=>a.onclick=()=>{$("#sel").value=a.dataset.m;upd()})}
draw();$$("#cat button").forEach(b=>b.onclick=()=>{$$("#cat button").forEach(x=>x.classList.remove("on"));b.classList.add("on");draw(b.dataset.f)});
$$(".dd a[data-f]").forEach(a=>a.onclick=()=>{draw(a.dataset.f);$$("#cat button").forEach(x=>x.classList.toggle("on",x.dataset.f==a.dataset.f))});
// M
$("#mrow").innerHTML=D.filter(d=>d[2]=="m").map((d,i)=>`<div class="card">${pic(d[0],d[1])}<h3>BMW ${d[0]}</h3><div class="sp">${sp(d)}</div></div>`).join("");
// EV
const EV=[["i4","Gran Coupe","Up to ~590 km WLTP","~10–80% in ~30 min DC",81,"#4aa3ff"],["i5","Executive","Up to ~570 km WLTP","DC fast charging",85,"#4aa3ff"],["i7","Flagship","Up to ~620 km WLTP","DC fast charging",95,"#4aa3ff"],["iX","SAV","Up to ~600 km WLTP","DC fast charging",90,"#4aa3ff"]];
$("#ev").innerHTML=EV.map(e=>`<div class="card">${pic(e[0]=="i7"?"7 Series":e[0]=="i5"?"5 Series":e[0],e[0]=="iX"?"u":e[0]=="i4"?"c":"s")}<h3>BMW ${e[0]}</h3><p>${e[1]} · ${e[2]}</p><div class="tag" style="font-size:10px">Battery</div><div class="bat"><i data-w="${e[4]}"></i></div><p>${e[3]}<br>5th-gen eDrive · high-voltage battery · regenerative braking</p></div>`).join("");
// showcase
const sel=$("#sel");sel.innerHTML=D.map(d=>`<option>${d[0]}</option>`).join("");sel.value="M4";
let col=2,vw=0;$("#sw").innerHTML=COL.map((c,i)=>`<i style="background:${c[1]}" data-i="${i}" title="${c[0]}"></i>`).join("");
const dash=c=>`<svg viewBox="0 0 410 220"><rect width="410" height="220" fill="#0a0d14"/><path d="M0 120Q205 70 410 120V220H0Z" fill="#14181f"/><circle cx="120" cy="140" r="52" fill="#000" stroke="#aab3c2" stroke-width="3"/><circle cx="120" cy="140" r="14" fill="#111" stroke="${c}" stroke-width="3"/><rect x="190" y="82" width="170" height="70" rx="6" fill="#06142c" stroke="#4aa3ff"/><path d="M200 130H350" stroke="#4aa3ff"/><text x="204" y="108" fill="#4aa3ff" font-size="13" font-family="Arial">BMW iDrive</text></svg>`;
const whl=c=>`<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="92" fill="#0a0a0c"/><circle cx="100" cy="100" r="70" fill="#8a93a3"/>${[0,1,2,3,4,5,6,7,8,9].map(i=>`<path d="M100 100L${100+68*Math.cos(i*.628)} ${100+68*Math.sin(i*.628)}" stroke="#222" stroke-width="9"/>`).join("")}<circle cx="100" cy="100" r="22" fill="#05070d" stroke="${c}" stroke-width="4"/></svg>`;
function upd(){const d=D.find(x=>x[0]==sel.value),c=COL[col];$("#cn").textContent=c[0];
 const v=[pic(d[0],d[1]),dash(c[1]),whl(c[1])][vw];$(".stage").style.background=`radial-gradient(circle at 50% 78%,${c[1]=="#0c0d14"?"#2a3140":c[1]}cc,#060a14 72%)`;
 gsap.fromTo("#vw",{opacity:0,x:30},{opacity:1,x:0,duration:.45});$("#vw").innerHTML=v;
 $$("#sw i").forEach((x,i)=>x.classList.toggle("on",i==col));$$("#tb button").forEach(b=>b.classList.toggle("on",+b.dataset.v==vw));
 $("#ssp").innerHTML=sp(d);$("#sft").innerHTML=["BMW iDrive with curved display","Driving Assistant","Adaptive LED headlights","Parking Assistant"].map(x=>`<li>${x}</li>`).join("")}
sel.onchange=upd;$$("#sw i").forEach(i=>i.onclick=()=>{col=+i.dataset.i;upd()});$$("#tb button").forEach(b=>b.onclick=()=>{vw=+b.dataset.v;upd()});
$("#nx").onclick=()=>{vw=(vw+1)%3;upd()};$("#pv").onclick=()=>{vw=(vw+2)%3;upd()};upd();
// tech
const ic=p=>`<svg viewBox="0 0 70 70" fill="none" stroke="#4aa3ff" stroke-width="2.5"><circle cx="35" cy="35" r="28" stroke-dasharray="6 4"><animateTransform attributeName="transform" type="rotate" from="0 35 35" to="360 35 35" dur="12s" repeatCount="indefinite"/></circle>${p}</svg>`;
const T=[["iDrive","Intuitive curved display with touch and voice control.",'<rect x="20" y="24" width="30" height="20" rx="3"/>'],["Intelligent Personal Assistant","Natural-language voice commands: “Hey BMW”.",'<path d="M35 20v30M25 28v14M45 28v14"/>'],["Driver Assistance","Camera and radar-based support for everyday driving.",'<path d="M20 48L35 20L50 48Z"/>'],["ConnectedDrive","Connected services, navigation and remote functions.",'<path d="M22 40Q35 26 48 40M28 46Q35 40 42 46"/>'],["Advanced Safety","Collision warning, braking support and more.",'<path d="M35 18L50 25V37Q50 47 35 53Q20 47 20 37V25Z"/>'],["Infotainment","Immersive displays and premium audio.",'<circle cx="35" cy="35" r="9"/><circle cx="35" cy="35" r="3"/>']];
$("#tc").innerHTML=T.map(t=>`<div class="card">${ic(t[2])}<h3 style="font-size:18px">${t[0]}</h3><p>${t[1]}</p></div>`).join("");
// gallery
const G=[["Sports","#1c69d4","c"],["Sedan","#aab3c2","s"],["SUV","#0c0d14","u"],["BMW M","#b1112c","c"],["Electric","#4aa3ff","s"],["Interior","#1c69d4","i"],["SUV","#7a7f87","u"],["Sedan","#1c69d4","s"],["BMW M","#eef0f4","s"]];
const GP=["3 Series","5 Series","7 Series","1 Series","5 Series","","7 Series","3 Series","1 Series"];const gs=(g,i)=>g[2]=="i"?dash(g[1]):pic(GP[+String(i).replace("L","")],g[2]);
$("#gl").innerHTML=G.map((g,i)=>`<div data-i="${i}" style="background:radial-gradient(circle at 50% 85%,${g[1]}77,#070a14 72%)">${gs(g,i)}<em>${g[0]}</em></div>`).join("");
$$("#gl div").forEach(d=>d.onclick=()=>{const i=+d.dataset.i;$("#lb").innerHTML=gs(G[i],"L"+i);$("#lb").classList.add("on");gsap.from("#lb svg",{scale:.7,opacity:0,duration:.5})});
$("#lb").onclick=()=>$("#lb").classList.remove("on");addEventListener("keydown",e=>e.key=="Escape"&&$("#lb").classList.remove("on"));
// forms
$("#fm").onsubmit=e=>{e.preventDefault();$("#ok").textContent="Thank you — your message has been noted (demo).";e.target.reset()};
$("#nl").onsubmit=e=>{e.preventDefault();e.target.innerHTML="<span style='color:#4aa3ff'>Subscribed (demo). Thank you.</span>"};
// scroll anims
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".rv").forEach(e=>gsap.to(e,{opacity:1,y:0,duration:.9,scrollTrigger:{trigger:e,start:"top 88%"}}));
gsap.to("#hcar",{yPercent:-25,scrollTrigger:{trigger:"#hero",scrub:1,start:"top top",end:"bottom top"}});
gsap.to(".hc",{yPercent:30,opacity:.2,scrollTrigger:{trigger:"#hero",scrub:1,start:"top top",end:"bottom top"}});
$$("[data-n]").forEach(e=>{const o={v:0},n=+e.dataset.n,d=+e.dataset.d||0;gsap.to(o,{v:n,duration:2,ease:"power2.out",onUpdate:()=>e.textContent=o.v.toFixed(d),scrollTrigger:{trigger:e,start:"top 90%"}})});
$$(".bat i").forEach(b=>gsap.to(b,{width:b.dataset.w+"%",duration:1.6,ease:"power2.out",scrollTrigger:{trigger:b,start:"top 92%"}}));
gsap.from(".mrow .card",{y:80,opacity:0,stagger:.2,scrollTrigger:{trigger:"#mrow",start:"top 85%"}});
gsap.from(".nw a,.tc .card,.gl div",{y:50,opacity:0,stagger:.08,duration:.7,scrollTrigger:{trigger:"#news",start:"top 70%"}});
// magnetic buttons
$$(".btn").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.35,duration:.3})});b.addEventListener("mouseleave",()=>gsap.to(b,{x:0,y:0,duration:.6,ease:"elastic.out(1,.4)"}))});
// particles
const cv=$("#cv"),cx=cv.getContext("2d");let P=[];
function rs(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;P=Array.from({length:50},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*1.6+.3,v:Math.random()*.4+.1}))}
rs();addEventListener("resize",rs);
(function f(){cx.clearRect(0,0,cv.width,cv.height);cx.fillStyle="#9fd0ff";P.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=cv.height;cx.globalAlpha=.5;cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill()});requestAnimationFrame(f)})();
