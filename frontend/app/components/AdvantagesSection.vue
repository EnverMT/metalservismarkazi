<template>
  <section id="advantages" class="advantages">
    <div class="container-section">
      <h2 class="section-title advantages__title">Преимущества</h2>

      <div class="advantages__grid">
        <article v-for="advantage in advantages" :key="advantage.title" class="advantages__card">
          <span class="advantages__icon" v-html="advantage.icon" />
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
          <span class="advantages__indicator" />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const advantages = [
  {
    title: 'Собственная литейная база',
    description: 'Производство отливок из стали, чугуна и бронзы',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 16h.01" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M16 16h.01" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.77-.42l-4.46 2.84A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.77-.42L9.77 10.92A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M8 16h.01" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
  },
  {
    title: 'Опытный персонал',
    description: '541 сотрудник, профильные специалисты',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M16 3.13a4 4 0 0 1 0 7.74" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
  },
  {
    title: 'Современное оборудование',
    description: '140 единиц станков, 244 000 станко-часов',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15.7 6.3-2 2a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1c.32-.32.86-.22.98.22a6 6 0 0 1-8.26 7.06l-7.91 7.91a1 1 0 0 1-3-3l7.91-7.91a6 6 0 0 1 7.06-8.26c.44.12.54.66.22.98z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
  },
  {
    title: 'Контроль качества',
    description: 'ISO и внутренние стандарты',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21.8 10A10 10 0 1 1 17 3.34" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m9 11 3 3L22 4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
  },
  {
    title: 'Быстрая доставка',
    description: 'Собственная логистика и партнёры',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M15 18H9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="17" cy="18" r="2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="7" cy="18" r="2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
  }
]
</script>

<style scoped>
.advantages {
  padding-block: clamp(4.5rem, 10vw, 6rem);
  background: #fff;
}

.advantages__title {
  text-align: center;
}

.advantages__grid {
  margin-top: clamp(2.5rem, 7vw, 3rem);
  display: grid;
  gap: 1.5rem;
}

.advantages__card {
  position: relative;
  border-radius: 1.5rem;
  border: 1px solid rgba(228, 228, 231, 0.9);
  padding: clamp(1.5rem, 3.5vw, 2.2rem);
  background: #fff;
  box-shadow: 0 18px 48px rgba(15, 15, 15, 0.1);
  transition: transform 0.25s ease, border-color 0.2s ease, box-shadow 0.25s ease;
}

.advantages__card:hover {
  transform: translateY(-6px);
  border-color: rgba(199, 97, 39, 0.85);
  box-shadow: 0 32px 60px rgba(199, 97, 39, 0.22);
}

.advantages__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(3.2rem, 6vw, 3.8rem);
  height: clamp(3.2rem, 6vw, 3.8rem);
  border-radius: 1.1rem;
  background: rgba(199, 97, 39, 0.1);
  color: var(--color-copper);
  margin-bottom: 1.25rem;
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.advantages__card:hover .advantages__icon {
  transform: scale(1.08);
  background: rgba(199, 97, 39, 0.2);
}

.advantages__icon svg {
  width: clamp(1.5rem, 3vw, 1.75rem);
  height: clamp(1.5rem, 3vw, 1.75rem);
}

.advantages__card h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
}

.advantages__card p {
  margin: 0.8rem 0 0;
  color: var(--color-neutral-600);
  font-size: 0.96rem;
  line-height: 1.6;
}

.advantages__indicator {
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1rem;
  height: 3px;
  border-radius: 999px;
  background: rgba(199, 97, 39, 0.25);
  transition: background-color 0.25s ease, width 0.25s ease;
}

.advantages__card:hover .advantages__indicator {
  background: var(--color-copper);
}

@media (min-width: 768px) {
  .advantages__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .advantages__grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
