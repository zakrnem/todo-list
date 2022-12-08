import './style.css';
import { newTask } from "./newTask.js";
import { newIcon } from "./newIcon.js"

import { headerDOM } from "./header.js"
headerDOM()

import { sidebarDOM } from "./sidebar.js"
sidebarDOM()

import { addTaskListener } from "./addTaskListener"
addTaskListener()

import { removeTaskListener } from './removeTaskListener'
removeTaskListener()

import { hideTaskDetailListener} from './hideDetailListener'
hideTaskDetailListener()

function dashboardDOM() {
    let content = document.querySelector('#content')

    let dashboard = document.createElement('div')
    dashboard.className = 'dashboard'

    content.appendChild(dashboard)
}

