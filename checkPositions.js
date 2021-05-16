function reposition() {
  let top = Array.from(document.getElementsByClassName("slant"));
  let middle = Array.from(document.getElementsByClassName("slant-top"));
  let bottom = Array.from(document.getElementsByClassName("slant-bot"));
  let all = top.concat(middle).concat(bottom);

  let position = 0;
  for(let i = 0; i < all.length - 1; i++) {
    position += all[i].offsetHeight - 100;
    all[i + 1].style.top = position + "px";
  }
}

window.addEventListener("load", reposition);
window.addEventListener("resize", reposition);
