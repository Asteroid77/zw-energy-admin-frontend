import Dexie, { type EntityTable } from 'dexie'
import type { DexieDB } from '@/types/dexie'
import { useExceptionsTB } from '@/hooks/dexie/table/useExceptionsTB.ts'

const db: DexieDB = new Dexie('Database') as DexieDB

// 声明exceptions表
useExceptionsTB(db)

/**
 * 返回初始化后的Dexie indexedDB实例
 * @return {DexieDB}
 */
export function useDexie() {
  return db
}
