import './style.css';

import { headerDOM } from "./header"
headerDOM()

import { sidebarDOM } from "./sidebar"
sidebarDOM()

import { addTaskListener } from "./addTaskListener"
addTaskListener()

import { removeTaskListener } from './removeTaskListener'
removeTaskListener()

import { toggleTaskDetail } from './toggleTaskDetail'
toggleTaskDetail()

function dashboardDOM() {
    let content = document.querySelector('#content')

    let dashboard = document.createElement('div')
    dashboard.className = 'dashboard'

    content.appendChild(dashboard)
}

