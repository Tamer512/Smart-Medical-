(function(){
const langToggle = document.getElementById('langToggle');
let lang = 'en';
function setLanguage(to){
lang = to;
document.documentElement.lang = (lang==='ar'?'ar':'en');
document.querySelectorAll('[data-en]').forEach(el=>el.textContent=(lang==='ar'?el.getAttribute('data-ar'):el.getAttribute('data-en')));
langToggle.textContent = (lang==='ar'?'English':'العربية');
}
langToggle.addEventListener('click',()=>{setLanguage(lang==='en'?'ar':'en');});
setLanguage('en');

// Placeholder AI function (replace with backend API)
window.getAISummary=function(file){return "AI summary placeholder for "+file;}
window.askQuestion=function(question){return "AI Q&A placeholder for: "+question;}
})();
