import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import styles from './index.module.scss';

// interface IParagraphProps {
//   title: string;
//   subtitle: JSX.Element;
//   content: JSX.Element;
// }

const Paragraph = ({ title, subtitle, content }) => {
  const href = `#${title.toLowerCase()}`;

  const [isOpen, setOpen] = useState(false);

  function lenChange() {
    setOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <h2 onClick={lenChange}>
        <a href={href}>{title}</a>
        <a href={href} className={styles.hash}>
          #
        </a>
      </h2>

      <div className={styles.titleUndreline}></div>
      {subtitle}
      <div className={styles.secondTitle + (isOpen ? '' : styles.active)}>
        {content}
      </div>
    </div>
  );
};

export default Paragraph;

/**
 * Class Component
 *
 * class Component implments React.Component {}
 *
 * return <Component />
 *
 * >
 * const c = new Component() // constructor
 * c.render()
 * ...
 * c.componentDidMount()
 *
 * > this.setState()
 * c.render()
 * ...
 * c.componentDidUpdate()
 *
 * c.componentWillUnmount()
 */

/**
 * Function Component
 *
 * const Component = () => {}
 *
 * return <Component />
 *
 * > init render
 * Component() // a: [''] => api()
 *
 * > setCount(1)
 * Component() // a: [''] => x
 *
 * > setName('abc')
 * Component() // a: ['abc'] => api('abc')
 *
 *
 */

const createArr = () => {
  return Array.from({ length: 1000 }, () => {
    console.log('hello');
    return 0;
  });
};

/**
 * ComponentName()
 *   name = '' => calc => ['', '', ...]
 *   onInputChange = () => ''-${value} // #1
 *
 * > setName('abc')
 * ComponentName()
 *   name = 'abc' => calc => ['abc', 'abc', ...] // #4
 *   onInputChange = () => 'abc'-${value} // #2
 *
 * > setCount(1)
 * ComponentName()
 *   name = 'abc' => #4
 *   onInputChange = () => 'abc'-${value} // #2
 */
/**
 * Custom Hook
 *
 * ComponentName()
 *   useInput()
 *     useState()
 *     useCallback()
 *   useState()
 *   useState()
 *
 *   useEffect()
 *   useEffect()
 */
const useInput = (): [
  string,
  (e) => void,
  { setName: (name: string) => void },
] => {
  const [name, setName] = useState('');
  const onInputChange = useCallback((e) => setName(e.target.value), [name]);
  return [name, onInputChange, { setName }];
};

const useVideoList = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    // api().then((res) => {
    //   setVideoList(res.videoList);
    // });
  }, []);

  return videoList;
};

const ComponentName = (props) => {
  // const t1 = useState(initState) // t1 = [state, setState]
  // const r1 = useRef(initValue) // r1 = { current: initValue }
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);

  const [name, onInputChange, { setName }] = useInput();
  const [name1, onInputChange1] = useInput();
  const [name2, onInputChange2] = useInput();

  const videoList = useVideoList();

  // const visible = useDocumentVisibility();
  // useDocumentVisibilityChange((visible: boolean) => {
  //
  // });

  useEffect(() => {
    // const [count, setCount] = useState(0); x
    countRef.current = count;
  }, [count]);

  const extendName = useMemo(() => {
    return createArr().map(() => `xxx-${name}`);
  }, [name]);

  useEffect(() => {
    // componentDidUpdate
  });

  useEffect(() => {
    // componentDidMount
    setName('abc');
    name; // ''

    return () => {
      // componentWillUnomount
      console.log('unmount');
    };
  }, []);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // const el: HTMLInputElement | null
    const el = ref.current;
    if (el) {
      // const el: HTMLInputElement
      el.value;
    }
  }, [ref]);

  // useDocumentTitle(name);
  // useEffect(
  //   () => {
  //     document.title = name;
  //     // api(name);
  //   }, // cb callback
  //   [name], // a
  // );

  /**
   * name = ''
   * effect
   *   document.addEventListener('')
   *   return () => remove('') // #1
   *
   * > setCount(1)
   * name = ''
   * effect
   *   x
   *
   * > setName('click')
   * effect
   *   #1()
   *   document.addEventListener('click')
   *
   *
   * > destroy component
   * #1()
   */
  useEffect(() => {
    const cb = () => {};
    document.addEventListener(name, cb);

    return () => {
      document.removeEventListener(name, cb);
    };
  }, [name]);

  const isEmpty = true;

  if (isEmpty) return null;

  return (
    <>
      <input ref={ref} type="text" value={name} onChange={onInputChange} />
      <input ref={ref} type="text" value={name1} onChange={onInputChange1} />
      <input ref={ref} type="text" value={name2} onChange={onInputChange2} />
    </>
  );
};
