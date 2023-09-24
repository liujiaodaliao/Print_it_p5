document.addEventListener("DOMContentLoaded", function () {
    //1 添加事件监听器
    const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//2 创建常量slides tableaux，定义image和标语tagline

let currentIndex = 0; 
//3 当前幻灯片索引index,以便切换幻灯片，初始值为0 表示初始状态下显示第一张幻灯片

    //4 获取轮播相关的 DOM 元素,获取容器,4个轮播图，圆点数组，左箭头，右箭头，标语p
    const banner = document.getElementById("banner");
    const image = banner.querySelector("img"); 
    const dots = banner.querySelectorAll(".dot");
    const prevArrow = banner.querySelector(".arrow_left");
    const nextArrow = banner.querySelector(".arrow_right");
    const tagLine = banner.querySelector("p");

    //7 多次初始化tagline更新标语，故创建标语函数，简化代码
    function updateTagLine(){
        tagLine.innerHTML = slides[currentIndex].tagLine;
        image.src = slides[currentIndex].image; 
    }
    //7 停止自动轮播函数，清除之前设置的自动轮播定时器
    function stopAutoSlide() {
        clearInterval(autoSlideInterval); 
    }

    // 5 创建自动轮播autoSlide函数，
    //当前页圆点取消选中状态
    //为轮播控制索引，实现切换下一页
    //赋值后是下一页，圆点选中
    //调用函数更新标语和图片
    function autoSlide() {
        dots[currentIndex].classList.remove("dot_selected");
        currentIndex = (currentIndex + 1) % slides.length;
        dots[currentIndex].classList.add("dot_selected");
        updateTagLine();
    }

    //6 设置定时器函数，触发时，每3秒调用一次自动轮播函数
    let autoSlideInterval = setInterval(autoSlide, 3000);

    //7 初始化第一张幻灯片
    updateTagLine(); 

    //8 左箭头点击事件，
    //点击事件监听器 点击触发时，先停止轮播，点一次切换一页，圆点同步，3s后再次启动轮播
    prevArrow.addEventListener("click", function () {
        stopAutoSlide();
        dots[currentIndex].classList.remove("dot_selected");
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        dots[currentIndex].classList.add("dot_selected");
        updateTagLine(); 
        autoSlideInterval = setInterval(autoSlide, 3000); 
        console.log("The left arrow was clicked"); 
        // 测试事件监听器是否成功运行
    });

    //9 右箭头点击事件，
    nextArrow.addEventListener("click", function () {
        stopAutoSlide(); 
        dots[currentIndex].classList.remove("dot_selected");
        currentIndex = (currentIndex + 1) % slides.length;
        dots[currentIndex].classList.add("dot_selected");
        updateTagLine(); 
        autoSlideInterval = setInterval(autoSlide, 3000); 
        console.log("The right arrow was clicked"); 
    });

});
//这段代码主要实现了一个基本的轮播功能，当页面加载完毕后会自动轮播幻灯片，用户也可以通过点击箭头或圆点手动切换幻灯片。