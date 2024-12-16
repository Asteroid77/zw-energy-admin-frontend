import { defineComponent } from 'vue'
import clsx from 'clsx'
import { useNewsBarStore } from '@/stores/useNewsBarStore.ts'
export default defineComponent({
  name: 'NewsBar',
  setup: () => {
    const store = useNewsBarStore()
    /**
     * 关闭NewBarView
     */
    function handleClose() {
      store.toggle({
        display: false,
      })
    }
    return () => (
      <div
        class={clsx(
          'layout-news',
          'slide-animation',
          'flex',
          'justify-between',
          'items-center',
          'w-full',
          'box-border',
          'hidden',
          {
            'layout-news--error': store.status === 'error',
            'slide-animation--hidden': !store.display,
            'slide-animation--show': store.display,
          },
        )}
      >
        <div
          class={clsx(
            'layout-news__content',
            'flex',
            'w-full',
            'items-center',
            'justify-center',
            'contrast',
            'text-primary-contrast',
          )}
        >
          {store.content}
        </div>
        <a
          onClick={handleClose}
          class={clsx(
            'layout-news__close',
            'inline-flex',
            'cursor-pointer',
            'rounded-[50%]',
            'transition-colors',
            'duration-300',
            'p-0.5',
          )}
        >
          <i class={clsx('pi', 'pi-times')}></i>
        </a>
      </div>
    )
  },
})
