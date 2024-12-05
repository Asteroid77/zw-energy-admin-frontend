import Dexie, { EntityTable } from 'dexie'
import type { ExceptionReport } from '@/types/exception'

/**
 * Dexie管理的indexedDB 数据表类型
 * @see https://dexie.org/docs/Tutorial/Vue
 */
declare interface DexieTables {
  exceptions: EntityTable<ExceptionReport, 'id'>
}
export type DexieDB = Dexie & DexieTables
