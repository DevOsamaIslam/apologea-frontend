import { APP_NAME } from 'app/settings'
import Dexie, { Table } from 'dexie'
import { $cacheTypes, IBaseCacheDBItems } from 'lib/@types/cache'

export class MySubClassedDexie extends Dexie {
	cache!: Table<IBaseCacheDBItems<$cacheTypes>>

	constructor() {
		super(APP_NAME)
		this.version(1).stores({
			cache: '++id, query',
		})
	}
}

export const cacheDB = new MySubClassedDexie()
