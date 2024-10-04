const imageFileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
const TextInput = document.querySelector("#TextInput");

let image;

imageFileInput.addEventListener("change", (e) => {
  const imageDataUrl = URL.createObjectURL(e.target.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        TextInput.value,
      );
    },
    { once: true }
  );
});

TextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, TextInput.value);
});


function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 20);
  const yOffset = height / 2.5;

  
  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;

  // Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);
  
  // Add watermark
  ctx.fillText("justpinoythings",width*0.80,height*0.90)
  ctx.strokeStyle = "black";
}
