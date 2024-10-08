let home = document.querySelector('.home');
let skill = document.querySelector('.skill');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let contentHeading = document.querySelector('.written-content-header');
let highlightedHeading = document.querySelector('.name-animation');
let writtenContent = document.querySelector('.written-content');
home.style.color="red";
home.addEventListener('click',()=>{
  home.style.color="red";
  skill.style.color="white";
  about.style.color="white";
  contact.style.color="white";
  writtenContent.innerText="I am Rajan singh of Uttar Pradesh creating my portfolio using HTML, Java-Script and CSS.If you found my sites intresting and helpfull and have work, contact me!!";
  
  
});
skill.addEventListener('click',()=>{
  home.style.color="white";
  skill.style.color="red";
  about.style.color="white";
  contact.style.color="white";
  writtenContent.innerHTML=`<ol>
  <li>React</li>
  <li>Java</li>
  <li>Frontend-Development</li>
  <li>C language</li>
  <li>Cascading Style Sheet</li>
  <li>Java-Script</li>
  <li>HTML</>
  </ol>`;
});
about.addEventListener('click',()=>{
  home.style.color="white";
  skill.style.color="white";
  about.style.color="red";
  contact.style.color="white";
  writtenContent.innerHTML=`<ul>
  <li>Undergraduate at NIT Manipur CSE.</li>
  <li>Current CPI : 8.96.</Li>
  <li>Love to play Cricket.</li>
  <li>Goal is master as much as skill i can.</li>
  </ul>`;
  
});
contact.addEventListener('click',()=>{
  home.style.color="white";
  skill.style.color="white";
  about.style.color="white";
  contact.style.color="red";
  writtenContent.innerHTML=`<ul>
  <li>Phone: 7706859838</li>
  <li>Email: rajansingh8593@gmail.com</Li>
  <li><i class="fa-brands fa-linkedin fa-l" style="color: #ffffff;"></i> <a href="https://www.linkedin.com/in/rajan-singh-650844280/">https://www.linkedin.com/in/rajan-singh-650844280/</a></li>
  <li><i class="fa-brands fa-instagram fa-l" style="color: #fafcff;"></i><a href="https://www.instagram.com/rajan_singh0_/"> https://www.instagram.com/rajan_singh0_/</a></li>

  </ul>`;
});



// typewriter Effect
const texts = [
  "DEVELOPER",
  "CODER",
  "STUDENT"
]

let speed  =100;
const textElements = document.querySelector(".name-animation");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
  if (charcterIndex < texts[textIndex].length){
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed); 
  }
  else{
      setTimeout(eraseText, 1000)
  }
}

function eraseText(){
  if(textElements.innerHTML.length > 0){
      textElements.innerHTML = textElements.innerHTML.slice(0,-1);
      setTimeout(eraseText, 50)
  }
  else{
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500)
  }
}

window.onload = typeWriter