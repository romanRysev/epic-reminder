<template>
  <EventsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventsList from "./components/EventsList.vue";

export default defineComponent({
  components: {
    EventsList,
  },
});
</script>

<style lang="scss"></style>
