<template>
    <div class="container">
        <div class="col" style="margin-top: 5%;">
            <div class="kotak">
                <!-- Checkbox di atas garis -->
                <div class="checkbox-container" style="margin-top: -5px;">
                    <input type="checkbox" id="myCheckbox">
                    <label style=" margin-left: 20px;" for="myCheckbox"> Product </label>
                    <label style=" margin-left: 150px;" for="myCheckbox"> Unit Price </label>
                    <label style=" margin-left: 20px;" for="myCheckbox"> Quantity </label>
                    <label style=" margin-left: 20px;" for="myCheckbox"> Subtotal </label>
                    <label style=" margin-left: 20px;" for="myCheckbox"> Remove </label>
                </div>

                <!-- Garis di dalam kotak -->
                <div class="garis"></div>

                <!-- Kartu (card)1 -->
                <div class="card mb-3"
                    style="width: 400px; height: 120px; margin-left: 40px; margin-top: 40px; border: none;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <div class="checkbox-container" style="margin-top: 15px; margin-left: -35px;">
                                <input type="checkbox" id="myCheckbox">
                            </div>
                            <div class="minyak">
                                <img src="img/minyak.png" class="img-fluid rounded-start" alt="..."
                                    style="margin-top: -5px; margin-left: 3px;">
                            </div>
                            <div class="card-body">
                                <!-- Menggunakan flexbox untuk sejajar -->
                                <div class="flex-container">
                                    <p class="card-text flex-text no-wrap"
                                        style="font-size: small; margin-top: -10px; margin-left: 5px;">
                                        Bimoli cooking oil 2 liters
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body" style="margin-left: 60px; margin-top: 30px;">
                                <p style="font-weight: 50; display: inline-block;">Rp.38.000</p>
                                <span
                                    style="margin-left: 30px; border-radius: 50%; border: 1px solid #E76202; padding: 5px; font-size: 20px; background-color: #E76202; color: #fff; margin-top: -13px;">-</span>
                                <span style="margin-left: 5px; margin-top: -15px;">1</span>
                                <span
                                    style="margin-left: 5px; border-radius: 50%; border: 1px solid #E76202; padding: 5px; font-size: 20px; background-color: #E76202; color: #fff; margin-top: -13px;">+</span>
                                <span
                                    style="margin-left: 30px; display: inline-block; margin-top: -15px; font-weight: 50;">Rp.38.000</span>
                                <div class="col">
                                    <i class="fa-solid fa-trash" style="margin-left: 30px; margin-top: -20px;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--card ke2-->
                    <div class="card mb-3" style="width: 400px; height: 120px; margin-top: 40px; border: none;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="checkbox-container" style="margin-top: 15px; margin-left: -35px;">
                                    <input type="checkbox" id="myCheckbox">
                                </div>
                                <div class="minyak">
                                    <img src="img/minyak.png" class="img-fluid rounded-start" alt="..."
                                        style="margin-top: -5px; margin-left: 3px;">
                                </div>
                                <div class="card-body">
                                    <!-- Menggunakan flexbox untuk sejajar -->
                                    <div class="flex-container">
                                        <p class="card-text flex-text no-wrap"
                                            style="font-size: small; margin-top: -10px; margin-left: 5px;">
                                            Bimoli cooking oil 2 liters
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body" style="margin-left: 60px; margin-top: 30px;">
                                    <p style="font-weight: 50; display: inline-block;">Rp.38.000</p>
                                    <span
                                        style="margin-left: 30px; border-radius: 50%; border: 1px solid #E76202; padding: 5px; font-size: 20px; background-color: #E76202; color: #fff; margin-top: -13px;">-</span>
                                    <span style="margin-left: 5px; margin-top: -15px;">1</span>
                                    <span
                                        style="margin-left: 5px; border-radius: 50%; border: 1px solid #E76202; padding: 5px; font-size: 20px; background-color: #E76202; color: #fff; margin-top: -13px;">+</span>
                                    <span
                                        style="margin-left: 30px; display: inline-block; margin-top: -15px; font-weight: 50;">Rp.38.000</span>
                                    <div class="col">
                                        <i class="fa-solid fa-trash" style="margin-left: 30px; margin-top: -20px;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--card ke 3 -->
                    <div class="card mb-3" style="width: 400px; height: 120px; margin-top: 40px; border: none;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="checkbox-container" style="margin-top: 15px; margin-left: -35px;">
                                    <input type="checkbox" id="myCheckbox">
                                </div>
                                <div class="minyak">
                                    <img src="img/minyak.png" class="img-fluid rounded-start" alt="..."
                                        style="margin-top: -5px; margin-left: 3px;">
                                </div>
                                <div class="card-body">
                                    <!-- Menggunakan flexbox untuk sejajar -->
                                    <div class="flex-container">
                                        <p class="card-text flex-text no-wrap"
                                            style="font-size: small; margin-top: -10px; margin-left: 5px;">
                                            Bimoli cooking oil 2 liters
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body" style="margin-left: 60px; margin-top: 30px;">
                                    <p style="font-weight: 50; display: inline-block;">Rp.38.000</p>
                                    <span
                                        style="margin-left: 30px; border-radius: 50%; border: 1px solid #E76202; padding: 5px; font-size: 20px; background-color: #E76202; color: #fff; margin-top: -13px;">-</span>
                                    <span style="margin-left: 5px; margin-top: -15px;">1</span>
                                    <span
                                        style="margin-left: 5px; border-radius: 50%; border: 1px solid #E76202; padding: 5px; font-size: 20px; background-color: #E76202; color: #fff; margin-top: -13px;">+</span>
                                    <span
                                        style="margin-left: 30px; display: inline-block; margin-top: -15px; font-weight: 50;">Rp.38.000</span>
                                    <div class="col">
                                        <i class="fa-solid fa-trash" style="margin-left: 30px; margin-top: -20px;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.kotak {
    border: 1px solid #000;
    height: 600px;
    width: 50%;
    position: relative;
    /* Menambahkan posisi relatif untuk memposisikan checkbox */
}

.garis {
    border: 1px solid #000;
    margin-top: 30px;
}

/* Menambahkan gaya untuk checkbox */
.checkbox-container {
    position: absolute;
    top: 10px;
    /* Sesuaikan posisi vertikal sesuai kebutuhan */
    left: 10px;
    /* Sesuaikan posisi horizontal sesuai kebutuhan */
}

/* Menjadikan teks sejajar tanpa inline-block menggunakan flexbox */
.flex-container {
    display: flex;
    align-items: center;
    /* Mengatur sejajar secara vertikal */
}

/* Menambahkan margin pada teks */
.flex-text {
    margin-left: 10px;
}

/* Mencegah pematahan baris pada teks */
.no-wrap {
    white-space: nowrap;
}

.minyak {
    border: #000 solid 1px;
    height: 75px;
    width: 80px;
    border-radius: 16px;
    margin-left: 30px;
}

.square {
    display: inline-block;
}

/* Menyusun teks "38.000" sejajar dengan tanda "+" dan "-" dalam satu baris */
.card-body {
    display: flex;
    align-items: center;
}

/* Mengatur margin pada elemen-elemen di dalam card-body */
.card-body>* {
    margin-right: 5px;
}
</style>