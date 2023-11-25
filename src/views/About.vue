<script setup>
import Navbar from '../components/Navbar.vue'
import Futer from '../components/Futer.vue'
</script>
<template>
    <Navbar/>
    <div class="wrapper">
        <h1>Everyday Team</h1>
        <div class="team">
            <div class="team_member">
                <div class="team_img">
                    <img src="../assets/image/team/hazel.jpg" alt="Team_image">
                </div>
                <h3>Hazel</h3>
                <p class="role">Informatics engineering student</p>
                <p>Hai!! Perkenalkan namaku Hazel Mangadaralam Pratama Rayes biasa dipanggil adek karena 2006, aku mahasiswa
                    semester 1 Teknik Informatika di Politeknik Elektronika Negeri Surabaya. "Everyday" adalah project
                    website pertamaku bersama rekan satu kelompokku lainnya</p>
            </div>
            <div class="team_member">
                <div class="team_img">
                    <img src="../assets/image/team/awang.jpg" alt="Team_image">
                </div>
                <h3>Awang</h3>
                <p class="role">Informatics engineering student</p>
                <p>Assalammualaikum, Perkenalkan namaku Dewangga Wahyu Putera Wangsa biasanya teman-teman memanggilku Awang.
                    Aku adalah mahasiswa Teknik Informatika semester 1 di PENS, semoga project kami "Everyday" bisa berguna
                    untuk kalian semua.</p>
            </div>
            <div class="team_member">
                <div class="team_img">
                    <img src="../assets/image/team/maula.jpg" alt="Team_image">
                </div>
                <h3>Maula</h3>
                <p class="role">Informatics engineering student</p>
                <p>haloo!!, Aku Maula Shahihah Nur Sa'adah yang biasa dipanggil Maula, Aku sedang berkuliah di Politeknik
                    Elektronika Negeri Surabaya, dengan jurusan Teknik Informatika. Aku tertarik belajar pemrograman dan
                    tertarik di ui ux design </p>
            </div>
        </div>
    </div>
    <Futer/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Allura|Josefin+Sans');
@import url('https://fonts.googleapis.com/css2?family=Kenia&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kenia&family=Nanum+Gothic:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Kenia&family=Nanum+Gothic:wght@700&display=swap');

@font-face {
    font-family: 'Handmade';
    src: url(/font/Handmade.otf) format('opentype');
    font-family: 'OldNewspaperTypes';
    src: url(/font/OldNewspaperTypes.ttf) format('woff2');
}

@font-face {
    font-family: 'Helvetica';
    src: url(/font/Helvetica.otf) format('woff');
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
}

.wrapper {
    margin-top: 20px;
}

.wrapper h1 {
    font-family: 'Allura', cursive;
    font-size: 52px;
    margin-bottom: 60px;
    text-align: center;
}

.team {
    display: flex;
    justify-content: center;
    width: auto;
    text-align: center;
    flex-wrap: wrap;
}

.team .team_member {
    background: #fff;
    margin: 5px;
    margin-bottom: 50px;
    width: 300px;
    padding: 20px;
    line-height: 20px;
    color: #8e8b8b;
    position: relative;
}

.team_member {
    text-align: center;
}

.team_img img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 2px solid #fff;
}

.team_member h3 {
    margin-top: 10px;
}

.role {
    font-style: italic;
    color: #555;
}


.team .team_member h3 {
    color: #FF8C00;
    font-size: 26px;
    margin-top: 50px;
}

.team .team_member p.role {
    color: #ccc;
    margin: 12px 0;
    font-size: 12px;
    text-transform: uppercase;
}

.team .team_member .team_img {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
}

.team .team_member .team_img img {
    width: 100px;
    height: 100px;
    padding: 5px;
}
</style>