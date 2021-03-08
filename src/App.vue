<template>
  <v-app>
    <v-container>
      <!-- 검색바 -->
      <search-bar />
      <!-- 영화 목록 -->
      <movie-list/>
    </v-container>
  </v-app>
</template>

<script>
  import SearchBar from '@/components/SearchBar'
  import MovieList from '@/components/MovieList'

  export default {
    components: {
      SearchBar,
      MovieList
    }
  }
</script>
