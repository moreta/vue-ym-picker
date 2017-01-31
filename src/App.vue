<template>
  <div>
    <div class="column row">
      <img class="logo" src="./assets/logo.png">
    </div>
    <div class="flexbox">
      <div class="flex-menu">
        <div class="ui vertical menu">
          <div class="item">
            <div class="header">Basic</div>
            <div class="menu">
              <router-link :to="{ path: '/Basic' }" class="item">Basic</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped src="semantic-ui-grid/grid.css"></style>
<style scoped src="semantic-ui-menu/menu.css"></style>
<style scoped src="semantic-ui-table/table.css"></style>
<style scoped>
  .flexbox {
    display: flex;
  }
  .flex-menu {
    width: 250px;
  }
  .flex-content {
    flex-grow: 1;
  }
  .flex-result {
    min-width: 400px;
    width: 400px;
  }
  .flexbox > * {
    margin: 0 20px;
  }
</style>
