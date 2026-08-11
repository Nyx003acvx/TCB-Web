const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
function handleForm(event){event.preventDefault();const f=event.target;const subject=encodeURIComponent(`Business enquiry from ${f.name.value}${f.company.value?` — ${f.company.value}`:''}`);const body=encodeURIComponent(`Name: ${f.name.value}\nCompany: ${f.company.value}\nEmail: ${f.email.value}\n\nMessage:\n${f.message.value}`);window.location.href=`mailto:espererglobalbd@gmail.com?subject=${subject}&body=${body}`;return false;}
