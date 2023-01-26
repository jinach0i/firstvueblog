<template>
    <div class="viewType">
        <router-link to="/detail"><button>하나씩 보기</button></router-link>
        <router-link to="/list"><button>리스트형 보기</button></router-link>
    </div>
</template>

<script>
export default {
    name:'mainWrap',

}
</script>

<style>
.viewType button{text-align: center; border: none; padding: 2px 4px; margin: 0 3px; min-width: 180px; min-height: 40px; transition: all .4s; background-color: #f1f2d6;}
.viewType button:hover{background-color: #41b883;}
</style>