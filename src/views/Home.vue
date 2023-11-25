<template>
    <NavbarVue></NavbarVue>
    <CarouselVue></CarouselVue>
    <Kategori></Kategori>
    <KategoriTriVue></KategoriTriVue>
    <PopularPVue></PopularPVue>
    <SubscribeVue></SubscribeVue>
    <Futer></Futer>
</template>

<script>
import NavbarVue from '../components/Navbar.vue'
import Kategori from '../components/Kategori.vue'
import KategoriTriVue from '../components/KategoriTri.vue'
import CarouselVue from '../components/Carousel.vue'
import PopularPVue from '../components/PopularP.vue'
import SubscribeVue from '../components/Subscribe.vue'
import Futer from '../components/Futer.vue'

export default {
    name: 'Home',
    components: {
        NavbarVue, CarouselVue, Kategori, KategoriTriVue, PopularPVue, SubscribeVue, Futer
    }
}

</script>

