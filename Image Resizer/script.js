const fileInput = document.querySelector(".fileInput");
const widthinput = document.querySelector(".width");
const heightinput = document.querySelector(".height");
const checkbox = document.querySelector(".apectratio");
const canvas = document.querySelector(".canvas");

const canvasCtx = canvas.getContext("2d");

let activeimage, origanalaspectratio;

fileInput.addEventListener("change", (e) => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    openimage(reader.result);
  });

  reader.readAsDataURL(e.target.files[0]);
});

widthinput.addEventListener("change", () => {
  if (!activeimage) return;

  const widthvalue = checkbox.checked
    ? heightinput.value / origanalaspectratio
    : widthinput.value;

  resize(widthinput.value, widthvalue);
});

heightinput.addEventListener("change", () => {
  if (!activeimage) return;
  const heigthvalue = checkbox.checked
    ? widthinput.value / origanalaspectratio
    : heightinput.value;
  resize(widthinput.value, heigthvalue);
});

function openimage(imagesrc) {
  activeimage = new Image();

  activeimage.addEventListener("load", () => {
    origanalaspectratio = activeimage.width / activeimage.height;

    resize(activeimage.width, activeimage.height);
  });
  activeimage.src = imagesrc;
}

function resize(width, height) {
  canvas.width = width;
  canvas.height = height;

  widthinput.value = width;
  heightinput.value = height;

  canvasCtx.drawImage(activeimage, 0, 0, width, height);
}
