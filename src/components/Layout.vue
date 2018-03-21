<template>
  <div v-loading="isLoading" style="overflow: hidden;">
    <header>
      <router-view name="topheader" />
    </header>
    <main>
      <header>
        <router-view name="pageheader" />
      </header>
      <main>
        <keep-alive>
          <router-view />
        </keep-alive>
      </main>
      <footer >
        <router-view name="pagefooter" />
      </footer>
    </main>
    <footer>
      <router-view name="bottomfooter" />
    </footer>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Layout',
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapMutations(['generateUserInfoMutation'])
  },
  created () {
    console.log('Layout')
    this.generateUserInfoMutation()
  }
}
</script>
