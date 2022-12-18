import React, { FC } from 'react';

interface InnerComponentProps {
  children: (name: string) => React.ReactNode;
}

const InnerComponent: FC<InnerComponentProps> = ({ children }) => {
  // const name = 'superfree';
  const firstName = 'AAA';
  const lastName = 'BBB';

  // computed
  const name = `${firstName}+${lastName}`;

  // const writerLen = props.subtitle.length;

  const onClick = () => {};

  return <div onClick={onClick}>{children(name)}</div>;
};

const RenderProps = () => {
  return <InnerComponent>{(name: string) => `Hello ${name}`}</InnerComponent>;
};

export default RenderProps;
