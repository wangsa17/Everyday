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
                                                <td class="text-center">Rp {{ totalPriceID }}</td>
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
    <!-- endnavbar -->
    <router-view></router-view>
    <!-- Payment -->
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="text-check">
                    <h3 class="mt-3">Checkout</h3>
                    <p style=" margin-top: 0px;">There are 3 products in your cart</p>
                    <p style="margin-top: 70px;  font-size: 100%; margin-top: 30px; font-weight: bold;">
                        Address details</p>
                </div>
                <form class="row g-3" style="width: 500px;">
                    <div class="col-md-6">
                        <!-- <label for="inputEmail4" class="form-label">FirstName</label> -->
                        <input type="email" class="custom-input" id="inputEmail4" placeholder="Firstname">
                    </div>
                    <div class="col-md-6">
                        <!-- <label for="inputPassword4" class="form-label">LastName</label> -->
                        <input type="password" class="custom-input" id="inputPassword4" placeholder="Lastname">
                    </div>
                    <div class="col-12">
                        <!-- <label for="inputAddress" class="form-label">Address</label> -->
                        <textarea name="" class="custom-input" id="" cols="3" rows="3" placeholder="Address"></textarea>
                    </div>
                    <div class="col-6">
                        <!-- <label for="inputCity" class="form-label">Province</label> -->
                        <input type="text" class="custom-input" name="" id="" placeholder="Province">
                    </div>
                    <div class="col-md-6">
                        <!-- <label for="inputCity" class="form-label">City</label> -->
                        <input type="text" class="custom-input" id="inputCity" placeholder="City">
                    </div>
                    <div class="col-6">
                        <!-- <label for="inputCity" class="form-label">Postal Code</label> -->
                        <input type="text" class="custom-input" name="" id="" placeholder="Postal Code">
                    </div>
                    <div class="col-md-6">
                        <!-- <label for="inputCity" class="form-label">Phone Number</label> -->
                        <input type="text" class="custom-input" id="inputCity" placeholder="Phone Number">
                    </div>
                    <div class="col-md-12">
                        <!-- <label for="inputCity" class="form-label">Email</label> -->
                        <input type="text" class="custom-input" id="inputCity" placeholder="Email Address">
                    </div>
                    <div class="col-12">
                        <!-- <label for="inputAddress" class="form-label">Notes</label> -->
                        <textarea name="" class="custom-input" id="" cols="3" rows="3" placeholder="Notes"></textarea>
                    </div>
                </form>
            </div>
            <div class="col-md-5 mt-3">
                <router-link to="/HomeLogin" class="btn btn-primary mb-3"
                    style="border: none;background-color: #e76202">Continue
                    Shipping</router-link>
                <div class="kotak">
                    <h4 class="p-4">Your Order</h4>
                    <div class="card m-3 d-flex justify-content-center">
                        <div class="row g-0" v-for="item in cart" :key="item.id">
                            <div class="col-md-4">
                                <img :src="item.imgUrl" :alt="item.title" class="mt-3 ms-3 img-fluid rounded-start"
                                    style="margin-top: -10px;border: 1px solid #ccc;width: 100px;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body d-block">
                                    <p>{{ item.category }}</p>
                                    <h6 class="card-text">
                                        {{ item.title }} <strong class="ms-2">x {{ item.qty }}</strong>
                                    </h6>
                                    <p>Rp {{ item.price }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card m-3 d-flex justify-content-center">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <table class="mt-3">
                                    <tr class="d-flex">
                                        <td style="width:320px;" class="ps-4 pt-2">Total</td>
                                        <td class="d-flex justify-content-end">Rp {{ totalPrice }}</td>
                                    </tr>
                                </table>
                                <a data-bs-toggle="modal" data-bs-target="#modalPayment"
                                    style="border: none;background-color: #e76202;width:88%;"
                                    class="btn btn-primary text-white mt-3 mx-4 mb-3">Buy now</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="modalPayment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content rounded-4">
                        <div class="modal-body p-3">
                            <button type="button" class="btn-close" style="transform: translateY(-7px);"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                            <span class="modal-title fs-5 my-auto ms-3" id="exampleModalLabel">Payment</span>
                            <div class="d-flex flex-wrap mt-2 p-0">
                                <img src="../assets/image/payment/gopayB.png" alt="">
                                <strong style="width: 300px;margin-left: 12px;">GoPay (Rp 4.801)</strong>
                                <p style="margin-left: 40px;">Oops, balance is low. Top up Now</p>
                                <div class="form-check form-switch" style="transform: translate(110px, -8px);scale: 1.3;">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckChecked" checked>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap mt-2 p-0" style="transform: translateY(-20px);">
                                <img src="../assets/image/payment/gopay_coins.png" alt="">
                                <strong style="width: 400px;margin: 9px 0 0 2px">GoPay Coins</strong>
                                <p style="margin-left: 40px;">7.457 Coins </p>
                                <div class="form-check form-switch" style="transform: translate(230px, -8px);scale: 1.3;">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckChecked">
                                </div>
                            </div>
                            <hr
                                style="width: 100%;height: 10px;background-color: #D9D9D9;border: none;transform: translateY(-40px);">
                            <div class="d-flex flex-wrap mt-3 p-0" style="transform: translateY(-50px);">
                                <strong class="mb-3">Payment Method</strong><span
                                    style="color: #e76202;margin-left: 270px;">See
                                    All</span>
                                <img src="../assets/image/payment/indmaret.png" style="width: 60px;height: 30px;" alt="">
                                <p style="margin-left: 10px;">Indomaret / Ceriamart</p>
                                <input class="form-check-input radio" style="transform: translateX(200px);" type="radio"
                                    name="exampleRadios" id="exampleRadios1" value="option1">
                            </div>
                            <div class="d-flex flex-wrap mt-2 p-0" style="transform: translateY(-50px);">
                                <img src="../assets/image/payment/bca.png"
                                    style="width: 50px;height: 13px;margin-top: 10px;" alt="">
                                <p style="margin-left: 19px;">BCA Virtual Account</p>
                                <input class="form-check-input radio" style="transform: translateX(215px);" type="radio"
                                    name="exampleRadios" id="exampleRadios1" value="option1">
                            </div>
                            <hr
                                style="width: 100%;height: 10px;background-color: #D9D9D9;border: none;transform: translateY(-70px);">
                            <div class="d-flex flex-wrap mt-2 p-0" style="transform: translateY(-80px);">
                                <strong style="transform: translateY(0px);">Payment Promotion</strong>
                                <div class="d-flex flex-wrap p-3"
                                    style="width: 99%;height: 80px;border-radius: 20px;background-color: #EBECEE">
                                    <img src="../assets/image/payment/gopayB.png" style="width: 26px;height: 26px"
                                        alt="Gopay icon small">
                                    <span style="margin-left: 10px;width: 200px;">Gopay</span>
                                    <p style="font-size: 12px;margin-top: 10px">+ Cashback 423 GoPay Coins (only pay in full
                                        using GoPay)</p>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap" style="transform: translateY(-70px)">
                                <strong style="width: 300px">Payment Summary</strong>
                                <table style="width: 100%">
                                    <tr>
                                        <td>Total Shipping</td>
                                        <td class="text-end" style="color: #e76202">Rp. 100000</td>
                                    </tr>
                                    <tr>
                                        <td>Service Fee</td>
                                        <td class="text-end">Rp. 2500</td>
                                    </tr>
                                    <tr>
                                        <td>Use Gopay</td>
                                        <td class="text-end">- Rp. 4000</td>
                                    </tr>
                                </table>
                            </div>
                            <hr
                                style="width: 100%;height: 3px;border: none;background-color: black;transform: translateY(-70px);">
                            <p style="transform: translateY(-80px);margin-left: 20px">You get a discount <span
                                    style="color: #e76202;">Rp 1.000</span></p>
                            <hr
                                style="width: 100%;height: 3px;border: none;background-color: black;transform: translateY(-80px);">
                            <div class="d-flex flex-wrap" style="margin-top: -80px;">
                                <p style="width: 1000px;">Total Bill</p>
                                <p style="margin-top: -20px"><strong>Rp 45000</strong></p>
                                <router-link to="/HomeLogin" @click="processToHomeLogin()" class="btn" data-bs-dismiss="modal"
                                    aria-label="Close"
                                    style="background-color: #E76202;height: 40px;width: 120px;margin-top: -35px;transform: translateX(260px);color: white">Buy</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- footer -->
    <footer class="text-center text-lg-start text-muted mt-5">
        <div class="container">
            <a href="" class="me-4 link-secondary">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 link-secondary">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 link-secondary">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 link-secondary">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 link-secondary">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 link-secondary">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <!-- Right -->
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
                        <!-- Content -->
                        <img src="../assets/image/logo/logo.png" alt="">
                        <span style="font-size: 28px">veryday</span>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Categories</h6>
                        <p>
                            <a href="#!" class="text-reset">Rice</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Oil</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Flour</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Mie</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Sugar</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Egg</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Popular Products</h6>
                        <p>
                            <a href="#!" class="text-reset">Cooking Oil</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Omega Egg</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Organic Rice</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Tropicana sugar</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Korean noodles </a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Wheat flour </a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i class="fas fa-home me-3 text-secondary"></i> Address : Politeknik Elektronika Negeri
                            Surabaya
                        </p>
                        <p>
                            <i class="fas fa-envelope me-3 text-secondary"></i>
                            Email : hazelmpr@gmail.com
                        </p>
                        <p><i class="fas fa-phone me-3 text-secondary"></i>Call us : +62 857-0113-4860 </p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="#">Kelompok -5</a>
        </div>
        <!-- Copyright -->
    </footer>
    <!-- endfooter -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            isProcessing: false,
            orderPlaced: false,
        };
    },
    name: 'Home',
    computed: {
        ...mapGetters(["products", "productDetail", "cart"]),
        totalPrice() {
            return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
        },
        totalQty() {
            return this.cart.reduce((a, b) => a + b.qty, 0);
        },
    },
    methods: {
        ...mapActions(["getProducts", "addToCart", "addQty", "reduceQty", "removeItem", "emptyCart", "detailProduct", "emptyCart"]),
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
        processToHomeLogin() {
            // Membersihkan cart
            this.$store.commit('emptyCart'); 

            // Pindah ke route Home
            this.$router.push({ name: 'HomeLogin' });
        }
    },
    mounted() {
        this.getProducts();
    },
}
</script>

