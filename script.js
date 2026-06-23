// 搜索功能逻辑
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const TARGET_URL = 'https://chat.deepseek.com/sign_in';

    // 执行搜索跳转
    function performSearch() {
        const query = searchInput.value.trim();
        
        // 无论是否输入内容，都跳转到目标页面
        // 如果有输入内容，可以附加到URL中（如果需要的话）
        if (query) {
            // 可以选择将搜索词附加到URL，但deepseek可能不需要
            // window.location.href = TARGET_URL + '?q=' + encodeURIComponent(query);
            window.location.href = TARGET_URL;
        } else {
            window.location.href = TARGET_URL;
        }
    }

    // 点击搜索按钮
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
    });

    // 按回车键搜索
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // 输入框获得焦点时的动画效果
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });

    // 页面加载完成后的欢迎动画
    setTimeout(() => {
        searchInput.focus();
    }, 800);
});
