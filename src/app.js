import './style.css';

import { headerDOM } from "./header"
headerDOM()

import { sidebarDOM } from "./sidebarDOM"
sidebarDOM()

import { projectListener } from './projectListener';
projectListener()

import { taskListener } from './taskListener';
taskListener()