const e=document.querySelector(".feedback-form"),t={};e.addEventListener("submit",(function(e){e.preventDefault(),console.log(t),e.target.reset()})),e.addEventListener("input",(e=>{t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}));JSON.parse(localStorage.getItem("feedback-form-state"));
//# sourceMappingURL=03-feedback.47a2f4c5.js.map
