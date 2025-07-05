
const text = "Olá! Sou Arthur Bosa";
const speed = 100; 
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  typeWriter();

  const btnTop = document.getElementById("btnTop");
  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  };

  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
//Essa parte eu n sabia mt bem, ai o chat deu uma salvada kkkkkk
