import { configure } from '@kadira/storybook'

import '../../styles/index.styl'

function loadStories () {
  require('../stories/buttons')
  require('../stories/channel')
  require('../stories/fields')
  require('../stories/forms')
  require('../stories/streams')
  require('../stories/topics')
}

configure(loadStories, module)
