const $fruitsUl = document.getElementById("fruits");
const $fruitsLi = document.getElementsByTagName("li");

for (let i = 0; i < $fruitsLi.length; i++) {
  $fruitsLi[i].addEventListener("click", (e) => {
    e.stopPropagation(); // 이벤트 전파 중지

    console.log("--------------- li 이벤트 ---------------");
    console.log(`이벤트 단계 : ${e.eventPhase}`);
    console.log(`이벤트 타겟 : ${e.target}`);
    console.log(`이벤트 현재 타겟 : ${e.currentTarget}`);
  });
}

$fruitsUl.addEventListener("click", (e) => {
  console.log("--------------- ul 이벤트 ---------------");
  console.log(`이벤트 단계 : ${e.eventPhase}`);
  console.log(`이벤트 타겟 : ${e.target}`);
  console.log(`이벤트 현재 타겟 : ${e.currentTarget}`);
});

document.addEventListener("click", (e) => {
  console.log("--------------- document 이벤트 ---------------");
  console.log(`이벤트 단계 : ${e.eventPhase}`);
  console.log(`이벤트 타겟 : ${e.target}`);
  console.log(`이벤트 현재 타겟 : ${e.currentTarget}`);

  if (e.target.id === "cherry") {
    console.log("체리 클릭");
  }
});

const $link = document.getElementById("link");

$link.addEventListener("click", (e) => {
  e.preventDefault(); // 기본 동작 방지
});
