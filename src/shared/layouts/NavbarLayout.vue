<template>
    <div class="navbar-layout">
      <vs-navbar square center-collapsed v-model="active" width="100%" height="62px" class="navbar">
        <template #left>
          <router-link to="/">
            <img src="@/assets/sinpex_logo.png" alt="" height="23px" width="57px">
          </router-link>
          <div class="nav-menu">
            <vs-navbar-item :active="active == 'guide'" id="guide" to="/">
            Users
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs" to="/todos">
            Todos
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components" to="/statistics">
            Statistics
            </vs-navbar-item>
          </div>
        </template>
        <template #right>
          <i></i>
          <img src="@/assets/clarity_settings-solid.png" alt="clarity_settings-solid">
        </template>
      </vs-navbar>
    </div>
  </template>

    <script>
  export default {
    data:() => ({
      active: 'guide'
    })
  }
  </script>

  <style lang="scss" scoped>
.navbar {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

  .nav-menu {
      margin: 0 80px;
      & > * {
       padding: 0 20px;   
      }

  }
}
  </style>