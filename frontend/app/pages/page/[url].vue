<template>
  <div class="container-section">
    <h1 class="section-title">{{ page?.data?.title }}</h1>
    <div v-html="page?.data?.content"></div>
  </div>
</template>

<script setup lang="ts">
const url = useRoute().params.url as string;
const currentLocale = useState<string>("locale", () => "ru");

const { data: page } = await useAsyncData(
  `page-${url}-${currentLocale.value}`,
  () => strapi.getPage(url, currentLocale.value),
  {
    watch: [currentLocale],
  }
);
</script>
