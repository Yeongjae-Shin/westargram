const userInfoValue = document.querySelectorAll(".userinfo");
const loginBtn = document.querySelector("#loginBtn");

function handleLoginBtnColor() {
  for (let i = 0; i < userInfoValue.length; i++) {
    userInfoValue[i].addEventListener("change", function (e) {
      if (
        (userInfoValue[0].value.length && userInfoValue[1].value.length) >= 1
      ) {
        loginBtn.style.backgroundColor = "#0095f6";
        loginBtn.style.cursor = "pointer";
      } else if (
        (userInfoValue[0].value.length && userInfoValue[1].value.length) === ""
      ) {
        loginBtn.style.backgroundColor = "#c0dffd";
      }
    });
  }
}

function init() {
  handleLoginBtnColor();
}

init();
