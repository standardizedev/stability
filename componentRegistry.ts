import type { DesignSystems } from './types';

import { badgeStories } from './components-library/stability/Badge/Badge.stories';
import { buttonStories } from './components-library/stability/Button/Button.stories';
import { buttonToggleStories } from './components-library/stability/ButtonToggle/ButtonToggle.stories';
import { cardStories } from './components-library/stability/Card/Card.stories';
import { checkboxStories } from './components-library/stability/Checkbox/Checkbox.stories';
import { complexDataTableStories } from './components-library/stability/ComplexDataTable/ComplexDataTable.stories';
import { expansionPanelStories } from './components-library/stability/ExpansionPanel/ExpansionPanel.stories';
import { inputFieldStories } from './components-library/stability/InputField/InputField.stories';
import { multiSelectStories } from './components-library/stability/MultiSelect/MultiSelect.stories';
import { radioButtonStories } from './components-library/stability/RadioButton/RadioButton.stories';
import { selectStories } from './components-library/stability/Select/Select.stories';
import { tabsStories } from './components-library/stability/Tabs/Tabs.stories';
import { showcaseStories } from './components-library/stability/Showcase/Showcase.stories';

export const designSystems: DesignSystems = {
  'Stability': {
    name: 'Stability',
    components: {
      'Showcase': showcaseStories,
      'Badge': badgeStories,
      'Button': buttonStories,
      'ButtonToggle': buttonToggleStories,
      'Card': cardStories,
      'Checkbox': checkboxStories,
      'ComplexDataTable': complexDataTableStories,
      'ExpansionPanel': expansionPanelStories,
      'InputField': inputFieldStories,
      'MultiSelect': multiSelectStories,
      'RadioButton': radioButtonStories,
      'Select': selectStories,
      'Tabs': tabsStories,
    },
  },
};