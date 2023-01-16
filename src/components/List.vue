<template>
    <div>
        <a href="#">
            <h5>{{ 글정보.title }}</h5>
            <p class="date">{{ 글정보.date }}</p>
            <p class="previewTxt">{{ 글정보.content }}</p>
        </a>
    </div>
</template>

<script>
export default {
    name: 'wrapList',
    props:{
        글정보:Array,
    },
}
</script>

<style>
div{margin-bottom: 1%;}
div:last-child{margin-bottom: unset;}
a{text-decoration: none; color: #111;}
.date{color: #999;}
.previewTxt{}
</style>