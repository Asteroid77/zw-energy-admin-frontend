import { defineComponent } from 'vue'
import { ProgressBar } from 'primevue'
import clsx from 'clsx'
import { useLoadingBarStore } from '@/stores/useLoadingBarStore'
export default defineComponent({
  setup: () => {
    return () => {
      const store = useLoadingBarStore()
      return (
        <ProgressBar
          mode="indeterminate"
          class={clsx('layout-loading', 'h-1', 'slide-animation', {
            'slide-animation--hidden': !store.display,
            'slide-animation--show': store.display,
          })}
        ></ProgressBar>
      )
    }
  },
})
