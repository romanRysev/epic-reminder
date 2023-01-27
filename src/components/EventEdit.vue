<template>
  <div class="event-add">
    <input label="text" v-model="newEvent.text" /><input
      label="time"
      v-model="newEvent.time"
    /><input label="periodicity" v-model="newEvent.periodicity" /><button
      @click="onSave"
    >
      save
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { EventElementType } from "./types";

export default defineComponent({
  props: {
    event: { type: Object as PropType<EventElementType>, required: false },
  },
  setup(props, context) {
    const emptyEvent = {
      text: "",
      time: "",
      periodicity: "",
    };
    const newEvent = ref(!props.event ? emptyEvent : props.event);

    const clearNewEvent = () => {
      newEvent.value = emptyEvent;
    };

    const onSave = () => {
      context.emit("update", newEvent.value);
      clearNewEvent();
    };

    return { newEvent, onSave };
  },
});
</script>

<style lang="scss"></style>
