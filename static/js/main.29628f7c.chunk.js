(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s,n=c(4),o=c.n(n),r=c(2),i=c(1),a=c.n(i),d=(c(9),c(10),c(11),c(12),function(e,t){return fetch("".concat("https://mate.academy/students-api").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}),l=c(0);!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var u=a.a.createContext({todos:[],setTodos:function(){},todoTitle:"",setTodoTitle:function(){},todoStatus:s.all,setTodoStatus:function(){}}),j=function(e){var t=e.children,c=Object(i.useState)([]),n=Object(r.a)(c,2),o=n[0],a=n[1],j=Object(i.useState)(""),b=Object(r.a)(j,2),m=b[0],O=b[1],f=Object(i.useState)(s.all),h=Object(r.a)(f,2),p=h[0],_=h[1];Object(i.useEffect)((function(){d("/todos").then((function(e){return a(e)}))}),[]);var v=Object(i.useMemo)((function(){return{todos:o,setTodos:a,todoTitle:m,setTodoTitle:O,todoStatus:p,setTodoStatus:_}}),[o,m,p]);return Object(l.jsx)(u.Provider,{value:v,children:t})},b=Object(i.memo)((function(e){var t=e.selectedUserId,c=e.setSelectedUserId,n=Object(i.useContext)(u),o=n.todos,r=n.todoStatus,a=n.setTodoStatus,d=n.todoTitle,j=n.setTodoTitle,b=function(e){var t=e.target,c=t.value;switch(t.name){case"todos-status-selector":a(c);break;case"todos-title-input":j(c)}},m=Object(i.useMemo)((function(){return o.filter((function(e){var t=e.title.toLowerCase(),c=d.toLowerCase();return t.includes(c)&&function(t){switch(t){case s.active:return!1===e.completed;case s.completed:return!0===e.completed;default:return!0}}(r)}))}),[d,r,o]);return Object(i.useEffect)((function(){}),[d,r]),Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsxs)("div",{className:"TodoList__list-container",children:[Object(l.jsxs)("form",{className:"TodoList__form form",children:[Object(l.jsx)("input",{type:"text",id:"todos-title-input",name:"todos-title-input",className:"form__title-input",value:d,onChange:b}),Object(l.jsx)("select",{id:"todos-status-selector",name:"todos-status-selector",className:"form__status-selector",value:r,onChange:b,children:Object.keys(s).map((function(e){return Object(l.jsx)("option",{value:e,children:e})}))})]}),Object(l.jsx)("ul",{className:"TodoList__list",children:m.map((function(e){return Object(l.jsxs)("li",{className:"TodoList__item TodoList__item--".concat(e.completed?"checked":"unchecked"),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(l.jsx)("p",{children:e.title})]}),Object(l.jsx)("button",{className:"TodoList__user-button button "+"TodoList__user-button--".concat(e.userId===t&&"selected"),type:"button",onClick:function(){return c(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})]})]})})),m=(c(14),Object(i.memo)((function(e){var t=e.selectedUserId,c=e.setSelectedUserId,s=Object(i.useState)(null),n=Object(r.a)(s,2),o=n[0],a=n[1];return Object(i.useEffect)((function(){var e;(e=t,d("/users/".concat(e))).then((function(e){return a(e)}))}),[t,c]),Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"Selected user: ".concat(null===o||void 0===o?void 0:o.id)})}),Object(l.jsx)("h3",{className:"CurrentUser__name",children:null===o||void 0===o?void 0:o.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:null===o||void 0===o?void 0:o.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:null===o||void 0===o?void 0:o.phone}),Object(l.jsx)("button",{className:" CurrentUser__clear button ",type:"button",onClick:function(){return c(0)},children:"Clear"})]})}))),O=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(l.jsx)(j,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(b,{selectedUserId:c,setSelectedUserId:s})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(m,{selectedUserId:c,setSelectedUserId:s}):"No user selected"})})]})})};o.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.29628f7c.chunk.js.map