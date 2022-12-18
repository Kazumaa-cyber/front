import React from 'react';
import styles from './index.module.scss';

class HeadTitle extends React.Component {
  constructor(props) {
    // vue: beforeMounted
    super(props);

    this.state = {
      isGreen: false,
      writerLen: this.props.subtitle.length,
    };

    this.toggleTitle = this.toggleTitle.bind(this);
    this.typeWriterAnimation = this.typeWriterAnimation.bind(this);
    // this.titleRef = React.createRef(); // { current: }
  }

  componentDidMount(props) {
    // vue: mounted
    // console.log('componentDidMount', props, this.state);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // vue: updated
    // console.log('componentDidUpdate', prevProps, prevState);
    if (prevProps.subtitle !== this.props.subtitle) {
      this.setState({
        writerLen: this.props.subtitle.length,
      });
      if (this.writerTimer) {
        clearTimeout(this.writerTimer);
        this.typeWriterAnimation();
      }
    }
  }

  toggleTitle() {
    // this.titleRef.current.classList.toggle('red');
    this.setState({
      isGreen: !this.state.isGreen,
    });
  }

  typeWriterAnimation() {
    const duration = 1500;
    const maxLen = this.props.subtitle.length;
    const delay = duration / maxLen;

    this.setState({
      writerLen: 1,
    });

    const next = () => {
      if (this.state.writerLen < maxLen) {
        this.setState({
          writerLen: this.state.writerLen + 1,
        });
        this.writerTimer = setTimeout(next, delay);
      } else {
        this.writerTimer = null;
      }
    };

    this.writerTimer = setTimeout(next, delay);
  }

  render() {
    const { title, subtitle, abstract } = this.props;

    return (
      <>
        <h1
          // ref={this.titleRef}
          className={`${styles.title} ${this.state.isGreen ? 'green' : ''}`}
          onClick={this.toggleTitle}
        >
          {title}
        </h1>
        <div className={styles.subtitle} onClick={this.typeWriterAnimation}>
          {subtitle.substring(0, this.state.writerLen)}
        </div>
        <div>
          {abstract.map(({ paragraph }) => (
            <p className={styles.abstract} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </>
    );
  }
}

// const HeadTitle = (props) => {
//   const { title, subtitle, abstract } = props;
//   // const subDescription = {subtitle}
//   // handleClick(()=>{
//   //   subDescription.textContent = '';
//   //   const content = 'Rust-based platform for the Web';
//   //   let len = 1;

//   //   const next = () => {
//   //     if (len < content.length) {
//   //       len++;
//   //       subDescription.textContent = content.substring(0, len);
//   //     setTimeout(next, 300);
//   //   }
//   // };

//   // setTimeout(next, 300);
//   // });

//   return (
//     <>
//       <h1 className={styles.title}>{title}</h1>
//       <div className={styles.subtitle}>{subtitle}</div>
//       <div>
//         {abstract.map(({ paragraph }) => (
//           <p className={styles.abstract}>{paragraph}</p>
//         ))}
//       </div>
//     </>
//   );
// };

export default HeadTitle;
