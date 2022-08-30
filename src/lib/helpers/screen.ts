export function goFullScreen(temp: string) {
  var elem = document.getElementById(temp)
  if (!elem) return

  elem.requestFullscreen()
}

export function exitFullScreen() {
  document.exitFullscreen()
}

export const back = () => window.history.back()
