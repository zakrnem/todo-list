import './style.css';
import { newTask } from "./newTask.js";
import { newIcon } from "./newIcon.js"

import { headerDOM } from "./header.js"
headerDOM()

import { sidebarDOM } from "./sidebar.js"
sidebarDOM()

import { taskEdit } from "./taskEdit.js"
taskEdit()

function dashboardDOM() {
    let content = document.querySelector('#content')

    let dashboard = document.createElement('div')
    dashboard.className = 'dashboard'

    content.appendChild(dashboard)
}

