console.log("Hello World");

const nav = document.querySelector("#nav");
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
    href: "https://swc.rs/docs/getting-started",
    text: "Get Started",
  },
  {
    href: "https://swc.rs/docs/getting-started",
    text: "Get Started",
  },
  {
    href: "https://swc.rs/docs/getting-started",
    text: "Get Started",
  },
  {
    href: "https://swc.rs/docs/getting-started",
    text: "Get Started",
  },
];

// const innerHTML = links.map((link) => createNavLink(link)).join('');
// nav.innerHTML = innerHTML;

function createNavLink2({ href, text }) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = href;
  a.innerText = text;
  a.style = "color: #0077ff";
  li.appendChild(a);
  return li;
}

links.forEach((link) => {
  const li = createNavLink2(link);
  nav.appendChild(li);
});

const osList = document.querySelector("#os_list");
const featureList = document.querySelector("#feature_list");

const osContentList = [
  {
    name: "Mac (Apple Silicon)",
    excepion: false,
  },
  {
    name: "Mac (x64)",
    excepion: false,
  },
  {
    name: "Linux (x86_64)",
    excepion: false,
  },
  {
    name: "Linux (aarch64)",
    excepion: false,
  },
  {
    name: "Linux (armv7)",
    excepion: false,
  },
  {
    name: "Alpine Linux (also install",
    excepion: true,
    span_context: "@swc/core-linux-musl",
  },
  {
    name: "Android (aarch64)",
    excepion: false,
  },
  {
    name: "Windows (win32-x64)",
    excepion: false,
  },
  {
    name: "Windows (ia32)",
    excepion: false,
  },
];

const featureContentList = [
  {
    name: "Compilation",
    excepion: false,
  },
  {
    name: "Bundling (",
    excepion: true,
    span_context: "wcpack",
  },
  {
    name: "Minification",
    excepion: false,
  },
  {
    name: "Transforming with WebAssembly",
    excepion: false,
  },
  {
    name: "Usage inside webpack (",
    excepion: true,
    span_context: "swc-loader",
  },
  {
    name: "Improving Jest performance (",
    excepion: true,
    span_context: "@swc/jest",
  },
  {
    name: "Custom Plugins",
    excepion: false,
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

let li_template1 = document.querySelector("#normal-li");
let li_content1 = li_template1.content.querySelector("li");
let li_template2 = document.querySelector("#codde-list");
let li_content2 = li_template2.content.querySelector("li");
let span_content = li_template2.content.querySelector("span");

function createLi(element,content) {
  if (!content.excepion) {
    li_content1.textContent = content.name;
    let clone = document.importNode(li_template1.content,true)
    element.appendChild(clone);
  } else {
    console.log(li_template2.content)
    li_content2.textContent = content.name;
    span_content.textContent = content.span_context;
    let clone2 = document.importNode(li_template2.content,true)
    element.appendChild(clone2);
  }
}

function setInnerHTML(element, arr) {
  arr.forEach((el) => createLi(element,el));
}

setInnerHTML(osList, osContentList);
setInnerHTML(featureList, featureContentList);

/**
 * 打字机效果
 */
const title = document.querySelector("#title");
title.addEventListener("click", (e) => {
  console.log(`this is a click event`, e);
  e.target.classList.toggle("red");
});

const subtitle = document.querySelector(".center_content .subtitle");
// console.log('subtitle', subtitle)
subtitle.addEventListener("click", () => {
  subtitle.textContent = "";

  const content = "Rust-based platform for the Web";
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
const block1 = document.querySelector("#overview-content");
const block2 = document.querySelector("#feature-content");
const block3 = document.querySelector("#community-content");
const btns = document.querySelectorAll("a.lenChange");
const blocks = [block1, block2, block3];
btns.forEach((item, index) => {
  const block = blocks[index];
  block.classList.add("second-title");
  block.classList.add("active");
  item.addEventListener("click", () => {
    block.classList.toggle("active");
  });
});
