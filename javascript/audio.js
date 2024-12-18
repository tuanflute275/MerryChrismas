const audioList = [
    "../audios/hoa-nhip-giang-sinh.mp3",
    "../audios/last-chrismas.mp3",
  ];
  
  const handleSongEnded = () => {
    const audioEl = document.getElementById("audioEl");
    const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];
    audioEl.setAttribute("src", randomAudio);
    audioEl.muted = true;
    audioEl
      .play()
      .then(() => {
        console.log("Phát âm thanh thành công!");
      })
      .catch((err) => {
        console.error("Không thể tự động phát âm thanh:", err);
        // Hiển thị thông báo yêu cầu người dùng bật âm thanh
        const unmuteBtn = document.createElement("button");
        unmuteBtn.innerText = "🔊"; // Biểu tượng âm thanh
        unmuteBtn.style.width = "40px";
        unmuteBtn.style.height = "40px";
        unmuteBtn.style.position = "fixed";
        unmuteBtn.style.bottom = "65px";
        unmuteBtn.style.right = "20px";
        unmuteBtn.style.display = "block";  // Nút bắt đầu ở trạng thái ẩn
        unmuteBtn.style.fontSize = "25px";
        unmuteBtn.style.borderRadius = "50%";  // Đặt nút thành hình tròn
        unmuteBtn.style.transition = ".2s";
        unmuteBtn.style.letterSpacing = "1px";
        unmuteBtn.style.textAlign = "center";
        unmuteBtn.style.lineHeight = "40px";  // Căn chỉnh văn bản trong nút
        unmuteBtn.style.background = "#fff";  // Màu nền của nút
        unmuteBtn.style.color = "#ffffff";  // Màu chữ
        unmuteBtn.style.fontWeight = "900";
        unmuteBtn.style.lineHeight = "15px";
        unmuteBtn.style.zIndex = "999999999999";
        document.body.appendChild(unmuteBtn);
  
        unmuteBtn.addEventListener("click", function () {
          audioEl.muted = false; // Bỏ tắt tiếng
          audioEl.play().then(() => {
            console.log("Âm thanh đã được bật!");
            document.body.removeChild(unmuteBtn); // Ẩn nút sau khi bật
          });
        });
      });
  };
  window.addEventListener("DOMContentLoaded", handleSongEnded());
  const audioEl = document.getElementById("audioEl");
  audioEl.addEventListener("ended", handleSongEnded);