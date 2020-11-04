<template>
  <div class="d-flex flex-row w-100 vh-100 overflow-hidden">
    <!-- <navbar class="navbar-sinpex" />-->
    <div
      :class="{
        'overflow-auto': true,
        'main-content': true,
      }"
      style="padding: 50px; padding-top: 0px"
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Routes } from '../../routing/Routes';

@Component({
  components: {},
})
export default class NavbarLayout extends Vue {
  changeToHome() {
    this.$router.push('/');
  }
}
</script>

<style scoped lang="scss">
@import 'src/styles/colors';
</style>
