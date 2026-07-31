export function applyImageFallback(event, fallback = '/images/logos/image-placeholder.svg') {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === 'true') {
    return;
  }

  image.dataset.fallbackApplied = 'true';
  image.src = fallback;
}
