(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();document.querySelector("#app").innerHTML=`
    <div class="game_title">TIC-TAC-TOE GAME</div>
    <div class="game_status">X's turn</div>
    <div class="game_container">
      <div id="0" class="cell"></div>
      <div id="1" class="cell"></div>
      <div id="2" class="cell"></div>
      <div id="3" class="cell"></div>
      <div id="4" class="cell"></div>
      <div id="5" class="cell"></div>
      <div id="6" class="cell"></div>
      <div id="7" class="cell"></div>
      <div id="8" class="cell"></div>
    </div>
    <button id="restart_button">Restart</button>
`;const a=document.querySelector(".game_status"),f=document.querySelectorAll(".cell"),p=document.querySelector("#restart_button"),m=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];let i="X",s=["","","","","","","","",""],l=!1,u=0;v();g();function g(){p.addEventListener("click",C),f.forEach(e=>{e.addEventListener("click",()=>{h(e)})})}function h(e){if(l||e.textContent==="X"||e.textContent==="0")return;e.textContent=i,s[Number(e.id)]=i,u++;const r=y();if(r){l=!0,b(r),a.textContent=`${i} wins!`;return}if(u===9){l=!0,a.textContent="Draw!";return}i=i==="X"?"0":"X",v()}function v(){a.textContent=`${i}'s turn`}function y(){for(let e=0;e<m.length;e++){const[r,o,c]=m[e];if(s[r]!==""&&s[r]===s[o]&&s[o]===s[c])return[r,o,c]}return null}function b(e){e.forEach(r=>{f[r].classList.add("winner")})}function C(){f.forEach(e=>{e.textContent="",e.classList.remove("winner")}),i="X",l=!1,u=0,s=["","","","","","","","",""],v()}
