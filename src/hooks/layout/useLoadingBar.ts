import { useLoadingBarStore } from '@/stores/useLoadingBarStore'
const store = useLoadingBarStore()
export function useLoadingBar(display: boolean) {
  store.toggle({
    display,
  })
}
