# vue-search-select

A Vue.js Year Month select component.

+ Dependency only vue.js & [moment](http://momentjs.com/)
+ Design css copy from <https://github.com/Semantic-Org/UI-Dropdown>

# Demo

<http://moreta.github.io/vue-ym-picker/>

# Usage

## Install

```bash
npm install --save vue-ym-picker
```

# Usage

```html
<template>
  <div style="width: 500px;">
    <div>
      <div>{{ym}}</div>
    </div>
    <div style="height: 50px;"></div>
    <div>
      <select-ym :on-select="onSelectItem"></select-ym>
    </div>
  </div>


</template>

<script>
  import VueYmPicker from 'vue-ym-picker'
  export default {
    data () {
      return {
        ym: ''
      }
    },
    methods: {
      onSelectItem (ym) {
        console.log(ym)
        this.ym = ym
      }
    },
    components: {
      'select-ym': VueYmPicker
    }
  }
</script>
```

# Run examples

```bash
cd examples

# install dependencies
npm install

# serve with hot reload at localhost:9090
npm run dev
```
