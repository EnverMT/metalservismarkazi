<template>
  <footer class="footer">
    <div class="container-section footer__inner">
      <div class="footer__col">
        <span class="footer__copyright">
          © {{ currentYear }} ООО «Металлургия Сервис Маркази»
        </span>
        <span class="footer__subtitle">Дочернее предприятие АО «Узметкомбинат»</span>
      </div>

      <div class="footer__col">
        <h4>Реквизиты</h4>
        <ul>
          <li>ИНН: 312100826</li>
          <li>МФО: 00450</li>
          <li>Расчётный счёт: АО «Узмиллийбанк»</li>
        </ul>
      </div>

      <div class="footer__col">
        <h4>Материалы</h4>
        <ul>
          <li><a href="#">PDF-презентация (RU)</a></li>
          <li><a href="#">PDF Presentation (EN)</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4>Соцсети</h4>
        <div class="footer__links">
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Telegram</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-neutral-100);
  border-top: 1px solid var(--color-neutral-300);
  padding-block: clamp(2.5rem, 6vw, 3rem);
}

.footer__inner {
  display: grid;
  gap: 2rem;
}

.footer__col h4 {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #111;
}

.footer__col ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.5rem;
  color: #1f1f1f;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.footer__links a,
.footer__col a {
  color: #1f1f1f;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer__links a:hover,
.footer__col a:hover {
  color: var(--color-copper);
}

.footer__copyright,
.footer__subtitle {
  display: block;
  color: #1f1f1f;
  font-size: 0.95rem;
}

.footer__subtitle {
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .footer__inner {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: flex-start;
  }
}
</style>
