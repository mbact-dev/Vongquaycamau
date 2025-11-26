// 🧾 Bắt sự kiện gửi form
document.getElementById("infoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const major = document.getElementById("major").value.trim();
  // const studyPlanInput = document.querySelector('input[name="studyPlan"]:checked');

  // if (!studyPlanInput) {
  //   alert("Vui lòng chọn ý định học Thạc sĩ!");
  //   return;
  // }

  // const studyPlan = studyPlanInput.value;

  // ✅ Lưu thông tin vào localStorage
  const playerData = { fullname, email, phone, major };
  localStorage.setItem("playerData", JSON.stringify(playerData));

  // ➡️ Chuyển sang trang quay thưởng
  window.location.href = "wheel.html";
});
