<template>
  <div v-if="width > 800" id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
  <div v-else class="mt-4 text-center">
    Mobile screens are not yet supported.
    <br />Please open Sinpex on desktop.
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Provide, Vue } from 'vue-property-decorator';
import { Modules } from '@/store/Modules';
import { createUserModule } from '@/modules/user/store/createUserModule';
import { UserApi } from '@/modules/user/api/UserApi';
import Navbar from '@/modules/user/components/layout/Navbar.vue';

@Component({ components: { Navbar } })
export default class App extends Vue {
  @Provide(Modules.USER_MODULE)
  private userModule = createUserModule(this.$store, new UserApi(axios));

  get width() {
    return window.innerWidth;
  }

  beforeDestroy() {
    // destroying child modules
    const modules = [Modules.USER_MODULE];

    modules.forEach((m) => {
      this.$store.unregisterModule(m);
      try {
        this.$store.unregisterModule(`${m}_base`);
      } catch (e) {
        console.log(e);
      }
    });
  }
}
</script>

<style>
.body {
  margin: 0px 0px !important;
  width: 100%;
}
</style>
