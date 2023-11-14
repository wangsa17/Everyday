<template>
    <NavbarVue />
    <CarouselVue />
    <KategoriVue />
    <KategoriTriVue />
    <PopularPVue />
    <DailyBSVue />
    <SubscribeVue />
</template>

<script>
import NavbarVue from '../components/Navbar.vue'
import KategoriVue from '../components/Kategori.vue'
import KategoriTriVue from '../components/KategoriTri.vue'
import CarouselVue from '../components/Carousel.vue'
import PopularPVue from '../components/PopularP.vue'
import DailyBSVue from '../components/DailyBS.vue'
import SubscribeVue from '../components/Subscribe.vue'

export default {
    name: 'Home',
    components: {
        NavbarVue, CarouselVue, KategoriVue, KategoriTriVue, PopularPVue, DailyBSVue, SubscribeVue
    }
}

</script>

