document.addEventListener('DOMContentLoaded', () => {
  const voidAnchors = Array.from(document.querySelectorAll('a[href="#'))
  if (voidAnchors.length > 0) {
    voidAnchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => e.preventDefault())
    })
  }
})
