import React from 'react';
import DataList from './components/DataList';
import InlineCode from './components/InlineCode';

import LinkList from './components/LinkList';
import Paragraph from './components/Paragraph';

import styles from './index.module.scss';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          href: 'https://swc.rs/docs/getting-started',
          text: 'Get Started',
        },
        {
          href: 'https://swc.rs/docs/getting-started',
          text: 'Playground',
        },
        {
          href: 'https://swc.rs/docs/getting-started',
          text: 'Blog',
        },
        {
          href: 'https://swc.rs/docs/getting-started',
          text: 'Rustdocs',
        },
        {
          href: 'https://swc.rs/docs/getting-started',
          text: 'GitHub Repository',
        },
        {
          href: 'https://swc.rs/docs/getting-started',
          text: 'Donate',
        },
      ],
      osList: [
        {
          title: 'Mac',
          description: 'Apple Silicon',
        },
        {
          title: 'Mac',
          description: 'x64',
        },
        {
          title: 'Linux',
          description: 'x86_64',
        },
        {
          title: 'Linux',
          description: 'aarch64',
        },
        {
          title: 'Linux',
          description: 'armv7',
        },
        {
          title: 'Alpine Linux',
          description: (
            <>
              <span>also install</span>{' '}
              <InlineCode text="@swc/core-linux-musl" />
            </>
          ),
        },
      ],
      featureList: [
        { title: 'Compilation' },
        { title: 'Bundling', description: <InlineCode text="swcpack" /> },
        { title: 'Minification' },
        { title: 'Transforming with WebAssembly' },
        {
          title: 'Usage inside webpack',
          description: <InlineCode text="swc-loader" />,
        },
        {
          title: 'Improving Jest performance',
          description: <InlineCode text="@swc/jest" />,
        },
        { title: 'Custom Plugins' },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>SWC</div>
          <LinkList links={this.state.links} />
          <Paragraph
            title="Overview"
            // subtitle={
            //   <div>
            //     # Download prebuilt binaries npm i -D @swc/cli @swc/core #
            //     Transpile JavaScript file and emit to stdout npx swc ./file.js
            //   </div>
            // }
            content={
              <div>
                <p>
                  SWC can be downloaded and used as a pre-built binary, or built
                  from source. Currently, the following binaries are provided:
                </p>
                <DataList data={this.state.osList} />
              </div>
            }
          />
          <Paragraph
            title="Features"
            subtitle={
              <div style={{ display: 'flex', marginTop: '-24px' }}>
                <div className="StatLabel">
                  <div>{'stars'}</div>
                  <div>{'25.1K'}</div>
                </div>
                <div className="StatLabel">
                  <div>{'downloads'}</div>
                  <div>{'32.1M/week'}</div>
                </div>
              </div>
            }
            content={
              <div>
                <p>
                  SWC is designed to be extensible. Currently, there is support
                  for:
                </p>
                <DataList data={this.state.featureList} />
              </div>
            }
          />
          {/* StatLabel */}
          {/* flex */}
          {/* <StatLabel title="stars" subtitle="25.1K" subtitleBgColor="blue" /> */}
          {/* <StatLabel title="downloads" subtitle="32.1M/week" subtitleBgColor="green" /> */}
        </div>
      </div>
    );
  }
}

export default Content;
