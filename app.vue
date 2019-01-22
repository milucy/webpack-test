<template>
    <div>
        <div>hello {{name}}</div>
        <p>
            <img src="./images/gongren.png" style="width: 200px;">
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'Vue.js'
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            console.log('@@@@@');
        }
    }
}
</script>
<style>
    div{
        color: #f60;
        font-size: 24px;
    }
</style>


