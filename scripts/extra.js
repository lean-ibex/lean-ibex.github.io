document.addEventListener('DOMContentLoaded', slackEventNotification)
document.addEventListener('DOMContentLoaded', resetStorage)

function resetStorage() {
  localStorage.clear()
}

function slackEventNotification() {
    let index = Math.floor(Math.random() * Math.floor(10))
    let emoji = [':bowtie:',':smile:',':simple_smile:',':laughing:',':blush:',':smiley:',':relaxed:',':smirk:',':heart_eyes:',':kissing_heart:',][index]

    let buttons = document.querySelectorAll('.solution__options li')
    Object.keys(buttons).map((key)=>{
        buttons[key].removeEventListener('click', buttonClicked)
        buttons[key].addEventListener('click', buttonClicked)
    })

    let segments = document.querySelectorAll('.segment a')
    Object.keys(segments).map((key)=>{
        segments[key].removeEventListener('click', buttonClicked)
        segments[key].addEventListener('click', buttonClicked)
    })

    function buttonClicked() {
          if (this.classList.contains('active') || this.classList.contains('selected')) {
            fetch('https://hooks.slack.com/services/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', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({text: `${emoji} | ${this.innerText}`})
            })
          }
    }
}
