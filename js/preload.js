window.$ = window.jQuery = require('./vendor/jquery.js');

let focus = () => {
  // initially its a text area, but later it changes. So test for initial and then move on to the next
  if($("textarea[placeholder='Write something...']")) {
    $("textarea[placeholder='Write something...']").click();
  }
  setTimeout(() => {
    $("div[title='Write something...']")[0].click()
  }, 1000)
}

window.focus = focus;
