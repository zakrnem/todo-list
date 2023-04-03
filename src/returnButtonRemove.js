export function removeReturnButton() {
    let sidebar = document.querySelector('.sidebar')
    let returnButton = document.querySelector('#returnB1')
    if (returnButton != null) {
        sidebar.removeChild(returnButton)
    }
}