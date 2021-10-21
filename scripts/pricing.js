const pricing = [
  {
    service: 'Ad Campaign',
    basic: 'Basic | 200$',
    standard: 'Standard | 300-400$',
    premium: 'Premium | 500-600$'
  },
  {
    service: 'Search Engine Optimization',
    basic: 'Basic | 100-200$',
    standard: 'Standard | 500-650$',
    premium: 'Premium | 700-850$'
  },
  {
    service: 'Website Design & Development',
    basic: 'Portfolio | 100-150$',
    standard: 'Business Website | 300-400$',
    premium: 'Industrial Website | 500-600$'
  },
  {
    service: 'UI/UX Design',
    basic: 'Web Application UI | 100-150$',
    standard: 'Mobile App UI | 300-400$',
    premium: 'E-Commerce UI | 500-600$'
  },
  {
    service: 'Ecommerce Website',
    basic: 'Small E. Website | 100-150$',
    standard: 'Medium E. Website | 300-400$',
    premium: 'Large E. Website | 500-600$'
  },
]

const basicStandardPremiumArr = [
  {
    name: 'adCampaign',
    basic: ['Monthly 5 Ads Campaign', '5 Promotional Contents / month', 'Facebook ad budget $50', 'Instagram Ad Budget $50', 'Google Ad Budget $50', 'Pixel Setup', 'Google Tag Manager Setup'],
    standard: ['Monthly 8 Campaigns', '8 Promotional Contents / month', 'Facebook ad budget $150', 'Instagram Ad Budget $150', 'Google Ad Budget $150', 'Pixel + Conversion CAPI Setup', 'Google Analytics UA+ 4 Setup'],
    premium: ['Monthly 12 Campaigns', 'Monthly 5 Ads Campaign', 'Monthly 8 Campaigns', '5 Promotional Contents / month', '8 Promotional Contents / month', '12 Promotional Contents / month']
  },
  {
    name: 'searcEngineOptimization',
    basic: ['Small Website (3-6 Page)', 'Complete On Page SEO', '10 keyword Research', '3 Content Support', 'Google & Bing Webmaster Submission', '20 Web 2.0 Backlink', 'Page Audit'],
    standard: ['Medium Website (7-10 Page)', 'On Page + OFF Page SEO', '20 Keyword Research (8 Buying Keyword)', '5 Content Support', '3 Competitor Research', 'Identify & broken link fix', 'Schema Markup + Structured Data Setup'],
    premium: ['Large Website (10-15 Page)', 'On Page + OFF Page + Local SEO', '40 Keyword Research (15 Buying Keyword)', '8 Content Support', '5 Competitor Research', 'Identify & broken link fix', 'Schema Markup + Structured Data Setup']
  },
  {
    name: 'webDesignAndDevelopment',
    basic: ['Wireframe', 'UI Prototype (up to 2-4 pages)', 'Web Copywriting', 'Blog Copywriting (up to 2 blogs)', 'Creative Asset Design (up to 5 assets)', 'Server Upload'],
    standard: ['Wireframe', 'UI Prototype (up to 5-10 pages)', 'Web Copywriting', 'Blog Copywriting (up to 5 blogs)', 'Creative Asset Design (up to 10 assets)', 'Free Website Maintenance (1 month)', 'Dynamic Dashboard '],
    premium: ['UX Wireframe', 'UI Prototype (up to 10-15 pages)', 'Web Copywriting', 'Blog Copywriting (up to 8 blogs)', 'Creative Asset Design (up to 15 assets)', 'Free Website Maintenance (2 month)', 'Dynamic Dashboard']
  },
  {
    name: 'uiUxDesign',
    basic: ['Wireframe', 'UI Prototype', 'Responsive Design', 'Creative Asset Design (up to 5 assets)', 'UI Writing', 'Product Design', 'Packaging Design'],
    standard: ['Wireframe', 'UI Prototype (up to 5-10 pages)', 'Responsive Design', 'Creative Asset Design (up to 10 assets)', 'UI Writing', 'Product Design', 'Packaging Design'],
    premium: ['Wireframe', 'UI Prototype (up to 10-15 pages)', 'Responsive Design', 'Creative Asset Design (up to 15 assets)', 'UI Writing', 'Product Design', 'Packaging Design']
  },
  {
    name: 'ecommerce',
    basic: ['Wireframe', 'Dashboard Development', 'UI Prototype (up to 3-5 pages)', 'Product Listing (up to 10)', 'Product Category (up to 05)', 'Checkout Process', 'Server Upload'],
    standard: ['Wireframe', 'Dynamic Dashboard', 'UI Prototype (up to 5-10 pages)', 'Product Listing (up to 20)', 'Product Category (up to 10)', 'Checkout Process', 'Server Upload'],
    premium: ['Wireframe', 'Dynamic Dashboard', 'UI/UX Prototype (up to 12-18 pages)', 'Product Listing (up to 30)', 'Multi-vendor management', 'Multilingual + multi-currency support', 'Server Upload', 'Product Category (up to 15)', 'International Payment Gateaway']
  }
]

const allPricingService = document.querySelectorAll('.service-price')
const pricingCategories = document.querySelectorAll('#progress li h4')
const nodes = document.querySelectorAll('.node')
const basic = document.querySelector('.basic')
const standard = document.querySelector('.standard')
const premium = document.querySelector('.premium')
const attributes = document.getElementById('attributes')


function test() {
  activeClass(allPricingService, 'pactive')
  activeClass(pricingCategories, 'cactive')
  let basicArr = basicStandardPremiumArr[0].basic
   let standardArr = basicStandardPremiumArr[0].standard
   let premiumArr = basicStandardPremiumArr[0].premium
   
   basicStandardPremium(basicArr, standardArr, premiumArr)
}

test()

;[...allPricingService].forEach((price, index) => {
  price.addEventListener('click', () => {
  activeClass(allPricingService, 'pactive')
  activeClass(pricingCategories, 'cactive')
   basic.innerText = pricing[index].basic
   standard.innerText = pricing[index].standard
   premium.innerText = pricing[index].premium
   let basicArr = basicStandardPremiumArr[index].basic
   let standardArr = basicStandardPremiumArr[index].standard
   let premiumArr = basicStandardPremiumArr[index].premium

  basicStandardPremium(basicArr, standardArr, premiumArr) 
  featureBuilid(basicArr)
  featureBuilid(standardArr)
  featureBuilid(premiumArr)
  })
})

function basicStandardPremium(basicArr, standardArr, premiumArr) {

  basic.addEventListener('click', () => {
    featureBuilid(basicArr)
    activeNodeClass(nodes, 'nactive', 1)
  })
  standard.addEventListener('click', () => {
    featureBuilid(standardArr)
    activeNodeClass(nodes, 'nactive', 2)
  })
  premium.addEventListener('click', () => {
    featureBuilid(premiumArr)
    activeNodeClass(nodes, 'nactive', 3)
  })

}

function featureBuilid(arr) {
  let html = '' 
  arr.forEach(a => {
    html += `<li>${a}</li>`
  })
  attributes.innerHTML = html
}

function activeClass(node, activeClassName) {
  ;[...node].forEach(n => {
    n.addEventListener('click', (e) => {
      const elems = document.querySelector(`.${activeClassName}`);
      if(elems != null) {
        elems.classList.remove(activeClassName);
      }
      e.target.classList.add(activeClassName)
    })
  })
}

function activeNodeClass(node, activeClassName, num) {
  [...node].forEach((n, index) => {
    if (index + 1 == num) {
      n.classList.add(activeClassName)
    } else {
      n.classList.remove(activeClassName)
    }
  })
}


