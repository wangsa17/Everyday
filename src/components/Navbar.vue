<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-white text-dark">
    <div class="container navPri">
      <div class="row">
        <div class="col-7">
          <a class="navbar-brand" href="#" id="no">+62678565767</a>
        </div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tentang Kami</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Masuk | Daftar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav class="navbar bg-white">
    <div class="container navSec">
      <div id="logo">Everyday</div>
      <div class="col">
        <div class="input-with-icon">
          <input type="text" id="inputsearch" placeholder="Cari item...">
          <i class="fa-solid fa-magnifying-glass" style="color: #e76202;"></i>
        </div>
      </div>
      <div class="col">
        <img src="../assets/icon/cart-large-2-svgrepo-com.svg" width="30px" alt="">
        cart
      </div>
    </div>
  </nav>
</template>

<style scoped>
a{
    color: #242424;
}

a:hover{
    color: #E76202;
}
.container{
  border-bottom: 2px solid #eee;
  margin-top: 0;
  /* border: 1px solid #000; */
}
.navPri{
  padding-bottom: 10px;
  height: 35px;
}
.navSec{
  height: 70px;
  margin-top: -10px;
  padding-bottom: 8px;
  /* border: 1px solid #000; */
}
#no {
  float: left;
  width: 780px;
}

#navbarNav {
  float: left;
}

#logo {
  font-size: 30px;
  float: left;
  width: 350px;
  /* border: 1px solid #E76202; */

}

#inputsearch:active {
  border: 1px solid #E76202;

}

.input-with-icon {
  position: relative;
  width: 600px;
}

.input-with-icon input {
  /* padding-left: 30px; */
  padding: 10px 20px;
  width: 400px;
  border-radius: 5px;
  /* Sesuaikan dengan lebar ikon */
}

.input-with-icon i {
  position: absolute;
  left: 360px;
  /* Sesuaikan dengan jarak dari kiri */
  top: 50%;
  transform: translateY(-50%);
}
</style>
