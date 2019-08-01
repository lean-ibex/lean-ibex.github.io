'use strict'

/* knownProducts is the map of product to info */
const knownProducts = {
    'GoToConnect': {
        name: 'GoToConnect',
        description: 'The Jive virtual business phone system and GoToMeeting virtual meeting software have come together in one powerful, unified product.',
        startingAt: '$19.95',
        period: 'Per Month',
        priceDetails: 'As low as. 50+ Users',
        url: 'https://www.goto.com/connect/?c_name=lmi&c_prod=gotoconnect&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/21feb235940b40f990f6e405457d2b73.svg',
        monthlyStartsPrice: 19.95,
        annualStartsPrice: 239.4,
        tags: ['Meetings', 'Voice']
    },
    'OpenVoice': {
        name: 'OpenVoice',
        description: 'OpenVoice conference calling integrates easily with GoToMeeting, GoToWebinar, GoToTraining and join.me sessions – no codes or PINs required.',
        startingAt: '$0.08',
        period: 'Per Minute.',
        priceDetails: 'Per Attendee',
        url: 'https://www.gotomeeting.com/audio-conferencing/explore',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/4aa37221b52a4fa0a3a36a5e41f5999d.svg',
        monthlyStartsPrice: 0,
        annualStartsPrice: 0,
        tags: ['Meetings', 'Voice']
    },
    'GoToMeeting': {
        name: 'GoToMeeting',
        description: 'Hold online meetings with up to 150 participants. With GoToMeeting, share screens and collaborate with HD video conferencing.',
        startingAt: '$29.00',
        period: 'Per Month',
        priceDetails: 'Pro Package. 150 Participants',
        url: 'https://www.gotomeeting.com/?c_name=lmi&c_prod=g2m&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/d72ccd0387fe45048ef32d83320e5008.svg',
        monthlyStartsPrice: 29,
        annualStartsPrice: 348,
        tags: ['Meetings']
    },
    'GoToRoom': {
        name: 'GoToRoom',
        description: 'Available with GoToMeeting Plus. Simple, intuitive and fast conference room hardware meets user-friendly video conferencing software.',
        startingAt: '$39.20',
        period: 'Per Month',
        priceDetails: 'Up to 250 Attendees. Additional hardware required.',
        url: 'https://www.gotomeeting.com/features/gotoroom/?c_name=lmi&c_prod=gotoroom&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/8304509a796347e0be2d896708f1c38d.svg',
        monthlyStartsPrice: 39.20,
        annualStartsPrice: 470.40,
        tags: ['Meetings', 'Rooms']
    },
    'GoToWebinar': {
        name: 'GoToWebinar',
        description: 'Marketing pros turn to GoToWebinar to create captivating online events that build brand awareness and help organizations spread their message.',
        startingAt: '$49.00',
        period: 'Per Month',
        priceDetails: 'Lite Plan. Billed Annually',
        url: 'https://www.gotomeeting.com/webinar?c_name=lmi&c_prod=g2w&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/2860681576d043c190c154b57ba528d2.svg',
        monthlyStartsPrice: 49,
        annualStartsPrice: 588,
        tags: ['Webinars']
    },
    'GoToTraining': {
        name: 'GoToTraining',
        description: 'Enable robust online training in virtual or hybrid situations. GoToTraining gives you in-session collaboration, breakout sessions and detailed analytics to keep attendees involved.',
        startingAt: '$109.00',
        period: 'Per Month',
        priceDetails: 'Per Organizer. Starter plan allows for up to 25 attendees.',
        url: 'https://www.gotomeeting.com/training?c_name=lmi&c_prod=g2t&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/97e43b026eba4810b7076bff81905cc0.svg',
        monthlyStartsPrice: 109,
        annualStartsPrice: 1308,
        tags: ['Webinars', 'Training']
    },
    'join.me': {
        name: 'join.me',
        description: 'Optimized for real-time, external collaboration, join.me helps boost productivity with dispersed teams, customers, remote workers and vendors. See why 76% of our users agree.',
        startingAt: '$10.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually. Lite Plan allows for meetings with up to five people.',
        url: 'https://www.join.me/?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/01aeb66c2de8402e99aadf2597ac2128.png',
        monthlyStartsPrice: 10,
        annualStartsPrice: 120,
        tags: ['Meetings']
    },
    'Grasshopper': {
        name: 'Grasshopper',
        description: 'With Grasshopper, entrepreneurs can run their businesses from their cell phones. Sound more professional, maintain a national presence and stay connected.',
        startingAt: '$26.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually. The Solo plan allows for one telephone number and three extensions.',
        url: 'http://grasshopper.com/?utm_source=lmi&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/35669a1005684579905850ce36a10000.svg',
        monthlyStartsPrice: 26,
        annualStartsPrice: 312,
        tags: ['Voice']
    },
    'Grasshopper Connect': {
        name: 'Grasshopper Connect',
        description: 'Stay organized and view all your calls, texts, voicemails and email in one place.',
        startingAt: '$35.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually. Individual plan allows for one number, email, text and phone integration.',
        url: 'https://grasshopper.com/connect',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/35669a1005684579905850ce36a10000.svg',
        monthlyStartsPrice: 35,
        annualStartsPrice: 420,
        tags: ['Voice', 'Email', 'Texting']
    },
    'Rescue Remote Support': {
        name: 'Rescue Remote Support',
        description: 'Provide remote support that solves every problem seamlessly and securely on PC, Mac, iOS and Android. Rescue is remote support for a world without barriers.',
        startingAt: '$108.25',
        period: 'Per Month',
        priceDetails: 'Billed Annually. The premiere remote support solution to service computers on-demand anywhere with a dedicated license for every agent.',
        url: 'https://www.logmeinrescue.com/?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/e06fff5b9f964df7a8f70618a66af730.png',
        monthlyStartsPrice: 108.25,
        annualStartsPrice: 1299,
        tags: ['Remote Support']
    },
    'Rescue Remote & Mobile Support': {
        name: 'Rescue Remote & Mobile Support',
        description: 'Recommended for teams with advanced reporting, integration and mobile support needs with a dedicated license for every agent.',
        startingAt: '$145.75',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://www.logmeinrescue.com/?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/e06fff5b9f964df7a8f70618a66af730.png',
        monthlyStartsPrice: 145.75,
        annualStartsPrice: 1749,
        tags: ['Remote Support', 'Mobile']
    },
    'RescueAssist': {
        name: 'RescueAssist',
        description: 'RescueAssist helps service and support professionals resolve technical issues by delivering instant web-based support to customer, end users, unattended computers and servers.',
        startingAt: '$55.00',
        period: 'Per Month',
        priceDetails: 'Per Technician. Billed Annually.',
        url: 'https://get.gotoassist.com/?c_name=lmi&c_prod=g2a&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/918fa2b2537a4a7f9ab6de6b6b50a5bf.png',
        monthlyStartsPrice: 55,
        annualStartsPrice: 660,
        tags: ['Remote Support', 'Mobile']
    },
    'LastPass Premium': {
        name: 'LastPass Premium',
        description: 'Secure your online backup plan and enjoy flexible sharing.',
        startingAt: '$3.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://www.lastpass.com/hp',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 3,
        annualStartsPrice: 36,
        tags: ['Identity & Access', 'Security']
    },
    'LastPass Families': {
        name: 'LastPass Families',
        description: 'All of your family\'s passwords organized, secure, and at your fingertips.',
        startingAt: '$4.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://www.lastpass.com/hp',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 4,
        annualStartsPrice: 48,
        tags: ['Password Management', 'Secure Docs']
    },
    'LastPass Teams': {
        name: 'LastPass Teams',
        description: 'The safe, simple way to manage passwords for your team.',
        startingAt: '$4.00',
        period: 'Per User/Month.',
        priceDetails: 'Billed Annually.',
        url: 'https://www.lastpass.com/team-password-manager',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 4,
        annualStartsPrice: 48,
        tags: ['Small Business', 'Secure Access']
    },
    'LastPass Enterprise': {
        name: 'LastPass Enterprise',
        description: 'LastPass Enterprise protects every access point through an all-in-one single sign-on and password manager solution.',
        startingAt: '$6.00',
        period: 'Per User/Month.',
        priceDetails: 'Billed Annually.',
        url: 'https://www.lastpass.com/products/enterprise-password-management-and-sso',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 6,
        annualStartsPrice: 72,
        tags: ['Identity & Access', 'Security']
    },
    'LastPass MFA': {
        name: 'LastPass MFA',
        description: 'Leverage biometric and contextual factors to better protect your business while simplifying the employee login experience.',
        startingAt: '$3.00',
        period: 'Per User/Month.',
        priceDetails: 'Billed Annually.',
        url: 'https://www.lastpass.com/products/multifactor-authentication',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 3,
        annualStartsPrice: 36,
        tags: ['Biometric Access']
    },
    'LastPass Identity': {
        name: 'LastPass Identity',
        description: 'LastPass Identity gives granular control to IT and frictionless access to users.',
        startingAt: '$8.00',
        period: 'Per User/Month.',
        priceDetails: 'Billed Annually.',
        url: 'https://www.lastpass.com/products/identity',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 8,
        annualStartsPrice: 96,
        tags: ['User Access Management']
    },
    'Central': {
        name: 'Central',
        description: 'Remotely automate routine IT tasks with Central by LogMeIn, the most powerful tool for accessing and managing remote computers anywhere in the world.',
        startingAt: '$80.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://secure.logmein.com/home/central?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/26c07304dd56428e9a1b0827aeaef95d.png',
        monthlyStartsPrice: 80,
        annualStartsPrice: 960,
        tags: ['Unattended Remote Access', 'Monitoring']
    },
    'Pro': {
        name: 'Pro',
        description: 'Provide anywhere, anytime access to all your devices, files, applications and information with Pro by LogMeIn, the #1 most reliable remote-access tool on the market.',
        startingAt: '$30.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://secure.logmein.com/home/pro?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/e22e2253ce80408ea0e83dbc94964ded.png',
        monthlyStartsPrice: 30,
        annualStartsPrice: 360,
        tags: ['Remote Access']
    },
    'GoToMyPC': {
        name: 'GoToMyPC',
        description: 'Deliver instant remote access from anywhere, on any device. Connect to a host computer from any remote computer, iPad, iPhone or Android device with GoToMyPC.',
        startingAt: '$35.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://get.gotomypc.com/?c_name=lmi&c_prod=g2p&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/bc03215dfaa0424aad52cf8fb97d6f81.png',
        monthlyStartsPrice: 35,
        annualStartsPrice: 420,
        tags: ['Remote Access']
    },
    'Bold360': {
        name: 'Bold360',
        description: 'A conversational chatbot and virtual customer assistant solution, Bold360 ai customer engagement software transforms the way an organization engages with its customers by making every interaction intelligent.',
        startingAt: 'Custom',
        period: '',
        priceDetails: '',
        url: 'https://www.bold360.com/?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/14b1edb1d4f34c17a266c8a5e286c2aa.png',
        monthlyStartsPrice: 0,
        annualStartsPrice: 0,
        tags: ['AI Support']
    },
}

