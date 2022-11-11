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
