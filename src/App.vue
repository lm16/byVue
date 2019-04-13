<template>
  <div id="app">
    <div id="task">
      <ul>
        <li><router-link to="/cant">不行</router-link></li>
        <li><router-link to="/helloWorld">lm16(默认)</router-link></li>
        <li><router-link to="/axios">json来了</router-link></li>
      </ul>
    </div>
    <div id="window">
      <router-view/>
    </div>
  </div>
</template>
<style>
  a{
    text-decoration: none;
  }
  a.router-link-active{
    background-color: lightGray;
  }
  div#task a{
    display: block;
  }
  div#task{
    float: left;
    border: 1px solid gray;
  }
  div#window{
    margin-left: 100px;
  }
  div#app{
    width: 500px;
    margin: 10px auto;
    padding: 10px;
  }
</style>
