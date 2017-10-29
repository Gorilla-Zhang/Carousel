//全局变量
var index = 0
var timer = null
var picture = document.getElementById("pics")
var pics = document.getElementsByTagName('a')
var len = pics.length
var title = document.getElementsByTagName("li")

function slideImg() {
  //鼠标滑过，清除定时器
  picture.onmouseover = function () {
    if (timer) {
      clearInterval(timer)
    }
  }

  //鼠标离开，图片轮播
  picture.onmouseout = function () {
    timer = setInterval(function () {
      index++
      if (index >= len) {
        index = 0
      }
      ChangeImg()
    }, 1000)
  }

  //自动触发图片轮播
  picture.onmouseout()

  //换图片
  function ChangeImg() {
    for (var i = 0; i < len; i++) {
      pics[i].style.display = "none"
      title[i].className = ""
    }
    pics[index].style.display = "block"
    title[index].className = "on"
  }

  //点击对应图标显示相应图片
  for (var j = 0; j < len; j++) {
    title[j].id = j;
    title[j].onclick = function () {
      index = this.id
      ChangeImg()
      clearInterval(timer)
    }
  }
}
slideImg()