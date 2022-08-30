export type $NestedKeyOf<ObjectType extends object> = {
	[Key in keyof ObjectType & string]: ObjectType[Key] extends object
		? // @ts-ignore
		  `${Key}.${$NestedKeyOf<ObjectType[Key]>}`
		: `${Key}`
}[keyof ObjectType & string]
