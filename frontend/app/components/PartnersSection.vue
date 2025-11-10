<template>
  <section id="partners" class="partners">
    <div class="container-section">
      <div class="partners__card" @mouseenter="paused = true" @mouseleave="paused = false">
        <h2 class="section-title partners__title">Партнёры и клиенты</h2>

        <div class="partners__carousel">
          <div :class="['partners__track', 'marquee-track', { 'marquee-paused': paused }]">
            <article v-for="partner in duplicatedPartners" :key="partner.uid" class="partners__item">
              <div class="partners__logo" :style="{ backgroundImage: `url(${partner.logo})` }" />
              <span class="partners__name">{{ partner.name }}</span>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const partners = [
  { name: 'Uzmetkombinat', logo: 'https://www.uzbeksteel.eu/wp-content/uploads/2022/07/Uzmetkombinat-logo_Europe-trading-house-1-2.png' },
  { name: 'UzmilliBank', logo: 'https://openinfo.uz/media/organization_logos/nbu.png' },
  { name: 'TransLogix', logo: 'https://iconape.com/wp-content/files/dp/299224/png/299224.png' },
  { name: 'AsiaConstruct', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4hjLnV7njAAOqVc4-2d4yY9Q7eWhqgtmuA&s' },
  { name: 'PowerTech', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgffk43G0bv7xxPpwtnaeX_H_MbNAd4zrR0g&s' },
  { name: 'AgroMash', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ztvZ6jWAAaez3fpK66e68d4lc1hH3FcgyA&s' }
]

const paused = ref(false)

const duplicatedPartners = computed(() =>
  [...partners, ...partners].map((entry, index) => ({ ...entry, uid: `${entry.name}-${index}` }))
)
</script>

<style scoped>
.partners {
  padding-block: clamp(4rem, 9vw, 5.5rem);
  background: #fff;
}

.partners__card {
  border-radius: 1.7rem;
  border: 1px solid rgba(228, 228, 231, 0.8);
  background: var(--color-neutral-100);
  padding: clamp(2rem, 5vw, 2.6rem);
  box-shadow: 0 20px 50px rgba(20, 20, 20, 0.08);
  overflow: hidden;
}

.partners__title {
  text-align: center;
}

.partners__carousel {
  margin-top: clamp(2rem, 5vw, 2.8rem);
  overflow: hidden;
}

.partners__track {
  display: flex;
  gap: 1.8rem;
  animation-duration: 28s;
}

.partners__item {
  min-width: clamp(150px, 25vw, 190px);
  max-width: clamp(150px, 25vw, 190px);
  border-radius: 1rem;
  border: 1px solid rgba(212, 212, 216, 0.85);
  background: #fff;
  padding: clamp(1rem, 3vw, 1.4rem);
  display: grid;
  gap: 0.8rem;
  box-shadow: 0 12px 30px rgba(15, 15, 15, 0.08);
  transition: transform 0.25s ease, border-color 0.2s ease;
}

.partners__item:hover {
  transform: translateY(-5px);
  border-color: rgba(199, 97, 39, 0.8);
}

.partners__logo {
  height: clamp(70px, 15vw, 90px);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.partners__name {
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: #111;
}
</style>
