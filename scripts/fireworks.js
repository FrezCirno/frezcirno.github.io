window.addEventListener("load",(()=>{const n=document.createElement("canvas");n.classList.add("fireworks"),document.body.append(n);const t=n.getContext("2d");let e=0,a=0;const i=["#FF1461","#18FF92","#5A87FF","#FBF38C"],o=function(n,t){let e;return function(){const a=this,i=arguments;clearTimeout(e),e=setTimeout((()=>{n.apply(a,i)}),t)}}((()=>{n.width=2*window.innerWidth,n.height=2*window.innerHeight,n.style.width=window.innerWidth+"px",n.style.height=window.innerHeight+"px",n.getContext("2d").scale(2,2)}),500),d=anime({duration:1/0,update:function(){t.clearRect(0,0,n.width,n.height)}});function r(n,e){const a={};return a.x=n,a.y=e,a.color=i[anime.random(0,i.length-1)],a.radius=anime.random(16,32),a.endPos=function(n){const t=anime.random(0,360)*Math.PI/180,e=anime.random(50,180),a=[-1,1][anime.random(0,1)]*e;return{x:n.x+a*Math.cos(t),y:n.y+a*Math.sin(t)}}(a),a.draw=function(){t.beginPath(),t.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),t.fillStyle=a.color,t.fill()},a}function l(n){for(let t=0;t<n.animatables.length;t++)n.animatables[t].target.draw()}document.addEventListener("click",(i=>{"sidebar"!==i.target.id&&"toggle-sidebar"!==i.target.id&&"A"!==i.target.nodeName&&"IMG"!==i.target.nodeName&&(d.play(),function(t){e=(t.clientX||t.touches[0].clientX)-n.getBoundingClientRect().left,a=t.clientY||t.touches[0].clientY-n.getBoundingClientRect().top}(i),function(n,e){for(var a=function(n,e){const a={};return a.x=n,a.y=e,a.color="#F00",a.radius=.1,a.alpha=.5,a.lineWidth=6,a.draw=function(){t.globalAlpha=a.alpha,t.beginPath(),t.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),t.lineWidth=a.lineWidth,t.strokeStyle=a.color,t.stroke(),t.globalAlpha=1},a}(n,e),i=[],o=0;o<30;o++)i.push(r(n,e));anime.timeline().add({targets:i,x:function(n){return n.endPos.x},y:function(n){return n.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:l}).add({targets:a,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:l},0)}(e,a))}),!1),o(),window.addEventListener("resize",o,!1)}));