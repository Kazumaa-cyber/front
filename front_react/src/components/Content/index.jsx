import React from "react";
import DataList from "./components/DataList";
import InlineCode from "./components/InlineCode";

import LinkList from "./components/LinkList";
import Paragraph from "./components/Paragraph";
import RedCode from "./components/RedCode";
import HeadTitle from "./components/HeadTitle";
import StatLabel from "./components/StatLabel";
import HrefText from "./components/HrefText";

import styles from "./index.module.scss";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          href: "https://swc.rs/docs/getting-started",
          text: "Get Started",
        },
        {
          href: "https://swc.rs/docs/getting-started",
          text: "Playground",
        },
        {
          href: "https://swc.rs/docs/getting-started",
          text: "Blog",
        },
        {
          href: "https://swc.rs/docs/getting-started",
          text: "Rustdocs",
        },
        {
          href: "https://swc.rs/docs/getting-started",
          text: "GitHub Repository",
        },
        {
          href: "https://swc.rs/docs/getting-started",
          text: "Donate",
        },
      ],
      osList: [
        {
          title: "Mac",
          description: "Apple Silicon",
        },
        {
          title: "Mac",
          description: "x64",
        },
        {
          title: "Linux",
          description: "x86_64",
        },
        {
          title: "Linux",
          description: "aarch64",
        },
        {
          title: "Linux",
          description: "armv7",
        },
        {
          title: "Alpine Linux",
          description: (
            <>
              <span>also install</span>{" "}
              <InlineCode text="@swc/core-linux-musl" />
            </>
          ),
        },
        {
          title: "Android",
          description: "aarch64",
        },
        {
          title: "Windows",
          description: "win32-x64",
        },
        {
          title: "Windows",
          description: "ia32",
        },
      ],
      featureList: [
        { title: "Compilation" },
        { title: "Bundling", description: <InlineCode text="swcpack" /> },
        { title: "Minification" },
        { title: "Transforming with WebAssembly" },
        {
          title: "Usage inside webpack",
          description: <InlineCode text="swc-loader" />,
        },
        {
          title: "Improving Jest performance",
          description: <InlineCode text="@swc/jest" />,
        },
        { title: "Custom Plugins" },
      ],
      abstractList: [
        {
          paragraph:
            "SWC is an extensible Rust-based platform for the next generation of fast developer tools. It's used by tools like Next.js, Parcel, and Deno, as well as companies like Vercel, ByteDance, Tencent, Shopify, and more.",
        },
        {
          paragraph:
            " SWC can be used for both compilation and bundling. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers.",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <HeadTitle
            title={"SWC"}
            subtitle={"Rust-based platform for the Web"}
            abstract={this.state.abstractList}
          />
          <RedCode
            content={
              <p style={{ margin: "8px 4px 8px 8px" }}>
                SWC is <strong>20x faster than Babel </strong>on a single thread
                and<strong> 70x faster </strong>on four cores.
              </p>
            }
          />
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
            content={
              <div>
                <p>
                  SWC is designed to be extensible. Currently, there is support
                  for:
                </p>
                <DataList data={this.state.featureList} />
                <p>
                  <HrefText
                    href={"https://twitter.com/kdy1dev"}
                    text={"Learn more"}
                  />
                  .
                </p>
              </div>
            }
          />
          <Paragraph
            title="Community"
            subtitle={
              <div style={{ display: "flex", marginTop: "-24px", gap: "10px" }}>
                <StatLabel
                  title="stars"
                  subtitle="25.1K"
                  subtitleBgColor="blue"
                />
                <StatLabel
                  title="downloads"
                  subtitle="32.1M/week"
                  subtitleBgColor="green"
                />
              </div>
            }
            content={
              <div>
                <p style={{ lineHeight: 3 }}>
                  SWC is created by{" "}
                  <HrefText
                    href={"https://twitter.com/kdy1dev"}
                    text={"@kdy1dev"}
                  />
                  . Follow{" "}
                  <HrefText
                    href={"https://twitter.com/kdy1dev"}
                    text={"@kdy1dev"}
                  />
                  {" "}on Twitter for future project updates.
                </p>
                <p>
                  Feel free to join the{" "}
                  <HrefText
                    href={"https://github.com/swc-project/swc/discussions"}
                    text={"discussions on GitHub"}
                  />
                  !
                </p>
              </div>
            }
          />
          <div className={styles.updateDate}>
            <p
              style={{
                textAlign: "right",
                fontSize: "0.75em",
                color: "#6b7280",
              }}
            >
              Last updated on 2022年8月29日
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
