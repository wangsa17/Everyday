<template>
    <div class="custom-carousel">
        <div class="container mt-3">

            <div id="carouselExampleRide" class="carousel carousel-dark slide" data-bs-ride="true">
                <div class="carousel-inner">
                    <div class="carousel-item active custom-cimg rounded-5">
                        <img src="../assets/image/banner/banner1.png" class="my-auto custom-img" width="350px" alt="...">
                        <div class="carousel-caption desc text-dark">
                            <h1>Don’t miss amazing grocery deals</h1>
                            <p>Save 50% off on your first order</p>
                        </div>
                    </div>
                    <div class="carousel-item custom-cimg rounded-5">
                        <img src="../assets/image/banner/bahan-pokok.png" class="my-auto custom-img" width="350px"
                            alt="...">
                        <div class="carousel-caption desc text-dark">
                            <h1>Don’t miss amazing grocery deals</h1>
                            <p>Save 50% off on your first order</p>
                        </div>
                    </div>
                    <!-- <div class="carousel-item custom-cimg rounded-5">
                        <img src="../assets/image/banner/banner1.png" class="my-auto custom-img" width="350px" alt="...">
                        <div class="carousel-caption desc text-dark">
                            <h1>Don’t miss amazing grocery deals</h1>
                            <p>Save 50% off on your first order</p>
                        </div>
                    </div> -->
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    background-size: cover;
    object-fit: cover;
}

.desc {
    /* border: 1px solid #242424; */
    transform: translate(-40px, -100px);
    width: 400px;
}

.custom-cimg {
    background-color: #E9FFE6;
    height: 400px;
    width: 100%;
}

.banner {
    background-image: url('../assets/image/banner/banner1.png');

}

.custom-img {
    margin-left: 670px;
    transform: translateY(50px);
    border: none;
}
</style>