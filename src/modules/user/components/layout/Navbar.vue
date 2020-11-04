<template>
    <div class="center examplex">
      <vs-navbar center-collapsed v-model="active">
        <template #left>
          <img src="@/assets/sinpex_logo.png" alt="" height="23px" width="57px">
            <vs-navbar-item :active="active == 'guide'" id="guide">
            Users
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs">
            Todos
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">
            Statistics
            </vs-navbar-item>
        </template>
        <template #right>
          <!-- <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button> -->
          <i></i>
        </template>
      </vs-navbar>
      <div class="square">
        <div class="child">
          child 1
        </div>
        <div class="child">
          child 2
        </div>
        <div class="child">
          child 3
        </div>
      </div>
    </div>
  </template>

    <script>
  export default {
    data:() => ({
      active: 'guide'
    })
  }
  </script>