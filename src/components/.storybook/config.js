import { configure } from '@kadira/storybook'

import '../../styles/index.styl'

function loadStories () {
  require('../stories/buttons')
}

configure(loadStories, module)
