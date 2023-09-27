import React, { useState } from 'react';
import { TabsBlock, TabButton, TabListItem, Content } from './style';

function Tabs({ tabsList = [] }) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <TabsBlock>
        {tabsList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: 'span' }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    },
                  })}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </TabsBlock>
      <Content>{tabsList[selectIndex].content}</Content>
    </div>
  );
}

export default Tabs;
