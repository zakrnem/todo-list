import { newIcon } from "./newIcon";

export function sidebarDOM() {
    let content = document.querySelector('#content')

    let sidebar = document.createElement('div')
    sidebar.className = 'sidebar'

    let taskButton = newIcon('sidebar-button', 'add-task2',
    'plus-svgrepo-com.svg', 'sidebar-icon', 'New Task')
    sidebar.appendChild(taskButton)

    let upcomingButton = newIcon('sidebar-button', 'upcoming',
    'calendar-svgrepo-com.svg', 'sidebar-icon', 'Upcoming Tasks')
    sidebar.appendChild(upcomingButton)

    let projectsButton = newIcon('sidebar-button', 'project-button1',
    'stack-svgrepo-com.svg', 'sidebar-icon', 'Projects')
    sidebar.appendChild(projectsButton)
    
    let main = document.createElement('main')
    main.appendChild(sidebar)
    content.appendChild(main)
}