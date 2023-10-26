export function $(selector){
    if(selector.includes('#')){
        return document.querySelector(selector);
    }else{
        return document.querySelectorAll(selector);
    }
}
export function createElement(element){
    return document.createElement(element);
}

export function setAttrElm(element,attr, value){
    element.setAttribute(attr,value);
}


export function createTextNode(value){
    return document.createTextNode(value);
}
export function addClass(selector,className){
    const elms =  all(selector);
    elms.forEach(elm => {
        elm.classList.add(className);
    });
}
export function removeClass(selector,className){
    const elms =  all(selector);
    elms.forEach(elm => {
        elm.classList.remove(className);
    });
}
export function setAttr(selector,attr, value){
    const elms =  all(selector);
    elms.forEach(elm => {
        elm.setAttribute(attr,value);
    });
}


export function getAttr(selector, attr){
    return $(selector).getAttribute(attr);
}


export function removeAttr(selector, attr){
    const elms = all(selector);
    elms.forEach(elm => {
        elm.removeAttribute(attr);
    });
}


export function removeAllAttr(selector, attr){
    const elms = all(selector);
    elms.forEach(elm => {
        elm.attributes.forEach(att => {
            if(att.name !== 'id'){
                elm.removeAttribute(attr.name);
            } 
        });
    });
}


function all(selector){
    return document.querySelectorAll(selector);
}