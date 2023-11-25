<script>
import Futer from '../components/Futer.vue'
</script>

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
                            <router-link class="nav-link" aria-current="page" to="/">Beranda</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <router-link class="nav-link" to="/about">Tentang Kami</router-link> -->
                        </li>
                        <li class="nav-item">
                            <router-link to="#" class="nav-link">History</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="#" class="nav-link"><i class="fa fa-user"></i> User</router-link>
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
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="card border-0">
                                                <div class="card-body">
                                                    <div class="row custom-row">
                                                        <div class="col">
                                                            <input type="checkbox" name="" id="">
                                                        </div>
                                                        <div class="col-4">Product</div>
                                                        <div class="col">Unit Price</div>
                                                        <div class="col">Quantity</div>
                                                        <div class="col">Subtotal</div>
                                                        <div class="col">Remove</div>
                                                    </div>
                                                    <div class="row custom-row">
                                                        <div style="width:30px;">
                                                            <input type="checkbox" name="" id="">
                                                        </div>
                                                        <div class="col-4 ms-0 text-center">
                                                            <img src="../assets/image/produk/minyak1.png" class="custom-img"
                                                                alt="" style="width: 100px;">
                                                            <p>Bimoli cooking oil 2 liters</p>
                                                        </div>

                                                        <div class="col">Rp. 38.000</div>
                                                        <div class="col custom-qty">
                                                            <div class="square me-1"><i class="fa-solid fa-plus"></i></div>
                                                            1
                                                            <div class="square ms-1"><i class="fa-solid fa-minus"></i></div>
                                                        </div>
                                                        <div class="col">Rp. 38.000</div>
                                                        <div class="col"><i class="fa-solid fa-trash"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <router-link to="/payment" @click="navigateToPayment"
                                        class="btn btn-primary text-white">Save changes</router-link>
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
                    <h6 class="mt-3">Checkout</h6>
                    <p style=" margin-top: 40px;">There are 3 products in your cart</p>
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
                <div class="kotak">
                    <h4 class="p-4">Your Order</h4>
                    <div class="card m-3 d-flex justify-content-center">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../assets/image/produk/minyak1.png" class="mt-1 img-fluid rounded-start" alt="..."
                                    style="margin-top: -10px;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body d-flex flex-wrap">
                                    <p>Oil</p>
                                    <h6 class="card-text">
                                        Bimoli cooking oil 2 liters <strong class="ms-2">x1</strong>
                                        <!-- <span style="display: inline-block; margin-left: 20px;">×1</span> -->
                                    </h6>
                                    <p>Rp 38.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card m-3 d-flex justify-content-center">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <table>
                                    <tr class="d-flex">
                                        <td style="width:240px;" class="ps-4 pt-2">Total</td>
                                        <td class="d-flex justify-content-end">Rp 38.000</td>
                                    </tr>
                                </table>
                                <router-link to="/payment" @click="processToCheckout" data-bs-dismiss="modal"
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
</template>

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
</style>