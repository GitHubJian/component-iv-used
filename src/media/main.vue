<template>
    <div class="i-media">
        <div class="i-media__left">
            <slot name="left"></slot>
        </div>
        <div class="i-media__body">
            <slot name="body"></slot>
        </div>
        <div class="i-media__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "IvMedia",
    setup() {},
});
</script>
