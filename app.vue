<template>
  <div>
    <NuxtPwaManifest />
    <NuxtPage />
  </div>
</template>

<script setup>
  const { $pwa } = useNuxtApp()

  useHead({
    title: 'Phoenix Digital',
    meta: [
      { name: 'description', content: 'The Perfect Tech Experience.' }
      ],
  });

  useSeoMeta({
    title: 'Phoenix Digital',
    ogTitle: 'Phoenix Digital',
    description: 'Defining the Future of Tech.',
    ogDescription: 'Leading the Digital Revolution.',
    ogImage: 'https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.webp?b=1&s=170667a&w=0&k=20&c=BNF7gZ3XmCEf0_H8bUb6TLOvrDPVOmrEzbuu8FZrOao=',
    twitterCard: 'summary_large_image',
  })

  onMounted(() => {
    if ($pwa.offlineReady)
      confirm('App ready to work offline')
  })
</script>