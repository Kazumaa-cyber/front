import React from 'react';

import DataList from '../DataList';
import InlineCode from '../InlineCode';
import Paragraph from '../Paragraph';

const Overview = () => {
  const osList = [
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
          <span>also install</span> <InlineCode text="@swc/core-linux-musl" />
        </>
      ),
    },
    {
      title: 'Android',
      description: 'aarch64',
    },
    {
      title: 'Windows',
      description: 'win32-x64',
    },
    {
      title: 'Windows',
      description: 'ia32',
    },
  ];

  return (
    <Paragraph
      title="Overview"
      content={
        <div>
          <p>
            SWC can be downloaded and used as a pre-built binary, or built from
            source. Currently, the following binaries are provided:
          </p>
          <DataList data={osList} />
        </div>
      }
    />
  );
};

export default Overview;
