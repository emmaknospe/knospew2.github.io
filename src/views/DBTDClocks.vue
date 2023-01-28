<script lang="ts">
      import Clock from "../components/Clock.vue"

      export default{
          data() {
              return{
                  clocks: []
              }
          },
          methods: {
            async getData() {
              const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:eyXtWEG6/clocks");
              this.clocks = await res.json();
            }
          },
          computed: {
            visibleClocks() {
              return this.clocks.filter(function(clock) {
                return clock.visible;
              })
            }
          },
          components: {
              Clock
          },
          mounted() {
            this.getData()
          }
      }
      
</script>
<template>
  <main>
    <h2>DBTD Clocks</h2>
    <Clock 
    v-for="clock in visibleClocks"
    :key="clock.name" 
    :name="clock.name" 
    :descr="clock.descr" 
    :max="clock.max" 
    :last_recorded_value="clock.last_recorded_value"
    :value="clock.value"
    :max_resolve="clock.max_resolve"
    :min_resolve="clock.min_resolve"
    :visible="clock.visible"/>
  </main>
</template>

<style>

</style>
