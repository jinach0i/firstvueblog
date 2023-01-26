<template>
    <div class="listWrap">
        <ul>
            <li v-for="(a,i) in 글정보" :key="i" @click="$router.push('/detail/'+i)">
                <a href="#">
                    <h5>{{ 글정보[i].title }}</h5>
                    <p class="date">{{ 글정보[i].date }}</p>
                    <p class="previewTxt">{{ 글정보[i].content }}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'wrapList',
    data(){
        return{
            
        }
    },
    props:{
        글정보:Array,
    },
}
</script>

<style>
.listWrap ul{margin: 0; padding: 0;}
.listWrap li{margin-bottom: 1%; list-style: none; transition: all .8s; padding: 8px 0 9px;}
.listWrap li:hover{background-color: #f1f2d6;}
.listWrap li:last-child{margin-bottom: unset;}
.listWrap{width: 100%; text-align: center; position: relative; margin: 0;}
.listWrap::before{content: ''; background: url('../assets/klipartz.com.png') no-repeat right bottom/100%; width: 20vw; height: 100%; position: absolute; right: 0; bottom: -11%; transform: rotate(18deg);}
.listWrap a{text-decoration: none; color: #111;} 
.date{color: #999;}
</style>