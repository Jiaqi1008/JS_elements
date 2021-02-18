window.addEventListener('load', function () {
    var focus = document.querySelector('.focus')
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focusWidth = focus.offsetWidth;

    focus.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click()
        }, 2000);
    })

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -focusWidth * index);
        })
    }
    ol.children[0].className = 'current';
    var clone = ul.children[0].cloneNode(true);
    ul.appendChild(clone);
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num >= ul.children.length - 1) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animate(ul, -focusWidth * num, function () {
                flag = true;
            });
            circle++;
            if (circle >= ul.children.length - 1) {
                circle = 0;
            };
            circleChange();
        }
    });

    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num <= 0) {
                num = ul.children.length - 1;
                ul.style.left = -focusWidth * num + 'px';
            }
            num--;
            animate(ul, -focusWidth * num, function () {
                flag = true;
            });
            if (circle <= 0) {
                circle = ul.children.length - 1;
            };
            circle--;
            circleChange();
        }
    });
    function circleChange() {
        for (i = 0; i < ul.children.length - 1; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        arrow_r.click()
    }, 2000);
})