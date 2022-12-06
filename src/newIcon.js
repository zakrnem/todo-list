export function newIcon(className, id, imgSrc, iconClass, buttonText) {
    let newButton = document.createElement('button')
    newButton.className = className
    newButton.id = id
    newButton.textContent = buttonText
    let newIcon = document.createElement('img')
    newIcon.src = `./img/${imgSrc}`
    newIcon.className = iconClass
    newButton.appendChild(newIcon)
    
    return newButton
}