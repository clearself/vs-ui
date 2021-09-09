# FullScreen 全屏容器
----
### TIP
- 数据可视化页面一般在浏览器中进行全屏展示，全屏容器将根据屏幕比例及当前浏览器窗口大小，自动进行缩放处理。浏览器全屏后，全屏容器将充满屏幕。
- 建议在全屏容器内使用百分比搭配flex进行布局，以便于在不同的分辨率下得到较为一致的展示效果。
- 使用前请注意将body的margin设为0，否则会引起计算误差，全屏后不能完全充满屏幕。

### 基础用法
<div class="demo-block">
    <vs-full-screen v-if="isShow" style="width: 100%;height: 100%;background: deepskyblue" class=" ub ub-pc ub-ac">
        <vs-button @click="isShow = false" type="success">关闭</vs-button>
    </vs-full-screen>
    <vs-button @click="isShow = true" type="primary">显示</vs-button>
</div>

::: demo
```html

<vs-full-screen style="width: 100%;height: 100%;background: deepskyblue;"></vs-full-screen>

```
:::
<script>

export default {
  data() {
    return {
      isShow: false
    };
  },
  methods:{

  }
}
</script>

