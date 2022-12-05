// 轮播图
window.addEventListener('load', function() {

    var leftArrow = this.document.querySelector('.lf');
    var rightArrow = this.document.querySelector('.lr');
    
    // 鼠标移动到左右箭头的位置更换图片 有灰色背景的图片
    leftArrow.addEventListener('mouseenter', function() {
        this.style.backgroundPosition = '43px 0';
    });
    
    leftArrow.addEventListener('mouseleave', function() {
        this.style.backgroundPosition = '0 0';
    });
    
    rightArrow.addEventListener('mouseenter', function() {
        this.style.backgroundPosition = '-42px 0';
    });
    
    rightArrow.addEventListener('mouseleave', function() {
        this.style.backgroundPosition = '-123px 0';
    });

    // 获取图片 和 小点
    var imgs = this.document.querySelectorAll('.img');
    var dots = this.document.querySelector('.dots').querySelectorAll('.app span');

    // 给图片设置index 属性，好判断当前的图片是哪一张
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('img-index', i);
    }

    // 获取当前图片 和 图片的index（数组下标）
    var current = this.document.querySelector('.current');
    var currentIndex = current.getAttribute('img-index');

    // 左箭头的点击事件，点击了就返回前一张图片 
    // 如果当前图片为第一张那么需要更换到最后一张图片也就是第四张
    leftArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[--currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 4;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    });

    // 点击右箭头下一张图片切换
    // 如果当前为第五张图片，那么切换回第一张图片
    rightArrow.addEventListener('click', changeImage);

    var timer = this.setInterval(changeImage, 8000);

    function changeImage() {
        if (currentIndex < 4) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[++currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 0;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    };

    // 小圆点的点击事件
    for (let k = 0; k < dots.length; k++) {
        dots[k].setAttribute('data-index', k);
        dots[k].addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            if (index != currentIndex) {
                imgs[currentIndex].classList.remove('current');
                dots[currentIndex].classList.remove('square');
                imgs[index].classList.add('current');
                dots[index].classList.add('square');
                currentIndex = index;
            }

        })
    }

});

    window.addEventListener('scroll', function () {
        let top = window.scrollY
        if (top != 0) {
            $('#as').css('top', '-100vh')
            $('#content').css('top', '0')
            $('#content').css('transform', 'translateY(0)')
            $('#head').css('display', 'block')
            $('.scroll ').css('z-index','1')
        } else {
            $('#as').css('top', '0px')
            $('.ad').css('top', '100vh')
            $('#content').css('transform', 'translateY(400px)') 
            $('#head').css('display', 'none')
        }
    })

