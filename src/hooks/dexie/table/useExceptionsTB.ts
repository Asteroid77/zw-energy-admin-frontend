import type { DexieDB } from '@/types/dexie'

/**
 * 声明exceptions表
 * @param db Dexie实例
 */
export function useExceptionsTB(db: DexieDB): void {
  db.version(1).stores({
    exceptions: '++id',
  })
}
