export function clearDOM() {
    let dashboard = document.querySelector('.dashboard')
    if (dashboard != null) {
        dashboard.removeChild(dashboard.firstElementChild)
    }
    
    let sidebar = document.querySelector('.sidebar')
    let returnButton = document.querySelector('[id*="return"]')
    if (returnButton != null) {
        sidebar.removeChild(returnButton)
    }

    let footer = document.querySelector('footer')
    let footerParent = footer.parentElement
    footerParent.removeChild(footer)
}