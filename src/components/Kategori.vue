<template>
    <section id="kategori">
        <div class="container">
            <h2>Kategori</h2>

            <div class="row justify-content-center">
                <div class="col">
                    <div class="card rounded-4 border-0 kategoriGambar" id="Rice" style="width: 150px;height: 180px;">
                        <img src="../assets/image/kategori/beras.png" class="card-img-top p-1" alt="Rice">
                        <div class="card-title text-center">Rice</div>
                    </div>
                </div>
                <div class="col">
                    <div class="card rounded-4 border-0 kategoriGambar" id="Oil" style="width: 150px;height: 180px;">
                        <img src="../assets/image/kategori/minyak.png" class="card-img-top p-1" alt="Oil">
                        <div class="card-title text-center">Oil</div>
                    </div>
                </div>
                <div class="col">
                    <div class="card rounded-4 border-0 kategoriGambar" id="Flour" style="width: 150px;height: 180px;">
                        <img src="../assets/image/kategori/tepung.png" class="card-img-top p-1 mx-auto custom-img" alt="Flour">
                        <div class="card-title text-center mt-2">Flour</div>
                    </div>
                </div>
                <div class="col">
                    <div class="card rounded-4 border-0 kategoriGambar" id="Mie" style="width: 150px;height: 180px;">
                        <img src="../assets/image/kategori/mie.png" class="card-img-top p-1" alt="Mie">
                        <div class="card-title text-center">Mie</div>
                    </div>
                </div>
                <div class="col">
                    <div class="card rounded-4 border-0 kategoriGambar " id="Sugar" style="width: 150px;height: 180px;">
                        <img src="../assets/image/kategori/gulaku.png" class="card-img-top p-1 mx-auto custom-img-sugar" alt="Sugar" >
                        <div class="card-title text-center" style="margin-top: -9px;">Sugar</div>
                    </div>
                </div>
                <div class="col">
                    <div class="card rounded-4 border-0 kategoriGambar" id="Egg" style="width: 150px;height: 180px;">
                        <img src="../assets/image/kategori/telur.png" class="card-img-top p-1 mx-auto custom-img-egg" alt="Egg">
                        <div class="card-title text-center">Egg</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#kategori {
    margin: 10px 0;
}

.kategoriGambar {
    margin-top: 30px;
    transition: 0.2s;
}
#Rice{
    background-color: #DFF1E0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#Oil{
    background-color: #FFE7D6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
}
#Flour{
    background-color: #FFF7D9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: auto;
}
#Mie{
    background-color: #FFEAFD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: auto;
}
#Sugar{
    background-color: #FFDEF0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: auto;
}
#Egg{
    background-color: #DFF1E0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: auto;
}

.custom-img{
    width: 80%;
    margin-top: -20px;
    border: none;
}
.custom-img-sugar{
    width: 80%;
    margin-top: -40px;
}
.custom-img-egg{
    width: 80%;
    margin-top: -50px;
}
.kategoriGambar:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: translate(5px, -10px);
    transition: 0.3s;
}
</style>