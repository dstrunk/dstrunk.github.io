<script>
export default {
}
</script>

<template lang="html">
    <div class="w-full h-full flex flex-col justify-center items-center">
        <slot></slot>
    </div>
</template>

<style lang="less">
@tailwind preflight;
@tailwind components;

@tailwind utilities;
</style>
