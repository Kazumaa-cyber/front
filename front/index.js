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

// HTMLElement, wrapper, container
const osListEl = document.querySelector('#os_list');
const featureList = document.querySelector('#feature_list');

const osContentList = [
  {
    name: 'Mac (Apple Silicon)',
  },
  {
    name: 'Mac (x64)',
  },
  {
    name: 'Linux (x86_64)',
  },
  {
    name: 'Linux (aarch64)',
  },
  {
    name: 'Linux (armv7)',
  },
  {
    // name: 'Alpine Linux (also install<span>@swc/core-linux-musl</span>)',
    name: 'Alpine Linux (also install',
    span_context: '@swc/core-linux-musl',
  },
  {
    name: 'Android (aarch64)',
  },
  {
    name: 'Windows (win32-x64)',
  },
  {
    name: 'Windows (ia32)',
  },
  {
    title: 'Windows',
    description: 'ia32',
  },
  {
    title: 'Alpine Linux',
    description:
      'also install <span class="code_style">@swc/core-linux-musl</span>',
  },
];

const featureContentList = [
  {
    name: 'Compilation',
  },
  {
    name: 'Bundling (',
    span_context: 'wcpack',
  },
  {
    name: 'Minification',
  },
  {
    name: 'Transforming with WebAssembly',
  },
  {
    name: 'Usage inside webpack (',
    span_context: 'swc-loader',
  },
  {
    name: 'Improving Jest performance (',
    span_context: '@swc/jest',
  },
  {
    name: 'Custom Plugins',
  },
];

/**
 * 模版字符串
 */

/*
function createLi(content) {
  if (!content.excepion) {
    return `<li>${content.name}</li>`;
  } else {
    return `<li>${content.name}
              <span class="code_style">${content.span_context}</span>
            )</li>`;
  }

}


function setInnerHTML(element, arr) {
  const innerHTML = arr.map((element) => createLi(element)).join("");
  element.innerHTML = innerHTML;
}

*/

/**
 * 模版
 */

// const templateEl = query(...)
// templateEl.content = '...'
// const ul = query(...)
// ul.append(templateEl.import)

const li_template1 = document.querySelector('#normal-li');
const li_content1 = li_template1.content.querySelector('li');
let li_template2 = document.querySelector('#codde-list');
let li_content2 = li_template2.content.querySelector('li');
let span_content = li_template2.content.querySelector('span');

// const smallCase = '';
// document.querySelector('.normal-li');

// function createLiAndInsertTo(container, item) {}
function createLi(item /* { title, description } */) {
  if (!item.span_context) {
    const clone = li_template1.content.cloneNode(true);
    console.log('clone', clone);
    clone.querySelector('.title').textContent = item.title || item.name;
    if (item.description) {
      clone.querySelector('.description').innerHTML = `(${item.description})`;
    }
    // {title && <span>123</span>}
    return clone;
  } else {
    li_content2.textContent = item.name;
    span_content.textContent = item.span_context;
    const clone = document.importNode(li_template2.content, true);
    return clone;
  }
}

function setInnerHTML(container, itemList) {
  itemList.forEach((item) => {
    const li = createLi(item);
    container.appendChild(li);
  });
}

setInnerHTML(osListEl, osContentList);
setInnerHTML(featureList, featureContentList);

class OsComponent {
  data = osContentList;
  container = osListEl;

  render() {
    setInnerHTML(this.container, this.data);
  }
}

/**
 * 打字机效果
 */
const title = document.querySelector('#title');
title.addEventListener('click', (e) => {
  console.log(`this is a click event`, e);
  e.target.classList.toggle('red');
  // const hasRed = true;
});

const subtitle = document.querySelector('.center_content .subtitle');
// console.log('subtitle', subtitle)
subtitle.addEventListener('click', () => {
  subtitle.textContent = '';

  const content = 'Rust-based platform for the Web';
  let len = 1;

  const next = () => {
    if (len < content.length) {
      len++;
      subtitle.textContent = content.substring(0, len);
      setTimeout(next, 300);
    }
  };

  setTimeout(next, 300);
});

/*
 * 手风琴效果
 */
// [
//   { block: (), btn: () },
//   { block: (), btn: () },
//   { block: (), btn: () },
// ]
const block1 = document.querySelector('#overview-content');
const block2 = document.querySelector('#feature-content');
const block3 = document.querySelector('#community-content');
const btns = document.querySelectorAll('a.lenChange');
const blocks = [block1, block2, block3];
btns.forEach((item, index) => {
  const block = blocks[index];
  block.classList.add('second-title');
  block.classList.add('active');

  item.addEventListener('click', (e) => {
    console.log('event', e);
    e.preventDefault();
    block.classList.toggle('active');
  });
});

// const func = (onSuccess, onError) => {
//   // ... request()
//   const success = request();

//   if (success) {
//     // success
//     onSuccess(result);
//   } else {
//     // fail
//     onError(error);
//   }
// };

// const handleSucces = (result) => {};

// func(handleSucces, (error) => {});

function onClickBtn() {}
