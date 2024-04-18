document.querySelectorAll("input").forEach(function(e){var t=e.getAttribute("name"),a=t.charAt(0).toUpperCase()+t.slice(1);a.includes("Name")&&(a=a.replace("Name"," Name"));var l=document.createElement("label");l.setAttribute("class","field-label"),l.setAttribute("for",t),l.textContent=a,e.setAttribute("placeholder",a),e.parentNode.appendChild(l)});
//# sourceMappingURL=index.99b378d5.js.map
