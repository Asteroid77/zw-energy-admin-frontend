import router from '@/router'
import type { Router } from 'vue-router'
/**
 * 返回经过初始化的vue实例
 * @return {Router} 路由实例
 */
export function useRouter(): Router {
  return router
}
