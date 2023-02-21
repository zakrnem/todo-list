import './style.css';

import { headerDOM } from "./header"
headerDOM()

import { sidebarDOM } from "./sidebar"
sidebarDOM()

import { addTaskListener } from "./taskAddListener"
addTaskListener()

import { removeTaskListener } from './taskRemoveListener'
removeTaskListener()

import { toggleTaskDetail } from './taskToggleDetail'
toggleTaskDetail()

import { storeTaskListener } from './taskStoreInput';
storeTaskListener()