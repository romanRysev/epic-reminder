<template>
  <div class="event-element">
    <div v-if="!isEdit" class="event-element__data">
      <p>{{ eventData }}</p>

      <button @click="onEdit" class="event-element__edit-button">edit</button>
    </div>
    <EventEdit v-else :event="event" @update="onUpdate" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { EventElementType } from "./types";
import EventEdit from "./EventEdit.vue";
export default defineComponent({
  components: { EventEdit },
  props: {
    event: { type: Object as PropType<EventElementType> },
  },
  setup(props, context) {
    const eventData = computed(() => {
      return `${props.event?.text}, ${props.event?.time}, ${props.event?.periodicity}`;
    });

    const isEdit = ref(false);

    const onEdit = () => {
      isEdit.value = !isEdit.value;
    };

    const onUpdate = (updatedEvent: EventElementType) => {
      context.emit("update", updatedEvent);
      isEdit.value = !isEdit.value;
    };

    return { isEdit, onEdit, onUpdate, eventData };
  },
});
</script>

<style lang="scss">
.event-element {
  &__data {
    display: flex;
  }
  &__edit-button {
    margin-left: 20px;
  }
}
</style>
