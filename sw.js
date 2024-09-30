<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
      .then((reg) => {
        console.log('Service Worker registered', reg);
      }).catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
    });
  }
</script>
