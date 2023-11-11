<template>
    <section id="PopularP">
        <div class="container">
            <div class="d-flex">
                <h2>Popular Product</h2>
                <ul>
                    <li><a href="#" class="PP">All</a></li>
                    <li><a href="#" class="PP">Kategori</a></li>
                    <li><a href="#" class="PP">Kategori</a></li>
                    <li><a href="#" class="PP">Kategori</a></li>
                    <li><a href="#" class="PP">Kategori</a></li>
                </ul>
            </div>
            <div class="row justify-content-center">
                <div class="col-3">
                    <div class="card shadow mt-4 rounded-4" id="cards">
                        <div class="px-5 py-1">
                            <img class="card-img-top py-3" src="../assets/image/gula-removebg.png" alt="Title">
                        </div>
                        <div class="card-body">
                            <div>Kategori</div>
                            <h4 class="card-title">GULAKU</h4>
                            <span>Rp. 20.000</span>
                            <button class="btn btn-primary float-end animate"><i
                                    class="fa fa-shopping-cart me-2"></i>cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow mt-4 rounded-4" id="cards">
                        <div class="px-5 py-1">
                            <img class="card-img-top py-3" src="../assets/image/gula-removebg.png" alt="Title">
                        </div>
                        <div class="card-body">
                            <div>Kategori</div>
                            <h4 class="card-title">GULAKU</h4>
                            <span>Rp. 20.000</span>
                            <button class="btn btn-primary float-end animate"><i
                                    class="fa fa-shopping-cart me-2"></i>cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow mt-4 rounded-4" id="cards">
                        <div class="px-5 py-1">
                            <img class="card-img-top py-3" src="../assets/image/gula-removebg.png" alt="Title">
                        </div>
                        <div class="card-body">
                            <div>Kategori</div>
                            <h4 class="card-title">GULAKU</h4>
                            <span>Rp. 20.000</span>
                            <button class="btn btn-primary float-end animate"><i
                                    class="fa fa-shopping-cart me-2"></i>cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow mt-4 rounded-4" id="cards">
                        <div class="px-5 py-1">
                            <img class="card-img-top py-3" src="../assets/image/gula-removebg.png" alt="Title">
                        </div>
                        <div class="card-body">
                            <div>Kategori</div>
                            <h4 class="card-title">GULAKU</h4>
                            <span>Rp. 20.000</span>
                            <button class="btn btn-primary float-end animate"><i
                                    class="fa fa-shopping-cart me-2"></i>cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow mt-4 rounded-4" id="cards">
                        <div class="px-5 py-1">
                            <img class="card-img-top py-3" src="../assets/image/gula-removebg.png" alt="Title">
                        </div>
                        <div class="card-body">
                            <div>Kategori</div>
                            <h4 class="card-title">GULAKU</h4>
                            <span>Rp. 20.000</span>
                            <button class="btn btn-primary float-end animate"><i
                                    class="fa fa-shopping-cart me-2"></i>cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow mt-4 rounded-4" id="cards">
                        <div class="px-5 py-1">
                            <img class="card-img-top py-3" src="../assets/image/gula-removebg.png" alt="Title">
                        </div>
                        <div class="card-body">
                            <div>Kategori</div>
                            <h4 class="card-title">GULAKU</h4>
                            <span>Rp. 20.000</span>
                            <button class="btn btn-primary float-end animate"><i
                                    class="fa fa-shopping-cart me-2"></i>cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow mt-4 rounded-4" id="cards">
                        <div class="px-5 py-1">
                            <img class="card-img-top py-3" src="../assets/image/gula-removebg.png" alt="Title">
                        </div>
                        <div class="card-body">
                            <div>Kategori</div>
                            <h4 class="card-title">GULAKU</h4>
                            <span>Rp. 20.000</span>
                            <button class="btn btn-primary float-end animate"><i
                                    class="fa fa-shopping-cart me-2"></i>cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow mt-4 rounded-4" id="cards">
                        <div class="px-5 py-1">
                            <img class="card-img-top py-3" src="../assets/image/gula-removebg.png" alt="Title">
                        </div>
                        <div class="card-body">
                            <div>Kategori</div>
                            <h4 class="card-title">GULAKU</h4>
                            <span>Rp. 20.000</span>
                            <button class="btn btn-primary float-end animate"><i
                                    class="fa fa-shopping-cart me-2"></i>cart</button>
                        </div>
                    </div>
                </div>

            </div>
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
ul{
    margin-top: 10px;
    list-style-type: none;
    /* border: 1px solid #242424; */
    width: 78%;
    height: 20px;
    text-align: end;
}

li{
    display: inline;
    margin-left: 10px;
}
a{
    text-decoration: none;
    color: #242424;
}

/* .PP {
  transition: transform 0.3s ease, color 0.3s ease; 
  color: #000; 
}

.PP:hover {
  transform: translateY(-5px);
  color: #E76202; 
} */

</style>