<template>
  <section id="capacity" class="capacity">
    <div class="container-section">
      <h2 class="section-title capacity__title">Производственные мощности</h2>

      <div class="capacity__stats">
        <article v-for="stat in stats" :key="stat.label" class="capacity__stat-card">
          <span class="capacity__stat-value">{{ stat.value }}</span>
          <span class="capacity__stat-label">{{ stat.label }}</span>
        </article>
      </div>

        <div class="capacity__park">
        <h3>Станочный парк</h3>
        <div class="capacity__carousel" @mouseenter="paused = true" @mouseleave="paused = false">
            <div :class="['capacity__track', 'marquee-track', { 'marquee-paused': paused }]">
            <article v-for="machine in duplicatedMachines" :key="machine.uid" class="capacity__machine">
              <div class="capacity__machine-image" :style="{ backgroundImage: `url(${machine.image})` }" />
              <span class="capacity__machine-title">{{ machine.title }}</span>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const stats = [
  { value: '650 т', label: 'Литья в год' },
  { value: '244 000', label: 'Станко-часов' },
  { value: '140', label: 'Единиц станков' }
]

const machines = [
  {
    title: 'Токарные',
    image: 'https://fenixcnc.ru/images/wss/articles/2022/02/41-orden-cherepakhi-pochemu-sssr-byl-liderom-v-metalloobrabotke-i-samye-izvestnye-tokarnye-stanki-po-metallu.jpg'
  },
  { title: 'Фрезерные', image: 'https://api.cabinet.smart-market.uz/uploads/images/ff8081815fd38e694c1d5e64' },
  {
    title: 'Шлифовальные',
    image: 'https://www.smsm.ru/upload/ammina.optimizer/jpg-webp/q80/articles/Poverhnostno-shlifovalnyj%20stanok.webp'
  },
  { title: 'Сверлильные', image: 'https://uzstanex.uz/wp-content/uploads/2017/06/00006647-600x450.jpg' },
  { title: 'Расточные', image: 'https://www.stanki-snab.ru/cache/images/original_ic/public/modules/gr90.5089545c.png' },
  { title: 'Отрезные', image: 'https://www.stanki.ru/upload/iblock/e5d/r7c35a4m8qqawxg39hnui86soo2ah15a.jpg' }
]

const paused = ref(false)

const duplicatedMachines = computed(() =>
  [...machines, ...machines].map((entry, index) => ({ ...entry, uid: `${entry.title}-${index}` }))
)
</script>

<style scoped>
.capacity {
  padding-block: clamp(5rem, 11vw, 6.5rem);
  background: #fff;
}

.capacity__title {
  text-align: center;
}

.capacity__stats {
  display: grid;
  gap: 1.5rem;
  margin-top: clamp(2.5rem, 7vw, 3rem);
}

.capacity__stat-card {
  border-radius: 1.2rem;
  border: 1px solid var(--color-neutral-200);
  padding: clamp(1.6rem, 4vw, 2rem);
  text-align: center;
  background: #fff;
  box-shadow: 0 16px 40px rgba(26, 26, 26, 0.08);
}

.capacity__stat-value {
  display: block;
  font-size: clamp(2rem, 5vw, 2.4rem);
  font-weight: 700;
  color: var(--color-copper);
}

.capacity__stat-label {
  display: block;
  margin-top: 0.6rem;
  font-size: 1rem;
  color: #1f1f1f;
}

.capacity__park {
  margin-top: clamp(2.5rem, 7vw, 3.5rem);
  border-radius: 1.5rem;
  border: 1px solid var(--color-neutral-200);
  background: var(--color-neutral-100);
  padding: clamp(1.75rem, 4vw, 2.1rem);
}

.capacity__park h3 {
  margin: 0;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
}

.capacity__carousel {
  margin-top: clamp(1.5rem, 4vw, 2rem);
  overflow: hidden;
}

.capacity__track {
  display: flex;
  gap: 1.25rem;
  animation-duration: 26s;
}

.capacity__machine {
  min-width: clamp(150px, 28vw, 190px);
  max-width: clamp(150px, 28vw, 190px);
  border-radius: 1rem;
  background: #fff;
  border: 1px solid rgba(212, 212, 216, 0.8);
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(20, 20, 20, 0.08);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.capacity__machine:hover {
  transform: translateY(-4px);
  border-color: rgba(199, 97, 39, 0.8);
}

.capacity__machine-image {
  height: clamp(110px, 22vw, 140px);
  background-size: cover;
  background-position: center;
}

.capacity__machine-title {
  display: block;
  padding: 0.7rem 1rem;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1f1f1f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 768px) {
  .capacity__stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