/* knownAddons is the map of addon to info */
const knownAddons = {
    'Central Security': {
        name: 'Central Security',
        description: 'An add-on to Central, Central Security includes windows & application updates, antivirus management and LogMein Antivirus',
        startingAt: '$47.00',
        period: 'Per Month',
        priceDetails: '',
        url: 'https://www.logmein.com/central?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/26c07304dd56428e9a1b0827aeaef95d.png',
        monthlyStartsPrice: 47,
        annualStartsPrice: 564,
        tags: ['Security', 'Antivirus']
    },
    'Central Automation': {
        name: 'Central Automation',
        description: 'Central Automation includes one2many automated task management, advanced scripting and proactive alerts',
        startingAt: '$47.00',
        period: 'Per Month',
        priceDetails: '',
        url: 'https://www.logmein.com/central?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/26c07304dd56428e9a1b0827aeaef95d.png',
        monthlyStartsPrice: 47,
        annualStartsPrice: 564,
        tags: ['Task Management', 'Alerts']
    },
    'Central Insight': {
        name: 'Central Insight',
        description: 'Central Insight includes asset management, dashboards, reporting, alerting & monitoring',
        startingAt: '$47.00',
        period: 'Per Month',
        priceDetails: '',
        url: 'https://www.logmein.com/central?utm_source=lmiinc&utm_content=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/26c07304dd56428e9a1b0827aeaef95d.png',
        monthlyStartsPrice: 45,
        annualStartsPrice: 540,
        tags: ['Monitoring', 'Alerts', 'Reporting']
    },
    'LastPass Teams': {
        name: 'LastPass Teams',
        description: 'Instantly add and remove team members, safely share passwords with others and give each employee their own vault for safeguarding passwords.',
        startingAt: '$0.00',
        period: 'Per Month',
        priceDetails: '',
        url: 'https://www.lastpass.com/hp',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 0,
        annualStartsPrice: 0,
        tags: ['Small Business', 'Secure Access']
    },
    'GoToWebinar': {
        name: 'GoToWebinar',
        description: 'With GoToWebinar you can increase brand awareness & generate leads, educate employees & customers with online training, keep everyone informed through town-hall events',
        startingAt: '$20.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://www.gotomeeting.com/webinar?c_name=lmi&c_prod=g2w&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/2860681576d043c190c154b57ba528d2.svg',
        monthlyStartsPrice: 20,
        annualStartsPrice: 240,
        tags: ['Webinars']
    },
    'GoToMeeting (free with GoToWebinar)': {
        name: 'GoToMeeting (free with GoToWebinar)',
        description: 'With every GoToWebinar, a free license to GoToMeeting',
        startingAt: '$0.00',
        period: 'Per Month',
        priceDetails: 'Up to 150 attendees. Unlimited Meetings.',
        url: 'https://www.gotomeeting.com/?c_name=lmi&c_prod=g2m&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/d72ccd0387fe45048ef32d83320e5008.svg',
        monthlyStartsPrice: 0,
        annualStartsPrice: 0,
        tags: ['Meetings']
    },
    'RescueAssist Mobile Add-on': {
        name: 'RescueAssist Mobile Add-on',
        description: 'It’s important to support your customers no matter where they are. This add-on enables RescueAssist to support more devices and keep your mobile users on-the-move.',
        startingAt: '$20.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://get.gotoassist.com/?c_name=lmi&c_prod=g2a&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/918fa2b2537a4a7f9ab6de6b6b50a5bf.png',
        monthlyStartsPrice: 20,
        annualStartsPrice: 240,
        tags: ['Remote Support', 'Mobile']
    },
    'RescueLens': {
        name: 'RescueLens',
        description: 'Remotely guide end users through troubleshooting, problem resolution, product setup and more with Rescue Lens. See the power of live interactive video.',
        startingAt: '$0.00',
        period: 'Per Month',
        priceDetails: 'Billed Annually.',
        url: 'https://www.logmeinrescue.com/remote-support-features/remote-support/video-support-rescue-lens',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/41b8bb428ea54b3b93883c0729e7a1a4.png',
        monthlyStartsPrice: 0,
        annualStartsPrice: 0,
        tags: ['Interactive Video Support', 'Augmented Reality']
    },
    'GoToAssist Seeit': {
        name: 'GoToAssist Seeit',
        description: 'Identify problems. Find solutions. GoToAssist Seeit allows employees and customers to do it all from their smartphone cameras.',
        startingAt: '$31.00',
        period: 'Per Month',
        priceDetails: 'Per Technician. Billed Annually.',
        url: 'https://get.gotoassist.com/seeit?c_name=lmi&c_prod=g2a-seeit&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/05ddec6fb1fc41548c5dffdf7b763c02.png',
        monthlyStartsPrice: 31,
        annualStartsPrice: 372,
        tags: ['Interactive Video Support', 'Augmented Reality']
    },
    'LastPass Premium (free with Pro)': {
        name: 'LastPass Premium (free with Pro)',
        description: 'LastPass remembers all your passwords so you don\'t have to.',
        startingAt: '$0.00',
        period: 'Per Month',
        priceDetails: 'Pro Free Add-on.',
        url: 'https://www.lastpass.com/hp',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 0,
        annualStartsPrice: 0,
        tags: ['Identity & Access', 'Security']
    },
    'GoToMeeting': {
        name: 'GoToMeeting',
        description: 'Hold online meetings with up to 250 participants. With GoToMeeting, share screens and collaborate with HD video conferencing.',
        startingAt: '$18.00',
        period: 'Per Month',
        priceDetails: 'Starter Package. 10 Participants',
        url: 'https://www.gotomeeting.com/?c_name=lmi&c_prod=g2m&c_cmp=products',
        logo: 'https://logmeincdn.azureedge.net/sc-gotomedia/-/media/d72ccd0387fe45048ef32d83320e5008.svg',
        monthlyStartsPrice: 18,
        annualStartsPrice: 168,
        tags: ['Meetings']
    },
    'RescueAssist Service Desk': {
        name: 'RescueAssist Service Desk',
        description: 'Simple to deploy and simple to use, GoToAssist Service Desk makes it easy to implement ITIL best practices.',
        startingAt: '$39.00',
        period: 'Per Month',
        priceDetails: 'Per Technician. Billed Annually.',
        url: 'https://get.gotoassist.com/service-desk',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/918fa2b2537a4a7f9ab6de6b6b50a5bf.png',
        monthlyStartsPrice: 39,
        annualStartsPrice: 372,
        tags: ['Remote Support', 'Helpdesk']
    },
    'LastPass MFA': {
        name: 'LastPass MFA',
        description: 'Leverage biometric and contextual factors to better protect your business while simplifying the employee login experience.',
        startingAt: '$3.00',
        period: 'Per User/Month.',
        priceDetails: 'Billed Annually.',
        url: 'https://www.lastpass.com/products/multifactor-authentication',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 3,
        annualStartsPrice: 36,
        tags: ['Biometric Access']
    },
    'LastPass Identity': {
        name: 'LastPass Identity',
        description: 'LastPass Identity gives granular control to IT and frictionless access to users.',
        startingAt: '$8.00',
        period: 'Per User/Month.',
        priceDetails: 'Billed Annually.',
        url: 'https://www.lastpass.com/products/identity',
        logo: 'https://logmeincdn.azureedge.net/sc-newcomedia/-/media/ffafac81b70a40f39ca4533854cd4e86.png',
        monthlyStartsPrice: 8,
        annualStartsPrice: 96,
        tags: ['User Access Management']
    },
}

