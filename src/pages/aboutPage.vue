<template>
    <div class="AboutPage" >
    <div id= "background" > </div>
    <h1 class="aboutTitle">About The Recipes</h1>
    <div class="aboutInfo">
    <p>
    Welcome to our recipes website! We are passionate about food and believe that cooking and sharing delicious meals can bring people together. Our website is designed to be a go-to resource for food enthusiasts of all levels, from beginners to experienced home cooks.
    
    At our recipes website, you will find a vast collection of diverse and mouthwatering recipes that cater to various tastes, dietary preferences, and occasions. Whether you're looking for quick and easy weeknight dinners, impressive desserts for special occasions, healthy and nutritious options, or international cuisines, we have you covered.
    </p>
    </div>
    
    <div class="aboutUsInfo">
    <h2 class="aboutUsTitle">Meet The Team</h2>
    <p>
    Ofir Belenky, Liron Zvi
    </p>
    </div>
    <div class="aboutPrev">
    <h2 class="PrevTitle">About Previous Projects</h2>
    <div class="previousProjects">
    <a href="https://github.com/Web-Development-Environments-2023/assignment3_2-314807496_208196576" class="previousLink">3.2 - Backend Part Project</a><br><br>
    </div>
    </div>
    
    </div>
    </template>
    
    <style scoped>
    .AboutPage {
    text-align: center;
    padding: 40px;
    color: #8bbb95;
    }
    .aboutTitle {
    font-size: 34px;
    margin-bottom: 21px;
    color: #040c06;
    }.PrevTitle {
    font-size: 34px;
    margin-bottom: 21px;
    color: #040c06;
    }
    
    .aboutUsTitle {
    font-size: 25px;
    margin-bottom: 15px;
    color: #193d21;
    }
    .aboutUsInfo {
    text-align: center;
    margin-top: 35px;
    color: #21492b;
    }
    .previousLink {
    font-size: 25px;
    margin-bottom: 15px;
    color: #193d21;
    }
    .aboutInfo {
    font-size: 20px;
    line-height: 1.6;
    color: #21492b;
    }
    #background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #a5d9b0;
    background-size: cover;
    z-index: -1;
    
    background-position: center;
    opacity: 0.39;
    }
    </style>