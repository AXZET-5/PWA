<script>
    export default {
        props: {
            appBarTitle: String,
        }
    }
</script>

<template>
    <div class="AppBar">
        <div class="BarGrid">
            <text class="BarTitle">{{ appBarTitle }}</text>
            <img class="HamburgerIcon" src="../assets/Hamburger.svg">
        </div>
    </div>
</template>

<style>
    .AppBar{
        position: fixed;
        top: 0;
        background-color: rgba(20,25,35,255);
        color: white;
        padding: 5%;
        width: 90%;
        box-shadow: 0rem 0rem 1rem 0rem rgba(0,0,0,0.5);
        border-bottom: 0.15rem solid white;
    }

    .BarGrid {
        display: grid;
        grid-template-columns: auto min-content;
    }

    .BarTitle {
        margin-top: auto;
        margin-bottom: auto;
        font-weight: 600;
        font-size: 2rem;
    }

    .HamburgerIcon {
        width: 2rem;
        margin-top: auto;
        margin-bottom: auto;
        filter: invert(1);
    }

    .HamburgerIcon:hover {
        cursor: pointer;
    }
</style>