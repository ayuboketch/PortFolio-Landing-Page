(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelectorAll(".logo-circle img"),i=document.createElement("canvas"),a=i.getContext("2d"),l=document.querySelector(".projects-container"),f=document.getElementById("next"),h=document.getElementById("prev");$("document").ready(function(){for(var t=$("#rotator div").get(),c=Math.PI*2/t.length,o=0,n=0;n<t.length;n++){var e=t[n],r=140*Math.cos(o)+150,s=140*Math.sin(o)+150;e.style.position="absolute",e.style.left=r+"px",e.style.top=s+"px",e.style.transform=`rotate(${90+n*(360/t.length)}deg)`,o+=c}});u.forEach((t,c)=>{t.onload=()=>{i.width=t.width,i.height=t.height,a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(t.width/2,t.height/2,1,1).data,n=`rgb(${o[0]}, ${o[1]}, ${o[2]})`;t.parentElement.style.borderColor=n}});const d=300;f.addEventListener("click",()=>{l.scrollBy({left:d,behavior:"smooth"})});h.addEventListener("click",()=>{l.scrollBy({left:-d,behavior:"smooth"})});