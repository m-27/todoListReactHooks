(this.webpackJsonptodo_list_react_hooks=this.webpackJsonptodo_list_react_hooks||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),l=a.n(o),i=(a(13),a(1)),s=a(5),r=a(3);a(14),a(15);var m=function(e){var t=e.addTask,a=e.lastId,o=Object(n.useState)({id:0,item:"",completed:!1}),l=Object(r.a)(o,2),s=l[0],m=l[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),p=u[0],f=u[1];return c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("form",{"data-testid":"form",className:"col-11 col-sm-10 col-md-7 col-lg-5 mb-5 needs-validation ".concat(p),onSubmit:function(e){if(e.preventDefault(),s.item.trim()){var a=s.id+1;t(a,s),m(Object(i.a)({},s,{item:""})),f("")}else f("was-validated")},action:"",noValidate:!0},c.a.createElement("div",{className:"input-group input-group-lg"},c.a.createElement("input",{type:"text",name:"newTask",value:s.item,className:"form-control",placeholder:"Enter text ...",id:"todo",required:!0,onChange:function(e){m(Object(i.a)({},s,{item:e.target.value,id:a}))}}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{id:"submit_btn",type:"submit",className:"btn btn-primary"},"Add")),p?c.a.createElement("div",{className:"invalid-feedback"},"Please fill out this field."):null)))},d=c.a.memo((function(e){var t=e.task,a=e.setCompleted,n=e.deleteTask;return c.a.createElement("li",{className:"input-group mb-3",id:t.id},c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",id:"customCheck_".concat(t.id),className:"custom-control-input",checked:t.completed,onChange:function(){return a(t.id)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck_".concat(t.id)},"\xa0")),c.a.createElement("input",{type:"text",className:"form-control ".concat(t.completed?"completed":""),value:t.item,readOnly:!0}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-danger input-group-text",onClick:function(){return n(t.id)}},"X")))})),u=function(e){var t=e.list,a=e.setCompleted,n=e.deleteTask;return c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("ul",{id:"todoList",className:"list-group col-11 col-sm-10 col-md-7 col-lg-5"},t&&t.map((function(e){return c.a.createElement(d,{key:e.id,task:e,deleteTask:n,setCompleted:a})}))))};var p=function(){var e=Object(n.useState)({lastId:1,list:[]}),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoList"));e&&e.list&&o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(a))}),[a]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h1",{className:"h2 mb-5 text-center"},"ToDo List with React Hooks"),c.a.createElement(m,{lastId:a.lastId,addTask:function(e,t){o({lastId:e,list:[t].concat(Object(s.a)(a.list))})}}),c.a.createElement(u,{list:a.list,deleteTask:function(e){var t=a.list.filter((function(t){return t.id!==e}));o(Object(i.a)({},a,{list:Object(s.a)(t)}))},setCompleted:function(e){var t=a.list.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));o(Object(i.a)({},a,{list:Object(s.a)(t)}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.fb8e7e03.chunk.js.map