import"./modulepreload-polyfill-B5Qt9EMX.js";const o=document.getElementById("door-image");document.getElementById("person");const g=document.getElementById("person-image"),l=document.getElementById("dialogue-column"),r=30,i=500;o.addEventListener("click",function(){o.classList.contains("open")||(o.classList.toggle("open"),d(),setTimeout(c,800))});const s=document.getElementById("respond-button"),y=["Hey! Do you have any idea how much damage you've caused?","Did you not realize the impact that all of your hydraulic fracking would have on the water here? Your wells consume millions of gallons of water from our sources of water! Now the public here is sturggling to find water.","More water?! Get a load of this kid! Not if you keep pollluting it too! All the flowback water coming from your wells is contaminated with heavy metals, radioactive elements, and toxic chemicals! This water pollution is contimating our groundwater and affecting our ecosystem!","Why don't you see for yourself? Run this water test to see what you've done to the water here!","I'm one of your geologists, and something is not right! Your fracking is causing too much damage","Well when you inject all the wasteater your site produces into the rock, you're raising the pressure levels in the rock formations. All of these seem small now, but there seem to be a lot of them - creating the potential for a very large and damaging earthquake right near all of these houses!","Yes it can, here let me show you.","You've destroyed our rural roads","All of those trucks? There yours ain't they? Well, let me tell you, they are HEAVY! And there's just so many of them and the mere size of them is terrifying! Our roads weren't built for this. They can't carry all of these vehicles all willy-nilly like this."],f=["Who are you? Damage? What are you talking about?","But there's more water?? is there not?","I don't believe you","Ugh, okay get out, I'll do something about it? Bye now.","Okay what do you mean?","What? How does that even work? Fracking can't lead to earthquakes?!","Ugh, okay bye. I'll figure something out. Bye now.","What? Who are you?? How can I destroy whole roads???","Ugh, okay, I guess I'll deal with it? Bye now."],u={4:["water",new URL("/assets/scientist-CcpppPak.png",import.meta.url).href],7:["earthquake",new URL("/assets/farmer-ClEzijrF.png",import.meta.url).href],9:["roads",new URL("/assets/farmer-ClEzijrF.png",import.meta.url).href]};var a=0;s.addEventListener("click",function(){if(s.classList.contains("unactive"))return;const e=f[a++];m(e),a in u?setTimeout(w,e.length*r+1e3):setTimeout(c,e.length*r+1e3)});function c(){m(y[a],!1)}function w(){o.classList.toggle("open"),h(),setTimeout(()=>{g.src=u[a][1],d()},i)}function h(){const e=l.firstElementChild;e&&(e.style.opacity=0,e.style.top="-90%",setTimeout(()=>{e.remove()},i))}function m(e,n=!0){h();const t=document.createElement("div");t.classList.add("dialogue"),n?(t.classList.add("user-bubble"),s.classList.add("unactive")):setTimeout(()=>{s.classList.remove("unactive")},i),t.textContent=e,l.appendChild(t),setTimeout(()=>{t.style.top="10%",t.style.opacity=1},10)}function d(){var e=document.querySelectorAll(".knock");e.forEach(function(n){n.classList.toggle("active")})}
