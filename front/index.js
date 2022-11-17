console.log('Hello World');

const nav = document.querySelector('#nav');
// nav.innerHTML = 'Hello World';
// nav.innerHTML = '<span style="color: red">Hello World</span>';

// const content = document.createElement('span');
// content.style = 'color: green';
// content.innerText = 'Hello World';
// nav.appendChild(content);

function createNavLink({ href, text }) {
  return `<li>
    <a href="${href}" style="color: #0077ff">
      ${text}
    </a>
  </li>`;
}

const links = [
  {
    href: 'https://swc.rs/docs/getting-started',
    text: 'Get Started',
  },
  {
    href: 'https://swc.rs/docs/getting-started',
    text: 'Get Started',
  },
  {
    href: 'https://swc.rs/docs/getting-started',
    text: 'Get Started',
  },
  {
    href: 'https://swc.rs/docs/getting-started',
    text: 'Get Started',
  },
];

// const innerHTML = links.map((link) => createNavLink(link)).join('');
// nav.innerHTML = innerHTML;

function createNavLink2({ href, text }) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = href;
  a.innerText = text;
  a.style = 'color: #0077ff';
  li.appendChild(a);
  return li;
}

links.forEach((link) => {
  const li = createNavLink2(link);
  nav.appendChild(li);
});


const osList = document.querySelector('#os_list');
const featureList = document.querySelector('#feature_list')

const osContentList=[
  {
    name:'Mac (Apple Silicon)',
    excepion:false
  },
  {
    name:'Mac (x64)',
    excepion:false
  },
  {
    name:'Linux (x86_64)',
    excepion:false
  },
  {
    name:'Linux (aarch64)',
    excepion:false
  },
  {
    name:'Linux (armv7)',
    excepion:false
  },
  {
    name:'Alpine Linux (also install',
    excepion:true,
    span_context:'@swc/core-linux-musl'
  },
  {
    name:'Android (aarch64)',
    excepion:false
  },
  {
    name:'Windows (win32-x64)',
    excepion:false
  },
  {
    name:'Windows (ia32)',
    excepion:false
  }
]

const featureContentList = [
  {
    name:'Compilation',
    excepion:false
  },
  {
    name:'Bundling (',
    excepion:true,
    span_context:'wcpack'
  },
  {
    name:'Minification',
    excepion:false
  },
  {
    name:'Transforming with WebAssembly',
    excepion:false
  },
  {
    name:'Usage inside webpack (',
    excepion:true,
    span_context:'swc-loader'
  },
  {
    name:'Improving Jest performance (',
    excepion:true,
    span_context:'@swc/jest'
  },
  {
    name:'Custom Plugins',
    excepion:false
  }
]
  
function createLi(content){
  if(!content.excepion){
    return `<li>${content.name}</li>`
  }else{
    return `<li>${content.name}
              <span class="code_style">${content.span_context}</span>
            )</li>`
  }
}

function setInnerHTML(element,arr){
  const innerHTML = arr.map(element=>createLi(element)).join('')
  element.innerHTML=innerHTML
}

setInnerHTML(osList,osContentList)
setInnerHTML(featureList,featureContentList)