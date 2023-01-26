<template>
  <div id="wrap">
    <header id="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h1><a class="navbar-brand" href="/"><img src="https://picsum.photos/30/30?random=1" alt="Vuelog로">첫Vuelog</a></h1>
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
        <router-view :글정보="글정보"></router-view>
    </div>
  </div>
</template>

<script>
import Data from './assets/data'
export default {
  name: 'App',
  data() {
    return {
      글정보: Data,
    }
  },
  components: {
    
  }
}
</script>

<style>
*{margin: 0; padding: 0; box-sizing: border-box;}
a{text-decoration: none; color: #111;}

#wrap {margin: 0 auto; width: 100%;}
#container{width: 100%; margin: 0 auto;}
.viewType{margin: 0 auto; width: 100%; display: flex; align-items: center; flex-direction: column; justify-content: center; padding: 2%;}

</style>
