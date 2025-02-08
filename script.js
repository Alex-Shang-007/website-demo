document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    pages.forEach(page => {
        observer.observe(page);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const effectsContainer = document.getElementById('background-effects');

    // 定义中心区域的范围
    const centerWidth = 0.4; // 中心区域宽度占页面的40%
    const centerHeight = 0.4; // 中心区域高度占页面的40%
    const centerLeft = (1 - centerWidth) / 2; // 中心区域左边界
    const centerTop = (1 - centerHeight) / 2; // 中心区域上边界

    function isInCenter(x, y) {
        // 检查坐标是否在中心区域内
        return x >= centerLeft && x <= centerLeft + centerWidth &&
               y >= centerTop && y <= centerTop + centerHeight;
    }

    function createEffect(className, content, count) {
        for (let i = 0; i < count; i++) {
            const effect = document.createElement('div');
            effect.classList.add(className);
            effect.textContent = content;

            let x, y;
            do {
                // 随机生成位置
                x = Math.random(); // 0 ~ 1（相对于页面宽度）
                y = Math.random(); // 0 ~ 1（相对于页面高度）
            } while (isInCenter(x, y)); // 如果位置在中心区域，则重新生成

            effect.style.left = `${x * 100}vw`;
            effect.style.top = `${y * 100}vh`;
            effect.style.animationDelay = `${Math.random() * 5}s`;
            effectsContainer.appendChild(effect);
        }
    }

    createEffect('star', '🌟', 10); // 创建20个星星
    createEffect('heart', '💖', 10); // 创建10个爱心
    createEffect('cake', '🎂', 10); // 创建5个蛋糕
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const musicPrompt = document.getElementById('music-prompt');

    // 用户点击页面时播放音乐
    document.addEventListener('click', function() {
        music.play();
        musicPrompt.style.display = 'none'; // 隐藏提示框
    });

    // 检查音乐是否已播放，如果没有则显示提示框
    if (music.paused) {
        musicPrompt.style.display = 'block';
    }
});
