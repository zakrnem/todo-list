export function clearDOM() {
    let dashboard = document.querySelector('.dashboard')
    dashboard.removeChild(dashboard.firstElementChild)

    let footer = document.querySelector('footer')
    let footerParent = footer.parentElement
    footerParent.removeChild(footer)
}