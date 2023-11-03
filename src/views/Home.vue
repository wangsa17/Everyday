<script setup>
import Navbar from '../components/Navbar.vue'
import Kategori from '../components/Kategori.vue'
import KategoriTri from '../components/KategoriTri.vue'
import Carousel from '../components/Carousel.vue'
import PopularP from '../components/PopularP.vue'

</script>

<template>
    <Navbar />
    <!-- <div class="container">
        <div class="card" style="width: 18rem;">
            <img src="../assets/image/bimoli.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div> -->
    <Carousel />
    <Kategori />
    <KategoriTri />
    <PopularP />

    
</template>