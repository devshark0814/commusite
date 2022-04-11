<template>
  <v-app>
    <v-app-bar app color="primary" class="white--text">
      <v-toolbar-title>CommuSite</v-toolbar-title>
      <v-spacer/>
      <v-bottom-navigation
        :value="value"
        color="yellow"
        background-color="primary"
        grow
        dark
        width=500
        style="box-shadow: none"
      >
        <v-btn v-for="(menu ,i) in menus" :key="i" :to="menu.route">
          <span class="pt-2">{{ menu.text }}</span>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      value: 1,

      menus : [
        { text: 'ダッシュボード', icon: 'fa-solid fa-house', route: '/' },
        { text: '作成', icon: 'fa-solid fa-square-plus', route: '/create' },
        { text: '一覧', icon: 'fa-solid fa-list', route: '/list' },
        { text: '設定', icon: 'fa-solid fa-gear', route: '/settings' },
      ]
    }
  }
}
</script>