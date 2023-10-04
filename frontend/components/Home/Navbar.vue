<template>
    <div class="top-nav">
        <a href="#showcase">Link 1</a>
        <a href="#contact">Link 2</a>
        <a class="icon"><i class="fas fa-pencil-alt" @click="popping"></i></a>
      </div>
</template>

<script>
export default {
  methods: {
    popping() {
      this.$emit("popup");
    },
  },
};
</script>