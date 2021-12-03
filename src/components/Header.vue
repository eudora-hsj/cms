<template>
    <div class="content">
        <h1>{{ title }}</h1>
        <el-button type="primary">element plus</el-button>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title: "Eudora"
        }
    }
}
</script>

<style lang="scss">
.content {
    h1 {
        color: peru;
    }
}
</style>