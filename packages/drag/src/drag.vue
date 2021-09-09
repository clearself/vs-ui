<template>
	<div id="drag" class="drag-alert" :style="wrapStyle">
        <div class="title">
            <h2>{{title}}</h2>
            <div class="option">
                <a class="min" href="javascript:;" title="最小化"></a>
                <a class="max" href="javascript:;" title="最大化"></a>
                <a class="revert" href="javascript:;" title="还原"></a>
                <a class="close" href="javascript:;" title="关闭"></a>
            </div>
        </div>
        <div class="resizeL"></div>
        <div class="resizeT"></div>
        <div class="resizeR"></div>
        <div class="resizeB"></div>
        <div class="resizeLT"></div>
        <div class="resizeTR"></div>
        <div class="resizeBR"></div>
        <div class="resizeLB"></div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
var get = {
    byId: function(id) {
        return typeof id === "string" ? document.getElementById(id) : id;
    },
    byClass: function(sClass, oParent) {
        var aClass = [];
        var reClass = new RegExp("(^| )" + sClass + "( |$)");
        var aElem = this.byTagName("*", oParent);
        for (var i = 0; i < aElem.length; i++)
            reClass.test(aElem[i].className) && aClass.push(aElem[i]);
        return aClass;
    },
    byTagName: function(elem, obj) {
        return (obj || document).getElementsByTagName(elem);
    }
};
var dragMinWidth = 300;
var dragMinHeight = 200;
export default {
    name: "vsDrag",
    props: {
		title: {
		    type: String,
		    default: '标题'
		},
        dragMinWidth: {
            type: Number,
            default: 300
        },
		dragMinHeight: {
		    type: Number,
		    default: 200
		},
		width: {
			type: [String, Number],
			default: '1200px'
		},
		height: {
			type: [String, Number],
			default: '700px'
		},
    },
    data() {
        return {
           
        };
    },
    created(){
		dragMinWidth = this.dragMinWidth
		dragMinHeight = this.dragMinHeight
	},
    computed: {
		wrapStyle() {
			let style = {};
			style.width = this.addUnit(this.width);
			style.height = this.addUnit(this.height);
			return style;
		}
	},
    mounted() {
        this.$nextTick(()=>{
            this.init()
        })
    },
    methods: {
        number(value) {
	        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
        },
        addUnit(value = 'auto', unit = 'px') {
            value = String(value);
            return this.number(value) ? `${value}${unit}` : value;
        },
        init() {
            var oDrag = document.getElementById("drag");
            var oTitle = get.byClass("title", oDrag)[0];
            var oL = get.byClass("resizeL", oDrag)[0];
            var oT = get.byClass("resizeT", oDrag)[0];
            var oR = get.byClass("resizeR", oDrag)[0];
            var oB = get.byClass("resizeB", oDrag)[0];
            var oLT = get.byClass("resizeLT", oDrag)[0];
            var oTR = get.byClass("resizeTR", oDrag)[0];
            var oBR = get.byClass("resizeBR", oDrag)[0];
            var oLB = get.byClass("resizeLB", oDrag)[0];
            this.drag(oDrag, oTitle);
            //四角
            this.resize(oDrag, oLT, true, true, false, false);
            this.resize(oDrag, oTR, false, true, false, false);
            this.resize(oDrag, oBR, false, false, false, false);
            this.resize(oDrag, oLB, true, false, false, false);
            //四边
            this.resize(oDrag, oL, true, false, false, true);
            this.resize(oDrag, oT, false, true, true, false);
            this.resize(oDrag, oR, false, false, false, true);
            this.resize(oDrag, oB, false, false, true, false);
            oDrag.style.left =
                (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 +
                "px";
            oDrag.style.top =
                (document.documentElement.clientHeight - oDrag.offsetHeight) /
                    2 +
                "px";
        },
        drag(oDrag, handle) {
            let that = this;
            var disX = 0;
            var disY = 0;
            var oMin = get.byClass("min", oDrag)[0];
            var oMax = get.byClass("max", oDrag)[0];
            var oRevert = get.byClass("revert", oDrag)[0];
            var oClose = get.byClass("close", oDrag)[0];
            handle = handle || oDrag;
            handle.style.cursor = "move";
            handle.onmousedown = function(event) {
                var event = event || window.event;
                disX = event.clientX - oDrag.offsetLeft;
                disY = event.clientY - oDrag.offsetTop;
                document.onmousemove = function(event) {
                    var event = event || window.event;
                    var iL = event.clientX - disX;
                    var iT = event.clientY - disY;
                    var maxL =
                        document.documentElement.clientWidth -
                        oDrag.offsetWidth;
                    var maxT =
                        document.documentElement.clientHeight -
                        oDrag.offsetHeight;
                    iL <= 0 && (iL = 0);
                    iT <= 0 && (iT = 0);
                    iL >= maxL && (iL = maxL);
                    iT >= maxT && (iT = maxT);
                    oDrag.style.left = iL + "px";
                    oDrag.style.top = iT + "px";
                    return false;
                };
                document.onmouseup = function() {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    this.releaseCapture && this.releaseCapture();
                };
                this.setCapture && this.setCapture();
                return false;
            };
            //最大化按钮
            oMax.onclick = function() {
                oDrag.style.top = oDrag.style.left = 0;
                oDrag.style.width =
                    document.documentElement.clientWidth - 2 + "px";
                oDrag.style.height =
                    document.documentElement.clientHeight - 2 + "px";
                this.style.display = "none";
                oRevert.style.display = "block";
            };
            //还原按钮
            oRevert.onclick = function() {
                oDrag.style.width = dragMinWidth + "px";
                oDrag.style.height = dragMinHeight + "px";
                oDrag.style.left =
                    (document.documentElement.clientWidth - oDrag.offsetWidth) /
                        2 +
                    "px";
                oDrag.style.top =
                    (document.documentElement.clientHeight -
                        oDrag.offsetHeight) /
                        2 +
                    "px";
                this.style.display = "none";
                oMax.style.display = "block";
            };
            //最小化按钮
            oMin.onclick = oClose.onclick = function() {
                that.$emit('close', false)
                // that.$store.commit("setChatShow");
                // var oA = document.createElement("a");
                // oA.className = "open chat-open";
                // oA.href = "javascript:;";
                // oA.title = "还原";
                // document.body.appendChild(oA);
                // oA.onclick = function ()
                //     {
                //         // that.$store.commit('setChatShow')
                //         document.body.removeChild(this);
                //         this.onclick = null;
                //     };
            };
            //阻止冒泡
            oMin.onmousedown = oMax.onmousedown = oClose.onmousedown = function(
                event
            ) {
                this.onfocus = function() {
                    this.blur();
                };
                (event || window.event).cancelBubble = true;
            };
        },
        resize(oParent, handle, isLeft, isTop, lockX, lockY) {
            handle.onmousedown = function(event) {
                var event = event || window.event;
                var disX = event.clientX - handle.offsetLeft;
                var disY = event.clientY - handle.offsetTop;
                var iParentTop = oParent.offsetTop;
                var iParentLeft = oParent.offsetLeft;
                var iParentWidth = oParent.offsetWidth;
                var iParentHeight = oParent.offsetHeight;
                document.onmousemove = function(event) {
                    var event = event || window.event;
                    var iL = event.clientX - disX;
                    var iT = event.clientY - disY;
                    var maxW =
                        document.documentElement.clientWidth -
                        oParent.offsetLeft -
                        2;
                    var maxH =
                        document.documentElement.clientHeight -
                        oParent.offsetTop -
                        2;
                    var iW = isLeft
                        ? iParentWidth - iL
                        : handle.offsetWidth + iL;
                    var iH = isTop
                        ? iParentHeight - iT
                        : handle.offsetHeight + iT;
                    isLeft && (oParent.style.left = iParentLeft + iL + "px");
                    isTop && (oParent.style.top = iParentTop + iT + "px");
                    iW < dragMinWidth && (iW = dragMinWidth);
                    iW > maxW && (iW = maxW);
                    lockX || (oParent.style.width = iW + "px");
                    iH < dragMinHeight && (iH = dragMinHeight);
                    iH > maxH && (iH = maxH);
                    lockY || (oParent.style.height = iH + "px");
                    if (
                        (isLeft && iW == dragMinWidth) ||
                        (isTop && iH == dragMinHeight)
                    )
                        document.onmousemove = null;
                    return false;
                };
                document.onmouseup = function() {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
                return false;
            };
        }
    }
};
</script>
