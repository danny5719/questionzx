// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    // ...其他变量声明...
    
    // 初始化"愿意"按钮的缩放比例
    let yesBtnScale = 1;
    
    // 点击"再考虑下"按钮
    noBtn.addEventListener('click', function(e) {
        // 增大"愿意"按钮
        yesBtnScale += 0.2; // 每次点击增加20%大小
        yesBtn.style.transform = `scale(${yesBtnScale}) translateY(-5px)`; // 保持原有的悬停效果
        
        // 获取按钮和容器尺寸
        const btnRect = noBtn.getBoundingClientRect();
        const containerRect = buttonsDiv.getBoundingClientRect();
        
        // 计算可移动范围（保留2px边距）
        const minX = 2;
        const maxX = containerRect.width - btnRect.width - 2;
        const minY = 2;
        const maxY = containerRect.height - btnRect.height - 2;
        
        // 生成新位置（确保在容器内）
        const newX = Math.max(minX, Math.min(maxX, 
            Math.random() > 0.9 ? 
                Math.random() * containerRect.width * 0.9 :  // 向右大幅移动
                containerRect.width - Math.random() * containerRect.width * 0.9  // 向左大幅移动
        ));
        
        const newY = Math.max(minY, Math.min(maxY, 
            Math.random() > 0.9 ? 
                Math.random() * containerRect.height * 0.9 :  // 向下大幅移动
                containerRect.height - Math.random() * containerRect.height * 0.9  // 向上大幅移动
        ));
        
        // 应用新位置
        noBtn.style.transition = "all 0.4s ease-out";
        noBtn.style.position = "absolute";
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
        
        // 改变按钮文本
        const messages = [
            "真的不再考虑下吗？",
            "我请客哦！",
            "还有爆米花呢🍿",
            "给个机会嘛",
            "拜托啦~🥺",
            "我会选你喜欢的电影🎦",
            "还有冰淇淋🍦",
            "周末有空吗？"
        ];
        noBtn.textContent = messages[Math.floor(Math.random() * messages.length)];
        
        // 创建烟花
        createFireworks(fireworksContainer, 3);
        
        // 过渡结束后移除transition属性
        setTimeout(() => {
            noBtn.style.transition = "none";
        }, 400);
    });
    
    // ...其他代码...
});
// 点击"再考虑下"按钮 - 可以完全移出容器的版本
noBtn.addEventListener('click', function(e) {
    // 获取按钮和容器尺寸
    const btnRect = noBtn.getBoundingClientRect();
    const containerRect = buttonsDiv.getBoundingClientRect();
    
    // 计算可移动范围 - 允许完全移出容器
    // 水平方向：从按钮完全在容器左侧外到完全在右侧外
    const minX = -btnRect.width; // 完全移动到左侧外
    const maxX = containerRect.width; // 完全移动到右侧外
    
    // 垂直方向：从按钮完全在容器上方外到完全在下方外
    const minY = -btnRect.height; // 完全移动到上方外
    const maxY = containerRect.height; // 完全移动到下方外
    
    // 生成新位置
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;
    
    // 应用新位置
    noBtn.style.transition = "all 0.4s ease-out";
    noBtn.style.position = "absolute";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
    
    // 改变按钮文本
    const messages = [
        "我跑出去啦！",
        "抓不到我吧！",
        "我自由啦！",
        "在外面真舒服！",
        "来外面抓我呀！",
        "我逃出来啦！",
        "外面世界很大！",
        "追不上我啦！"
    ];
    noBtn.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    // 创建烟花效果
    createFireworks(fireworksContainer, 3);
    
    // 过渡结束后移除transition属性
    setTimeout(() => {
        noBtn.style.transition = "none";
    }, 400);
});