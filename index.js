function showItem(item) {
  console.log(item, "item");
  for (let i = 1; i <= 3; i++) {
    if (i == item) {
      document.querySelector(
        `#showContent content:nth-child(${item}) div:nth-child(2)`
      ).style.display = "flex";
      document.getElementById(`contentBox${item}`).style.cssText = `
        height:175px;
        background-color:rgb(244, 251, 249);
         border: 2px solid #007f619c;
      `;
    } else {
      document.querySelector(
        `#showContent content:nth-child(${i}) div:nth-child(2)`
      ).style.display = "none";
      document.getElementById(`contentBox${i}`).style.cssText = `
        height:75px;
        background-color:white;
         border: 0.9px solid #c8c8c8;
      `;
    }
  }
}

document.getElementById("totalAmount").insertAdjacentText("beforeend", total);

console.log(
  document.querySelector("#showContent content:nth-child(2) div:nth-child(2)"),
  "element"
);
