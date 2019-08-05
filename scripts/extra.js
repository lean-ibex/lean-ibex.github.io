document.addEventListener('DOMContentLoaded', slackEventNotification)
document.addEventListener('DOMContentLoaded', resetStorage)
document.addEventListener('DOMContentLoaded', logHit)
document.addEventListener('DOMContentLoaded', outboundClicks)
document.addEventListener('DOMContentLoaded', logFeaturesSelection)

function logFeaturesSelection() {
    function uuidv4() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      )
    }
    const uid = uuidv4()

    let postData = {
        session: uid,
    }

    function logIt(postData, nextValue) {
      postData.click_next = nextValue
      postData.features = (localStorage.getItem('selectedFeatures'))?localStorage.getItem('selectedFeatures').split(',').filter((el)=>el!==''):[]
      postData.term = (localStorage.getItem('selectedTerm'))?localStorage.getItem('selectedTerm'):''
      postData.size = (localStorage.getItem('selectedSegment'))?localStorage.getItem('selectedSegment'):''
      postData.products = (localStorage.getItem('selectedProducts'))?localStorage.getItem('selectedProducts').split(',').filter((el)=>el!==''):[]
      postData.addons = (localStorage.getItem('selectedAddons'))?localStorage.getItem('selectedAddons').split(',').filter((el)=>el!==''):[]

      // send to google sheet
      let urlParameters = Object.entries(postData).map(e => e.join('=')).join('&');
      fetch(`https://script.google.com/macros/s/AKfycbzJ0JP50KuePpWvz2D9mh8TVaf521WgCGF2xmKectt0X-6IH52l/exec?${urlParameters}`).then(()=>{
          return
      })
    }

    const piles = document.querySelectorAll('.solution__options li');
    Object.keys(piles).map((key)=>{
        piles[key].addEventListener('click', logIt.bind(null, postData, '0'))
    })
    const recomendationButton = document.querySelector('.recomendation .recomendation__button')
    recomendationButton.addEventListener('click', logIt.bind(null, postData, '1'))
}


function outboundClicks() {
    let outboundLinks = document.querySelectorAll('a')
    Object.keys(outboundLinks).map(key=>{
        outboundLinks[key].removeEventListener('click', outboundClick)
        outboundLinks[key].addEventListener('click', outboundClick.bind(outboundLinks[key]))
    })
    // outboundLinks.map(link=>{
    //     link.removeEventListener('click', outboundClick)
    //     link.addEventListener('click', outboundClick.bind(link))
    // })
}

function outboundClick() {
    let label = this.className.replace(' ', '.') + '_' + this.innerText
    gtag('event','click',{event_category: 'outbound-link', event_label: label, value: 1})
}


function logHit() {
    fetch('https://us-central1-bundleit-02210.cloudfunctions.net/api/logHit')
}

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

    let contactButton = document.querySelector('#build-bundle .contact-me .contact')
    contactButton.removeEventListener('click', contactButtonClicked)
    contactButton.addEventListener('click', contactButtonClicked)

    function contactButtonClicked() {
        let fullname = document.querySelector('#build-bundle .contact-me input[name="cust-name"]').value
        let phone = document.querySelector('#build-bundle .contact-me input[name="cust-phone"]').value
        sendToSlack(`:moneybag: | Lead name: ${fullname} phone: ${phone}  `)
    }

    function buttonClicked() {
        if (this.classList.contains('active') || this.classList.contains('selected')) {
            sendToSlack(`${emoji} | ${this.innerText}`)
        }
    }

    function sendToSlack(message) {
      fetch('https://hooks.slack.com/services/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', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/x-www-form-urlencoded'
          },
          body: JSON.stringify({text: message})
      })
    }
}
