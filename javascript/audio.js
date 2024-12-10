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
        unmuteBtn.innerText = "Bật âm thanh";
        unmuteBtn.style.position = "fixed";
        unmuteBtn.style.bottom = "10px";
        unmuteBtn.style.right = "10px";
        unmuteBtn.style.padding = "10px 20px";
        unmuteBtn.style.background = "#007bff";
        unmuteBtn.style.color = "#fff";
        unmuteBtn.style.border = "none";
        unmuteBtn.style.borderRadius = "5px";
        unmuteBtn.style.cursor = "pointer";
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