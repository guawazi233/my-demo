import React from 'react'
import { Layout, Tree } from "antd";
const { Sider } = Layout;
const { DirectoryTree } = Tree;
const treeData = [
  {
      title: 'React-Router',
      key: '0-0',
      children: [
          {
              title: '背景',
              key: '0-0-0',
              isLeaf: true,
          },
          {
              title: '实现',
              key: '0-0-1',
              isLeaf: true,
          },
          {
              title: '延申',
              key: '0-0-2',
              isLeaf: true,
          },
      ],
  },
  {
      title: 'parent 1',
      key: '0-1',
      children: [
          {
              title: 'leaf 1-0',
              key: '0-1-0',
              isLeaf: true,
          },
          {
              title: 'leaf 1-1',
              key: '0-1-1',
              isLeaf: true,
          },
      ],
  },
];

export default function RouterPage() {
  return (
    <Sider width={200} className="sideTree">
      <DirectoryTree
        multiple
        defaultExpandAll
        // onSelect={onSelect}
        // onExpand={onExpand}
        treeData={treeData}
        style={{ backgroundColor: 'rgb(142 123 199' }}
      />
    </Sider>
  )
}
