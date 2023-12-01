<template>
    <!-- Navbar -->
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
                        Cart ({{ totalQty }})
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
                                            <tr v-if="!cart.length">
                                                <td class="text-center" colspan="6">
                                                    <h4 style="width: 100%" class="text-center"> No Product in cart!</h4>
                                                </td>
                                            </tr>
                                            <tr v-for="item in cart" :key="item.id">
                                                <td scope="row" class="text-center">
                                                    <input type="checkbox" name="" class="form-check-input" id="">
                                                </td>
                                                <td class="text-start" style="width: 350px">
                                                    <img :src="item.imgUrl" :alt="item.title" class="custom-img"
                                                        style="width: 100px;">
                                                    {{ item.title }}
                                                </td>
                                                <td class="text-center">Rp {{ item.price }}</td>
                                                <td class="text-center">
                                                    <div class="d-flex align-items-center justify-content-center">
                                                        <button type="button" @click="addQty(item.id)"
                                                            class="square border-0 me-1"><i
                                                                class="fa-solid fa-plus"></i></button>
                                                        <p class="qty my-auto">
                                                            {{ item.qty }}
                                                        </p>
                                                        <button type="button" @click="reduceQty(item.id)"
                                                            class="square border-0 ms-1"><i
                                                                class="fa-solid fa-minus"></i></button>
                                                    </div>
                                                </td>
                                                <td class="text-center">Rp {{ subTotalP }}</td>
                                                <td class="text-center"><i class="fa-solid fa-trash"
                                                        @click="removeItem(item.id)"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="row">
                                        <div class="col-2">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                                aria-label="Close" style="border: none;background-color: #e76202">Continue
                                                Shipping</button>
                                        </div>
                                        <div class="col-2">
                                            <button type="button" class="btn btn-primary"
                                                style="border: none;background-color: #e76202">Update Cart</button>
                                        </div>
                                        <div class="col-4"></div>
                                        <div class="col-4">
                                            <div class="d-block justify-content-center" v-if="cart.length"
                                                style="border: 1px solid #eee;border-radius: 15px;height: 120px;width:100%;padding: 20px">
                                                <table>
                                                    <tr>
                                                        <td style="width:220px;">Total</td>
                                                        <td>Rp {{ totalPrice }}</td>
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
    <!-- EndNavbar -->
    <router-view></router-view>
    <div class="container">
        <div class="small-container histoty-page mt-3">
            <table>
                <tr class="header">
                    <th class="p-2 rounded-start-3">Product</th>
                    <th class="p-2">Price</th>
                    <th class="p-2 rounded-end-3">Status</th>
                </tr>
                <tr>
                    <td>
                        <div class="history-info">
                            <img src="../assets/image/produk/minyak3.png">
                            <div>
                                <p>Bimoli cooking oil 2 liters</p>
                            </div>
                        </div>
                    </td>
                    <td>Rp. 38.000,00</td>
                    <td>Dikemas</td>
                </tr>
                <tr>
                    <td>
                        <div class="history-info">
                            <img src="../assets/image/produk/tepung3.png">
                            <div>
                                <p>Rose Brand Tapioca Flour 500g</p>
                            </div>
                        </div>
                    </td>
                    <td>Rp. 6.000,00</td>
                    <td>Dikemas</td>
                </tr>
                <tr>
                    <td>
                        <div class="history-info">
                            <img src="../assets/image/produk/mie1.png">
                            <div>
                                <p>Mie Sedaap Selection Korean Spicy Chicken</p>
                            </div>
                        </div>
                    </td>
                    <td>Rp. 3.400,00</td>
                    <td>Dikemas</td>
                </tr>
            </table>
        </div>
    </div>
    <Futer />
</template>
<script>
import Futer from '../components/Futer.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            isProcessing: false,
            orderPlaced: false,
        };
    },
    name: 'History',
    components: {
        Futer
    },
    computed: {
        ...mapGetters(["products", "productDetail", "cart"]),
        totalPrice() {
            return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
        },
        totalQty() {
            return this.cart.reduce((a, b) => a + b.qty, 0);
        },
        subTotalP() {
            // Membuat objek untuk mengelompokkan produk berdasarkan ID
            const groupedProducts = this.cart.reduce((groups, product) => {
                const group = groups[product.id] || { totalQty: 0, totalPrice: 0 };
                group.totalQty += product.qty;
                group.totalPrice += product.qty * product.price;
                groups[product.id] = group;
                return groups;
            }, {});

            // Menghitung total subtotal dari semua kelompok produk
            return Object.values(groupedProducts).reduce((subtotal, group) => subtotal + group.totalPrice, 0);
        },


    },
    methods: {
        ...mapActions(["getProducts", "addToCart", "addQty", "reduceQty", "removeItem", "emptyCart", "detailProduct", "emptyCart", "subTotalPrice"]),
        placeOrder() {
            this.isProcessing = true;
            setTimeout(() => {
                this.orderPlaced = true;
                this.isProcessing = false;
                this.emptyCart();
            }, 1000);
        },
        processToCheckout() {
            this.$router.push('/payment');
        },
    },
    mounted() {
        this.getProducts();
    },
}
</script>
<style scoped>
.logo {
    border: 100px;
}

.small-img-row {
    display: flex;
    justify-content: space-between;
}

.small-img-col {
    flex-basis: 24%;
    cursor: pointer;
}

/*----cart items----*/

.history-page {
    margin: 80px auto;
    background-color: aqua;
}

table {
    width: 100%;
    border-collapse: collapse;
}

.history-info {
    display: flex;
    flex-wrap: wrap;
}

.header {
    text-align: left;
    padding: 15px;
    color: #fff;
    background: #ff523b;
    font-weight: normal;
    border-radius: 15px;
}

td {
    padding: 10px 5px;
}

td input {
    width: 40px;
    height: 30px;
    padding: 5px;
}

td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.site-footer {
    background-color: white;
    padding: 45px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
    display: list-item;
    align-items: center;
    justify-content: last baseline;
}

.site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5
}

.site-footer hr.small {
    margin: 20px 0
}

.site-footer h6 {
    color: black;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px
}

.site-footer a {
    color: #737373;
}

.categories {
    display: list-item;
    ;
}

.footer-links {
    padding-left: 0;
    list-style: none;
    display: list-item;
}

.footer-links li {
    display: block
}

.footer-links a {
    color: #737373
}

.footer-links.inline li {
    display: inline-block;
}

img {
    width: 100px;
    height: 100px;
}

.copyright-text {
    margin: 0
}

@media (max-width:991px) {
    .site-footer [class^=col-] {
        margin-bottom: 30px
    }
}

@media (max-width:767px) {
    .site-footer {
        padding-bottom: 0
    }

    .site-footer .copyright-text,
    .site-footer .social-icons {
        text-align: center
    }
}

.copyright-text {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>