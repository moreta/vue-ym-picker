<template>
  <div style="width: 500px;">
    <div>
      <div>SELECTED:</div>
      <div>{{ym}}</div>
    </div>
    <div style="height: 50px;"></div>
    
    <div>
      <select-ym @select="onSelect"></select-ym>
    </div>
    
    <div style="width: 200px;">
      <select-ym @select="onSelect"></select-ym>
    </div>
  </div>
</template>

<script>
  import { YmPicker } from '../lib'
  
  export default {
    data () {
      return {
        ym: ''
      }
    },
    methods: {
      onSelect (yearMonth) {
        console.log('onSelect')
        console.log(yearMonth)
        this.ym = yearMonth
      },
      onSelect2 (yearMonth) {
        console.log('onSelect')
        console.log(yearMonth)
        this.ym = yearMonth
      }
    },
    components: {
      'select-ym': YmPicker
    }
  }
</script>
