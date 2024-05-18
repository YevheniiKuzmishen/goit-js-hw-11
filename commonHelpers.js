import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();let p=new m(".gallery a");const u=document.querySelector(".imagesFetch");function d(o){const s=o.reduce((i,e)=>i+=`
          <li class="imagesFetch-item">
          <div class="gallery">
                 <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="1"/>
                 </a>
          </div>
          <div class="imagesFetch-item-description">
              <ul class="description-list">
              <li class="description-list-item">
                  <p class="item-name">Likes</p>
                  <span>${e.likes}</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Views</p>
                  <span>${e.views}</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Comments</p>
                  <span>${e.comments}</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Downloads</p>
                  <span>${e.downloads}</span>
              </li>
              </ul>
          </div>
          </li>  `,"");u.insertAdjacentHTML("beforeend",s),p.refresh()}function f(o){const s="43947691-9c404bec92b20484d2e4a6bea",i=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:9});return fetch(`https://pixabay.com/api/?key=${s}&q=${o}&${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const h=document.querySelector(".form"),c=document.querySelector(".form-input"),g=document.querySelector(".imagesFetch"),l=document.querySelector(".loader");h.addEventListener("submit",o=>{o.preventDefault();const s=c.value.trim();if(s===""){a.error({title:"Error",message:"Enter search images value",position:"topRight"});return}l.style.display="block",f(s).then(i=>{const e=i.hits;e.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.style.display="none",d(e)}).catch(i=>{console.log(i)}),g.innerHTML="",c.value=""});
//# sourceMappingURL=commonHelpers.js.map
