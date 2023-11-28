<script setup>
import { ref } from 'vue'
const count = ref(1)
</script>
<template>
    <div class="custom-header container-fluid mx-auto w-100">
        <nav class="navbar navbar-expand-lg bg-white text-dark bg-">
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
                    <ul class="navbar-nav" style="margin-left: 80px;">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/HomeLogin">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <router-link class="nav-link" to="/about">Tentang Kami</router-link> -->
                        </li>
                        <li class="nav-item">
                            <router-link to="/history" class="nav-link">History</router-link>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown">
                                <button class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i
                                        class="fa fa-user"></i> User</button>
                                <ul class="dropdown-menu">
                                    <router-link to="/" class="dropdown-item">Logout</router-link>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="navbar bg-white">
            <div class="container navSec">
                <div id="logo"><img src="../assets/image/logo/logo.png" width="80px" alt=""
                        style="margin: -14px 0 0 -20px;">veryday</div>
                <div class="col">
                    <div class="input-with-icon">
                        <input type="text" id="inputsearch" class="form-control" placeholder="Cari item...">
                        <i class="fa-solid fa-magnifying-glass" style="color: #e76202;"></i>
                    </div>
                </div>
                <div class="col">
                    <!-- <img src="../assets/icon/cart-large-2-svgrepo-com.svg" width="30px" alt=""> -->
                    <label>
                        <input type="checkbox" style="display: none;" data-bs-toggle="modal" data-bs-target="#modalCart">
                        <i class="fa-solid fa-cart-shopping me-1"></i>
                        Cart
                    </label>

                    <!-- Modal -->
                    <div class="modal fade modal-xl" id="modalCart" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header text-white" style="background-color: #e76202;border: none;">
                                    <div class="d-block">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Your Cart</h1>
                                        <h6>There are 3 products in your cart</h6>
                                    </div>
                                    <div data-bs-theme="dark">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            style="color: white;"></button>
                                    </div>
                                </div>
                                <div class="modal-body">
                                    <table class="table ">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="row-cols-2 text-center">
                                                    <input type="checkbox" name="" class="form-check-input" id="">
                                                </th>
                                                <th scope="col" class="text-center" width="200px">Product</th>
                                                <th scope="col" class="text-center">Unit Price</th>
                                                <th scope="col" class="text-center">Quantity</th>
                                                <th scope="col" class="text-center">Subtotal</th>
                                                <th scope="col" class="text-center">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in cart" :key="item.id">
                                                <td scope="row" class="text-center">
                                                    <input type="checkbox" name="" class="form-check-input" id="">
                                                </td>
                                                <td class="text-start" style="width: 350px">
                                                    <!-- <img src="../assets/image/produk/minyak3.png" width="150px" alt="Minyak"> -->
                                                    <img :src="item.imgUrl" :alt="item.title" class="custom-img"
                                                        style="width: 100px;">
                                                    {{ item.title }}
                                                </td>
                                                <td class="text-center">Rp {{ item.price }}</td>
                                                <td class="text-center">
                                                    <div class="d-flex align-items-center justify-content-center">
                                                        <button type="button" @click="count++"
                                                            class="square border-0 me-1"><i
                                                                class="fa-solid fa-plus"></i></button>
                                                        <p class="qty my-auto">
                                                            {{ item.qty }}
                                                        </p>
                                                        <button type="button" @click="count--"
                                                            class="square border-0 ms-1"><i
                                                                class="fa-solid fa-minus"></i></button>
                                                    </div>
                                                </td>
                                                <td class="text-center">Rp {{ totalPriceID }}</td>
                                                <td class="text-center"><i class="fa-solid fa-trash"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="row">
                                        <div class="col-2">
                                            <button type="button" class="btn btn-primary"
                                                style="border: none;background-color: #e76202">Continue Shipping</button>
                                        </div>
                                        <div class="col-2">
                                            <button type="button" class="btn btn-primary"
                                                style="border: none;background-color: #e76202">Update Cart</button>
                                        </div>
                                        <div class="col-4"></div>
                                        <div class="col-4">
                                            <div class="d-block justify-content-center"
                                                style="border: 1px solid #eee;border-radius: 15px;height: 120px;width:100%;padding: 20px">
                                                <table>
                                                    <tr>
                                                        <td style="width:240px;">Total</td>
                                                        <td>Rp 38.000</td>
                                                    </tr>
                                                </table>
                                                <!-- <h4>Total</h4>
                                                <h4>Rp 38.000</h4> -->
                                                <router-link to="/payment" @click="processToCheckout"
                                                    data-bs-dismiss="modal"
                                                    style="border: none;background-color: #e76202;width:100%;"
                                                    class="btn btn-primary text-white mt-3">Process to
                                                    Checkout</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <router-view></router-view>
    <CarouselVue></CarouselVue>
    <Kategori></Kategori>
    <KategoriTriVue></KategoriTriVue>

    <section id="PopularP" style="margin-bottom: 20px;">
        <div class="container">
            <h2>Popular products</h2>
            <ul class="category">
                <!-- <li><a href="#" class="PP"><input type="checkbox">All</a></li> -->
                <li><a href="#" class="PP" id="All">All</a></li>
                <li><a href="#" class="PP">Rice</a></li>
                <li><a href="#" class="PP">Oil</a></li>
                <li><a href="#" class="PP">Flour</a></li>
                <li><a href="#" class="PP">Mie</a></li>
                <li><a href="#" class="PP">Sugar</a></li>
                <li><a href="#" class="PP">Egg</a></li>
            </ul>
            <div class="justify-content-center grid gap-4 custom-pp">
                <div class="mt-2 custom-product" v-for="item in products" :key="item.id">
                    <div class="row ms-1 custom-wadah ">
                        <img class="pt-2 custom-image mx-auto" :src="item.imgUrl" :alt="item.title">
                    </div>
                    <div class="row card-body d-flex flex-wrap align-items-end custom-content mt-4">
                        <div>{{ item.category }}</div>
                        <h4 class="card-title mt-0 custom-name-produk">{{ item.title }}</h4>
                        <div>Rp {{ item.price }}</div>
                        <a @click="addToCart(item)" data-bs-toggle="modal" data-bs-target="#modalCart"
                            class="btn text-white w-100 custom-btn d-flex align-items-end px-2 justify-content-center"
                            style="margin-top: 30px;"><i class="fa fa-shopping-cart me-2 mb-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <SubscribeVue></SubscribeVue>
    <Futer></Futer>
    <!-- modal -->
    <div class="modal fade modal-vertical-center" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header text-white" style="background-color: #e76202;">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Product Details</h1>
                    <button type="button" class="btn-close btn-light" style="color: #fff;" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body" style="background-color: #eee;">
                    <div class="row">
                        <div class="col-5">
                            <img src="../assets/image/produk/minyak3.png" width="150px" class="ms-3">
                        </div>
                        <div class="col-7">
                            <div style="margin-top: 70px;">Oil</div>
                            <h4 class="card-title mt-0 custom-name-produk">Filma</h4>
                            <div>Rp 30000</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mx-2 p-2 rounded-3" style="background-color: #fff;width: 97%;">
                            Filma Cooking Oil 2 Liters, pilihan praktis untuk hidangan lezat. Kemasan 2 liter memberikan
                            kelezatan dan keempukan di setiap masakan. Cocok untuk menggoreng, menggulai, dan memberikan
                            nutrisi terbaik
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="background-color: #eee;">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="#modalCart" class="btn custom-btn text-white" data-bs-dismiss="modal" data-bs-toggle="modal"
                        data-bs-target="#modalCart"><i class="fa fa-shopping-cart"></i> Add To Cart</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarVue from '../components/Navbar.vue'
