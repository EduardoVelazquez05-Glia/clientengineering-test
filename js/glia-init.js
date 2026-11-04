window.addEventListener('load', () => {
  if (window.sm) {
    sm.getApi({ version: 'v1' })
      .then((glia) => {
        // Expose globally for console testing & on-page UI triggers
        window.glia = glia;
        console.log("%c Glia SDK Ready ", "background: #1e40af; color: white; padding: 4px; border-radius: 4px;");
      })
      .catch((err) => {
        console.error("Glia initialization failed:", err);
      });
  }
});