<style scope>
/* * {
            border: 1px solid red; 
        }*/
.logo {
    position: absolute;
    top: 0;
    left: 0;
}

/* 
.form-custom:focus {
    box-shadow: none;
    border: 1px solid #E76202;

} */
.custom-input {
    display: flex;
    padding: 10px 15px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid #dddddd;
    transition: border-color 0.3s;
    margin-bottom: 15px;
}

.custom-input:focus {
    border: 1px solid #E76202;
    box-shadow: none;
}

.check-custom:checked {
    background-color: #E76202;
}

.kotak {
    border: 1px solid #ddd;
    height: fit-content;
    width: 100%;
    border-radius: 16px;
}

a {
    color: #242424;
}

a:hover {
    color: #E76202;
}

.container {
    margin-top: 0;
    /* border: 1px solid #000; */
}

.navPri {
    padding-bottom: 10px;
    height: 35px;
    border-bottom: 2px solid #eee;
}

.navSec {
    height: 100px;
    margin-top: -10px;
    padding-bottom: 8px;
    /* border: 1px solid #000; */
    border-bottom: 2px solid #eee;
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

.custom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid #000; */
}

.custom-img {
    /* border: 1px solid #000; */
    border-radius: 10px;
}

.radio:checked {
    background-color: #E76202;
}
</style>