<template>
    <section id="dialyBS">
        <div class="container">
            <div class="d-flex">
                <h2>Daily Best Sells</h2>
            </div>

            <div class="row">
                <div class="col-3">
                    <div class="image rounded-4">
                        <h3 id="daun">Bring nature into your home</h3>
                        <a href="#" class="btn btn-success rounded" id="btndaun">shop now <i
                                class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-9">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="row justify-content-center">
                                    <div class="col me-3 card text-white" style="width: 250px;height: 362px;">
                                        <img class="card-img-top" src="../assets/image/produk/gula-removebg.png" alt="Title">
                                    </div>
                                    <div class="col me-3 card text-white" style="width: 250px;height: 362px;">
                                        <img class="card-img-top" src="../assets/image/produk/gula-removebg.png" alt="Title">
                                    </div>
                                    <div class="col me-3 card text-white" style="width: 250px;height: 362px;">
                                        <img class="card-img-top" src="../assets/image/produk/gula-removebg.png" alt="Title">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
</template>

<style scoped>
a {
    text-decoration: none;
    color: #eee;
}

.image {
    background-image: url('../assets/image/leaf.png');
    height: 362px;
    width: 267px;
    background-size: cover;
}

#daun {
    padding: 20px 100px 0 40px;
}

#btndaun {
    margin: 70px 40px;
}
</style>