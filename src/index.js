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

import { storeTaskInput } from './storeTaskInput';
storeTaskInput()