import { Flex } from '@kyleshevlin/layout'
import React from 'react'
import { Tabs } from './Tabs'
import {
  ITEMS,
  SHARED_BORDER,
  TabsContentWrap,
  TabsTriggerInner,
  TabsWrap,
} from './shared'

export function Custom2() {
  return (
    <Tabs.Root initialValue="Tab 1">
      <TabsWrap>
        <Flex align="stretch">
          <Flex direction="column">
            {ITEMS.map((item, idx) => (
              <div
                key={item.value}
                css={{
                  borderLeft: SHARED_BORDER,
                  borderBottom: SHARED_BORDER,
                  borderTop: idx === 0 ? SHARED_BORDER : 'none',
                }}
              >
                <Tabs.Trigger value={item.value}>
                  {isSelected => (
                    <TabsTriggerInner isSelected={isSelected}>
                      {item.value}
                    </TabsTriggerInner>
                  )}
                </Tabs.Trigger>
              </div>
            ))}
          </Flex>

          <TabsContentWrap>
            {ITEMS.map(item => (
              <Tabs.Content key={item.value} value={item.value}>
                {item.content}
              </Tabs.Content>
            ))}
          </TabsContentWrap>
        </Flex>
      </TabsWrap>
    </Tabs.Root>
  )
}