import Kategori from '../components/Kategori.vue'
import KategoriTriVue from '../components/KategoriTri.vue'
import CarouselVue from '../components/Carousel.vue'
import PopularPVue from '../components/PopularP.vue'
import SubscribeVue from '../components/Subscribe.vue'
import Futer from '../components/Futer.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Home',
    components: {
        NavbarVue, CarouselVue, Kategori, KategoriTriVue, PopularPVue, SubscribeVue, Futer
    },
    computed: {
        ...mapGetters(["products", "productDetail", "cart"]),
        totalPriceID() {
            const findIdProduct = state.cart.find(product => product.id === item.id);
            if (findIdProduct) {
                return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
            }
        },
        totalPrice() {
            return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
        },
    },
    methods: {
        ...mapActions(["getProducts", "addToCart", "addQty", "reduceQty", "removeItem", "emptyCart", "getProductDetail"]),
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<style scoped>
a {
    color: #242424;
}

a:hover {
    color: #E76202;
}

.navPri {
    padding-bottom: 10px;
    height: 35px;
}

.navSec {
    height: 100px;
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
    /* border: 1px solid #ddd; */

}

#inputsearch {
    border: 1px solid #ddd;
    transition: border-color 0.3s;
    border-radius: 15px;
    padding: 15px 20px;
}

#inputsearch:focus {
    border: 1px solid #E76202;
    box-shadow: none;
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

.bLogin {
    transform: translateY(20px);
    align-items: center;
    padding-top: 200px;
}

.custom-qty {
    display: flex;
    align-items: center;
}

.square {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E76202;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    color: #fff;
}

.qty {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    color: #E76202;
}

.custom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #000;
}

.custom-img {
    border: 1px solid #eee;
    border-radius: 10px;
}

/* produk */
#PopularP {
    margin-top: 20px;
    margin-bottom: 20px;
}

span {
    color: #242424;
}

span:hover {
    color: #E76202;

}

#cards {
    border: 0;
}

#cards:hover {
    border: 1px solid #E76202;
}

#PopularP ul {
    margin-top: 10px;
    list-style-type: none;
    /* border: 1px solid #242424; */
    width: 78%;
    height: 20px;
    text-align: end;
}

#PopularP li {
    display: inline;
    margin-left: 10px;
}

#PopularP a {
    text-decoration: none;
    color: #242424;
}

.category {
    margin-left: 250px;
}

.custom-outer-img {
    width: 250px;
    height: 280px;
    border: 1px solid #000;
}

.custom-name-produk {
    font-size: 18px;
}

.custom-pp {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.custom-content {
    margin-top: 20px;
}

.custom-product {
    width: 250px;
    height: 375px;
    padding: 20px;
    border: 1px solid rgb(128, 128, 128);
    border-radius: 15px;
}

.custom-product:hover {
    border: 1px solid #E76202;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
}

.custom-pagi {
    margin-bottom: 20px;
    margin-left: 330px;
    /* border: 1px solid #000; */
}

.custom-wadah {
    height: 180px;
}

.custom-image {
    width: 80%;
    object-fit: contain;
    /* margin-top: -20px; */
    /* transform: translateX(30px); */
}

.custom-btn {
    background-color: #E76202;
    text-align: center;
}

.custom-btn:hover {
    background-color: #bd4f01;
}
</style>


