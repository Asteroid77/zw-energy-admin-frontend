import type { Router } from 'vue-router'
import { useLoadingBar } from '@/hooks/layout/useLoadingBar'

/**
 * 加载路由守卫
 * @param {Router} router 路由实例
 */
export function useRouterGuard(router: Router) {
  _beforeEach(router)
  _afterEach(router)
}
/**
 * 路由guard beforeEach钩子
 * @param {Router} router 路由实例
 */
function _beforeEach(router: Router) {
  router.beforeEach((to, from) => {
    //显示Loading bar
    useLoadingBar(true)
    return true
  })
}
/**
 * 路由guard afterEach钩子
 * @param {Router} router 路由实例
 */
function _afterEach(router: Router) {
  router.afterEach((to, from, next) => {
    //隐藏Loading bar
    useLoadingBar(false)
  })
}
