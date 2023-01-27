<template>
  <div class="events-list">
    <ul>
      <li v-for="event in events" :key="event.name">
        <EventElement :event="event" @update="onUpdate" />
      </li>
    </ul>
    <EventEdit v-if="isAdd" @update="onAdd" />
    <button v-if="!isAdd" @click="onAddClick">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getEvents } from "./getEvents";
import EventElement from "./EventElement.vue";
import EventEdit from "./EventEdit.vue";
import { EventElementType } from "./types";
export default defineComponent({
  components: { EventElement, EventEdit },
  setup() {
    const events = ref(getEvents());
    const isAdd = ref(false);

    const onAddClick = () => {
      isAdd.value = !isAdd.value;
    };

    const onAdd = (newEvent: EventElementType) => {
      events.value.push(newEvent);
      window.localStorage.setItem("events", JSON.stringify(events.value));
      isAdd.value = false;
    };

    const onUpdate = (updatedEvent: EventElementType) => {
      const index = events.value.findIndex((event) => {
        event.text === updatedEvent.text;
      });
      events.value[index] = updatedEvent;
      window.localStorage.setItem("events", JSON.stringify(events.value));
    };

    return { events, isAdd, onAddClick, onAdd, onUpdate };
  },
});
</script>

<style lang="scss"></style>
