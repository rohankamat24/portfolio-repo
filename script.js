
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.onscroll = () => {
  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop - 200 && scrollPos < section.offsetTop + section.offsetHeight - 200) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === section.id) {
          link.classList.add("active");
        }
      });
    }
  });


  const scrollBtn = document.getElementById("scroll-top");
  scrollBtn.style.display = scrollPos > 400 ? "block" : "none";
};

// Scroll to top
document.getElementById("scroll-top").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


  document.querySelectorAll('.fill').forEach(bar => {
    const percent = parseInt(bar.textContent);
    bar.style.width = percent + '%';

    if (percent >= 85) {
      bar.classList.add('advanced');
    } else if (percent >= 65) {
      bar.classList.add('intermediate');
    } else {
      bar.classList.add('beginner');
    }
  });



// Typing animation
const roles = ["Web Developer", "Java Enthusiast", "Frontend Designer","Artifical Intelligence Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing-role");

function typeRole() {
  if (charIndex <= roles[roleIndex].length) {
    typingEl.innerText = roles[roleIndex].substring(0, charIndex++);
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingEl.innerText = roles[roleIndex].substring(0, --charIndex);
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}
 function validateForm() {
    alert("Message sent successfully!");
    return false; 
  }



typeRole();


document.getElementById("year").textContent = new Date().getFullYear();
