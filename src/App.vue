<template>
    <div id="app">
        <transition mode="out-in" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOut">
            <router-view></router-view>
        </transition>

    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>