<template>
  <transition name="vs-alert-fade">
    <div class="vs-alert"
         :class="[ typeClass, {'is-center': center} ]"
         v-show="visible">
      <i class="vs-alert__icon"
         :class="[ iconClass, isBigIcon ]"
         v-if="showIcon"></i>
      <div class="vs-alert__content">
        <span class="vs-alert__title"
              :class="isBoldTitle"
              style="">{{this.title}}</span>
        <p class="vs-alert__description"
           v-if="description">{{description}}</p>
        <i v-if="closable"
           class="vs-alert__closebtn"
           :class="[ closeText ? 'is-customed' : 'vs-icon-close2']"
           @click="close">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>
<script>
function isTextNode(vnode) {
  if (
    Array.isArray(vnode) &&
    vnode.length === 1 &&
    vnode[0].tag === undefined &&
    vnode[0].text
  ) {
    return true;
  } else {
    return false;
  }
}

export default {
  name: "vsAlert",
  props: {
    title: {
      type: String,
      requre: true,
      default() {
        const defaultNode = this.$slots.default;
        return isTextNode(defaultNode) ? defaultNode[0].text : undefined;
      }
    },
    type: {
      type: String,
      default: "info"
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String
    },
    closable: {
      type: Boolean,
      default: true
    },
    description: {
      type: String
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    typeClass() {
      return `vs-alert--${this.type}`;
    },
    iconClass() {
      //暂无对应图标
      // return `vs-icon--${this.type}`
      return "vs-icon-fav";
    },
    isBoldTitle() {
      return this.description ? "is-bold" : "";
    },
    isBigIcon() {
      return this.description ? "is-big" : "";
    }
  },
  methods: {
    close(e) {
      this.visible = false;
      this.$emit("close");
    }
  }
};
</script>
