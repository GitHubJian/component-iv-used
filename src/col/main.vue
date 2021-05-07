<template>
    <div :class="['iv-col', `iv-col-${span}`]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "IvCol",
    props: {
        span: {
            type: Number,
            default: 12,
        },
    },
    setup(props, ctx) {},
});
</script>
