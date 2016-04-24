import $ from 'jquery';


let wv = document.getElementById('webview');
wv.addEventListener("dom-ready", function() {
  wv.openDevTools();
});



let focus = () => {
  wv.executeJavaScript(`focus()`)
}
let execute = () => {
  focus();
  setTimeout(() => {
    let post = $('#post')[0].value
    for (let i = 0; i < post.length; i++) {
      wv.sendInputEvent({type: 'char', keyCode: post[i]})
    }
  }, 2000)
}

export {wv, execute};
