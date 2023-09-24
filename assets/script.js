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

   
});
//这段代码主要实现了一个基本的轮播功能，当页面加载完毕后会自动轮播幻灯片，用户也可以通过点击箭头或圆点手动切换幻灯片。