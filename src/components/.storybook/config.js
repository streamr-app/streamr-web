import { configure } from '@kadira/storybook'

import '../../config/moment.config.js'

import '../../styles/index.styl'

function loadStories () {
  require('../stories/buttons')
  require('../stories/channel')
  require('../stories/fields')
  require('../stories/forms')
  require('../stories/streams')
}

configure(loadStories, module)
