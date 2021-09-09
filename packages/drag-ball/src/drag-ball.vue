<template>
    <div id="drag-ball" class="drag-ball ubs ubs-ac ubs-pc no-copy">
        <slot></slot>
    </div>
</template>

<script>
    import trigger from './trigger.js'
export default {
    name: "vsDragBall",
    data () {
        return {
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.init()
        })

    },
    methods: {
        init(){
            let that = this;
            var neko = document.querySelector('#drag-ball');
            var nekoW = neko.offsetWidth;
            var nekoH = neko.offsetHeight;
            var cuntW = 0;
            var cuntH = 0;
            var startLeft = 0;
            var startTop = 0;
            /*设置初始化位置*/
            neko.style.top = '0px';
            neko.style.left = '50%';
            neko.direction = 'top'

            move(neko, nekoW / 2, nekoH / 2);
            rate(neko, 0)
            action(neko);

            function move(obj, w, h) {
                if (obj.direction === 'left') {
                    obj.style.left = 0 - w + 'px';
                } else if (obj.direction === 'right') {

                    obj.style.left = document.body.offsetWidth - nekoW + w + 'px';
                }
                if (obj.direction === 'top') {
                    obj.style.top = 0 - h + 'px';
                } else if (obj.direction === 'bottom') {
                    obj.style.top = document.body.offsetHeight - nekoH + h + 'px';
                }
            }

            function rate(obj, a) {
                //  console.log(a);
                obj.style.transform = ' rotate(' + a + ')'
            }

            function action(obj) {

                var dir = obj.direction;

                switch (dir) {
                    case 'left':
                        rate(obj, '90deg');
                        break;
                    case 'right':
                        rate(obj, '-90deg');
                        break;
                    case 'top':
                        rate(obj, '-180deg');
                        break;
                    default:
                        rate(obj, '-0');
                        break;
                }

            }
            neko.onmousedown = function (e) {
                var nekoL = e.clientX - neko.offsetLeft;
                var nekoT = e.clientY - neko.offsetTop;
                startLeft = e.clientX;
                startTop = e.clientY;
                document.onmousemove = function (e) {
                    cuntW = 0;
                    cuntH = 0;
                    neko.direction = '';
                    neko.style.transition = '';
                    neko.style.left = (e.clientX - nekoL) + 'px';
                    neko.style.top = (e.clientY - nekoT) + 'px';
                    if (e.clientX - nekoL < 10) {
                        neko.direction = 'left';
                    }
                    if (e.clientY - nekoT < 10) {
                        neko.direction = 'top';
                    }
                    if (e.clientX - nekoL > document.body.offsetWidth - nekoW - 10) {
                        neko.direction = 'right';
                    }
                    if (e.clientY - nekoT > document.body.offsetHeight - nekoH - 10) {
                        neko.direction = 'bottom';
                    }

                    move(neko, 0, 0);
                }
				document.onmouseup = function () {
				    document.onmousemove =document.onmouseup =  null;
				}
            }
            neko.onmouseover = function () {
                //console.log(this)
                this.style.transition = '.5s';
                move(this, 0, 0);
                rate(this, 0)
            }

            neko.onmouseout = function () {
                move(this, nekoW / 2, nekoH / 2);
                action(this);
            }

            neko.onmouseup = function () {
                document.onmousemove =document.onmouseup =  null;
                this.style.transition = '.5s';
                move(this, nekoW / 2, nekoH / 2);
                action(this);
            }
			

            window.onresize = function () {
                var bodyH = document.body.offsetHeight;
                var nekoT = neko.offsetTop;
                var bodyW = document.body.offsetWidth;
                var nekoL = neko.offsetLeft;

                if (nekoT + nekoH > bodyH) {
                    neko.style.top = bodyH - nekoH + 'px';
                    cuntH++;
                }
                if (bodyH > nekoT && cuntH > 0) {
                    neko.style.top = bodyH - nekoH + 'px';
                }
                if (nekoL + nekoW > bodyW) {
                    neko.style.left = bodyW - nekoW + 'px';
                    cuntW++;
                }
                if (bodyW > nekoL && cuntW > 0) {
                    neko.style.left = bodyW - nekoW + 'px';
                }

                move(neko, nekoW / 2, nekoH / 2);
            }
            neko.onclick = function(e) {
                if (e.clientX !== startLeft || e.clientY !== startTop) {
                    startLeft = 0
                    startTop = 0
                    return
                } else {
                    that.$emit('click')
                }
            }
            document.body.onmouseleave = function (e) {
				document.onmousemove =document.onmouseup =  null;
                trigger(document.querySelector('#drag-ball'),"mouseup");
            }
        }
    }
}
</script>