/* knownFeatures is the list of known features in sorted order */
const knownFeatures = ['Enterprise',	'Small Business',	'Individual',	'AI Support',	'Remote Support',	'Helpdesk',	'Mobile',	'Augmented Reality',	'Remote Access',	'Unattended Remote Access',	'Security',	'Secure Docs',	'Identity & Access',	'Meetings',	'Webinars',	'Training', 'Conference Rooms',	'Voice']






/* productMatrix is the matrix map of products by the features */
const productMatrix = {
    'GoToConnect': [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1.1],
    'OpenVoice': [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'GoToMeeting': [1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    'GoToRoom': [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1.1,0],
    'GoToWebinar': [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1.1,0,0,0],
    'GoToTraining': [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1.1,0,0],
    'join.me': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'Grasshopper': [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.1],
    'Grasshopper Connect': [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    'Rescue Remote Support': [1,0,0,0,1,1,-1,1,0,0,0,0,0,0,0,0,0,0],
    'Rescue Remote & Mobile Support': [1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
    'RescueAssist': [0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    'LastPass Premium': [0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
    'LastPass Families': [0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
    'LastPass Teams': [0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
    'LastPass Enterprise': [1,0,0,0,0,0,0,0,0,0,1,1.1,1,0,0,0,0,0],
    'LastPass MFA': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'LastPass Identity': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'Central': [1,1,1,0,0,0,0,0,1,1.1,0,0,0,0,0,0,0,0],
    'Pro': [0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
    'GoToMyPC': [0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0],
    'Bold360': [1,0,0,1.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
}

/* addonMatrix is the matrix map of products by the features */
const addonMatrix = {
    'Central Security': [1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    'Central Automation': [1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    'Central Insight': [1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
    'LastPass Teams': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'GoToWebinar': [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'GoToMeeting (free with GoToWebinar)': [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    'RescueAssist Mobile Add-on': [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    'RescueLens': [1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    'GoToAssist Seeit': [0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    'LastPass Premium (free with Pro)': [0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
    'GoToMeeting' : [1,1,0,0,1,1,0,0,0,0,0,0,0,-1,-1,0,0,0],
    'RescueAssist Service Desk': [0,1,1,0,0,1.1,0,0,0,0,0,0,0,0,0,0,0,0],
    'LastPass MFA': [1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
    'LastPass Identity': [1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
}

/* productScore translates feature bits to product scores */
const productScore = (featurebits) => {
    let scores = Object.keys(knownProducts).map((product)=>{
        // sum product of business type
        let arr1 = productMatrix[product].slice(0,3).map((v, i)=>{
            return v*featurebits.slice(0,3)[i]
        })
        let sum1 = arr1.reduce((a,b)=>a+b, 0)
        // sum product of features
        let arr2 = productMatrix[product].slice(3,productMatrix[product].length).map((v,i)=>{
            return v*featurebits.slice(3,productMatrix[product].length)[i]
        })
        let sum2 = arr2.reduce((a,b)=>a+b, 0)
        // minifs
        let score = (Math.min(...arr2)<0)?0:sum1*sum2
        // score
        return {name:product,score:score}
    })
    scores.sort((a,b)=>{return b.score - a.score})
    return scores
}

/* addonScore translates feature bits to product scores */
const addonScore = (featurebits) => {
  let scores = Object.keys(knownAddons).map((addon)=>{
      // sum product of business type
      let arr1 = addonMatrix[addon].slice(0,3).map((v, i)=>{
          return v*featurebits.slice(0,3)[i]
      })
      let sum1 = arr1.reduce((a,b)=>a+b, 0)
      // sum product of features
      let arr2 = addonMatrix[addon].slice(3,addonMatrix[addon].length).map((v,i)=>{
          return v*featurebits.slice(3,addonMatrix[addon].length)[i]
      })
      let sum2 = arr2.reduce((a,b)=>a+b, 0)
      // minifs
      let score = (Math.min(...arr2)<0)?0:sum1*sum2
      // score
      return {name:addon,score:score}
  })
  scores.sort((a,b)=>{return b.score - a.score})
  return scores
}

/* getProductInfo gets the detailed info for a product */
const getProductInfo = (product) => {
    return knownProducts[product]
}

/* getAddonInfo gets the detailed info for a product */
const getAddonInfo = (addon) => {
    return knownAddons[addon]
}

/* recommend gets product and addon recommendation from a given business type and a set of features */
const getRecommendations = (businessType, features) => {
    let featurebits = []
    // push businessType
    featurebits.push((businessType==='Enterprise')?1:0)
    featurebits.push((businessType==='Small Business')?1:0)
    featurebits.push((businessType==='Individual')?1:0)
    // push features
    featurebits.push((features.includes('AI Support')?1:0))
    featurebits.push((features.includes('Remote Support')?1:0))
    featurebits.push((features.includes('Helpdesk')?1:0))
    featurebits.push((features.includes('Mobile')?1:0))
    featurebits.push((features.includes('Augmented Reality')?1:0))
    featurebits.push((features.includes('Remote Access')?1:0))
    featurebits.push((features.includes('Unattended Remote Access')?1:0))
    featurebits.push((features.includes('Security')?1:0))
    featurebits.push((features.includes('Secure Docs')?1:0))
    featurebits.push((features.includes('Identity & Access')?1:0))
    featurebits.push((features.includes('Meetings')?1:0))
    featurebits.push((features.includes('Webinars')?1:0))
    featurebits.push((features.includes('Training')?1:0))
    featurebits.push((features.includes('Conference Rooms')?1:0))
    featurebits.push((features.includes('Voice')?1:0))
    // console.log(featurebits)
    // scoring
    let recProducts = productScore(featurebits)
    let recAddons = addonScore(featurebits)
    // filter out zeroes
    recProducts = recProducts.filter((product)=>{
        return product.score>0
    })
    recAddons = recAddons.filter((addon)=>{
        return addon.score>0
    })
    // max 5 results
    let topProducts = recProducts.slice(0,5).map((product)=>{
        return {
            score: product.score,
            product: getProductInfo(product.name)
        }
    })
    let topAddons = recAddons.slice(0,5).map((addon)=>{
        return {
            score: addon.score,
            addon: getAddonInfo(addon.name)
        }
    })
    return {products: topProducts, addons: topAddons}
}
