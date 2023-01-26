<template>
  <div class="detailWrap text-center">
    <h4>상세 페이지</h4>
    <h5>{{글정보[$route.params.id].title}}</h5>
    <p>{{글정보[$route.params.id].content}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'detailWrap',
    props:{
      글정보:Array,
    },
}
</script>

<style>
</style>