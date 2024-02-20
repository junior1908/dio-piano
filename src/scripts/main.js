const teclasPiano = document.querySelectorAll(".teclas-piano .tecla");
const volumeSlider = document.querySelector(".volume input");
const keysCheck = document.querySelector(".check-teclas input")


let teclasMapeadas = [];
let audio = new Audio();

const playTune = (tecla) => {
  audio.src = "./src/sounds/" + tecla +".wav";
  console.log(teclasMapeadas)
  console.log(audio.src);
  audio.play();

  const teclaPressionada = document.querySelector('[data-tecla="'+ tecla + '"]');
  teclaPressionada.classList.add("active");
  setTimeout(() =>{
    teclaPressionada.classList.remove("active");
  }, 200);
};

teclasPiano.forEach((key)=> {
  key.addEventListener("click", ()=> {
    playTune(key.dataset.tecla);
    teclasMapeadas.push(key.dataset.tecla);
  });
});

document.addEventListener("keydown",(e) => {
  if ((e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
  // console.log(e.target.value);
}

const showHideKeys = () => {
  teclasPiano.forEach(key => key.classList.toggle("hide"));
}
 
volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);


// f y f f u f e f k f f o k y f k ; f e e a g f