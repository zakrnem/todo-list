export function clearDOM() {
    let dashboard = document.querySelector('.dashboard')
    dashboard.removeChild(dashboard.firstElementChild)
}