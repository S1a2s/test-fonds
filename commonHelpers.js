import{S as c}from"./assets/vendor-1bd45911.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const g=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children@1x.png",imgRetinaTwo:"./img/save-the-children@2x.png",imgRetinaThree:"./img/save-the-children@3x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope@1x.png",imgRetinaTwo:"./img/project-hope@2x.png",imgRetinaThree:"./img/project-hope@3x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/international-medical-corps@1x.png",imgRetinaTwo:"./img/international-medical-corps@2x.png",imgRetinaThree:"./img/international-medical-corps@3x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/medicins-sans-frontieres@1x.png",imgRetinaTwo:"./img/medicins-sans-frontieres@2x.png",imgRetinaThree:"./img/medicins-sans-frontieres@3x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom@1x.png",imgRetinaTwo:"./img/razom@2x.png",imgRetinaThree:"./img/razom@3x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/action-against-hunger@1x.png",imgRetinaTwo:"./img/action-against-hunger@2x.png",imgRetinaThree:"./img/action-against-hunger@3x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision@1x.png",imgRetinaTwo:"./img/world-vision@2x.png",imgRetinaThree:"./img/world-vision@3x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/serhiy-prytula-charity-foundation@1x.png",imgRetinaTwo:"./img/serhiy-prytula-charity-foundation@2x.png",imgRetinaThree:"./img/serhiy-prytula-charity-foundation@3x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24@1x.png",imgRetinaTwo:"./img/united24@2x.png",imgRetinaThree:"./img/united24@3x.png"}],m={direction:"vertical",navigation:{nextEl:".swiper-button-next"},rewind:!0,allowTouchMove:!1,spaceBetween:20,slidesPerView:"auto",slidesPerGroup:4,breakpoints:{768:{slidesPerGroup:6}}},o=new c(".swiper",m),n={nextBtn:document.querySelector(".swiper-button-next"),list:document.querySelector(".swiper-wrapper"),btn:document.querySelector(".supporters__btn")},u=g.map((i,r)=>`<div class ="supporters__item swiper-slide">
      <span class="supporters__number">
      ${(r+1).toString().padStart(2,"0")}
        </span>
        <a href = "${i.url}" title = "${i.title}" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
      <img src = "${i.img}" class="supporters__img" srcset="${i.img} 1x, ${i.imgRetinaTwo} 2x, ${i.imgRetinaThree} 3x" alt = "${i.title} logo"/>
      </a>
      </div>`).join("");n.list.innerHTML=u;p();addEventListener("resize",p);function d(){o.slideNext(),(o.isBeginning||o.isEnd)&&h()}function p(){const i=n.btn.classList.contains("hidden");g.length>o.params.slidesPerGroup?(i&&n.btn.classList.remove("hidden"),n.nextBtn.addEventListener("click",d)):i||n.btn.classList.add("hidden")}function h(){n.btn.classList.toggle("supporters__btn--up")}
//# sourceMappingURL=commonHelpers.js.map
