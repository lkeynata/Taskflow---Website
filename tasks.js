import {tasks,replaceTasks} from './data.js';
export const getTasks=()=>[...tasks].sort((a,b)=>a.deadline.localeCompare(b.deadline));
export const addTask=({title,course,deadline,priority})=>{const id=tasks.length?Math.max(...tasks.map(({id})=>id))+1:1;const task={id,title:title.trim(),course:course.trim(),deadline,status:'Belum Selesai',priority};replaceTasks([...tasks,task]);return task;};
export const updateTask=(id,changes)=>{if(!tasks.some(t=>t.id===id))return null;const next=tasks.map(t=>t.id===id?{...t,...changes,id:t.id}:t);replaceTasks(next);return next.find(t=>t.id===id);};
export const deleteTask=(id)=>{const task=tasks.find(t=>t.id===id);if(!task)return null;replaceTasks(tasks.filter(t=>t.id!==id));return task;};
export const getStats=()=>{const total=tasks.length,completed=tasks.filter(({status})=>status==='Selesai').length;return {total,completed,pending:total-completed,rate:total?Math.round(completed/total*100):0};};
