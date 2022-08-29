(this["webpackJsonpmy-junimo-client"]=this["webpackJsonpmy-junimo-client"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(26),i=n.n(c),s=(n(86),n(87),n(5)),o=n(7),l=n(120),d=n(36),u=n(37),j=n(64),h=n(63),b=n(68),m=(n(88),n(0)),O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,r=e.deleteAlert,c=e.id;return this.state.show||setTimeout((function(){r(c)}),300),Object(m.jsx)(b.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(b.a.Heading,{children:n}),Object(m.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(r.a.Component),p=n(33),x=n(116),g=n(50),f=n(11),v={color:"black",textDecoration:"none",fontSize:"24px"},y=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a.Link,{children:Object(m.jsx)(f.b,{to:"/",style:v,children:"Home"})}),Object(m.jsx)(p.a.Link,{children:Object(m.jsx)(f.b,{to:"/create-character",style:v,children:"Create"})}),Object(m.jsx)(p.a.Link,{children:Object(m.jsx)(f.b,{to:"change-password",style:v,children:"Change PW"})}),Object(m.jsx)(p.a.Link,{children:Object(m.jsx)(f.b,{to:"sign-out",style:v,children:"Exit"})})]}),w=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a.Link,{children:Object(m.jsx)(f.b,{to:"sign-up",style:v,children:"New"})}),Object(m.jsx)(p.a.Link,{children:Object(m.jsx)(f.b,{to:"sign-in",style:v,children:"Sign In"})})]}),C=function(e){var t=e.user;return Object(m.jsx)(g.a,{fixed:"bottom",variant:"light",expand:"md",children:Object(m.jsxs)(x.a,{className:"ui-container",style:{width:"fit-content"},children:[Object(m.jsx)(g.a.Brand,{children:Object(m.jsx)(f.b,{to:"/",style:v,children:Object(m.jsx)("img",{alt:"",src:"images/Junimo.gif",width:"50",height:"50",className:"d-inline-block align-top"})})}),Object(m.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsx)(p.a,{className:"ml-6",children:t?y:w})})]})})};function I(e){var t=e.user,n=e.children;return null!==t?n:Object(m.jsx)(o.a,{to:"/",replace:!0})}var S=n(117),_=n(80),k=function(e){var t=e.inventory,n=e.setMaterialId,a=e.setRecipeListShow,r=e.setRecipeId,c="/images/materials/"+t.material.material_image;return Object(m.jsxs)("div",{style:{padding:"10px"},onClick:function(){r(null),a(!1),n(t.id)},children:[Object(m.jsx)("img",{title:t.material.material_name,alt:t.material.material_name,className:"selector",src:c}),Object(m.jsx)("div",{style:{textAlign:"center"},children:t.amount})]})},L="<replace_with_deployed_api_url>",A="http://localhost:8000",E="localhost"===window.location.hostname?A:L,P=n(10),R=n.n(P),N=function(e,t,n){return R()({url:E+"/inventory/create/".concat(n),method:"POST",headers:{Authorization:"Token ".concat(e.token)},data:{material_id:t,character_id:n,amount:0}})},T=function(e){var t,n=e.user,r=e.character,c=e.invUpdated,i=e.setMaterialId,o=e.setRecipeListShow,l=e.setRecipeId,d=Object(a.useState)(null),u=Object(s.a)(d,2),j=u[0],h=u[1];return Object(a.useEffect)((function(){console.log("this is the character in inventory",r),function(e,t){return console.log("getCharacterInventory route was hit for character with id ".concat(t)),R()({url:E+"/inventory/".concat(t),method:"GET",headers:{Authorization:"Token ".concat(e.token)}})}(n,r.id).then((function(e){return e.data.inventory=e.data.inventory.sort((function(e,t){return e.material.id-t.material.id})),e})).then((function(e){return h(e.data.inventory)})).catch((function(e){return console.log(e)}))}),[r,c]),j&&(t=j.map((function(e,t){return Object(m.jsx)(k,{inventory:e,setMaterialId:i,setRecipeId:l,setRecipeListShow:o},t)}))),Object(m.jsxs)("div",{className:"ui-container m-3",children:[Object(m.jsxs)(S.a,{className:"mt-3",children:[Object(m.jsx)(_.a,{children:Object(m.jsx)("h3",{children:"Inventory"})}),Object(m.jsx)(_.a,{style:{textAlign:"center"},children:Object(m.jsx)("button",{onClick:function(){i(null),l(null),o((function(e){return!e}))},style:{alignSelf:"center"},children:"Show Recipes"})})]}),Object(m.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",height:"300px",overflow:"scroll"},children:t})]})},M=function(e){var t,n,a=e.character;switch(a.pet_image){case"C1":default:t="Cat_1.png";break;case"C2":t="Cat_2.png";break;case"C3":t="Cat_3.png";break;case"D1":t="Dog_1.png";break;case"D2":t="Dog_2.png";break;case"D3":t="Dog_3.png"}switch(a.love_interest){case"AL":n="Alex";break;case"EL":n="Elliot";break;case"HA":n="Harvey";break;case"SA":n="Sam";break;case"SE":n="Sebastian";break;case"SH":n="Shane";break;case"AB":n="Abigail";break;case"EM":n="Emily";break;case"HL":n="Haley";break;case"LE":n="Leah";break;case"MA":n="Maru";break;case"PE":n="Penny";break;case"KR":n="Krobus";break;default:n="None"}var r="/images/petsprites/"+t;return Object(m.jsxs)(x.a,{children:[Object(m.jsxs)(S.a,{style:{alignItems:"center"},children:[Object(m.jsx)(_.a,{children:Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("img",{title:a.farm_name,alt:"",src:"images/Standard_Farm_Map_Icon.png"}),Object(m.jsx)("div",{children:a.farm_name})]})}),Object(m.jsx)(_.a,{children:Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("img",{title:"Horse!",alt:"",src:"/images/petsprites/Horse.png"}),Object(m.jsx)("p",{children:a.horse_name})]})}),Object(m.jsx)(_.a,{children:Object(m.jsxs)("div",{title:a.pet_type,style:{textAlign:"center"},children:[Object(m.jsx)("img",{src:r,alt:"The pet you chose"}),Object(m.jsx)("p",{children:a.pet_name})]})})]}),Object(m.jsxs)(S.a,{children:[Object(m.jsx)(_.a,{children:Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("img",{title:"Love Interest",alt:"",src:"images/Marriage_Icon.png"}),n]})}),Object(m.jsx)(_.a,{children:Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("img",{title:"Current Year",alt:"",src:"images/30px-Time_Icon.png"}),"Year ",a.year]})}),Object(m.jsx)(_.a,{children:Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("img",{title:"Current Funds",alt:"",src:"images/Gold.png",style:{width:"30px"}}),a.total_g,"g"]})})]})]})},U=function(e){var t=e.user,n=e.character,a=e.invUpdated,r=e.setMaterialId,c=e.setRecipeId,i=e.setRecipeListShow;return Object(m.jsxs)("div",{children:[Object(m.jsx)(M,{character:n,setMaterialId:r,setRecipeId:c,setRecipeListShow:i}),Object(m.jsx)(T,{user:t,character:n,invUpdated:a,setMaterialId:r,setRecipeId:c,setRecipeListShow:i})]})},F=n(42),D=function(e){var t=e.handleClose;return Object(m.jsx)("div",{className:"ui-container selector",style:{position:"absolute",left:"95%",backgroundColor:"red",color:"white",border:"2px solid white"},onClick:t,children:"X"})},H=n(2),G=n(8),z=n(119),q=n(9),B=function(e){var t=e.character,n=e.heading,a=e.handleChange,r=e.handleSubmit;return Object(m.jsxs)(x.a,{className:"justify-content-center my-3",children:[Object(m.jsx)("h2",{children:n}),Object(m.jsxs)(q.a,{onSubmit:r,children:[Object(m.jsxs)(q.a.Group,{children:[Object(m.jsx)(q.a.Label,{htmlFor:"name",children:"Name"}),Object(m.jsx)(q.a.Control,{required:!0,type:"text",name:"name",maxLength:12,value:t.name,placeholder:"Enter character name",onChange:a}),Object(m.jsx)(q.a.Label,{htmlFor:"Platform",children:"Platform"}),Object(m.jsx)(q.a.Control,{required:!0,name:"Platform",value:t.Platform,type:"text",placeholder:"Switch, PS4, PC, etc.",onChange:a}),Object(m.jsx)(q.a.Label,{htmlFor:"farm_name",children:"Farm Name"}),Object(m.jsx)(q.a.Control,{required:!0,name:"farm_name",maxLength:12,value:t.farm_name,type:"text",placeholder:"Enter farm name",onChange:a}),Object(m.jsx)(q.a.Label,{htmlFor:"pet_type",children:"Pet Type"}),Object(m.jsxs)(q.a.Select,{required:!0,name:"pet_type",defaultValue:t.pet_type,onChange:a,children:[Object(m.jsx)("option",{children:"Choose Pet Type"}),Object(m.jsx)("option",{value:"Cat",children:"Cat"}),Object(m.jsx)("option",{value:"Dog",children:"Dog"})]}),Object(m.jsx)(q.a.Label,{htmlFor:"pet_name",children:"Pet Name"}),Object(m.jsx)(q.a.Control,{name:"pet_name",maxLength:12,value:t.pet_name,type:"text",placeholder:"Enter pet's name",onChange:a}),Object(m.jsx)(q.a.Label,{htmlFor:"pet_image",children:"Pet Image"}),Object(m.jsxs)(q.a.Select,{required:!0,name:"pet_image",value:t.pet_image,onChange:a,children:[Object(m.jsx)("option",{children:"Choose image"}),Object(m.jsx)("option",{value:"C1",children:"Cat 1"}),Object(m.jsx)("option",{value:"C2",children:"Cat 2"}),Object(m.jsx)("option",{value:"C3",children:"Cat 3"}),Object(m.jsx)("option",{value:"D1",children:"Dog 1"}),Object(m.jsx)("option",{value:"D2",children:"Dog 2"}),Object(m.jsx)("option",{value:"D3",children:"Dog 3"})]}),Object(m.jsx)(q.a.Label,{htmlFor:"love_interest",children:"Love Interest"}),Object(m.jsxs)(q.a.Select,{name:"love_interest",value:t.love_interest,onChange:a,children:[Object(m.jsx)("option",{children:"Choose love interest"}),Object(m.jsx)("option",{value:"AL",children:"Alex"}),Object(m.jsx)("option",{value:"EL",children:"Elliot"}),Object(m.jsx)("option",{value:"HA",children:"Harvey"}),Object(m.jsx)("option",{value:"SA",children:"Sam"}),Object(m.jsx)("option",{value:"SE",children:"Sebastian"}),Object(m.jsx)("option",{value:"SH",children:"Shane"}),Object(m.jsx)("option",{value:"AB",children:"Abigail"}),Object(m.jsx)("option",{value:"EM",children:"Emily"}),Object(m.jsx)("option",{value:"HL",children:"Haley"}),Object(m.jsx)("option",{value:"LE",children:"Leah"}),Object(m.jsx)("option",{value:"MA",children:"Maru"}),Object(m.jsx)("option",{value:"PE",children:"Penny"}),Object(m.jsx)("option",{value:"KR",children:"Krobus"})]}),Object(m.jsx)(q.a.Label,{htmlFor:"horse_name",children:"Horse Name"}),Object(m.jsx)(q.a.Control,{name:"horse_name",maxLength:12,value:t.horse_name,type:"text",placeholder:"Enter horse name",onChange:a}),Object(m.jsx)(q.a.Label,{htmlFor:"total_g",children:"Total Money"}),Object(m.jsx)(q.a.Control,{name:"total_g",min:0,max:999999,value:t.total_g,type:"number",placeholder:"Enter total g",onChange:a}),Object(m.jsx)(q.a.Label,{htmlFor:"year",children:"Year"}),Object(m.jsx)(q.a.Control,{name:"year",value:t.year,type:"number",placeholder:"Enter current year",onChange:a})]}),Object(m.jsx)(F.a,{className:"my-2",type:"submit",children:"Submit"})]})]})},W=function(e){var t=e.show,n=e.handleClose,r=e.updateCharacter,c=e.user,i=e.triggerRefresh,o=Object(a.useState)(e.character),l=Object(s.a)(o,2),d=l[0],u=l[1];Object(a.useEffect)((function(){u(e.character)}),[e.character]);return Object(m.jsxs)(z.a,{show:t,onHide:n,children:[Object(m.jsx)(z.a.Header,{closeButton:!0}),Object(m.jsx)(z.a.Body,{children:Object(m.jsx)(B,{character:d,heading:"Edit Character",handleChange:function(e){u((function(t){var n=e.target.value,a=e.target.name,r=Object(G.a)({},a,n);return Object(H.a)(Object(H.a)({},t),r)}))},handleSubmit:function(e){e.preventDefault(),d.total_g=parseInt(d.total_g),d.year=parseInt(d.year),r(c,d).then((function(){return n()})).then((function(){return i()})).catch((function(e){return console.log(e)}))}})})]})},Y=function(e,t){return console.log("updateCharacter route was hit for updated character ".concat(t.name," belonging to ").concat(e.email)),R()({url:E+"/characters/".concat(t.id,"/"),method:"PATCH",headers:{Authorization:"Token ".concat(e.token)},data:{character:t}})},J=function(e){var t=e.user,n=e.characterId,r=e.invUpdated,c=e.setCharacterId,i=e.setCharUpdated,o=e.setMaterialId,l=e.setRecipeId,d=e.setRecipeListShow,u=Object(a.useState)(null),j=Object(s.a)(u,2),h=j[0],b=j[1],O=Object(a.useState)(!1),p=Object(s.a)(O,2),g=p[0],f=p[1],v=Object(a.useState)(!1),y=Object(s.a)(v,2),w=y[0],C=y[1];Object(a.useEffect)((function(){console.log("useEffect ran in the ProfileContainer"),function(e,t){return console.log("getOneCharacter route was hit for character with ID ".concat(t," belonging to ").concat(e.email)),R()({url:E+"/characters/".concat(t),method:"GET",headers:{Authorization:"Token ".concat(e.token)}})}(t,n).then((function(e){return b(e.data.character)})).then(console.log("this is the character",h)).catch((function(e){return console.log(e)}))}),[n,w]);var I=function(){(function(e,t){return console.log("deleteCharacter route was hit for character with ID ".concat(t," belonging to user ").concat(e.email)),R()({url:E+"/characters/".concat(t,"/"),method:"DELETE",headers:{Authorization:"Token ".concat(e.token)}})})(t,h.id).then((function(){c(null),o(null),l(null),d(!1)})).then(i((function(e){return!e}))).catch((function(e){return console.log(e)}))};return h?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(x.a,{fluid:!0,className:"ui-container animated",style:{width:"100%",height:"100%"},children:[Object(m.jsx)(D,{handleClose:function(){c(null),o(null),l(null),d(!1)}}),Object(m.jsx)(S.a,{children:Object(m.jsx)(_.a,{children:Object(m.jsx)("h4",{children:h.name})})}),Object(m.jsx)(S.a,{children:Object(m.jsx)(U,{user:t,character:h,invUpdated:r,setCharacter:b,setMaterialId:o,setRecipeId:l,setRecipeListShow:d})}),Object(m.jsxs)(S.a,{md:"auto",className:"py-2",style:{justifyContent:"center"},children:[Object(m.jsx)(_.a,{fluid:!0,children:Object(m.jsx)(F.a,{variant:"info",onClick:function(){return f(!0)},children:"Edit"})}),Object(m.jsx)(_.a,{children:Object(m.jsx)(F.a,{variant:"danger",onClick:function(){return I()},children:"Delete"})})]})]}),Object(m.jsx)(W,{character:h,user:t,show:g,updateCharacter:Y,triggerRefresh:function(){C((function(e){return!e})),i((function(e){return!e}))},handleClose:function(){f(!1)}})]}):null},V=function(e){var t=e.character,n=e.setCharacterId,a=e.setMaterialId,r=e.setRecipeId,c=e.setRecipeListShow;return Object(m.jsx)("div",{className:"selector",style:{border:"4px solid rgb(229,120,61)",backgroundColor:"rgb(255,213,139)",margin:"5px",padding:"2px"},onClick:function(){a(null),r(null),c(!1),n(t.id)},children:Object(m.jsx)("h5",{style:{margin:"0"},children:t.name})})},K=function(e){var t,n=e.user,r=e.charUpdated,c=e.setCharacterId,i=e.setMaterialId,o=e.setRecipeId,l=e.setRecipeListShow,d=Object(a.useState)([]),u=Object(s.a)(d,2),j=u[0],h=u[1];Object(a.useEffect)((function(){console.log("useEffect has run in CharacterContainer"),function(e){return console.log("getAllCharacters route was hit for ".concat(e.email)),R()({url:E+"/characters",method:"GET",headers:{Authorization:"Token ".concat(e.token)}})}(n).then((function(e){return h(e.data.characters)})).catch((function(e){return console.log(e)}))}),[r]),j.length>0&&(t=j.map((function(e,t){return Object(m.jsx)(V,{character:e,setCharacterId:c,setMaterialId:i,setRecipeId:o,setRecipeListShow:l},t)})));return Object(m.jsxs)("div",{className:"ui-container",style:{width:"100%",height:"100%"},children:[Object(m.jsxs)("h4",{children:[n.email,"'s Characters"]}),j.length>0?t:Object(m.jsx)("p",{style:{textAlign:"center"},children:"No characters yet!"}),Object(m.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(m.jsx)(f.b,{to:"/create-character",children:Object(m.jsx)(F.a,{variant:"success",children:"Add Character"})})})]})},Q=function(e){var t=e.inventoryToUpdate,n=e.handleChange,a=e.handleSubmit;return console.log("this is the inventory to update in the form",t),console.log("this is the amount going into the form",t.amount),Object(m.jsx)("div",{children:Object(m.jsxs)(q.a,{onSubmit:a,children:[Object(m.jsxs)(q.a.Group,{children:[Object(m.jsx)(q.a.Label,{htmlFor:"amount",children:"Quantity"}),Object(m.jsx)(q.a.Control,{type:"number",name:"amount",defaultValue:t.amount,placeholder:"Enter amount",onChange:n},t.amount)]}),Object(m.jsx)(F.a,{className:"m-2",variant:"primary",size:"sm",type:"submit",children:"Edit Amount"})]})})},X=function(e){var t=e.user,n=e.inventory,r=e.characterId,c=e.setInvUpdated,i=Object(a.useState)(n),o=Object(s.a)(i,2),l=o[0],d=o[1];console.log("this is the inventory in EditQuantity",n),Object(a.useEffect)((function(){console.log("useEffect ran in EditQuantity"),d(n)}),[n]);return Object(m.jsx)("div",{children:Object(m.jsx)(Q,{inventoryToUpdate:l,handleChange:function(e){d((function(t){var n=e.target.value,a=e.target.name,r=Object(G.a)({},a,parseInt(n));return Object(H.a)(Object(H.a)({},t),r)}))},handleSubmit:function(e){e.preventDefault(),console.log("this is the amount we submit",parseInt(n.amount)),function(e,t,n,a,r){return console.log("editOneInventory route was hit for inventory id ".concat(a," belonging to character id ").concat(n)),R()({url:E+"/inventory/edit/".concat(a,"/").concat(n),method:"PATCH",headers:{Authorization:"Token ".concat(e.token)},data:{material_id:t,character_id:n,amount:r}})}(t,n.material.id,r,n.id,l.amount).then((function(){return c((function(e){return!e}))})).catch((function(e){return console.log(e)}))}})})},Z=function(e){var t=e.user,n=e.inventory,a=e.characterId,r=e.setInvUpdated;console.log("material in MaterialView",n);var c="/images/materials/"+n.material.material_image;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{style:{margin:"5px",textAlign:"center"},children:[Object(m.jsx)("h2",{children:n.material.material_name}),Object(m.jsx)("div",{className:"my-3",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(m.jsx)("div",{className:"ui-container",style:{display:"inline-block"},children:Object(m.jsx)("img",{src:c,alt:n.material.material_name})})}),Object(m.jsx)("div",{children:n.material.material_description}),Object(m.jsxs)("div",{children:["You have ",n.amount,"."]})]}),Object(m.jsx)("div",{children:Object(m.jsx)(X,{user:t,inventory:n,characterId:a,setInvUpdated:r})})]})},$=function(e){var t=e.recipe,n=e.setMaterialId,a=e.setRecipeId,r=e.setRecipeListShow,c="images/recipes/"+t.recipe_image;return Object(m.jsx)("div",{style:{margin:"2px"},onClick:function(){a(t.id),n(null),r(!1)},children:Object(m.jsx)("img",{className:"selector",src:c,alt:c})})},ee=function(e){var t,n=e.recipes,a=e.setMaterialId,r=e.setRecipeId,c=e.setRecipeListShow;return n?(t=n.map((function(e,t){return Object(m.jsx)($,{recipe:e,setMaterialId:a,setRecipeId:r,setRecipeListShow:c},t)})),Object(m.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:t})):Object(m.jsx)("p",{children:"loading"})},te=function(e){var t=e.blueprint;console.log("this is the recipe in RecipeView",t);var n,a="images/recipes/"+t[0].blueprint.recipe_image;return n=t.map((function(e,t){var n="images/materials/"+e.material.material_image;return Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[Object(m.jsx)("img",{src:n,title:e.material.material_name,alt:e.material.material_name,style:{maxWidth:"30px"}}),e.material.material_name,": ",e.amount_needed]})},t)})),Object(m.jsxs)("div",{style:{margin:"5px",paddingBottom:"15%",textAlign:"center"},children:[Object(m.jsx)("h2",{children:t[0].blueprint.recipe_name}),Object(m.jsx)("div",{className:"my-3",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(m.jsx)("div",{className:"ui-container",style:{display:"flex",width:"150px",height:"150px",justifyContent:"center",alignItems:"center"},children:Object(m.jsx)("img",{src:a,alt:a})})}),Object(m.jsx)("p",{children:t[0].blueprint.recipe_description}),n]})},ne=function(e){var t=e.user,n=e.characterId,r=e.materialId,c=e.recipeId,i=e.invUpdated,o=e.setMaterialId,l=e.setRecipeId,d=e.recipeListShow,u=e.setRecipeListShow,j=e.setInvUpdated,h=Object(a.useState)(null),b=Object(s.a)(h,2),O=b[0],p=b[1],x=Object(a.useState)(null),g=Object(s.a)(x,2),f=g[0],v=g[1],y=Object(a.useState)(null),w=Object(s.a)(y,2),C=w[0],I=w[1];Object(a.useEffect)((function(){var e;console.log("useEffect has run in InfoContainer"),r?(console.log("this is an inventory fetch"),function(e,t,n){return console.log("getSingleInventory route was hit for character with id ".concat(t," and inventory id ").concat(n)),R()({url:E+"/inventory/".concat(n,"/").concat(t),method:"GET",headers:{Authorization:"Token ".concat(e.token)}})}(t,n,r).then((function(e){return p(e.data.inventory)})).catch((function(e){return console.log(e)}))):p(null),c?(console.log("this is a blueprint fetch"),(e=c,console.log("getOneBlueprintMaterials route was hit for recipe with ID ".concat(e)),R()({url:E+"/recipe_materials/".concat(e),method:"GET"})).then((function(e){return I(e.data.recipe_materials)})).catch((function(e){return console.log(e)}))):I(null),d&&(console.log("getAllBlueprints route was hit"),R()({url:E+"/blueprints",method:"GET"})).then((function(e){return v(e.data.blueprints)})).catch((function(e){return console.log(e)}))}),[d,i,r,c]);var S={width:"100%"};return O?Object(m.jsxs)("div",{className:"ui-container animated",style:S,children:[Object(m.jsx)(D,{handleClose:function(){o(null),l(null),u(!1)}}),Object(m.jsx)(Z,{user:t,inventory:O,characterId:n,setInvUpdated:j})]}):C?Object(m.jsxs)("div",{className:"ui-container animated",style:S,children:[Object(m.jsx)(D,{handleClose:function(){o(null),l(null),u(!1)}}),Object(m.jsx)(te,{characterId:n,blueprint:C,setRecipeId:l,setMaterialId:o,setRecipeListShow:u})]}):d?Object(m.jsx)("div",{className:"ui-container animated",style:{maxHeight:"100%",overflowY:"scroll"},children:Object(m.jsx)(ee,{recipes:f,setMaterialId:o,setRecipeId:l,setRecipeListShow:u})}):Object(m.jsx)("div",{className:"ui-container animated",onClick:function(){l(null),o(null),u(!1)},children:"Loading"})},ae=function(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),o=Object(s.a)(i,2),l=o[0],d=o[1],u=Object(a.useState)(null),j=Object(s.a)(u,2),h=j[0],b=j[1],O=Object(a.useState)(!1),p=Object(s.a)(O,2),g=p[0],f=p[1],v=Object(a.useState)(!1),y=Object(s.a)(v,2),w=y[0],C=y[1],I=Object(a.useState)(!1),k=Object(s.a)(I,2),L=k[0],A=k[1],E=e.user;Object(a.useEffect)((function(){console.log("UserHome was refreshed"),console.log("invUpdated was changed. New value:",w)}),[w,L]);var P={padding:"10px",height:"100%"};return Object(m.jsx)(x.a,{fluid:!0,style:{height:"90%"},children:Object(m.jsxs)(S.a,{style:{height:"100%"},children:[Object(m.jsx)(_.a,{lg:3,style:P,children:Object(m.jsx)(K,{user:E,charUpdated:L,setCharacterId:c,setMaterialId:d,setRecipeId:b,setRecipeListShow:f})}),r?Object(m.jsx)(_.a,{lg:5,style:P,children:Object(m.jsx)(J,{user:E,characterId:r,invUpdated:w,setCharacterId:c,setCharUpdated:A,setMaterialId:d,setRecipeId:b,setRecipeListShow:f})}):null,r&&(l||h||g)?Object(m.jsx)(_.a,{lg:4,style:P,children:Object(m.jsx)(ne,{user:E,characterId:r,materialId:l,invUpdated:w,setMaterialId:d,recipeId:h,setRecipeId:b,recipeListShow:g,setRecipeListShow:f,setInvUpdated:C})}):null]})})},re=function(){return Object(m.jsxs)(x.a,{className:"ui-container my-5",style:{height:"50%",textAlign:"center",alignItems:"center"},children:[Object(m.jsx)("h2",{children:"Welcome to MyJunimo!"}),Object(m.jsx)("p",{children:"A Stardew Valley Companion"})]})},ce=function(e){console.log("props in home",e);var t=e.user;return t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x.a,{fluid:!0,className:"mt-3",children:Object(m.jsx)("div",{className:"ui-container",children:Object(m.jsx)("h2",{children:"Welcome to MyJunimo!"})})}),Object(m.jsx)(ae,{user:t})]}):Object(m.jsx)(re,{})},ie=function(e){return R()({url:E+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},se=n(34),oe=n.n(se),le=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],u=l[1],j=Object(a.useState)(""),h=Object(s.a)(j,2),b=h[0],O=h[1],p=Object(o.g)();return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5 p-5 ui-container",children:[Object(m.jsx)("h3",{children:"Sign Up"}),Object(m.jsxs)(q.a,{onSubmit:function(t){t.preventDefault();var n=e.msgAlert,a=e.setUser,i={email:r,password:d,passwordConfirmation:b};(function(e){return R()({method:"POST",url:E+"/sign-up/",data:{credentials:{email:e.email,password:e.password,password_confirmation:e.passwordConfirmation}}})})(i).then((function(){return ie(i)})).then((function(e){return a(e.data.user)})).then((function(){return p("/")})).catch((function(e){c(""),u(""),O(""),n({heading:"Sign Up Failed with error: "+e.message,message:oe.a.signUpFailure,variant:"danger"})}))},children:[Object(m.jsxs)(q.a.Group,{controlId:"email",children:[Object(m.jsx)(q.a.Label,{children:"Email address"}),Object(m.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:r,placeholder:"Enter email",onChange:function(e){return c(e.target.value)}})]}),Object(m.jsxs)(q.a.Group,{controlId:"password",children:[Object(m.jsx)(q.a.Label,{children:"Password"}),Object(m.jsx)(q.a.Control,{required:!0,name:"password",value:d,type:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)}})]}),Object(m.jsxs)(q.a.Group,{controlId:"passwordConfirmation",children:[Object(m.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(m.jsx)(q.a.Control,{required:!0,name:"passwordConfirmation",value:b,type:"password",placeholder:"Confirm Password",onChange:function(e){return O(e.target.value)}})]}),Object(m.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},de=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],u=l[1],j=Object(o.g)();return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5 p-5 ui-container",children:[Object(m.jsx)("h3",{children:"Sign In"}),Object(m.jsxs)(q.a,{onSubmit:function(t){t.preventDefault(),console.log("the props",e);var n=e.msgAlert,a=e.setUser;ie({email:r,password:d}).then((function(e){return a(e.data.user)})).then((function(){return j("/")})).catch((function(e){c(""),u(""),n({heading:"Sign In Failed with error: "+e.message,message:oe.a.signInFailure,variant:"danger"})}))},children:[Object(m.jsxs)(q.a.Group,{controlId:"email",children:[Object(m.jsx)(q.a.Label,{children:"Email address"}),Object(m.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:r,placeholder:"Enter email",onChange:function(e){return c(e.target.value)}})]}),Object(m.jsxs)(q.a.Group,{controlId:"password",children:[Object(m.jsx)(q.a.Label,{children:"Password"}),Object(m.jsx)(q.a.Control,{required:!0,name:"password",value:d,type:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)}})]}),Object(m.jsx)(F.a,{variant:"primary",type:"submit",className:"my-2",children:"Submit"})]})]})})},ue=n(118),je=function(e){var t=e.clearUser,n=e.user;console.log(e);var a=Object(o.g)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5 p-5 ui-container",style:{textAlign:"center"},children:[Object(m.jsx)("h2",{children:"Are you sure you want to sign out?"}),Object(m.jsxs)(ue.a,{children:[Object(m.jsx)(F.a,{variant:"danger",size:"lg",onClick:function(){(function(e){return R()({url:E+"/sign-out",method:"DELETE",headers:{Authorization:"Token ".concat(e.token)}})})(n).finally((function(){return t()})).finally((function(){return a("/")})).catch((function(e){return console.log(e)}))},children:"Sign Out"}),Object(m.jsx)(F.a,{variant:"warning",size:"lg",onClick:function(){a("/")},children:"Return"})]})]})})})},he=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],u=l[1],j=Object(o.g)();return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5 p-5 ui-container",children:[Object(m.jsx)("h3",{children:"Change Password"}),Object(m.jsxs)(q.a,{onSubmit:function(t){t.preventDefault();var n=e.msgAlert,a=e.user;console.log("the user",a),function(e,t){return R()({url:E+"/change-password",method:"PATCH",headers:{Authorization:"Token ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})}({oldPassword:r,newPassword:d},a).then((function(){return n({heading:"Change Password Success",message:oe.a.changePasswordSuccess,variant:"success"})})).then((function(){return j("/")})).catch((function(e){c(""),u(""),n({heading:"Change Password Failed with error: "+e.message,message:oe.a.changePasswordFailure,variant:"danger"})}))},children:[Object(m.jsxs)(q.a.Group,{controlId:"oldPassword",children:[Object(m.jsx)(q.a.Label,{children:"Old password"}),Object(m.jsx)(q.a.Control,{required:!0,name:"oldPassword",value:r,type:"password",placeholder:"Old Password",onChange:function(e){return c(e.target.value)}})]}),Object(m.jsxs)(q.a.Group,{controlId:"newPassword",children:[Object(m.jsx)(q.a.Label,{children:"New Password"}),Object(m.jsx)(q.a.Control,{required:!0,name:"newPassword",value:d,type:"password",placeholder:"New Password",onChange:function(e){return u(e.target.value)}})]}),Object(m.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},be=function(e){var t=e.user,n=Object(o.g)(),r=Object(a.useState)({name:"",Platform:"",farm_name:"",pet_type:"",pet_name:"",pet_image:"",love_interest:"",horse_name:"",total_g:0,year:1}),c=Object(s.a)(r,2),i=c[0],l=c[1];return Object(m.jsx)(x.a,{className:"ui-container my-3",children:Object(m.jsx)(B,{character:i,handleChange:function(e){l((function(t){var n=e.target.value,a=e.target.name,r=Object(G.a)({},a,n);return Object(H.a)(Object(H.a)({},t),r)}))},handleSubmit:function(e){e.preventDefault(),i.total_g=parseInt(i.total_g),i.year=parseInt(i.year),console.log("info was submitted",i),function(e,t){return console.log("createCharacter route was hit for new character ".concat(t.name," belonging to user ").concat(e.email)),console.log("this is the newCharacter",t),R()({url:E+"/characters/",method:"POST",headers:{Authorization:"Token ".concat(e.token)},data:{character:t}})}(t,i).then((function(e){for(var n=e.data.character.id,a=1;a<=80;a++)N(t,a,n).catch((function(e){return console.log(e)}))})).then(n("/")).catch((function(e){return console.log(e)}))},heading:"Create New Character"})})},me=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(s.a)(c,2),d=i[0],u=i[1];console.log("user in app",n),console.log("message alerts",d);var j=function(e){u((function(t){return t.filter((function(t){return t.id!==e}))}))},h=function(e){var t=e.heading,n=e.message,a=e.variant,r=Object(l.a)();u((function(){return[{heading:t,message:n,variant:a,id:r}]}))};return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(C,{user:n}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{path:"/",element:Object(m.jsx)(ce,{msgAlert:h,user:n})}),Object(m.jsx)(o.b,{path:"/sign-up",element:Object(m.jsx)(le,{msgAlert:h,setUser:r})}),Object(m.jsx)(o.b,{path:"/sign-in",element:Object(m.jsx)(de,{msgAlert:h,setUser:r})}),Object(m.jsx)(o.b,{path:"/sign-out",element:Object(m.jsx)(I,{user:n,children:Object(m.jsx)(je,{msgAlert:h,clearUser:function(){console.log("clear user ran"),r(null)},user:n})})}),Object(m.jsx)(o.b,{path:"/change-password",element:Object(m.jsx)(I,{user:n,children:Object(m.jsx)(he,{msgAlert:h,user:n})})}),Object(m.jsx)(o.b,{path:"/create-character",element:Object(m.jsx)(I,{user:n,children:Object(m.jsx)(be,{user:n})})})]}),d.map((function(e){return Object(m.jsx)(O,{heading:e.heading,variant:e.variant,message:e.message,id:e.id,deleteAlert:j},e.id)}))]})},Oe=n(6);i.a.render(Object(m.jsx)(f.a,{children:Object(m.jsx)(Oe.a,{breakpoints:["xxxl","xxl","xl","lg","md","sm","xs","xxs"],minBreakpoint:"xxs",children:Object(m.jsx)(me,{})})}),document.getElementById("root"))},34:function(e,t){e.exports={signUpSuccess:"Successfully registered! You've been signed in as well.",signUpFailure:"Registration failed. Email may be taken, or passwords don't match.",signInSuccess:"Welcome!",signInFailure:"Failed to sign in. Check your email and password and try again.",signOutSuccess:"Come back soon!",changePasswordSuccess:"Password changed successfully!",changePasswordFailure:"Failed to change passwords. Check your old password and try again."}},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.2339beac.chunk.js.map