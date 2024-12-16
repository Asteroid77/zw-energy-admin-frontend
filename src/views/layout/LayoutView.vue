<script lang="tsx" setup>
import { RouterView } from 'vue-router'
import LoadingBar from '@/components/layout/LoadingBar'
import NewsBar from '@/components/layout/NewsBar'
import clsx from 'clsx'
</script>
<template>
  <div :class="clsx('layout', 'flex', 'flex-col')">
    <LoadingBar></LoadingBar>
    <NewsBar></NewsBar>
    <RouterView />
  </div>
</template>
<style lang="scss">
@import url('@/styles/layout.scss');
</style>
