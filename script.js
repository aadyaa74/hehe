const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 400 - 200;

  noButton.style.transform = `translate(${x}px, ${y}px)`;
});

const yesButton = document.getElementById("yes");

yesButton.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <h1>Yay!!! 💕🥰</h1>
      <p>I knew you'd say yes 😌</p>
    </div>
  `;
});
