import React, { useState } from 'react';
import { TabsBlock, TabButton } from './style';

function Tabs(tabList = []) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <TabsBlock>
        {tabList.map((tab, index) => (
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
    </div>
  );
}

export default Tabs;
