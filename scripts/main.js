let myImage = document.querySelector("img");

let currentIndex = 0;  
const images = ["images/z1.jpg", "images/z2.jpg", "images/z3.jpg"];  
  
function changeImage() {  
  currentIndex = (currentIndex + 1) % images.length; // 循环切换图片  
  document.getElementById('myImage').src = images[currentIndex]; // 更新图片源  
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎你！" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎你！" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };

  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        alert("名字不可为空");
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "欢迎你！" + myName;
    }
  }
  

