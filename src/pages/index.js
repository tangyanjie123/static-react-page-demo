import React from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const HomePage = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px', color: '#1890ff' }}>Antd Collapse 示例</h1>
      
      <Collapse defaultActiveKey={['1']} accordion>
        <Panel header="🚀 React 简介" key="1">
          <p>
            React 是一个用于构建用户界面的 JavaScript 库。它由 Facebook 开发和维护，
            是目前最流行的前端框架之一。React 的核心思想是组件化开发，让你可以将复杂的 UI 
            拆分成独立的、可复用的组件。
          </p>
        </Panel>
        
        <Panel header="🎨 Ant Design 介绍" key="2">
          <p>
            Ant Design 是一套企业级 UI 设计语言和 React 组件库。它提供了丰富的高质量组件，
            帮助开发者快速构建优美的企业级应用。当前使用的版本是 4.24.16。
          </p>
        </Panel>
        
        <Panel header="📦 Collapse 组件特性" key="3">
          <p>
            Collapse 折叠面板可以折叠/展开内容区域。使用场景包括：
          </p>
          <ul>
            <li>对复杂区域进行分组和隐藏，保持页面整洁</li>
            <li>手风琴模式，每次只能展开一个面板</li>
            <li>支持自定义面板头部、图标等</li>
          </ul>
        </Panel>
        
        <Panel header="💡 学习资源" key="4">
          <p>
            推荐学习资源：
          </p>
          <ul>
            <li>React 官方文档: https://react.dev</li>
            <li>Ant Design 官方文档: https://ant.design</li>
            <li>Create React App: https://create-react-app.dev</li>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
};

export default HomePage;

