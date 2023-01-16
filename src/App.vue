<template>
  <div id="wrap">
    <header id="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h1><a class="navbar-brand" href="./index.html"><img src="https://picsum.photos/30/30?random=1" alt="Vuelog로">첫Vuelog</a></h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">글 목록</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <div id="container">
      <div class="viewType">
        <mainWrap />
      </div>
      <div class="listWrap" >
        <router-view :글정보="글정보[i]" v-for="(a,i) in 글정보" :key="i"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Data from './assets/data'
import mainWrap from './components/Main.vue'
export default {
  name: 'App',
  data() {
    return {
      글정보: Data,
    }
  },
  components: {
    mainWrap,
  }
}
</script>

<style>
*{margin: 0; padding: 0; box-sizing: border-box;}
button{text-align: center; border: none; padding: 2px 4px; margin: 0 3px; min-width: 180px; min-height: 40px; transition: all .4s; background-color: #f1f2d6;}
button:hover{background-color: #41b883;}
#wrap {margin: 0 auto; width: 100%;}
#container{width: 100%; margin: 0 auto;}
.viewType{margin: 0 auto; width: 100%; display: flex; align-items: center; flex-direction: column; justify-content: center; padding: 2%;}
.listWrap{text-align: center; position: relative;}
.listWrap::before{content: ''; background: url('./assets/klipartz.com.png') no-repeat right bottom/100%; width: 20vw; height: 100%; position: absolute; right: 0; bottom: -11%; transform: rotate(18deg);}
.listWrap>div{padding: 8px 0 9px;}
</style>
