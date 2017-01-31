<template>
  <div class="ui container">
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


<style>
  html {
    font-size: 14px;
  }
  body {
    font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 13px;
    line-height: 1.42857143;
    color: #777777;
    background-color: #fcfcfc;
  }
</style>
<style scoped src="semantic-ui-css/semantic.css"></style>
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
