
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MyWorker
 * 
 */
export type MyWorker = $Result.DefaultSelection<Prisma.$MyWorkerPayload>
/**
 * Model MyVendor
 * 
 */
export type MyVendor = $Result.DefaultSelection<Prisma.$MyVendorPayload>
/**
 * Model MyUser
 * 
 */
export type MyUser = $Result.DefaultSelection<Prisma.$MyUserPayload>
/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MyWorkers
 * const myWorkers = await prisma.myWorker.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MyWorkers
   * const myWorkers = await prisma.myWorker.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.myWorker`: Exposes CRUD operations for the **MyWorker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyWorkers
    * const myWorkers = await prisma.myWorker.findMany()
    * ```
    */
  get myWorker(): Prisma.MyWorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myVendor`: Exposes CRUD operations for the **MyVendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyVendors
    * const myVendors = await prisma.myVendor.findMany()
    * ```
    */
  get myVendor(): Prisma.MyVendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myUser`: Exposes CRUD operations for the **MyUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyUsers
    * const myUsers = await prisma.myUser.findMany()
    * ```
    */
  get myUser(): Prisma.MyUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MyWorker: 'MyWorker',
    MyVendor: 'MyVendor',
    MyUser: 'MyUser',
    Work: 'Work'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "myWorker" | "myVendor" | "myUser" | "work"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MyWorker: {
        payload: Prisma.$MyWorkerPayload<ExtArgs>
        fields: Prisma.MyWorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyWorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyWorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>
          }
          findFirst: {
            args: Prisma.MyWorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyWorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>
          }
          findMany: {
            args: Prisma.MyWorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>[]
          }
          create: {
            args: Prisma.MyWorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>
          }
          createMany: {
            args: Prisma.MyWorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MyWorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>[]
          }
          delete: {
            args: Prisma.MyWorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>
          }
          update: {
            args: Prisma.MyWorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>
          }
          deleteMany: {
            args: Prisma.MyWorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyWorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MyWorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>[]
          }
          upsert: {
            args: Prisma.MyWorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyWorkerPayload>
          }
          aggregate: {
            args: Prisma.MyWorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyWorker>
          }
          groupBy: {
            args: Prisma.MyWorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyWorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MyWorkerCountArgs<ExtArgs>
            result: $Utils.Optional<MyWorkerCountAggregateOutputType> | number
          }
        }
      }
      MyVendor: {
        payload: Prisma.$MyVendorPayload<ExtArgs>
        fields: Prisma.MyVendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyVendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyVendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>
          }
          findFirst: {
            args: Prisma.MyVendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyVendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>
          }
          findMany: {
            args: Prisma.MyVendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>[]
          }
          create: {
            args: Prisma.MyVendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>
          }
          createMany: {
            args: Prisma.MyVendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MyVendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>[]
          }
          delete: {
            args: Prisma.MyVendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>
          }
          update: {
            args: Prisma.MyVendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>
          }
          deleteMany: {
            args: Prisma.MyVendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyVendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MyVendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>[]
          }
          upsert: {
            args: Prisma.MyVendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyVendorPayload>
          }
          aggregate: {
            args: Prisma.MyVendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyVendor>
          }
          groupBy: {
            args: Prisma.MyVendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyVendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MyVendorCountArgs<ExtArgs>
            result: $Utils.Optional<MyVendorCountAggregateOutputType> | number
          }
        }
      }
      MyUser: {
        payload: Prisma.$MyUserPayload<ExtArgs>
        fields: Prisma.MyUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>
          }
          findFirst: {
            args: Prisma.MyUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>
          }
          findMany: {
            args: Prisma.MyUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>[]
          }
          create: {
            args: Prisma.MyUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>
          }
          createMany: {
            args: Prisma.MyUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MyUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>[]
          }
          delete: {
            args: Prisma.MyUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>
          }
          update: {
            args: Prisma.MyUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>
          }
          deleteMany: {
            args: Prisma.MyUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MyUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>[]
          }
          upsert: {
            args: Prisma.MyUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyUserPayload>
          }
          aggregate: {
            args: Prisma.MyUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyUser>
          }
          groupBy: {
            args: Prisma.MyUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.MyUserCountArgs<ExtArgs>
            result: $Utils.Optional<MyUserCountAggregateOutputType> | number
          }
        }
      }
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    myWorker?: MyWorkerOmit
    myVendor?: MyVendorOmit
    myUser?: MyUserOmit
    work?: WorkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MyUserCountOutputType
   */

  export type MyUserCountOutputType = {
    works: number
  }

  export type MyUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | MyUserCountOutputTypeCountWorksArgs
  }

  // Custom InputTypes
  /**
   * MyUserCountOutputType without action
   */
  export type MyUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUserCountOutputType
     */
    select?: MyUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MyUserCountOutputType without action
   */
  export type MyUserCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MyWorker
   */

  export type AggregateMyWorker = {
    _count: MyWorkerCountAggregateOutputType | null
    _avg: MyWorkerAvgAggregateOutputType | null
    _sum: MyWorkerSumAggregateOutputType | null
    _min: MyWorkerMinAggregateOutputType | null
    _max: MyWorkerMaxAggregateOutputType | null
  }

  export type MyWorkerAvgAggregateOutputType = {
    dailyWage: number | null
    rating: number | null
    age: number | null
    lat: number | null
    lng: number | null
  }

  export type MyWorkerSumAggregateOutputType = {
    dailyWage: number | null
    rating: number | null
    age: number | null
    lat: number | null
    lng: number | null
  }

  export type MyWorkerMinAggregateOutputType = {
    name: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    photo: string | null
    video: string | null
    dailyWage: number | null
    address: string | null
    rating: number | null
    occupation: string | null
    feedback: string | null
    age: number | null
    createdAt: Date | null
    updatedAt: Date | null
    id: string | null
    email: string | null
    password: string | null
    lat: number | null
    lng: number | null
  }

  export type MyWorkerMaxAggregateOutputType = {
    name: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    photo: string | null
    video: string | null
    dailyWage: number | null
    address: string | null
    rating: number | null
    occupation: string | null
    feedback: string | null
    age: number | null
    createdAt: Date | null
    updatedAt: Date | null
    id: string | null
    email: string | null
    password: string | null
    lat: number | null
    lng: number | null
  }

  export type MyWorkerCountAggregateOutputType = {
    name: number
    mobileNumber: number
    profilePhoto: number
    photo: number
    video: number
    dailyWage: number
    address: number
    rating: number
    occupation: number
    feedback: number
    pastDeals: number
    presentDeals: number
    age: number
    createdAt: number
    updatedAt: number
    id: number
    email: number
    password: number
    lat: number
    lng: number
    _all: number
  }


  export type MyWorkerAvgAggregateInputType = {
    dailyWage?: true
    rating?: true
    age?: true
    lat?: true
    lng?: true
  }

  export type MyWorkerSumAggregateInputType = {
    dailyWage?: true
    rating?: true
    age?: true
    lat?: true
    lng?: true
  }

  export type MyWorkerMinAggregateInputType = {
    name?: true
    mobileNumber?: true
    profilePhoto?: true
    photo?: true
    video?: true
    dailyWage?: true
    address?: true
    rating?: true
    occupation?: true
    feedback?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    email?: true
    password?: true
    lat?: true
    lng?: true
  }

  export type MyWorkerMaxAggregateInputType = {
    name?: true
    mobileNumber?: true
    profilePhoto?: true
    photo?: true
    video?: true
    dailyWage?: true
    address?: true
    rating?: true
    occupation?: true
    feedback?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    email?: true
    password?: true
    lat?: true
    lng?: true
  }

  export type MyWorkerCountAggregateInputType = {
    name?: true
    mobileNumber?: true
    profilePhoto?: true
    photo?: true
    video?: true
    dailyWage?: true
    address?: true
    rating?: true
    occupation?: true
    feedback?: true
    pastDeals?: true
    presentDeals?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    email?: true
    password?: true
    lat?: true
    lng?: true
    _all?: true
  }

  export type MyWorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyWorker to aggregate.
     */
    where?: MyWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyWorkers to fetch.
     */
    orderBy?: MyWorkerOrderByWithRelationInput | MyWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyWorkers
    **/
    _count?: true | MyWorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MyWorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MyWorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyWorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyWorkerMaxAggregateInputType
  }

  export type GetMyWorkerAggregateType<T extends MyWorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateMyWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyWorker[P]>
      : GetScalarType<T[P], AggregateMyWorker[P]>
  }




  export type MyWorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyWorkerWhereInput
    orderBy?: MyWorkerOrderByWithAggregationInput | MyWorkerOrderByWithAggregationInput[]
    by: MyWorkerScalarFieldEnum[] | MyWorkerScalarFieldEnum
    having?: MyWorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyWorkerCountAggregateInputType | true
    _avg?: MyWorkerAvgAggregateInputType
    _sum?: MyWorkerSumAggregateInputType
    _min?: MyWorkerMinAggregateInputType
    _max?: MyWorkerMaxAggregateInputType
  }

  export type MyWorkerGroupByOutputType = {
    name: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    photo: string | null
    video: string | null
    dailyWage: number | null
    address: string | null
    rating: number | null
    occupation: string | null
    feedback: string | null
    pastDeals: string[]
    presentDeals: string[]
    age: number | null
    createdAt: Date
    updatedAt: Date
    id: string
    email: string
    password: string
    lat: number | null
    lng: number | null
    _count: MyWorkerCountAggregateOutputType | null
    _avg: MyWorkerAvgAggregateOutputType | null
    _sum: MyWorkerSumAggregateOutputType | null
    _min: MyWorkerMinAggregateOutputType | null
    _max: MyWorkerMaxAggregateOutputType | null
  }

  type GetMyWorkerGroupByPayload<T extends MyWorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyWorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyWorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyWorkerGroupByOutputType[P]>
            : GetScalarType<T[P], MyWorkerGroupByOutputType[P]>
        }
      >
    >


  export type MyWorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    photo?: boolean
    video?: boolean
    dailyWage?: boolean
    address?: boolean
    rating?: boolean
    occupation?: boolean
    feedback?: boolean
    pastDeals?: boolean
    presentDeals?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    email?: boolean
    password?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["myWorker"]>

  export type MyWorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    photo?: boolean
    video?: boolean
    dailyWage?: boolean
    address?: boolean
    rating?: boolean
    occupation?: boolean
    feedback?: boolean
    pastDeals?: boolean
    presentDeals?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    email?: boolean
    password?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["myWorker"]>

  export type MyWorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    photo?: boolean
    video?: boolean
    dailyWage?: boolean
    address?: boolean
    rating?: boolean
    occupation?: boolean
    feedback?: boolean
    pastDeals?: boolean
    presentDeals?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    email?: boolean
    password?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["myWorker"]>

  export type MyWorkerSelectScalar = {
    name?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    photo?: boolean
    video?: boolean
    dailyWage?: boolean
    address?: boolean
    rating?: boolean
    occupation?: boolean
    feedback?: boolean
    pastDeals?: boolean
    presentDeals?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    email?: boolean
    password?: boolean
    lat?: boolean
    lng?: boolean
  }

  export type MyWorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "mobileNumber" | "profilePhoto" | "photo" | "video" | "dailyWage" | "address" | "rating" | "occupation" | "feedback" | "pastDeals" | "presentDeals" | "age" | "createdAt" | "updatedAt" | "id" | "email" | "password" | "lat" | "lng", ExtArgs["result"]["myWorker"]>

  export type $MyWorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyWorker"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string | null
      mobileNumber: string | null
      profilePhoto: string | null
      photo: string | null
      video: string | null
      dailyWage: number | null
      address: string | null
      rating: number | null
      occupation: string | null
      feedback: string | null
      pastDeals: string[]
      presentDeals: string[]
      age: number | null
      createdAt: Date
      updatedAt: Date
      id: string
      email: string
      password: string
      lat: number | null
      lng: number | null
    }, ExtArgs["result"]["myWorker"]>
    composites: {}
  }

  type MyWorkerGetPayload<S extends boolean | null | undefined | MyWorkerDefaultArgs> = $Result.GetResult<Prisma.$MyWorkerPayload, S>

  type MyWorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyWorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyWorkerCountAggregateInputType | true
    }

  export interface MyWorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyWorker'], meta: { name: 'MyWorker' } }
    /**
     * Find zero or one MyWorker that matches the filter.
     * @param {MyWorkerFindUniqueArgs} args - Arguments to find a MyWorker
     * @example
     * // Get one MyWorker
     * const myWorker = await prisma.myWorker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyWorkerFindUniqueArgs>(args: SelectSubset<T, MyWorkerFindUniqueArgs<ExtArgs>>): Prisma__MyWorkerClient<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyWorker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyWorkerFindUniqueOrThrowArgs} args - Arguments to find a MyWorker
     * @example
     * // Get one MyWorker
     * const myWorker = await prisma.myWorker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyWorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, MyWorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyWorkerClient<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyWorker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyWorkerFindFirstArgs} args - Arguments to find a MyWorker
     * @example
     * // Get one MyWorker
     * const myWorker = await prisma.myWorker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyWorkerFindFirstArgs>(args?: SelectSubset<T, MyWorkerFindFirstArgs<ExtArgs>>): Prisma__MyWorkerClient<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyWorker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyWorkerFindFirstOrThrowArgs} args - Arguments to find a MyWorker
     * @example
     * // Get one MyWorker
     * const myWorker = await prisma.myWorker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyWorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, MyWorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyWorkerClient<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyWorkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyWorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyWorkers
     * const myWorkers = await prisma.myWorker.findMany()
     * 
     * // Get first 10 MyWorkers
     * const myWorkers = await prisma.myWorker.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const myWorkerWithNameOnly = await prisma.myWorker.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends MyWorkerFindManyArgs>(args?: SelectSubset<T, MyWorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyWorker.
     * @param {MyWorkerCreateArgs} args - Arguments to create a MyWorker.
     * @example
     * // Create one MyWorker
     * const MyWorker = await prisma.myWorker.create({
     *   data: {
     *     // ... data to create a MyWorker
     *   }
     * })
     * 
     */
    create<T extends MyWorkerCreateArgs>(args: SelectSubset<T, MyWorkerCreateArgs<ExtArgs>>): Prisma__MyWorkerClient<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyWorkers.
     * @param {MyWorkerCreateManyArgs} args - Arguments to create many MyWorkers.
     * @example
     * // Create many MyWorkers
     * const myWorker = await prisma.myWorker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyWorkerCreateManyArgs>(args?: SelectSubset<T, MyWorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MyWorkers and returns the data saved in the database.
     * @param {MyWorkerCreateManyAndReturnArgs} args - Arguments to create many MyWorkers.
     * @example
     * // Create many MyWorkers
     * const myWorker = await prisma.myWorker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MyWorkers and only return the `name`
     * const myWorkerWithNameOnly = await prisma.myWorker.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MyWorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, MyWorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MyWorker.
     * @param {MyWorkerDeleteArgs} args - Arguments to delete one MyWorker.
     * @example
     * // Delete one MyWorker
     * const MyWorker = await prisma.myWorker.delete({
     *   where: {
     *     // ... filter to delete one MyWorker
     *   }
     * })
     * 
     */
    delete<T extends MyWorkerDeleteArgs>(args: SelectSubset<T, MyWorkerDeleteArgs<ExtArgs>>): Prisma__MyWorkerClient<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyWorker.
     * @param {MyWorkerUpdateArgs} args - Arguments to update one MyWorker.
     * @example
     * // Update one MyWorker
     * const myWorker = await prisma.myWorker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyWorkerUpdateArgs>(args: SelectSubset<T, MyWorkerUpdateArgs<ExtArgs>>): Prisma__MyWorkerClient<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyWorkers.
     * @param {MyWorkerDeleteManyArgs} args - Arguments to filter MyWorkers to delete.
     * @example
     * // Delete a few MyWorkers
     * const { count } = await prisma.myWorker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyWorkerDeleteManyArgs>(args?: SelectSubset<T, MyWorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyWorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyWorkers
     * const myWorker = await prisma.myWorker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyWorkerUpdateManyArgs>(args: SelectSubset<T, MyWorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyWorkers and returns the data updated in the database.
     * @param {MyWorkerUpdateManyAndReturnArgs} args - Arguments to update many MyWorkers.
     * @example
     * // Update many MyWorkers
     * const myWorker = await prisma.myWorker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MyWorkers and only return the `name`
     * const myWorkerWithNameOnly = await prisma.myWorker.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MyWorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, MyWorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MyWorker.
     * @param {MyWorkerUpsertArgs} args - Arguments to update or create a MyWorker.
     * @example
     * // Update or create a MyWorker
     * const myWorker = await prisma.myWorker.upsert({
     *   create: {
     *     // ... data to create a MyWorker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyWorker we want to update
     *   }
     * })
     */
    upsert<T extends MyWorkerUpsertArgs>(args: SelectSubset<T, MyWorkerUpsertArgs<ExtArgs>>): Prisma__MyWorkerClient<$Result.GetResult<Prisma.$MyWorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MyWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyWorkerCountArgs} args - Arguments to filter MyWorkers to count.
     * @example
     * // Count the number of MyWorkers
     * const count = await prisma.myWorker.count({
     *   where: {
     *     // ... the filter for the MyWorkers we want to count
     *   }
     * })
    **/
    count<T extends MyWorkerCountArgs>(
      args?: Subset<T, MyWorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyWorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyWorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyWorkerAggregateArgs>(args: Subset<T, MyWorkerAggregateArgs>): Prisma.PrismaPromise<GetMyWorkerAggregateType<T>>

    /**
     * Group by MyWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyWorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyWorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyWorkerGroupByArgs['orderBy'] }
        : { orderBy?: MyWorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyWorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyWorker model
   */
  readonly fields: MyWorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyWorker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyWorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyWorker model
   */
  interface MyWorkerFieldRefs {
    readonly name: FieldRef<"MyWorker", 'String'>
    readonly mobileNumber: FieldRef<"MyWorker", 'String'>
    readonly profilePhoto: FieldRef<"MyWorker", 'String'>
    readonly photo: FieldRef<"MyWorker", 'String'>
    readonly video: FieldRef<"MyWorker", 'String'>
    readonly dailyWage: FieldRef<"MyWorker", 'Float'>
    readonly address: FieldRef<"MyWorker", 'String'>
    readonly rating: FieldRef<"MyWorker", 'Float'>
    readonly occupation: FieldRef<"MyWorker", 'String'>
    readonly feedback: FieldRef<"MyWorker", 'String'>
    readonly pastDeals: FieldRef<"MyWorker", 'String[]'>
    readonly presentDeals: FieldRef<"MyWorker", 'String[]'>
    readonly age: FieldRef<"MyWorker", 'Int'>
    readonly createdAt: FieldRef<"MyWorker", 'DateTime'>
    readonly updatedAt: FieldRef<"MyWorker", 'DateTime'>
    readonly id: FieldRef<"MyWorker", 'String'>
    readonly email: FieldRef<"MyWorker", 'String'>
    readonly password: FieldRef<"MyWorker", 'String'>
    readonly lat: FieldRef<"MyWorker", 'Float'>
    readonly lng: FieldRef<"MyWorker", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MyWorker findUnique
   */
  export type MyWorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * Filter, which MyWorker to fetch.
     */
    where: MyWorkerWhereUniqueInput
  }

  /**
   * MyWorker findUniqueOrThrow
   */
  export type MyWorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * Filter, which MyWorker to fetch.
     */
    where: MyWorkerWhereUniqueInput
  }

  /**
   * MyWorker findFirst
   */
  export type MyWorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * Filter, which MyWorker to fetch.
     */
    where?: MyWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyWorkers to fetch.
     */
    orderBy?: MyWorkerOrderByWithRelationInput | MyWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyWorkers.
     */
    cursor?: MyWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyWorkers.
     */
    distinct?: MyWorkerScalarFieldEnum | MyWorkerScalarFieldEnum[]
  }

  /**
   * MyWorker findFirstOrThrow
   */
  export type MyWorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * Filter, which MyWorker to fetch.
     */
    where?: MyWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyWorkers to fetch.
     */
    orderBy?: MyWorkerOrderByWithRelationInput | MyWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyWorkers.
     */
    cursor?: MyWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyWorkers.
     */
    distinct?: MyWorkerScalarFieldEnum | MyWorkerScalarFieldEnum[]
  }

  /**
   * MyWorker findMany
   */
  export type MyWorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * Filter, which MyWorkers to fetch.
     */
    where?: MyWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyWorkers to fetch.
     */
    orderBy?: MyWorkerOrderByWithRelationInput | MyWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyWorkers.
     */
    cursor?: MyWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyWorkers.
     */
    skip?: number
    distinct?: MyWorkerScalarFieldEnum | MyWorkerScalarFieldEnum[]
  }

  /**
   * MyWorker create
   */
  export type MyWorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * The data needed to create a MyWorker.
     */
    data: XOR<MyWorkerCreateInput, MyWorkerUncheckedCreateInput>
  }

  /**
   * MyWorker createMany
   */
  export type MyWorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyWorkers.
     */
    data: MyWorkerCreateManyInput | MyWorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyWorker createManyAndReturn
   */
  export type MyWorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * The data used to create many MyWorkers.
     */
    data: MyWorkerCreateManyInput | MyWorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyWorker update
   */
  export type MyWorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * The data needed to update a MyWorker.
     */
    data: XOR<MyWorkerUpdateInput, MyWorkerUncheckedUpdateInput>
    /**
     * Choose, which MyWorker to update.
     */
    where: MyWorkerWhereUniqueInput
  }

  /**
   * MyWorker updateMany
   */
  export type MyWorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyWorkers.
     */
    data: XOR<MyWorkerUpdateManyMutationInput, MyWorkerUncheckedUpdateManyInput>
    /**
     * Filter which MyWorkers to update
     */
    where?: MyWorkerWhereInput
    /**
     * Limit how many MyWorkers to update.
     */
    limit?: number
  }

  /**
   * MyWorker updateManyAndReturn
   */
  export type MyWorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * The data used to update MyWorkers.
     */
    data: XOR<MyWorkerUpdateManyMutationInput, MyWorkerUncheckedUpdateManyInput>
    /**
     * Filter which MyWorkers to update
     */
    where?: MyWorkerWhereInput
    /**
     * Limit how many MyWorkers to update.
     */
    limit?: number
  }

  /**
   * MyWorker upsert
   */
  export type MyWorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * The filter to search for the MyWorker to update in case it exists.
     */
    where: MyWorkerWhereUniqueInput
    /**
     * In case the MyWorker found by the `where` argument doesn't exist, create a new MyWorker with this data.
     */
    create: XOR<MyWorkerCreateInput, MyWorkerUncheckedCreateInput>
    /**
     * In case the MyWorker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyWorkerUpdateInput, MyWorkerUncheckedUpdateInput>
  }

  /**
   * MyWorker delete
   */
  export type MyWorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
    /**
     * Filter which MyWorker to delete.
     */
    where: MyWorkerWhereUniqueInput
  }

  /**
   * MyWorker deleteMany
   */
  export type MyWorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyWorkers to delete
     */
    where?: MyWorkerWhereInput
    /**
     * Limit how many MyWorkers to delete.
     */
    limit?: number
  }

  /**
   * MyWorker without action
   */
  export type MyWorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyWorker
     */
    select?: MyWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyWorker
     */
    omit?: MyWorkerOmit<ExtArgs> | null
  }


  /**
   * Model MyVendor
   */

  export type AggregateMyVendor = {
    _count: MyVendorCountAggregateOutputType | null
    _avg: MyVendorAvgAggregateOutputType | null
    _sum: MyVendorSumAggregateOutputType | null
    _min: MyVendorMinAggregateOutputType | null
    _max: MyVendorMaxAggregateOutputType | null
  }

  export type MyVendorAvgAggregateOutputType = {
    rating: number | null
    age: number | null
    lat: number | null
    lng: number | null
  }

  export type MyVendorSumAggregateOutputType = {
    rating: number | null
    age: number | null
    lat: number | null
    lng: number | null
  }

  export type MyVendorMinAggregateOutputType = {
    ownerName: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    shopName: string | null
    shopPhoto: string | null
    email: string | null
    password: string | null
    address: string | null
    rating: number | null
    bussinessType: string | null
    feedback: string | null
    gstNumber: string | null
    age: number | null
    createdAt: Date | null
    updatedAt: Date | null
    id: string | null
    lat: number | null
    lng: number | null
  }

  export type MyVendorMaxAggregateOutputType = {
    ownerName: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    shopName: string | null
    shopPhoto: string | null
    email: string | null
    password: string | null
    address: string | null
    rating: number | null
    bussinessType: string | null
    feedback: string | null
    gstNumber: string | null
    age: number | null
    createdAt: Date | null
    updatedAt: Date | null
    id: string | null
    lat: number | null
    lng: number | null
  }

  export type MyVendorCountAggregateOutputType = {
    ownerName: number
    mobileNumber: number
    profilePhoto: number
    shopName: number
    shopPhoto: number
    email: number
    password: number
    address: number
    rating: number
    bussinessType: number
    feedback: number
    gstNumber: number
    age: number
    createdAt: number
    updatedAt: number
    id: number
    lat: number
    lng: number
    _all: number
  }


  export type MyVendorAvgAggregateInputType = {
    rating?: true
    age?: true
    lat?: true
    lng?: true
  }

  export type MyVendorSumAggregateInputType = {
    rating?: true
    age?: true
    lat?: true
    lng?: true
  }

  export type MyVendorMinAggregateInputType = {
    ownerName?: true
    mobileNumber?: true
    profilePhoto?: true
    shopName?: true
    shopPhoto?: true
    email?: true
    password?: true
    address?: true
    rating?: true
    bussinessType?: true
    feedback?: true
    gstNumber?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    lat?: true
    lng?: true
  }

  export type MyVendorMaxAggregateInputType = {
    ownerName?: true
    mobileNumber?: true
    profilePhoto?: true
    shopName?: true
    shopPhoto?: true
    email?: true
    password?: true
    address?: true
    rating?: true
    bussinessType?: true
    feedback?: true
    gstNumber?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    lat?: true
    lng?: true
  }

  export type MyVendorCountAggregateInputType = {
    ownerName?: true
    mobileNumber?: true
    profilePhoto?: true
    shopName?: true
    shopPhoto?: true
    email?: true
    password?: true
    address?: true
    rating?: true
    bussinessType?: true
    feedback?: true
    gstNumber?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    lat?: true
    lng?: true
    _all?: true
  }

  export type MyVendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyVendor to aggregate.
     */
    where?: MyVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyVendors to fetch.
     */
    orderBy?: MyVendorOrderByWithRelationInput | MyVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyVendors
    **/
    _count?: true | MyVendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MyVendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MyVendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyVendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyVendorMaxAggregateInputType
  }

  export type GetMyVendorAggregateType<T extends MyVendorAggregateArgs> = {
        [P in keyof T & keyof AggregateMyVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyVendor[P]>
      : GetScalarType<T[P], AggregateMyVendor[P]>
  }




  export type MyVendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyVendorWhereInput
    orderBy?: MyVendorOrderByWithAggregationInput | MyVendorOrderByWithAggregationInput[]
    by: MyVendorScalarFieldEnum[] | MyVendorScalarFieldEnum
    having?: MyVendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyVendorCountAggregateInputType | true
    _avg?: MyVendorAvgAggregateInputType
    _sum?: MyVendorSumAggregateInputType
    _min?: MyVendorMinAggregateInputType
    _max?: MyVendorMaxAggregateInputType
  }

  export type MyVendorGroupByOutputType = {
    ownerName: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    shopName: string | null
    shopPhoto: string | null
    email: string | null
    password: string | null
    address: string | null
    rating: number | null
    bussinessType: string | null
    feedback: string | null
    gstNumber: string | null
    age: number | null
    createdAt: Date
    updatedAt: Date
    id: string
    lat: number | null
    lng: number | null
    _count: MyVendorCountAggregateOutputType | null
    _avg: MyVendorAvgAggregateOutputType | null
    _sum: MyVendorSumAggregateOutputType | null
    _min: MyVendorMinAggregateOutputType | null
    _max: MyVendorMaxAggregateOutputType | null
  }

  type GetMyVendorGroupByPayload<T extends MyVendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyVendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyVendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyVendorGroupByOutputType[P]>
            : GetScalarType<T[P], MyVendorGroupByOutputType[P]>
        }
      >
    >


  export type MyVendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerName?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    shopName?: boolean
    shopPhoto?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    rating?: boolean
    bussinessType?: boolean
    feedback?: boolean
    gstNumber?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["myVendor"]>

  export type MyVendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerName?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    shopName?: boolean
    shopPhoto?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    rating?: boolean
    bussinessType?: boolean
    feedback?: boolean
    gstNumber?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["myVendor"]>

  export type MyVendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerName?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    shopName?: boolean
    shopPhoto?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    rating?: boolean
    bussinessType?: boolean
    feedback?: boolean
    gstNumber?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["myVendor"]>

  export type MyVendorSelectScalar = {
    ownerName?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    shopName?: boolean
    shopPhoto?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    rating?: boolean
    bussinessType?: boolean
    feedback?: boolean
    gstNumber?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    lat?: boolean
    lng?: boolean
  }

  export type MyVendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ownerName" | "mobileNumber" | "profilePhoto" | "shopName" | "shopPhoto" | "email" | "password" | "address" | "rating" | "bussinessType" | "feedback" | "gstNumber" | "age" | "createdAt" | "updatedAt" | "id" | "lat" | "lng", ExtArgs["result"]["myVendor"]>

  export type $MyVendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyVendor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ownerName: string | null
      mobileNumber: string | null
      profilePhoto: string | null
      shopName: string | null
      shopPhoto: string | null
      email: string | null
      password: string | null
      address: string | null
      rating: number | null
      bussinessType: string | null
      feedback: string | null
      gstNumber: string | null
      age: number | null
      createdAt: Date
      updatedAt: Date
      id: string
      lat: number | null
      lng: number | null
    }, ExtArgs["result"]["myVendor"]>
    composites: {}
  }

  type MyVendorGetPayload<S extends boolean | null | undefined | MyVendorDefaultArgs> = $Result.GetResult<Prisma.$MyVendorPayload, S>

  type MyVendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyVendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyVendorCountAggregateInputType | true
    }

  export interface MyVendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyVendor'], meta: { name: 'MyVendor' } }
    /**
     * Find zero or one MyVendor that matches the filter.
     * @param {MyVendorFindUniqueArgs} args - Arguments to find a MyVendor
     * @example
     * // Get one MyVendor
     * const myVendor = await prisma.myVendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyVendorFindUniqueArgs>(args: SelectSubset<T, MyVendorFindUniqueArgs<ExtArgs>>): Prisma__MyVendorClient<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyVendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyVendorFindUniqueOrThrowArgs} args - Arguments to find a MyVendor
     * @example
     * // Get one MyVendor
     * const myVendor = await prisma.myVendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyVendorFindUniqueOrThrowArgs>(args: SelectSubset<T, MyVendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyVendorClient<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyVendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyVendorFindFirstArgs} args - Arguments to find a MyVendor
     * @example
     * // Get one MyVendor
     * const myVendor = await prisma.myVendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyVendorFindFirstArgs>(args?: SelectSubset<T, MyVendorFindFirstArgs<ExtArgs>>): Prisma__MyVendorClient<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyVendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyVendorFindFirstOrThrowArgs} args - Arguments to find a MyVendor
     * @example
     * // Get one MyVendor
     * const myVendor = await prisma.myVendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyVendorFindFirstOrThrowArgs>(args?: SelectSubset<T, MyVendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyVendorClient<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyVendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyVendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyVendors
     * const myVendors = await prisma.myVendor.findMany()
     * 
     * // Get first 10 MyVendors
     * const myVendors = await prisma.myVendor.findMany({ take: 10 })
     * 
     * // Only select the `ownerName`
     * const myVendorWithOwnerNameOnly = await prisma.myVendor.findMany({ select: { ownerName: true } })
     * 
     */
    findMany<T extends MyVendorFindManyArgs>(args?: SelectSubset<T, MyVendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyVendor.
     * @param {MyVendorCreateArgs} args - Arguments to create a MyVendor.
     * @example
     * // Create one MyVendor
     * const MyVendor = await prisma.myVendor.create({
     *   data: {
     *     // ... data to create a MyVendor
     *   }
     * })
     * 
     */
    create<T extends MyVendorCreateArgs>(args: SelectSubset<T, MyVendorCreateArgs<ExtArgs>>): Prisma__MyVendorClient<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyVendors.
     * @param {MyVendorCreateManyArgs} args - Arguments to create many MyVendors.
     * @example
     * // Create many MyVendors
     * const myVendor = await prisma.myVendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyVendorCreateManyArgs>(args?: SelectSubset<T, MyVendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MyVendors and returns the data saved in the database.
     * @param {MyVendorCreateManyAndReturnArgs} args - Arguments to create many MyVendors.
     * @example
     * // Create many MyVendors
     * const myVendor = await prisma.myVendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MyVendors and only return the `ownerName`
     * const myVendorWithOwnerNameOnly = await prisma.myVendor.createManyAndReturn({
     *   select: { ownerName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MyVendorCreateManyAndReturnArgs>(args?: SelectSubset<T, MyVendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MyVendor.
     * @param {MyVendorDeleteArgs} args - Arguments to delete one MyVendor.
     * @example
     * // Delete one MyVendor
     * const MyVendor = await prisma.myVendor.delete({
     *   where: {
     *     // ... filter to delete one MyVendor
     *   }
     * })
     * 
     */
    delete<T extends MyVendorDeleteArgs>(args: SelectSubset<T, MyVendorDeleteArgs<ExtArgs>>): Prisma__MyVendorClient<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyVendor.
     * @param {MyVendorUpdateArgs} args - Arguments to update one MyVendor.
     * @example
     * // Update one MyVendor
     * const myVendor = await prisma.myVendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyVendorUpdateArgs>(args: SelectSubset<T, MyVendorUpdateArgs<ExtArgs>>): Prisma__MyVendorClient<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyVendors.
     * @param {MyVendorDeleteManyArgs} args - Arguments to filter MyVendors to delete.
     * @example
     * // Delete a few MyVendors
     * const { count } = await prisma.myVendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyVendorDeleteManyArgs>(args?: SelectSubset<T, MyVendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyVendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyVendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyVendors
     * const myVendor = await prisma.myVendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyVendorUpdateManyArgs>(args: SelectSubset<T, MyVendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyVendors and returns the data updated in the database.
     * @param {MyVendorUpdateManyAndReturnArgs} args - Arguments to update many MyVendors.
     * @example
     * // Update many MyVendors
     * const myVendor = await prisma.myVendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MyVendors and only return the `ownerName`
     * const myVendorWithOwnerNameOnly = await prisma.myVendor.updateManyAndReturn({
     *   select: { ownerName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MyVendorUpdateManyAndReturnArgs>(args: SelectSubset<T, MyVendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MyVendor.
     * @param {MyVendorUpsertArgs} args - Arguments to update or create a MyVendor.
     * @example
     * // Update or create a MyVendor
     * const myVendor = await prisma.myVendor.upsert({
     *   create: {
     *     // ... data to create a MyVendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyVendor we want to update
     *   }
     * })
     */
    upsert<T extends MyVendorUpsertArgs>(args: SelectSubset<T, MyVendorUpsertArgs<ExtArgs>>): Prisma__MyVendorClient<$Result.GetResult<Prisma.$MyVendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MyVendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyVendorCountArgs} args - Arguments to filter MyVendors to count.
     * @example
     * // Count the number of MyVendors
     * const count = await prisma.myVendor.count({
     *   where: {
     *     // ... the filter for the MyVendors we want to count
     *   }
     * })
    **/
    count<T extends MyVendorCountArgs>(
      args?: Subset<T, MyVendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyVendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyVendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyVendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyVendorAggregateArgs>(args: Subset<T, MyVendorAggregateArgs>): Prisma.PrismaPromise<GetMyVendorAggregateType<T>>

    /**
     * Group by MyVendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyVendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyVendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyVendorGroupByArgs['orderBy'] }
        : { orderBy?: MyVendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyVendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyVendor model
   */
  readonly fields: MyVendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyVendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyVendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyVendor model
   */
  interface MyVendorFieldRefs {
    readonly ownerName: FieldRef<"MyVendor", 'String'>
    readonly mobileNumber: FieldRef<"MyVendor", 'String'>
    readonly profilePhoto: FieldRef<"MyVendor", 'String'>
    readonly shopName: FieldRef<"MyVendor", 'String'>
    readonly shopPhoto: FieldRef<"MyVendor", 'String'>
    readonly email: FieldRef<"MyVendor", 'String'>
    readonly password: FieldRef<"MyVendor", 'String'>
    readonly address: FieldRef<"MyVendor", 'String'>
    readonly rating: FieldRef<"MyVendor", 'Float'>
    readonly bussinessType: FieldRef<"MyVendor", 'String'>
    readonly feedback: FieldRef<"MyVendor", 'String'>
    readonly gstNumber: FieldRef<"MyVendor", 'String'>
    readonly age: FieldRef<"MyVendor", 'Int'>
    readonly createdAt: FieldRef<"MyVendor", 'DateTime'>
    readonly updatedAt: FieldRef<"MyVendor", 'DateTime'>
    readonly id: FieldRef<"MyVendor", 'String'>
    readonly lat: FieldRef<"MyVendor", 'Float'>
    readonly lng: FieldRef<"MyVendor", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MyVendor findUnique
   */
  export type MyVendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * Filter, which MyVendor to fetch.
     */
    where: MyVendorWhereUniqueInput
  }

  /**
   * MyVendor findUniqueOrThrow
   */
  export type MyVendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * Filter, which MyVendor to fetch.
     */
    where: MyVendorWhereUniqueInput
  }

  /**
   * MyVendor findFirst
   */
  export type MyVendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * Filter, which MyVendor to fetch.
     */
    where?: MyVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyVendors to fetch.
     */
    orderBy?: MyVendorOrderByWithRelationInput | MyVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyVendors.
     */
    cursor?: MyVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyVendors.
     */
    distinct?: MyVendorScalarFieldEnum | MyVendorScalarFieldEnum[]
  }

  /**
   * MyVendor findFirstOrThrow
   */
  export type MyVendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * Filter, which MyVendor to fetch.
     */
    where?: MyVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyVendors to fetch.
     */
    orderBy?: MyVendorOrderByWithRelationInput | MyVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyVendors.
     */
    cursor?: MyVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyVendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyVendors.
     */
    distinct?: MyVendorScalarFieldEnum | MyVendorScalarFieldEnum[]
  }

  /**
   * MyVendor findMany
   */
  export type MyVendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * Filter, which MyVendors to fetch.
     */
    where?: MyVendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyVendors to fetch.
     */
    orderBy?: MyVendorOrderByWithRelationInput | MyVendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyVendors.
     */
    cursor?: MyVendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyVendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyVendors.
     */
    skip?: number
    distinct?: MyVendorScalarFieldEnum | MyVendorScalarFieldEnum[]
  }

  /**
   * MyVendor create
   */
  export type MyVendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * The data needed to create a MyVendor.
     */
    data: XOR<MyVendorCreateInput, MyVendorUncheckedCreateInput>
  }

  /**
   * MyVendor createMany
   */
  export type MyVendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyVendors.
     */
    data: MyVendorCreateManyInput | MyVendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyVendor createManyAndReturn
   */
  export type MyVendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * The data used to create many MyVendors.
     */
    data: MyVendorCreateManyInput | MyVendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyVendor update
   */
  export type MyVendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * The data needed to update a MyVendor.
     */
    data: XOR<MyVendorUpdateInput, MyVendorUncheckedUpdateInput>
    /**
     * Choose, which MyVendor to update.
     */
    where: MyVendorWhereUniqueInput
  }

  /**
   * MyVendor updateMany
   */
  export type MyVendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyVendors.
     */
    data: XOR<MyVendorUpdateManyMutationInput, MyVendorUncheckedUpdateManyInput>
    /**
     * Filter which MyVendors to update
     */
    where?: MyVendorWhereInput
    /**
     * Limit how many MyVendors to update.
     */
    limit?: number
  }

  /**
   * MyVendor updateManyAndReturn
   */
  export type MyVendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * The data used to update MyVendors.
     */
    data: XOR<MyVendorUpdateManyMutationInput, MyVendorUncheckedUpdateManyInput>
    /**
     * Filter which MyVendors to update
     */
    where?: MyVendorWhereInput
    /**
     * Limit how many MyVendors to update.
     */
    limit?: number
  }

  /**
   * MyVendor upsert
   */
  export type MyVendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * The filter to search for the MyVendor to update in case it exists.
     */
    where: MyVendorWhereUniqueInput
    /**
     * In case the MyVendor found by the `where` argument doesn't exist, create a new MyVendor with this data.
     */
    create: XOR<MyVendorCreateInput, MyVendorUncheckedCreateInput>
    /**
     * In case the MyVendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyVendorUpdateInput, MyVendorUncheckedUpdateInput>
  }

  /**
   * MyVendor delete
   */
  export type MyVendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
    /**
     * Filter which MyVendor to delete.
     */
    where: MyVendorWhereUniqueInput
  }

  /**
   * MyVendor deleteMany
   */
  export type MyVendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyVendors to delete
     */
    where?: MyVendorWhereInput
    /**
     * Limit how many MyVendors to delete.
     */
    limit?: number
  }

  /**
   * MyVendor without action
   */
  export type MyVendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyVendor
     */
    select?: MyVendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyVendor
     */
    omit?: MyVendorOmit<ExtArgs> | null
  }


  /**
   * Model MyUser
   */

  export type AggregateMyUser = {
    _count: MyUserCountAggregateOutputType | null
    _avg: MyUserAvgAggregateOutputType | null
    _sum: MyUserSumAggregateOutputType | null
    _min: MyUserMinAggregateOutputType | null
    _max: MyUserMaxAggregateOutputType | null
  }

  export type MyUserAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type MyUserSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type MyUserMinAggregateOutputType = {
    name: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id: string | null
    password: string | null
    lat: number | null
    lng: number | null
  }

  export type MyUserMaxAggregateOutputType = {
    name: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id: string | null
    password: string | null
    lat: number | null
    lng: number | null
  }

  export type MyUserCountAggregateOutputType = {
    name: number
    mobileNumber: number
    profilePhoto: number
    work: number
    email: number
    address: number
    createdAt: number
    updatedAt: number
    id: number
    password: number
    lat: number
    lng: number
    _all: number
  }


  export type MyUserAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type MyUserSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type MyUserMinAggregateInputType = {
    name?: true
    mobileNumber?: true
    profilePhoto?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    password?: true
    lat?: true
    lng?: true
  }

  export type MyUserMaxAggregateInputType = {
    name?: true
    mobileNumber?: true
    profilePhoto?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    password?: true
    lat?: true
    lng?: true
  }

  export type MyUserCountAggregateInputType = {
    name?: true
    mobileNumber?: true
    profilePhoto?: true
    work?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    password?: true
    lat?: true
    lng?: true
    _all?: true
  }

  export type MyUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyUser to aggregate.
     */
    where?: MyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyUsers to fetch.
     */
    orderBy?: MyUserOrderByWithRelationInput | MyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyUsers
    **/
    _count?: true | MyUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MyUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MyUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyUserMaxAggregateInputType
  }

  export type GetMyUserAggregateType<T extends MyUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMyUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyUser[P]>
      : GetScalarType<T[P], AggregateMyUser[P]>
  }




  export type MyUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyUserWhereInput
    orderBy?: MyUserOrderByWithAggregationInput | MyUserOrderByWithAggregationInput[]
    by: MyUserScalarFieldEnum[] | MyUserScalarFieldEnum
    having?: MyUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyUserCountAggregateInputType | true
    _avg?: MyUserAvgAggregateInputType
    _sum?: MyUserSumAggregateInputType
    _min?: MyUserMinAggregateInputType
    _max?: MyUserMaxAggregateInputType
  }

  export type MyUserGroupByOutputType = {
    name: string | null
    mobileNumber: string | null
    profilePhoto: string | null
    work: string[]
    email: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    id: string
    password: string
    lat: number | null
    lng: number | null
    _count: MyUserCountAggregateOutputType | null
    _avg: MyUserAvgAggregateOutputType | null
    _sum: MyUserSumAggregateOutputType | null
    _min: MyUserMinAggregateOutputType | null
    _max: MyUserMaxAggregateOutputType | null
  }

  type GetMyUserGroupByPayload<T extends MyUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyUserGroupByOutputType[P]>
            : GetScalarType<T[P], MyUserGroupByOutputType[P]>
        }
      >
    >


  export type MyUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    work?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    password?: boolean
    lat?: boolean
    lng?: boolean
    works?: boolean | MyUser$worksArgs<ExtArgs>
    _count?: boolean | MyUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myUser"]>

  export type MyUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    work?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    password?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["myUser"]>

  export type MyUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    work?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    password?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["myUser"]>

  export type MyUserSelectScalar = {
    name?: boolean
    mobileNumber?: boolean
    profilePhoto?: boolean
    work?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    password?: boolean
    lat?: boolean
    lng?: boolean
  }

  export type MyUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "mobileNumber" | "profilePhoto" | "work" | "email" | "address" | "createdAt" | "updatedAt" | "id" | "password" | "lat" | "lng", ExtArgs["result"]["myUser"]>
  export type MyUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | MyUser$worksArgs<ExtArgs>
    _count?: boolean | MyUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MyUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MyUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MyUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyUser"
    objects: {
      works: Prisma.$WorkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string | null
      mobileNumber: string | null
      profilePhoto: string | null
      work: string[]
      email: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
      id: string
      password: string
      lat: number | null
      lng: number | null
    }, ExtArgs["result"]["myUser"]>
    composites: {}
  }

  type MyUserGetPayload<S extends boolean | null | undefined | MyUserDefaultArgs> = $Result.GetResult<Prisma.$MyUserPayload, S>

  type MyUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyUserCountAggregateInputType | true
    }

  export interface MyUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyUser'], meta: { name: 'MyUser' } }
    /**
     * Find zero or one MyUser that matches the filter.
     * @param {MyUserFindUniqueArgs} args - Arguments to find a MyUser
     * @example
     * // Get one MyUser
     * const myUser = await prisma.myUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyUserFindUniqueArgs>(args: SelectSubset<T, MyUserFindUniqueArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyUserFindUniqueOrThrowArgs} args - Arguments to find a MyUser
     * @example
     * // Get one MyUser
     * const myUser = await prisma.myUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyUserFindUniqueOrThrowArgs>(args: SelectSubset<T, MyUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyUserFindFirstArgs} args - Arguments to find a MyUser
     * @example
     * // Get one MyUser
     * const myUser = await prisma.myUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyUserFindFirstArgs>(args?: SelectSubset<T, MyUserFindFirstArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyUserFindFirstOrThrowArgs} args - Arguments to find a MyUser
     * @example
     * // Get one MyUser
     * const myUser = await prisma.myUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyUserFindFirstOrThrowArgs>(args?: SelectSubset<T, MyUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyUsers
     * const myUsers = await prisma.myUser.findMany()
     * 
     * // Get first 10 MyUsers
     * const myUsers = await prisma.myUser.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const myUserWithNameOnly = await prisma.myUser.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends MyUserFindManyArgs>(args?: SelectSubset<T, MyUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyUser.
     * @param {MyUserCreateArgs} args - Arguments to create a MyUser.
     * @example
     * // Create one MyUser
     * const MyUser = await prisma.myUser.create({
     *   data: {
     *     // ... data to create a MyUser
     *   }
     * })
     * 
     */
    create<T extends MyUserCreateArgs>(args: SelectSubset<T, MyUserCreateArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyUsers.
     * @param {MyUserCreateManyArgs} args - Arguments to create many MyUsers.
     * @example
     * // Create many MyUsers
     * const myUser = await prisma.myUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyUserCreateManyArgs>(args?: SelectSubset<T, MyUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MyUsers and returns the data saved in the database.
     * @param {MyUserCreateManyAndReturnArgs} args - Arguments to create many MyUsers.
     * @example
     * // Create many MyUsers
     * const myUser = await prisma.myUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MyUsers and only return the `name`
     * const myUserWithNameOnly = await prisma.myUser.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MyUserCreateManyAndReturnArgs>(args?: SelectSubset<T, MyUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MyUser.
     * @param {MyUserDeleteArgs} args - Arguments to delete one MyUser.
     * @example
     * // Delete one MyUser
     * const MyUser = await prisma.myUser.delete({
     *   where: {
     *     // ... filter to delete one MyUser
     *   }
     * })
     * 
     */
    delete<T extends MyUserDeleteArgs>(args: SelectSubset<T, MyUserDeleteArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyUser.
     * @param {MyUserUpdateArgs} args - Arguments to update one MyUser.
     * @example
     * // Update one MyUser
     * const myUser = await prisma.myUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyUserUpdateArgs>(args: SelectSubset<T, MyUserUpdateArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyUsers.
     * @param {MyUserDeleteManyArgs} args - Arguments to filter MyUsers to delete.
     * @example
     * // Delete a few MyUsers
     * const { count } = await prisma.myUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyUserDeleteManyArgs>(args?: SelectSubset<T, MyUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyUsers
     * const myUser = await prisma.myUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyUserUpdateManyArgs>(args: SelectSubset<T, MyUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyUsers and returns the data updated in the database.
     * @param {MyUserUpdateManyAndReturnArgs} args - Arguments to update many MyUsers.
     * @example
     * // Update many MyUsers
     * const myUser = await prisma.myUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MyUsers and only return the `name`
     * const myUserWithNameOnly = await prisma.myUser.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MyUserUpdateManyAndReturnArgs>(args: SelectSubset<T, MyUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MyUser.
     * @param {MyUserUpsertArgs} args - Arguments to update or create a MyUser.
     * @example
     * // Update or create a MyUser
     * const myUser = await prisma.myUser.upsert({
     *   create: {
     *     // ... data to create a MyUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyUser we want to update
     *   }
     * })
     */
    upsert<T extends MyUserUpsertArgs>(args: SelectSubset<T, MyUserUpsertArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyUserCountArgs} args - Arguments to filter MyUsers to count.
     * @example
     * // Count the number of MyUsers
     * const count = await prisma.myUser.count({
     *   where: {
     *     // ... the filter for the MyUsers we want to count
     *   }
     * })
    **/
    count<T extends MyUserCountArgs>(
      args?: Subset<T, MyUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyUserAggregateArgs>(args: Subset<T, MyUserAggregateArgs>): Prisma.PrismaPromise<GetMyUserAggregateType<T>>

    /**
     * Group by MyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyUserGroupByArgs['orderBy'] }
        : { orderBy?: MyUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyUser model
   */
  readonly fields: MyUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    works<T extends MyUser$worksArgs<ExtArgs> = {}>(args?: Subset<T, MyUser$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyUser model
   */
  interface MyUserFieldRefs {
    readonly name: FieldRef<"MyUser", 'String'>
    readonly mobileNumber: FieldRef<"MyUser", 'String'>
    readonly profilePhoto: FieldRef<"MyUser", 'String'>
    readonly work: FieldRef<"MyUser", 'String[]'>
    readonly email: FieldRef<"MyUser", 'String'>
    readonly address: FieldRef<"MyUser", 'String'>
    readonly createdAt: FieldRef<"MyUser", 'DateTime'>
    readonly updatedAt: FieldRef<"MyUser", 'DateTime'>
    readonly id: FieldRef<"MyUser", 'String'>
    readonly password: FieldRef<"MyUser", 'String'>
    readonly lat: FieldRef<"MyUser", 'Float'>
    readonly lng: FieldRef<"MyUser", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MyUser findUnique
   */
  export type MyUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * Filter, which MyUser to fetch.
     */
    where: MyUserWhereUniqueInput
  }

  /**
   * MyUser findUniqueOrThrow
   */
  export type MyUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * Filter, which MyUser to fetch.
     */
    where: MyUserWhereUniqueInput
  }

  /**
   * MyUser findFirst
   */
  export type MyUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * Filter, which MyUser to fetch.
     */
    where?: MyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyUsers to fetch.
     */
    orderBy?: MyUserOrderByWithRelationInput | MyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyUsers.
     */
    cursor?: MyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyUsers.
     */
    distinct?: MyUserScalarFieldEnum | MyUserScalarFieldEnum[]
  }

  /**
   * MyUser findFirstOrThrow
   */
  export type MyUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * Filter, which MyUser to fetch.
     */
    where?: MyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyUsers to fetch.
     */
    orderBy?: MyUserOrderByWithRelationInput | MyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyUsers.
     */
    cursor?: MyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyUsers.
     */
    distinct?: MyUserScalarFieldEnum | MyUserScalarFieldEnum[]
  }

  /**
   * MyUser findMany
   */
  export type MyUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * Filter, which MyUsers to fetch.
     */
    where?: MyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyUsers to fetch.
     */
    orderBy?: MyUserOrderByWithRelationInput | MyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyUsers.
     */
    cursor?: MyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyUsers.
     */
    skip?: number
    distinct?: MyUserScalarFieldEnum | MyUserScalarFieldEnum[]
  }

  /**
   * MyUser create
   */
  export type MyUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * The data needed to create a MyUser.
     */
    data: XOR<MyUserCreateInput, MyUserUncheckedCreateInput>
  }

  /**
   * MyUser createMany
   */
  export type MyUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyUsers.
     */
    data: MyUserCreateManyInput | MyUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyUser createManyAndReturn
   */
  export type MyUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * The data used to create many MyUsers.
     */
    data: MyUserCreateManyInput | MyUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyUser update
   */
  export type MyUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * The data needed to update a MyUser.
     */
    data: XOR<MyUserUpdateInput, MyUserUncheckedUpdateInput>
    /**
     * Choose, which MyUser to update.
     */
    where: MyUserWhereUniqueInput
  }

  /**
   * MyUser updateMany
   */
  export type MyUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyUsers.
     */
    data: XOR<MyUserUpdateManyMutationInput, MyUserUncheckedUpdateManyInput>
    /**
     * Filter which MyUsers to update
     */
    where?: MyUserWhereInput
    /**
     * Limit how many MyUsers to update.
     */
    limit?: number
  }

  /**
   * MyUser updateManyAndReturn
   */
  export type MyUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * The data used to update MyUsers.
     */
    data: XOR<MyUserUpdateManyMutationInput, MyUserUncheckedUpdateManyInput>
    /**
     * Filter which MyUsers to update
     */
    where?: MyUserWhereInput
    /**
     * Limit how many MyUsers to update.
     */
    limit?: number
  }

  /**
   * MyUser upsert
   */
  export type MyUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * The filter to search for the MyUser to update in case it exists.
     */
    where: MyUserWhereUniqueInput
    /**
     * In case the MyUser found by the `where` argument doesn't exist, create a new MyUser with this data.
     */
    create: XOR<MyUserCreateInput, MyUserUncheckedCreateInput>
    /**
     * In case the MyUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyUserUpdateInput, MyUserUncheckedUpdateInput>
  }

  /**
   * MyUser delete
   */
  export type MyUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
    /**
     * Filter which MyUser to delete.
     */
    where: MyUserWhereUniqueInput
  }

  /**
   * MyUser deleteMany
   */
  export type MyUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyUsers to delete
     */
    where?: MyUserWhereInput
    /**
     * Limit how many MyUsers to delete.
     */
    limit?: number
  }

  /**
   * MyUser.works
   */
  export type MyUser$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    cursor?: WorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * MyUser without action
   */
  export type MyUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyUser
     */
    select?: MyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyUser
     */
    omit?: MyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyUserInclude<ExtArgs> | null
  }


  /**
   * Model Work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkMinAggregateOutputType = {
    id: string | null
    workType: string | null
    description: string | null
    isActive: boolean | null
    alternateNumber: string | null
    workId: string | null
    createdAt: Date | null
  }

  export type WorkMaxAggregateOutputType = {
    id: string | null
    workType: string | null
    description: string | null
    isActive: boolean | null
    alternateNumber: string | null
    workId: string | null
    createdAt: Date | null
  }

  export type WorkCountAggregateOutputType = {
    id: number
    workType: number
    description: number
    isActive: number
    photos: number
    alternateNumber: number
    workId: number
    createdAt: number
    _all: number
  }


  export type WorkMinAggregateInputType = {
    id?: true
    workType?: true
    description?: true
    isActive?: true
    alternateNumber?: true
    workId?: true
    createdAt?: true
  }

  export type WorkMaxAggregateInputType = {
    id?: true
    workType?: true
    description?: true
    isActive?: true
    alternateNumber?: true
    workId?: true
    createdAt?: true
  }

  export type WorkCountAggregateInputType = {
    id?: true
    workType?: true
    description?: true
    isActive?: true
    photos?: true
    alternateNumber?: true
    workId?: true
    createdAt?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    id: string
    workType: string
    description: string
    isActive: boolean
    photos: string[]
    alternateNumber: string | null
    workId: string
    createdAt: Date
    _count: WorkCountAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workType?: boolean
    description?: boolean
    isActive?: boolean
    photos?: boolean
    alternateNumber?: boolean
    workId?: boolean
    createdAt?: boolean
    user?: boolean | MyUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workType?: boolean
    description?: boolean
    isActive?: boolean
    photos?: boolean
    alternateNumber?: boolean
    workId?: boolean
    createdAt?: boolean
    user?: boolean | MyUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workType?: boolean
    description?: boolean
    isActive?: boolean
    photos?: boolean
    alternateNumber?: boolean
    workId?: boolean
    createdAt?: boolean
    user?: boolean | MyUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectScalar = {
    id?: boolean
    workType?: boolean
    description?: boolean
    isActive?: boolean
    photos?: boolean
    alternateNumber?: boolean
    workId?: boolean
    createdAt?: boolean
  }

  export type WorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workType" | "description" | "isActive" | "photos" | "alternateNumber" | "workId" | "createdAt", ExtArgs["result"]["work"]>
  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MyUserDefaultArgs<ExtArgs>
  }
  export type WorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MyUserDefaultArgs<ExtArgs>
  }
  export type WorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MyUserDefaultArgs<ExtArgs>
  }

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      user: Prisma.$MyUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workType: string
      description: string
      isActive: boolean
      photos: string[]
      alternateNumber: string | null
      workId: string
      createdAt: Date
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workWithIdOnly = await prisma.work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorkCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const workWithIdOnly = await prisma.work.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works and returns the data updated in the database.
     * @param {WorkUpdateManyAndReturnArgs} args - Arguments to update many Works.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Works and only return the `id`
     * const workWithIdOnly = await prisma.work.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends MyUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MyUserDefaultArgs<ExtArgs>>): Prisma__MyUserClient<$Result.GetResult<Prisma.$MyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Work model
   */
  interface WorkFieldRefs {
    readonly id: FieldRef<"Work", 'String'>
    readonly workType: FieldRef<"Work", 'String'>
    readonly description: FieldRef<"Work", 'String'>
    readonly isActive: FieldRef<"Work", 'Boolean'>
    readonly photos: FieldRef<"Work", 'String[]'>
    readonly alternateNumber: FieldRef<"Work", 'String'>
    readonly workId: FieldRef<"Work", 'String'>
    readonly createdAt: FieldRef<"Work", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Work createManyAndReturn
   */
  export type WorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work updateManyAndReturn
   */
  export type WorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MyWorkerScalarFieldEnum: {
    name: 'name',
    mobileNumber: 'mobileNumber',
    profilePhoto: 'profilePhoto',
    photo: 'photo',
    video: 'video',
    dailyWage: 'dailyWage',
    address: 'address',
    rating: 'rating',
    occupation: 'occupation',
    feedback: 'feedback',
    pastDeals: 'pastDeals',
    presentDeals: 'presentDeals',
    age: 'age',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    email: 'email',
    password: 'password',
    lat: 'lat',
    lng: 'lng'
  };

  export type MyWorkerScalarFieldEnum = (typeof MyWorkerScalarFieldEnum)[keyof typeof MyWorkerScalarFieldEnum]


  export const MyVendorScalarFieldEnum: {
    ownerName: 'ownerName',
    mobileNumber: 'mobileNumber',
    profilePhoto: 'profilePhoto',
    shopName: 'shopName',
    shopPhoto: 'shopPhoto',
    email: 'email',
    password: 'password',
    address: 'address',
    rating: 'rating',
    bussinessType: 'bussinessType',
    feedback: 'feedback',
    gstNumber: 'gstNumber',
    age: 'age',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    lat: 'lat',
    lng: 'lng'
  };

  export type MyVendorScalarFieldEnum = (typeof MyVendorScalarFieldEnum)[keyof typeof MyVendorScalarFieldEnum]


  export const MyUserScalarFieldEnum: {
    name: 'name',
    mobileNumber: 'mobileNumber',
    profilePhoto: 'profilePhoto',
    work: 'work',
    email: 'email',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    password: 'password',
    lat: 'lat',
    lng: 'lng'
  };

  export type MyUserScalarFieldEnum = (typeof MyUserScalarFieldEnum)[keyof typeof MyUserScalarFieldEnum]


  export const WorkScalarFieldEnum: {
    id: 'id',
    workType: 'workType',
    description: 'description',
    isActive: 'isActive',
    photos: 'photos',
    alternateNumber: 'alternateNumber',
    workId: 'workId',
    createdAt: 'createdAt'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type MyWorkerWhereInput = {
    AND?: MyWorkerWhereInput | MyWorkerWhereInput[]
    OR?: MyWorkerWhereInput[]
    NOT?: MyWorkerWhereInput | MyWorkerWhereInput[]
    name?: StringNullableFilter<"MyWorker"> | string | null
    mobileNumber?: StringNullableFilter<"MyWorker"> | string | null
    profilePhoto?: StringNullableFilter<"MyWorker"> | string | null
    photo?: StringNullableFilter<"MyWorker"> | string | null
    video?: StringNullableFilter<"MyWorker"> | string | null
    dailyWage?: FloatNullableFilter<"MyWorker"> | number | null
    address?: StringNullableFilter<"MyWorker"> | string | null
    rating?: FloatNullableFilter<"MyWorker"> | number | null
    occupation?: StringNullableFilter<"MyWorker"> | string | null
    feedback?: StringNullableFilter<"MyWorker"> | string | null
    pastDeals?: StringNullableListFilter<"MyWorker">
    presentDeals?: StringNullableListFilter<"MyWorker">
    age?: IntNullableFilter<"MyWorker"> | number | null
    createdAt?: DateTimeFilter<"MyWorker"> | Date | string
    updatedAt?: DateTimeFilter<"MyWorker"> | Date | string
    id?: StringFilter<"MyWorker"> | string
    email?: StringFilter<"MyWorker"> | string
    password?: StringFilter<"MyWorker"> | string
    lat?: FloatNullableFilter<"MyWorker"> | number | null
    lng?: FloatNullableFilter<"MyWorker"> | number | null
  }

  export type MyWorkerOrderByWithRelationInput = {
    name?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    dailyWage?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    pastDeals?: SortOrder
    presentDeals?: SortOrder
    age?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
  }

  export type MyWorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: MyWorkerWhereInput | MyWorkerWhereInput[]
    OR?: MyWorkerWhereInput[]
    NOT?: MyWorkerWhereInput | MyWorkerWhereInput[]
    name?: StringNullableFilter<"MyWorker"> | string | null
    mobileNumber?: StringNullableFilter<"MyWorker"> | string | null
    profilePhoto?: StringNullableFilter<"MyWorker"> | string | null
    photo?: StringNullableFilter<"MyWorker"> | string | null
    video?: StringNullableFilter<"MyWorker"> | string | null
    dailyWage?: FloatNullableFilter<"MyWorker"> | number | null
    address?: StringNullableFilter<"MyWorker"> | string | null
    rating?: FloatNullableFilter<"MyWorker"> | number | null
    occupation?: StringNullableFilter<"MyWorker"> | string | null
    feedback?: StringNullableFilter<"MyWorker"> | string | null
    pastDeals?: StringNullableListFilter<"MyWorker">
    presentDeals?: StringNullableListFilter<"MyWorker">
    age?: IntNullableFilter<"MyWorker"> | number | null
    createdAt?: DateTimeFilter<"MyWorker"> | Date | string
    updatedAt?: DateTimeFilter<"MyWorker"> | Date | string
    password?: StringFilter<"MyWorker"> | string
    lat?: FloatNullableFilter<"MyWorker"> | number | null
    lng?: FloatNullableFilter<"MyWorker"> | number | null
  }, "id" | "email">

  export type MyWorkerOrderByWithAggregationInput = {
    name?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    dailyWage?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    pastDeals?: SortOrder
    presentDeals?: SortOrder
    age?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    _count?: MyWorkerCountOrderByAggregateInput
    _avg?: MyWorkerAvgOrderByAggregateInput
    _max?: MyWorkerMaxOrderByAggregateInput
    _min?: MyWorkerMinOrderByAggregateInput
    _sum?: MyWorkerSumOrderByAggregateInput
  }

  export type MyWorkerScalarWhereWithAggregatesInput = {
    AND?: MyWorkerScalarWhereWithAggregatesInput | MyWorkerScalarWhereWithAggregatesInput[]
    OR?: MyWorkerScalarWhereWithAggregatesInput[]
    NOT?: MyWorkerScalarWhereWithAggregatesInput | MyWorkerScalarWhereWithAggregatesInput[]
    name?: StringNullableWithAggregatesFilter<"MyWorker"> | string | null
    mobileNumber?: StringNullableWithAggregatesFilter<"MyWorker"> | string | null
    profilePhoto?: StringNullableWithAggregatesFilter<"MyWorker"> | string | null
    photo?: StringNullableWithAggregatesFilter<"MyWorker"> | string | null
    video?: StringNullableWithAggregatesFilter<"MyWorker"> | string | null
    dailyWage?: FloatNullableWithAggregatesFilter<"MyWorker"> | number | null
    address?: StringNullableWithAggregatesFilter<"MyWorker"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"MyWorker"> | number | null
    occupation?: StringNullableWithAggregatesFilter<"MyWorker"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"MyWorker"> | string | null
    pastDeals?: StringNullableListFilter<"MyWorker">
    presentDeals?: StringNullableListFilter<"MyWorker">
    age?: IntNullableWithAggregatesFilter<"MyWorker"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MyWorker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MyWorker"> | Date | string
    id?: StringWithAggregatesFilter<"MyWorker"> | string
    email?: StringWithAggregatesFilter<"MyWorker"> | string
    password?: StringWithAggregatesFilter<"MyWorker"> | string
    lat?: FloatNullableWithAggregatesFilter<"MyWorker"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"MyWorker"> | number | null
  }

  export type MyVendorWhereInput = {
    AND?: MyVendorWhereInput | MyVendorWhereInput[]
    OR?: MyVendorWhereInput[]
    NOT?: MyVendorWhereInput | MyVendorWhereInput[]
    ownerName?: StringNullableFilter<"MyVendor"> | string | null
    mobileNumber?: StringNullableFilter<"MyVendor"> | string | null
    profilePhoto?: StringNullableFilter<"MyVendor"> | string | null
    shopName?: StringNullableFilter<"MyVendor"> | string | null
    shopPhoto?: StringNullableFilter<"MyVendor"> | string | null
    email?: StringNullableFilter<"MyVendor"> | string | null
    password?: StringNullableFilter<"MyVendor"> | string | null
    address?: StringNullableFilter<"MyVendor"> | string | null
    rating?: FloatNullableFilter<"MyVendor"> | number | null
    bussinessType?: StringNullableFilter<"MyVendor"> | string | null
    feedback?: StringNullableFilter<"MyVendor"> | string | null
    gstNumber?: StringNullableFilter<"MyVendor"> | string | null
    age?: IntNullableFilter<"MyVendor"> | number | null
    createdAt?: DateTimeFilter<"MyVendor"> | Date | string
    updatedAt?: DateTimeFilter<"MyVendor"> | Date | string
    id?: StringFilter<"MyVendor"> | string
    lat?: FloatNullableFilter<"MyVendor"> | number | null
    lng?: FloatNullableFilter<"MyVendor"> | number | null
  }

  export type MyVendorOrderByWithRelationInput = {
    ownerName?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    shopName?: SortOrderInput | SortOrder
    shopPhoto?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    bussinessType?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
  }

  export type MyVendorWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: MyVendorWhereInput | MyVendorWhereInput[]
    OR?: MyVendorWhereInput[]
    NOT?: MyVendorWhereInput | MyVendorWhereInput[]
    ownerName?: StringNullableFilter<"MyVendor"> | string | null
    mobileNumber?: StringNullableFilter<"MyVendor"> | string | null
    profilePhoto?: StringNullableFilter<"MyVendor"> | string | null
    shopName?: StringNullableFilter<"MyVendor"> | string | null
    shopPhoto?: StringNullableFilter<"MyVendor"> | string | null
    password?: StringNullableFilter<"MyVendor"> | string | null
    address?: StringNullableFilter<"MyVendor"> | string | null
    rating?: FloatNullableFilter<"MyVendor"> | number | null
    bussinessType?: StringNullableFilter<"MyVendor"> | string | null
    feedback?: StringNullableFilter<"MyVendor"> | string | null
    gstNumber?: StringNullableFilter<"MyVendor"> | string | null
    age?: IntNullableFilter<"MyVendor"> | number | null
    createdAt?: DateTimeFilter<"MyVendor"> | Date | string
    updatedAt?: DateTimeFilter<"MyVendor"> | Date | string
    lat?: FloatNullableFilter<"MyVendor"> | number | null
    lng?: FloatNullableFilter<"MyVendor"> | number | null
  }, "id" | "email">

  export type MyVendorOrderByWithAggregationInput = {
    ownerName?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    shopName?: SortOrderInput | SortOrder
    shopPhoto?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    bussinessType?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    _count?: MyVendorCountOrderByAggregateInput
    _avg?: MyVendorAvgOrderByAggregateInput
    _max?: MyVendorMaxOrderByAggregateInput
    _min?: MyVendorMinOrderByAggregateInput
    _sum?: MyVendorSumOrderByAggregateInput
  }

  export type MyVendorScalarWhereWithAggregatesInput = {
    AND?: MyVendorScalarWhereWithAggregatesInput | MyVendorScalarWhereWithAggregatesInput[]
    OR?: MyVendorScalarWhereWithAggregatesInput[]
    NOT?: MyVendorScalarWhereWithAggregatesInput | MyVendorScalarWhereWithAggregatesInput[]
    ownerName?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    mobileNumber?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    profilePhoto?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    shopName?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    shopPhoto?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    email?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    password?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    address?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"MyVendor"> | number | null
    bussinessType?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    gstNumber?: StringNullableWithAggregatesFilter<"MyVendor"> | string | null
    age?: IntNullableWithAggregatesFilter<"MyVendor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MyVendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MyVendor"> | Date | string
    id?: StringWithAggregatesFilter<"MyVendor"> | string
    lat?: FloatNullableWithAggregatesFilter<"MyVendor"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"MyVendor"> | number | null
  }

  export type MyUserWhereInput = {
    AND?: MyUserWhereInput | MyUserWhereInput[]
    OR?: MyUserWhereInput[]
    NOT?: MyUserWhereInput | MyUserWhereInput[]
    name?: StringNullableFilter<"MyUser"> | string | null
    mobileNumber?: StringNullableFilter<"MyUser"> | string | null
    profilePhoto?: StringNullableFilter<"MyUser"> | string | null
    work?: StringNullableListFilter<"MyUser">
    email?: StringNullableFilter<"MyUser"> | string | null
    address?: StringNullableFilter<"MyUser"> | string | null
    createdAt?: DateTimeFilter<"MyUser"> | Date | string
    updatedAt?: DateTimeFilter<"MyUser"> | Date | string
    id?: StringFilter<"MyUser"> | string
    password?: StringFilter<"MyUser"> | string
    lat?: FloatNullableFilter<"MyUser"> | number | null
    lng?: FloatNullableFilter<"MyUser"> | number | null
    works?: WorkListRelationFilter
  }

  export type MyUserOrderByWithRelationInput = {
    name?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    work?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    password?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    works?: WorkOrderByRelationAggregateInput
  }

  export type MyUserWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: MyUserWhereInput | MyUserWhereInput[]
    OR?: MyUserWhereInput[]
    NOT?: MyUserWhereInput | MyUserWhereInput[]
    name?: StringNullableFilter<"MyUser"> | string | null
    mobileNumber?: StringNullableFilter<"MyUser"> | string | null
    profilePhoto?: StringNullableFilter<"MyUser"> | string | null
    work?: StringNullableListFilter<"MyUser">
    address?: StringNullableFilter<"MyUser"> | string | null
    createdAt?: DateTimeFilter<"MyUser"> | Date | string
    updatedAt?: DateTimeFilter<"MyUser"> | Date | string
    password?: StringFilter<"MyUser"> | string
    lat?: FloatNullableFilter<"MyUser"> | number | null
    lng?: FloatNullableFilter<"MyUser"> | number | null
    works?: WorkListRelationFilter
  }, "id" | "email">

  export type MyUserOrderByWithAggregationInput = {
    name?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    work?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    password?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    _count?: MyUserCountOrderByAggregateInput
    _avg?: MyUserAvgOrderByAggregateInput
    _max?: MyUserMaxOrderByAggregateInput
    _min?: MyUserMinOrderByAggregateInput
    _sum?: MyUserSumOrderByAggregateInput
  }

  export type MyUserScalarWhereWithAggregatesInput = {
    AND?: MyUserScalarWhereWithAggregatesInput | MyUserScalarWhereWithAggregatesInput[]
    OR?: MyUserScalarWhereWithAggregatesInput[]
    NOT?: MyUserScalarWhereWithAggregatesInput | MyUserScalarWhereWithAggregatesInput[]
    name?: StringNullableWithAggregatesFilter<"MyUser"> | string | null
    mobileNumber?: StringNullableWithAggregatesFilter<"MyUser"> | string | null
    profilePhoto?: StringNullableWithAggregatesFilter<"MyUser"> | string | null
    work?: StringNullableListFilter<"MyUser">
    email?: StringNullableWithAggregatesFilter<"MyUser"> | string | null
    address?: StringNullableWithAggregatesFilter<"MyUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MyUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MyUser"> | Date | string
    id?: StringWithAggregatesFilter<"MyUser"> | string
    password?: StringWithAggregatesFilter<"MyUser"> | string
    lat?: FloatNullableWithAggregatesFilter<"MyUser"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"MyUser"> | number | null
  }

  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    id?: StringFilter<"Work"> | string
    workType?: StringFilter<"Work"> | string
    description?: StringFilter<"Work"> | string
    isActive?: BoolFilter<"Work"> | boolean
    photos?: StringNullableListFilter<"Work">
    alternateNumber?: StringNullableFilter<"Work"> | string | null
    workId?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
    user?: XOR<MyUserScalarRelationFilter, MyUserWhereInput>
  }

  export type WorkOrderByWithRelationInput = {
    id?: SortOrder
    workType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    photos?: SortOrder
    alternateNumber?: SortOrderInput | SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    user?: MyUserOrderByWithRelationInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    workType?: StringFilter<"Work"> | string
    description?: StringFilter<"Work"> | string
    isActive?: BoolFilter<"Work"> | boolean
    photos?: StringNullableListFilter<"Work">
    alternateNumber?: StringNullableFilter<"Work"> | string | null
    workId?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
    user?: XOR<MyUserScalarRelationFilter, MyUserWhereInput>
  }, "id">

  export type WorkOrderByWithAggregationInput = {
    id?: SortOrder
    workType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    photos?: SortOrder
    alternateNumber?: SortOrderInput | SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Work"> | string
    workType?: StringWithAggregatesFilter<"Work"> | string
    description?: StringWithAggregatesFilter<"Work"> | string
    isActive?: BoolWithAggregatesFilter<"Work"> | boolean
    photos?: StringNullableListFilter<"Work">
    alternateNumber?: StringNullableWithAggregatesFilter<"Work"> | string | null
    workId?: StringWithAggregatesFilter<"Work"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
  }

  export type MyWorkerCreateInput = {
    name?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    photo?: string | null
    video?: string | null
    dailyWage?: number | null
    address?: string | null
    rating?: number | null
    occupation?: string | null
    feedback?: string | null
    pastDeals?: MyWorkerCreatepastDealsInput | string[]
    presentDeals?: MyWorkerCreatepresentDealsInput | string[]
    age?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    email: string
    password?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyWorkerUncheckedCreateInput = {
    name?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    photo?: string | null
    video?: string | null
    dailyWage?: number | null
    address?: string | null
    rating?: number | null
    occupation?: string | null
    feedback?: string | null
    pastDeals?: MyWorkerCreatepastDealsInput | string[]
    presentDeals?: MyWorkerCreatepresentDealsInput | string[]
    age?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    email: string
    password?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyWorkerUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    dailyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    pastDeals?: MyWorkerUpdatepastDealsInput | string[]
    presentDeals?: MyWorkerUpdatepresentDealsInput | string[]
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyWorkerUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    dailyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    pastDeals?: MyWorkerUpdatepastDealsInput | string[]
    presentDeals?: MyWorkerUpdatepresentDealsInput | string[]
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyWorkerCreateManyInput = {
    name?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    photo?: string | null
    video?: string | null
    dailyWage?: number | null
    address?: string | null
    rating?: number | null
    occupation?: string | null
    feedback?: string | null
    pastDeals?: MyWorkerCreatepastDealsInput | string[]
    presentDeals?: MyWorkerCreatepresentDealsInput | string[]
    age?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    email: string
    password?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyWorkerUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    dailyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    pastDeals?: MyWorkerUpdatepastDealsInput | string[]
    presentDeals?: MyWorkerUpdatepresentDealsInput | string[]
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyWorkerUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    dailyWage?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    pastDeals?: MyWorkerUpdatepastDealsInput | string[]
    presentDeals?: MyWorkerUpdatepresentDealsInput | string[]
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyVendorCreateInput = {
    ownerName?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    shopName?: string | null
    shopPhoto?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    rating?: number | null
    bussinessType?: string | null
    feedback?: string | null
    gstNumber?: string | null
    age?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyVendorUncheckedCreateInput = {
    ownerName?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    shopName?: string | null
    shopPhoto?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    rating?: number | null
    bussinessType?: string | null
    feedback?: string | null
    gstNumber?: string | null
    age?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyVendorUpdateInput = {
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    shopPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    bussinessType?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyVendorUncheckedUpdateInput = {
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    shopPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    bussinessType?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyVendorCreateManyInput = {
    ownerName?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    shopName?: string | null
    shopPhoto?: string | null
    email?: string | null
    password?: string | null
    address?: string | null
    rating?: number | null
    bussinessType?: string | null
    feedback?: string | null
    gstNumber?: string | null
    age?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyVendorUpdateManyMutationInput = {
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    shopPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    bussinessType?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyVendorUncheckedUpdateManyInput = {
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    shopPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    bussinessType?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyUserCreateInput = {
    name?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    work?: MyUserCreateworkInput | string[]
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    password?: string
    lat?: number | null
    lng?: number | null
    works?: WorkCreateNestedManyWithoutUserInput
  }

  export type MyUserUncheckedCreateInput = {
    name?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    work?: MyUserCreateworkInput | string[]
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    password?: string
    lat?: number | null
    lng?: number | null
    works?: WorkUncheckedCreateNestedManyWithoutUserInput
  }

  export type MyUserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    work?: MyUserUpdateworkInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    works?: WorkUpdateManyWithoutUserNestedInput
  }

  export type MyUserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    work?: MyUserUpdateworkInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    works?: WorkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MyUserCreateManyInput = {
    name?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    work?: MyUserCreateworkInput | string[]
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    password?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyUserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    work?: MyUserUpdateworkInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyUserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    work?: MyUserUpdateworkInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WorkCreateInput = {
    id?: string
    workType: string
    description: string
    isActive?: boolean
    photos?: WorkCreatephotosInput | string[]
    alternateNumber?: string | null
    createdAt?: Date | string
    user: MyUserCreateNestedOneWithoutWorksInput
  }

  export type WorkUncheckedCreateInput = {
    id?: string
    workType: string
    description: string
    isActive?: boolean
    photos?: WorkCreatephotosInput | string[]
    alternateNumber?: string | null
    workId: string
    createdAt?: Date | string
  }

  export type WorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    photos?: WorkUpdatephotosInput | string[]
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: MyUserUpdateOneRequiredWithoutWorksNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    photos?: WorkUpdatephotosInput | string[]
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateManyInput = {
    id?: string
    workType: string
    description: string
    isActive?: boolean
    photos?: WorkCreatephotosInput | string[]
    alternateNumber?: string | null
    workId: string
    createdAt?: Date | string
  }

  export type WorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    photos?: WorkUpdatephotosInput | string[]
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    photos?: WorkUpdatephotosInput | string[]
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MyWorkerCountOrderByAggregateInput = {
    name?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    photo?: SortOrder
    video?: SortOrder
    dailyWage?: SortOrder
    address?: SortOrder
    rating?: SortOrder
    occupation?: SortOrder
    feedback?: SortOrder
    pastDeals?: SortOrder
    presentDeals?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyWorkerAvgOrderByAggregateInput = {
    dailyWage?: SortOrder
    rating?: SortOrder
    age?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyWorkerMaxOrderByAggregateInput = {
    name?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    photo?: SortOrder
    video?: SortOrder
    dailyWage?: SortOrder
    address?: SortOrder
    rating?: SortOrder
    occupation?: SortOrder
    feedback?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyWorkerMinOrderByAggregateInput = {
    name?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    photo?: SortOrder
    video?: SortOrder
    dailyWage?: SortOrder
    address?: SortOrder
    rating?: SortOrder
    occupation?: SortOrder
    feedback?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyWorkerSumOrderByAggregateInput = {
    dailyWage?: SortOrder
    rating?: SortOrder
    age?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MyVendorCountOrderByAggregateInput = {
    ownerName?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    shopName?: SortOrder
    shopPhoto?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    rating?: SortOrder
    bussinessType?: SortOrder
    feedback?: SortOrder
    gstNumber?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyVendorAvgOrderByAggregateInput = {
    rating?: SortOrder
    age?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyVendorMaxOrderByAggregateInput = {
    ownerName?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    shopName?: SortOrder
    shopPhoto?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    rating?: SortOrder
    bussinessType?: SortOrder
    feedback?: SortOrder
    gstNumber?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyVendorMinOrderByAggregateInput = {
    ownerName?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    shopName?: SortOrder
    shopPhoto?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    rating?: SortOrder
    bussinessType?: SortOrder
    feedback?: SortOrder
    gstNumber?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyVendorSumOrderByAggregateInput = {
    rating?: SortOrder
    age?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MyUserCountOrderByAggregateInput = {
    name?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    work?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    password?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyUserAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyUserMaxOrderByAggregateInput = {
    name?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    password?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyUserMinOrderByAggregateInput = {
    name?: SortOrder
    mobileNumber?: SortOrder
    profilePhoto?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    password?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MyUserSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MyUserScalarRelationFilter = {
    is?: MyUserWhereInput
    isNot?: MyUserWhereInput
  }

  export type WorkCountOrderByAggregateInput = {
    id?: SortOrder
    workType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    photos?: SortOrder
    alternateNumber?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    id?: SortOrder
    workType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    alternateNumber?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    id?: SortOrder
    workType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    alternateNumber?: SortOrder
    workId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MyWorkerCreatepastDealsInput = {
    set: string[]
  }

  export type MyWorkerCreatepresentDealsInput = {
    set: string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MyWorkerUpdatepastDealsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MyWorkerUpdatepresentDealsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MyUserCreateworkInput = {
    set: string[]
  }

  export type WorkCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput> | WorkCreateWithoutUserInput[] | WorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutUserInput | WorkCreateOrConnectWithoutUserInput[]
    createMany?: WorkCreateManyUserInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type WorkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput> | WorkCreateWithoutUserInput[] | WorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutUserInput | WorkCreateOrConnectWithoutUserInput[]
    createMany?: WorkCreateManyUserInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type MyUserUpdateworkInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WorkUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput> | WorkCreateWithoutUserInput[] | WorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutUserInput | WorkCreateOrConnectWithoutUserInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutUserInput | WorkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkCreateManyUserInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutUserInput | WorkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutUserInput | WorkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type WorkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput> | WorkCreateWithoutUserInput[] | WorkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutUserInput | WorkCreateOrConnectWithoutUserInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutUserInput | WorkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkCreateManyUserInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutUserInput | WorkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutUserInput | WorkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type WorkCreatephotosInput = {
    set: string[]
  }

  export type MyUserCreateNestedOneWithoutWorksInput = {
    create?: XOR<MyUserCreateWithoutWorksInput, MyUserUncheckedCreateWithoutWorksInput>
    connectOrCreate?: MyUserCreateOrConnectWithoutWorksInput
    connect?: MyUserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MyUserUpdateOneRequiredWithoutWorksNestedInput = {
    create?: XOR<MyUserCreateWithoutWorksInput, MyUserUncheckedCreateWithoutWorksInput>
    connectOrCreate?: MyUserCreateOrConnectWithoutWorksInput
    upsert?: MyUserUpsertWithoutWorksInput
    connect?: MyUserWhereUniqueInput
    update?: XOR<XOR<MyUserUpdateToOneWithWhereWithoutWorksInput, MyUserUpdateWithoutWorksInput>, MyUserUncheckedUpdateWithoutWorksInput>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WorkCreateWithoutUserInput = {
    id?: string
    workType: string
    description: string
    isActive?: boolean
    photos?: WorkCreatephotosInput | string[]
    alternateNumber?: string | null
    createdAt?: Date | string
  }

  export type WorkUncheckedCreateWithoutUserInput = {
    id?: string
    workType: string
    description: string
    isActive?: boolean
    photos?: WorkCreatephotosInput | string[]
    alternateNumber?: string | null
    createdAt?: Date | string
  }

  export type WorkCreateOrConnectWithoutUserInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput>
  }

  export type WorkCreateManyUserInputEnvelope = {
    data: WorkCreateManyUserInput | WorkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutUserInput, WorkUncheckedUpdateWithoutUserInput>
    create: XOR<WorkCreateWithoutUserInput, WorkUncheckedCreateWithoutUserInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutUserInput, WorkUncheckedUpdateWithoutUserInput>
  }

  export type WorkUpdateManyWithWhereWithoutUserInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkScalarWhereInput = {
    AND?: WorkScalarWhereInput | WorkScalarWhereInput[]
    OR?: WorkScalarWhereInput[]
    NOT?: WorkScalarWhereInput | WorkScalarWhereInput[]
    id?: StringFilter<"Work"> | string
    workType?: StringFilter<"Work"> | string
    description?: StringFilter<"Work"> | string
    isActive?: BoolFilter<"Work"> | boolean
    photos?: StringNullableListFilter<"Work">
    alternateNumber?: StringNullableFilter<"Work"> | string | null
    workId?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
  }

  export type MyUserCreateWithoutWorksInput = {
    name?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    work?: MyUserCreateworkInput | string[]
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    password?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyUserUncheckedCreateWithoutWorksInput = {
    name?: string | null
    mobileNumber?: string | null
    profilePhoto?: string | null
    work?: MyUserCreateworkInput | string[]
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: string
    password?: string
    lat?: number | null
    lng?: number | null
  }

  export type MyUserCreateOrConnectWithoutWorksInput = {
    where: MyUserWhereUniqueInput
    create: XOR<MyUserCreateWithoutWorksInput, MyUserUncheckedCreateWithoutWorksInput>
  }

  export type MyUserUpsertWithoutWorksInput = {
    update: XOR<MyUserUpdateWithoutWorksInput, MyUserUncheckedUpdateWithoutWorksInput>
    create: XOR<MyUserCreateWithoutWorksInput, MyUserUncheckedCreateWithoutWorksInput>
    where?: MyUserWhereInput
  }

  export type MyUserUpdateToOneWithWhereWithoutWorksInput = {
    where?: MyUserWhereInput
    data: XOR<MyUserUpdateWithoutWorksInput, MyUserUncheckedUpdateWithoutWorksInput>
  }

  export type MyUserUpdateWithoutWorksInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    work?: MyUserUpdateworkInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MyUserUncheckedUpdateWithoutWorksInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    work?: MyUserUpdateworkInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WorkCreateManyUserInput = {
    id?: string
    workType: string
    description: string
    isActive?: boolean
    photos?: WorkCreatephotosInput | string[]
    alternateNumber?: string | null
    createdAt?: Date | string
  }

  export type WorkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    photos?: WorkUpdatephotosInput | string[]
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    photos?: WorkUpdatephotosInput | string[]
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    photos?: WorkUpdatephotosInput | string[]
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}