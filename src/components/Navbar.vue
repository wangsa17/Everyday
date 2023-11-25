<script setup>

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
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/daftar" class="nav-link">Register</router-link>
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
            <input type="checkbox" style="display: none;" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i
              class="fa-solid fa-cart-shopping me-1"></i>
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
                      <tr>
                        <td scope="row" class="text-center">
                          <input type="checkbox" name="" class="form-check-input" id="">
                        </td>
                        <td class="text-start" style="width: 350px">
                          <!-- <img src="../assets/image/produk/minyak3.png" width="150px" alt="Minyak"> -->
                          <img src="../assets/image/produk/minyak1.png" class="custom-img" alt="" style="width: 100px;">
                          Filma cooking oil 2 liters
                        </td>
                        <td class="text-center">Rp 38.000</td>
                        <td class="text-center">
                          <div class="d-flex align-items-center justify-content-center">
                            <button type="button" @click="count++" class="square border-0 me-1"><i
                                class="fa-solid fa-plus"></i></button>
                            <p class="qty my-auto">
                              {{ count }}
                            </p>
                            <button type="button" @click="count--" class="square border-0 ms-1"><i
                                class="fa-solid fa-minus"></i></button>
                          </div>
                        </td>
                        <td class="text-center">Rp 38.000</td>
                        <td class="text-center"><i class="fa-solid fa-trash"></i></td>
                      </tr>
                      <tr>
                        <td scope="row" class="text-center">
                          <input type="checkbox" name="" class="form-check-input" id="">
                        </td>
                        <td class="text-start" style="width: 350px">
                          <!-- <img src="../assets/image/produk/minyak3.png" width="150px" alt="Minyak"> -->
                          <img src="../assets/image/produk/minyak1.png" class="custom-img" alt="" style="width: 100px;">
                          Filma cooking oil 2 liters
                        </td>
                        <td class="text-center">Rp 38.000</td>
                        <td class="text-center">
                          <div class="d-flex align-items-center justify-content-center">
                            <button type="button" @click="count++" class="square border-0 me-1"><i
                                class="fa-solid fa-plus"></i></button>
                            <p class="qty my-auto">
                              {{ count }}
                            </p>
                            <button type="button" @click="count--" class="square border-0 ms-1"><i
                                class="fa-solid fa-minus"></i></button>
                          </div>
                        </td>
                        <td class="text-center">Rp 38.000</td>
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
                      <button type="button" class="btn btn-primary" style="border: none;background-color: #e76202">Update
                        Cart</button>
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
                        <router-link to="/payment" @click="processToCheckout" data-bs-dismiss="modal"
                          style="border: none;background-color: #e76202;width:100%;"
                          class="btn btn-primary text-white mt-3">Process to
                          Checkout</router-link>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="row">
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
                                    </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<style scoped>
a {
  color: #242424;
  font-size: 14px;
}

a:hover {
  color: #E76202;
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
