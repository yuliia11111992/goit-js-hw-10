import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as C,i as S}from"./assets/vendor-651d7991.js";const e=document.querySelector("[data-start]"),d=document.querySelector("#datetime-picker"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");let a,u;e.disabled=!0;const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],a<Date.now()?(S.error({message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0):e.disabled=!1}};function N(){u=setInterval(b,1e3)}function b(){const t=new Date,s=a-t,{days:r,hours:i,minutes:c,seconds:n}=q(s);!isNaN(r)&&!isNaN(i)&&!isNaN(c)&&!isNaN(n)&&(l.textContent=o(r),m.textContent=o(i),f.textContent=o(c),h.textContent=o(n)),s<=0&&T()}e.addEventListener("click",()=>{a&&(e.disabled=!0,d.disabled=!0,N())});function T(){clearInterval(u),l.textContent="00",m.textContent="00",f.textContent="00",h.textContent="00",u=null,d.disabled=!1}function o(t){return String(t).padStart(2,"0")}function q(t){const n=Math.floor(t/864e5),y=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),D=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:y,minutes:p,seconds:D}}C(d,x);
//# sourceMappingURL=commonHelpers.js.map