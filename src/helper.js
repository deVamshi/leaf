export const logger = (data) => {
  console.log(data);
};

export async function takeScreenShot(elementId) {
  let div = document.getElementById(elementId);
  html2canvas(div, { allowTaint: true, useCORS: true }).then((canvas) => {
    var t = canvas.toDataURL().replace("data:image/png;base64,", "");
    downloadBase64File("image/png", t, "image");
  });
}

function downloadBase64File(contentType, base64Data, fileName) {
  const linkSource = `data:${contentType};base64,${base64Data}`;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}
