export function animate(obj, target, callback) {
    clearInterval(obj.time);
    obj.time = setInterval(function () {
        var speed = (target - obj.offsetLeft) / 10
        speed = speed >= 0 ? Math.ceil(speed) : Math.floor(speed)
        if (obj.offsetLeft == target) {
            clearInterval(obj.time);
            if (callback) {
                callback(); //调用函数,动画结束之后才执行，回调函数
            }
        }
        obj.style.left = obj.offsetLeft + speed + 'px';
    }, 10)
}