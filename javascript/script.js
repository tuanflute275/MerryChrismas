/*==================== NO RESPONSIVE MOBILE ====================*/
function isMobileOrTablet() {
  const width = window.innerWidth;
  console.log(width);
  return width <= 1000; // Kiểm tra nếu chiều rộng màn hình nhỏ hơn hoặc bằng 1024px (Điện thoại hoặc Máy tính bảng)
}
// Hiển thị popup nếu là điện thoại hoặc máy tính bảng
if (isMobileOrTablet()) {
  document.body.innerHTML = "";
  // Thay đổi nền của body (nếu bạn muốn)
  document.body.style.background = "rgba(0, 0, 0, 0.7)";

  // Hiển thị thông báo hoặc popup nếu cần
  const popup = document.createElement("div");
  popup.style.position = "absolute";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.padding = "20px";
  popup.style.backgroundColor = "rgb(244, 55, 55)";
  popup.style.color = "#ffffff";
  popup.style.borderRadius = "10px";
  popup.style.textAlign = "center";
  popup.innerHTML = "Trang này không hỗ trợ điện thoại và máy tính bảng!";
  document.body.appendChild(popup);
}

// =========================GALARY============================

const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closeImagePopup = document.getElementById("closeImagePopup");
const imageLinks = document.querySelectorAll(".gallery-box ul li a");

// Bắt sự kiện click cho từng ảnh
imageLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn tải lại trang
    const imageUrl = link.getAttribute("href"); // Lấy URL của ảnh
    popupImage.src = imageUrl; // Gán URL vào ảnh trong popup
    imagePopup.style.display = "flex"; // Hiển thị popup
  });
});

// Đóng popup khi nhấn vào nút đóng
closeImagePopup.addEventListener("click", function () {
  imagePopup.style.display = "none";
});

// Đóng popup khi nhấn vào vùng overlay
imagePopup.addEventListener("click", function (event) {
  if (event.target === imagePopup) {
    imagePopup.style.display = "none";
  }
});

/* ..............................................
  Scroll To Top
  ................................................. */
window.onscroll = function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Cuộn lên đầu trang khi người dùng nhấp vào nút
document.getElementById("scroll-to-top").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Ngừng hành động mặc định

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Cuộn mượt mà
      block: "start", // Đảm bảo cuộn tới phần bắt đầu của mục tiêu
    });
  });
});

// Chọn tất cả các phần tử có id tương ứng
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        // Thêm lớp active khi phần tử xuất hiện trên màn hình
        link.classList.add("active");
      } else {
        // Loại bỏ lớp active khi phần tử không còn xuất hiện
        link.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.5, // Phần tử được coi là xuất hiện khi ít nhất 50% phần tử hiển thị trên màn hình
  }
);

// Đăng ký observer cho mỗi section
sections.forEach((section) => observer.observe(section));

// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);

// JavaScript to create snowflakes dynamically
const setting = document.getElementById("setting-btn");

// Toggle hiển thị/ẩn menu khi nhấn vào biểu tượng
setting.addEventListener("click", function (event) {
  console.log(1);
  submenu.style.display = submenu.style.display === "block" ? "none" : "block"; // Chuyển đổi giữa hiển thị và ẩn
});

console.log("CODE BY TUANFLUTE275");
