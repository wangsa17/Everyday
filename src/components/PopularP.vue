<template>
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
            <div class="row justify-content-center grid gap-2 custom-pp">
                <div class="col">
                    <div class="mt-2 custom-product">
                        <div class="row ms-1">
                            <img class="pt-2 custom-image" src="../assets/image/produk/minyak2.png" alt="productName">
                        </div>
                        <div class="card-body d-flex flex-wrap align-items-end custom-content mt-4">
                            <div>Oil</div>
                            <h4 class="card-title mt-0 custom-name-produk">Filma cooking oil 2 liters</h4>
                            <div>Rp 35.500</div>

                            <!-- <i class="fa-solid fa-cart-shopping me-2"></i> -->
                            <!-- <router-link to="/login">Lihat Product</router-link> -->
                        </div>
                        <router-link to="/login" class="btn text-white w-100 custom-btn" style="margin-top: 30px;">See
                            Product</router-link>
                    </div>
                </div>
                <div class="col">
                    <div class="mt-2 custom-product">
                        <div class="row ms-1">
                            <img class="pt-2 custom-image" src="../assets/image/produk/beras2.png" alt="productName"
                                style="margin-top: 10px;margin-bottom: 30px;">
                        </div>
                        <div class="card-body d-flex flex-wrap align-items-end custom-content mt-4">
                            <div>Rice</div>
                            <h4 class="card-title mt-0 custom-name-produk">HOTEL Premium Organic Brown Rice 2kg</h4>
                            <div>Rp 35.500</div>

                            <!-- <i class="fa-solid fa-cart-shopping me-2"></i> -->
                            <!-- <router-link to="/login">Lihat Product</router-link> -->
                        </div>
                        <router-link to="/login" class="btn text-white w-100 custom-btn" style="margin-top: 10px;">See
                            Product</router-link>
                    </div>
                </div>
                <div class="col">
                    <div class="mt-2 custom-product">
                        <div class="row ms-1">
                            <img class="pt-2 custom-image" src="../assets/image/produk/tepung1.png" alt="productName"
                                style="margin-top: 10px;margin-bottom: 30px;">
                        </div>
                        <div class="card-body d-flex flex-wrap align-items-end custom-content mt-4">
                            <div>Flour</div>
                            <h4 class="card-title mt-0 custom-name-produk">Blue Triangle Wheat Flour 1kg</h4>
                            <div>Rp 35.500</div>

                            <!-- <i class="fa-solid fa-cart-shopping me-2"></i> -->
                            <!-- <router-link to="/login">Lihat Product</router-link> -->
                        </div>
                        <router-link to="/login" class="btn text-white w-100 custom-btn" style="margin-top: 10px;">See
                            Product</router-link>
                    </div>
                </div>
                <div class="col">
                    <div class="mt-2 custom-product">
                        <div class="row ms-1">
                            <img class="pt-2 custom-image" src="../assets/image/produk/gula2.png" alt="productName"
                                style="margin-top: 10px;margin-bottom: 15px;">
                        </div>
                        <div class="card-body d-flex flex-wrap align-items-end custom-content mt-4">
                            <div>Sugar</div>
                            <h4 class="card-title mt-0 custom-name-produk">Tropicana Slim Sweetener Classic 500g</h4>
                            <div>Rp 35.500</div>

                            <!-- <i class="fa-solid fa-cart-shopping me-2"></i> -->
                            <!-- <router-link to="/login">Lihat Product</router-link> -->
                        </div>
                        <router-link to="/login" class="btn text-white w-100 custom-btn" style="margin-top: 10px;">See
                            Product</router-link>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center grid gap-2 custom-pp mt-4">
                <div class="col">
                    <div class="mt-2 custom-product">
                        <div class="row ms-1">
                            <img class="pt-2 custom-image" src="../assets/image/produk/egg3.png" alt="productName"
                                style="margin-top: 30px;margin-bottom: 60px;">
                        </div>
                        <div class="card-body d-flex flex-wrap align-items-end custom-content mt-4">
                            <div>Egg</div>
                            <h4 class="card-title mt-0 custom-name-produk">Fresh Healthy Omega Egg 10 pcs</h4>
                            <div>Rp 27.000</div>

                            <!-- <i class="fa-solid fa-cart-shopping me-2"></i> -->
                            <!-- <router-link to="/login">Lihat Product</router-link> -->
                        </div>
                        <a href="#modal1" class="btn text-white w-100 custom-btn" data-bs-toggle="modal"
                            data-bs-target="#modal1 " style="margin-top: 30px;">See Product</a>

                    </div>
                </div>
                <div class="col">
                    <div class="mt-2 custom-product">
                        <div class="row ms-1">
                            <img class="pt-2 custom-image" src="../assets/image/produk/mie2.png" alt="productName"
                                style="margin-top: 10px;margin-bottom: 10px;">
                        </div>
                        <div class="card-body d-flex flex-wrap align-items-end custom-content mt-4">
                            <div>Mie</div>
                            <h4 class="card-title mt-0 custom-name-produk">Gekikara Ramen HOT Carbo 120g</h4>
                            <div>Rp 7.000</div>

                            <!-- <i class="fa-solid fa-cart-shopping me-2"></i> -->
                            <!-- <router-link to="/login">Lihat Product</router-link> -->
                        </div>
                        <router-link to="/login" class="btn text-white w-100 custom-btn" style="margin-top: 30px;">See
                            Product</router-link>
                    </div>
                </div>
                <div class="col">
                    <div class="mt-2 custom-product">
                        <div class="row ms-1">
                            <img class="pt-2 custom-image" src="../assets/image/produk/rose_brand_gula_tebu.png"
                                alt="productName" style="margin-top: 10px;margin-bottom: 0;">
                        </div>
                        <div class="card-body d-flex flex-wrap align-items-end custom-content mt-4">
                            <div>Sugar</div>
                            <h4 class="card-title mt-0 custom-name-produk">Rose Brand Cane Sugar 1kg</h4>
                            <div>Rp 14.500</div>

                            <!-- <i class="fa-solid fa-cart-shopping me-2"></i> -->
                            <!-- <router-link to="/login">Lihat Product</router-link> -->
                        </div>
                        <router-link to="/login" class="btn text-white w-100 custom-btn" style="margin-top: 30px;">See
                            Product</router-link>
                    </div>
                </div>
                <div class="col">
                    <div class="mt-2 custom-product">
                        <div class="row ms-1">
                            <img class="pt-2 custom-image" src="../assets/image/produk/minyak1.png" alt="productName"
                                style="margin-top: 10px;margin-bottom: 10px;">
                        </div>
                        <div class="card-body d-flex flex-wrap align-items-end custom-content mt-4">
                            <div>Oil</div>
                            <h4 class="card-title mt-0 custom-name-produk">Sania Royale Palm Cooking Oil 1 liter</h4>
                            <div>Rp 19.500</div>

                            <!-- <i class="fa-solid fa-cart-shopping me-2"></i> -->
                            <!-- <router-link to="/login">Lihat Product</router-link> -->
                        </div>
                        <router-link to="/login" class="btn text-white w-100 custom-btn" style="margin-top: 30px;">See
                            Product</router-link>
                    </div>
                </div>
            </div>
            <!-- <nav aria-label="..." class="d-flex justify-content-center mt-2 custom-pagi">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav> -->
        </div>

    </section>
</template>
  


<style scoped>
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

ul {
    margin-top: 10px;
    list-style-type: none;
    /* border: 1px solid #242424; */
    width: 78%;
    height: 20px;
    text-align: end;
}

li {
    display: inline;
    margin-left: 10px;
}

a {
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

.custom-product {
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

.custom-image {
    margin-top: -20px;
    width: 150px;
    transform: translateX(30px);
}

.custom-btn {
    background-color: #E76202;
}

.custom-btn:hover {
    background-color: #bd4f01;
}</style>