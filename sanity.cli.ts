import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'n1fwb3em',
    dataset: 'production',
  },

  deployment: {
    autoUpdates: true,
    appId: 'gafa8bfiukmqpeo3oeyg5llu',
  },
})