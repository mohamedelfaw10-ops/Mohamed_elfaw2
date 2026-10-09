// ===== LOADER =====
let p = 0;
let bar = document.getElementById('bar');
let pct = document.getElementById('pct');
let loader = document.getElementById('loader');

let iv = setInterval(() => {
  p += 1;
  if(bar) bar.style.width = p + '%';
  if(pct) pct.innerText = p + '%';
  if(p >= 100){
    clearInterval(iv);
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 800);
    }, 500);
  }
}, 20);

// ===== TYPING EFFECT =====
const roles = ["Frontend Developer", "UI/UX Designer", "React Learner", "Freelancer"];
let ri = 0, ci = 0, del = false;
let el = document.getElementById('typing');

function type() {
  if(!el) return;
  let cur = roles[ri];
  if(!del){
    el.textContent = cur.substring(0, ci + 1);
    ci++;
    if(ci === cur.length){
      setTimeout(() => del = true, 1500);
    }
  } else {
    el.textContent = cur.substring(0, ci - 1);
    ci--;
    if(ci === 0){
      del = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(type, del? 50 : 90);
}
type();

// ===== SEND MESSAGE TO WHATSAPP + EMAIL =====
function send() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('emailInput').value;
  let message = document.getElementById('msg').value;

  if(!name ||!email ||!message){
    alert("من فضلك املى كل البيانات يا محمد");
    return;
  }

  // رسالة الواتساب برقمك الجديد
  let waMsg = `مرحبا Mohamed Elfaw,%0Aانا ${name}%0Aايميلي: ${email}%0Aالرسالة: ${message}`;

  // هيفتح واتساب على رقمك
  window.open(`https://wa.me/201038359938?text=${waMsg}`, '_blank');

  // لو عاوز يبعت ايميل كمان
  // window.location.href = `mailto:mohamedelfaw10@gmail.com?subject=Portfolio Contact from ${name}&body=${message} - Email: ${email}`;
}

// ===== SCROLL ANIMATION =====
window.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(card => {
    let top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});