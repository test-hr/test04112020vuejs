<template>
  <div>
    <button
      v-if="type === 'primary' || type === 'secondary'"
      :class="{
        'primary-button': type === 'primary',
        'secondary-button': type === 'secondary',
      }"
      @click="$emit('click')"
    >
      {{ text }}
    </button>
    <button v-if="type === 'lock'" class="lock-button" @click="$emit('click')">
      <svg
        style="margin-right: 5px; color: lightgrey"
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.5 8H2.5C2.23478 8 1.98043 8.10536 1.79289 8.29289C1.60536 8.48043 1.5 8.73478 1.5 9V14C1.5 14.2652 1.60536 14.5196 1.79289 14.7071C1.98043 14.8946 2.23478 15 2.5 15H9.5C9.76522 15 10.0196 14.8946 10.2071 14.7071C10.3946 14.5196 10.5 14.2652 10.5 14V9C10.5 8.73478 10.3946 8.48043 10.2071 8.29289C10.0196 8.10536 9.76522 8 9.5 8ZM2.5 7C1.96957 7 1.46086 7.21071 1.08579 7.58579C0.710714 7.96086 0.5 8.46957 0.5 9V14C0.5 14.5304 0.710714 15.0391 1.08579 15.4142C1.46086 15.7893 1.96957 16 2.5 16H9.5C10.0304 16 10.5391 15.7893 10.9142 15.4142C11.2893 15.0391 11.5 14.5304 11.5 14V9C11.5 8.46957 11.2893 7.96086 10.9142 7.58579C10.5391 7.21071 10.0304 7 9.5 7H2.5ZM2.5 4C2.5 3.07174 2.86875 2.1815 3.52513 1.52513C4.1815 0.868749 5.07174 0.5 6 0.5C6.92826 0.5 7.8185 0.868749 8.47487 1.52513C9.13125 2.1815 9.5 3.07174 9.5 4V7H8.5V4C8.5 3.33696 8.23661 2.70107 7.76777 2.23223C7.29893 1.76339 6.66304 1.5 6 1.5C5.33696 1.5 4.70107 1.76339 4.23223 2.23223C3.76339 2.70107 3.5 3.33696 3.5 4V7H2.5V4Z"
          fill="black"
        />
      </svg>
      {{ text }}
    </button>
    <button v-if="type === 'back'" class="back-button" @click="$emit('click')">
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="back-arrow"
      >
        <path d="M2.50427 6L12.5043 6" stroke="#37A18B" stroke-width="1.5" />
        <path
          d="M5.80249 11L1.66388 6L5.80249 1"
          stroke="#37A18B"
          stroke-width="1.5"
        />
      </svg>
      {{ text }}
    </button>
    <button
      v-if="type === 'no-answer'"
      class="no-answer-button"
      @click="$emit('click')"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.41421 0.585786C2.63316 -0.195262 1.36684 -0.195262 0.585786 0.585786C-0.195262 1.36684 -0.195262 2.63316 0.585786 3.41421L3.41421 0.585786ZM15.5858 18.4142C16.3668 19.1953 17.6332 19.1953 18.4142 18.4142C19.1953 17.6332 19.1953 16.3668 18.4142 15.5858L15.5858 18.4142ZM9.5 9.5L8.08579 10.9142L9.5 9.5ZM18.4142 3.41421C19.1953 2.63316 19.1953 1.36684 18.4142 0.585786C17.6332 -0.195262 16.3668 -0.195262 15.5858 0.585786L18.4142 3.41421ZM0.585786 15.5858C-0.195262 16.3668 -0.195262 17.6332 0.585786 18.4142C1.36684 19.1953 2.63316 19.1953 3.41421 18.4142L0.585786 15.5858ZM0.585786 3.41421L8.08579 10.9142L10.9142 8.08579L3.41421 0.585786L0.585786 3.41421ZM8.08579 10.9142L15.5858 18.4142L18.4142 15.5858L10.9142 8.08579L8.08579 10.9142ZM10.9142 10.9142L18.4142 3.41421L15.5858 0.585786L8.08579 8.08579L10.9142 10.9142ZM15.5858 0.585786L0.585786 15.5858L3.41421 18.4142L18.4142 3.41421L15.5858 0.585786Z"
          fill="#BCBCBC"
        />
      </svg>

      {{ text }}
    </button>
    <button
      v-if="type === 'finish-edit'"
      class="finish-edit-button"
      @click="$emit('click')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
/*
 * Responsibilities of component
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class SinpexButton extends Vue {
  // interface
  @Prop({ required: true }) text!: string;

  @Prop({ required: false, default: 'primary' }) type!: string;

  // state
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';

.primary-button {
  background: #37a18b;
  border-radius: 12px;
  border: none;
  color: white;
  width: 100%;
}
.primary-button:hover {
  background-color: #3db69d;
}
.primary-button:active {
  background-color: #3db69d;
  opacity: 0.8;
}

.secondary-button {
  background: #9b9b9b;
  border-radius: 8px;
  border: none;
  color: white;
  width: 100%;
  padding: 7px 15px;
  font-size: 14px;
}
.secondary-button:hover {
  background: #4a4a4a;
}

.lock-button {
  background: #f7f7f7;
  border-radius: 5px;
  border: none;
  color: grey;
  width: 100%;
}
.no-answer-button {
  background: white;
  border-radius: 12px;
  border: 2px solid #f7f7f7;
  color: grey;
  padding: 8px;
}
.no-answer-button:hover {
  border-color: $--red;
}
.back-button {
  border-radius: 5px;
  border: none;
  color: #37a18b;
  width: 100%;
  height: 100%;
}
.back-button:hover {
  color: #3db69d;
}

.finish-edit-button {
  background-color: $--color-primary;
  color: white;
  font-size: 18px;
  font-weight: 800;
  height: 68px;
  width: 300px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid $--color-primary;
}

.finish-edit-button:hover {
  box-shadow: 0 0 0 2px $--color-primary, 0 0 0 2px $--color-primary;
}
</style>
