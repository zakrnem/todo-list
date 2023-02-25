import './style.css';

import { headerDOM } from "./header"
headerDOM()

import { sidebarDOM } from "./sidebarDOM"
sidebarDOM()

import { addTaskListener } from "./taskAddListener"
addTaskListener()

import { removeTaskListener } from './taskRemoveListener'
removeTaskListener()

import { toggleTaskDetail } from './taskToggleDetail'
toggleTaskDetail()

import { storeTaskListener } from './taskStoreInput';
storeTaskListener()

import { projectListener } from './projectListener';
projectListener()

import { projectDOM } from './projectDOM';
projectDOM()