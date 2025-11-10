<template>
  <section id="hero" class="hero">
    <div class="hero__overlay" />

    <div class="container-section hero__content">
      <span class="hero__badge">Metallurgiya Servis Markazi</span>
      <h1 class="hero__title">ООО «Металлургия Сервис Маркази» — производство, ремонт и литьё для металлургии</h1>
      <p class="hero__subtitle">Предприятие с полным технологическим циклом — от литья до готовых деталей.</p>

      <div class="hero__actions">
        <a class="btn-primary hero__button" href="#contact">Связаться с нами</a>
        <a class="hero__secondary" href="#services">Запросить прайс</a>
      </div>
    </div>

    <div class="hero__gradient" />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 80vh;
  display: grid;
  place-items: center;
  padding-block: clamp(5rem, 12vw, 8rem);
  background-image: url('https://www.uzbeksteel.uz/storage/images/1732174594.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  overflow: hidden;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.58);
  pointer-events: none;
  z-index: 0;
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 960px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 5vw, 3.75rem);
  font-weight: 600;
  line-height: 1.15;
  margin: 0;
}

.hero__subtitle {
  color: var(--color-steel);
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  margin-top: 1.25rem;
  margin-bottom: 0;
}

.hero__actions {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.hero__button {
  width: min(100%, 320px);
}

.hero__secondary {
  width: min(100%, 320px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.7rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.88);
  color: #161616;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.hero__secondary:hover {
  background: #fff;
  color: var(--color-copper);
}

.hero__gradient {
  position: absolute;
  inset: auto 0 0;
  height: clamp(100px, 18vh, 180px);
  background: linear-gradient(0deg, rgba(30, 30, 30, 0.9) 0%, rgba(30, 30, 30, 0) 100%);
  pointer-events: none;
}

@media (min-width: 640px) {
  .hero__actions {
    flex-direction: row;
    justify-content: center;
  }

  .hero__button,
  .hero__secondary {
    width: auto;
  }
}
</style>
