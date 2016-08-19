<!-- css copy from https://github.com/Semantic-Org/UI-Dropdown/blob/master/dropdown.css -->
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
  import VueYmPicker from '../../../../src/components/YmPicker.vue'
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
