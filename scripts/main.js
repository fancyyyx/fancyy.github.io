let myImage = document.querySelector("img");

let currentIndex = 0; // 初始化当前图片索引  
const images = ["images/z1.jpg", "images/z2.jpg", "images/z3.jpg"]; // 图片数组  
  
myImage.onclick = function () {  
  // 更新索引，实现循环  
  currentIndex = (currentIndex + 1) % images.length;  
    
  // 根据更新后的索引设置图片的src属性  
  myImage.setAttribute("src", images[currentIndex]);  
};

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
  

