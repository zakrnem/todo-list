export function removeReturnButton() {
    let sidebar = document.querySelector('.sidebar')
    let returnButton = document.querySelector('[id*="return"]')
    if (returnButton != null) {
        sidebar.removeChild(returnButton)
    }
}