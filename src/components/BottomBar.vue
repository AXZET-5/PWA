<script>
    export default {
        props: {
            AboutClass: String,
            OptionsClass: String,
            NewClass: String,
            LogsClass: String,
            ProfileClass: String,
        }
    }
</script>

<template>
    <div class="BottomBar">
        <div class="BottomGrid">
            <router-link to="/about" class="BottomButton" :class="AboutClass">
                <img class="Icon" src="../assets/Info.svg" style="scale: 0.85; opacity: 0.7">
                <text class="Label">About</text>
            </router-link>
            <router-link to="/options" class="BottomButton" :class="OptionsClass">
                <img class="Icon" src="../assets/Settings.svg" style="scale: 0.8; opacity: 0.7">
                <text class="Label">Options</text>
            </router-link>
            <router-link to="/" class="BottomButton" :class="NewClass">
                <img class="Icon" src="../assets/New.svg" style="scale: 0.8; opacity: 0.7">
                <text class="Label">New</text>
            </router-link>
            <router-link to="/logs" class="BottomButton" :class="LogsClass">
                <img class="Icon" src="../assets/Hist.svg" style="scale: 1; opacity: 0.7">
                <text class="Label">Logs</text>
            </router-link>
            <router-link to="/profile" class="BottomButton" :class="ProfileClass">
                <img class="Icon" src="../assets/Profile.svg" style="scale: 0.85; opacity: 0.7">
                <text class="Label">Profile</text>
            </router-link>
        </div>
    </div>
</template>

<style>
    .BottomBar {
        position: fixed;
        bottom: 0;
        background-color: rgba(20,25,35,255);
        
        width: 100%;
        box-shadow: 0rem 0rem 1rem 0rem rgba(0,0,0,0.5);
        border-top: 0.15rem solid white;
    }

    .BottomGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .Icon {
        display: block;
        width: 2rem;
        margin-left: auto;
        margin-right: auto;
        filter: invert(1) brightness(100000%);
    }

    .Label {
        display: block;
        text-align: center;
        font-weight: 500;
        font-size: 0.8rem;
        color: rgb(150,150,150);
    }

    .BottomButton {
        padding-top: 0.4rem;
        padding-bottom: 0.2rem;
        text-decoration: none;
    }

    .BottomButton.Selected {
        background-color: #22303e;
    }

    .BottomButton.Selected > .Label {
        color: white;
    }

    .BottomButton.Selected > .Icon {
        opacity: 1 !important;
    }
</style>