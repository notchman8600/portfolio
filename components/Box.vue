<template>
  <div class="box">
    <h2>{{item.name}}</h2>
    <p class="box-content">{{item.content}}</p>
    <p class="sub-content">
      <slot/>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Box",
    props: {
      item: {
        type: Object,
        default: () => {
        },
      },
    },
  }
</script>

<style scoped>

</style>
