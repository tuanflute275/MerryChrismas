document.addEventListener("DOMContentLoaded", function() {
    const snowContainer = document.getElementById('snow');
    const numFlakes = 100; // Số lượng bông tuyết
    const snowflakes = [];

    // Tạo các bông tuyết
    for (let i = 0; i < numFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        
        // Thiết lập vị trí và tốc độ ngẫu nhiên
        snowflake.style.left = `${Math.random() * 100}vw`;  // Vị trí ngang ngẫu nhiên
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Thời gian rơi ngẫu nhiên
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Delay ngẫu nhiên
        
        snowContainer.appendChild(snowflake);
        snowflakes.push(snowflake);
    }
});
