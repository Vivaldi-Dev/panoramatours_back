
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
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model RentACar
 * 
 */
export type RentACar = $Result.DefaultSelection<Prisma.$RentACarPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Highlight
 * 
 */
export type Highlight = $Result.DefaultSelection<Prisma.$HighlightPayload>
/**
 * Model ActivityPhoto
 * 
 */
export type ActivityPhoto = $Result.DefaultSelection<Prisma.$ActivityPhotoPayload>
/**
 * Model TourPackage
 * 
 */
export type TourPackage = $Result.DefaultSelection<Prisma.$TourPackagePayload>
/**
 * Model TourPhoto
 * 
 */
export type TourPhoto = $Result.DefaultSelection<Prisma.$TourPhotoPayload>
/**
 * Model TourHighlight
 * 
 */
export type TourHighlight = $Result.DefaultSelection<Prisma.$TourHighlightPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model IATACode
 * 
 */
export type IATACode = $Result.DefaultSelection<Prisma.$IATACodePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.car.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentACar`: Exposes CRUD operations for the **RentACar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentACars
    * const rentACars = await prisma.rentACar.findMany()
    * ```
    */
  get rentACar(): Prisma.RentACarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlight`: Exposes CRUD operations for the **Highlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Highlights
    * const highlights = await prisma.highlight.findMany()
    * ```
    */
  get highlight(): Prisma.HighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityPhoto`: Exposes CRUD operations for the **ActivityPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityPhotos
    * const activityPhotos = await prisma.activityPhoto.findMany()
    * ```
    */
  get activityPhoto(): Prisma.ActivityPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourPackage`: Exposes CRUD operations for the **TourPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourPackages
    * const tourPackages = await prisma.tourPackage.findMany()
    * ```
    */
  get tourPackage(): Prisma.TourPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourPhoto`: Exposes CRUD operations for the **TourPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourPhotos
    * const tourPhotos = await prisma.tourPhoto.findMany()
    * ```
    */
  get tourPhoto(): Prisma.TourPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourHighlight`: Exposes CRUD operations for the **TourHighlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourHighlights
    * const tourHighlights = await prisma.tourHighlight.findMany()
    * ```
    */
  get tourHighlight(): Prisma.TourHighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iATACode`: Exposes CRUD operations for the **IATACode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IATACodes
    * const iATACodes = await prisma.iATACode.findMany()
    * ```
    */
  get iATACode(): Prisma.IATACodeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Car: 'Car',
    RentACar: 'RentACar',
    Activity: 'Activity',
    Highlight: 'Highlight',
    ActivityPhoto: 'ActivityPhoto',
    TourPackage: 'TourPackage',
    TourPhoto: 'TourPhoto',
    TourHighlight: 'TourHighlight',
    Location: 'Location',
    IATACode: 'IATACode'
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
      modelProps: "car" | "rentACar" | "activity" | "highlight" | "activityPhoto" | "tourPackage" | "tourPhoto" | "tourHighlight" | "location" | "iATACode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      RentACar: {
        payload: Prisma.$RentACarPayload<ExtArgs>
        fields: Prisma.RentACarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentACarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentACarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>
          }
          findFirst: {
            args: Prisma.RentACarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentACarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>
          }
          findMany: {
            args: Prisma.RentACarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>[]
          }
          create: {
            args: Prisma.RentACarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>
          }
          createMany: {
            args: Prisma.RentACarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentACarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>[]
          }
          delete: {
            args: Prisma.RentACarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>
          }
          update: {
            args: Prisma.RentACarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>
          }
          deleteMany: {
            args: Prisma.RentACarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentACarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentACarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>[]
          }
          upsert: {
            args: Prisma.RentACarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentACarPayload>
          }
          aggregate: {
            args: Prisma.RentACarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentACar>
          }
          groupBy: {
            args: Prisma.RentACarGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentACarGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentACarCountArgs<ExtArgs>
            result: $Utils.Optional<RentACarCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Highlight: {
        payload: Prisma.$HighlightPayload<ExtArgs>
        fields: Prisma.HighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findFirst: {
            args: Prisma.HighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findMany: {
            args: Prisma.HighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          create: {
            args: Prisma.HighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          createMany: {
            args: Prisma.HighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HighlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          delete: {
            args: Prisma.HighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          update: {
            args: Prisma.HighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          deleteMany: {
            args: Prisma.HighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HighlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          upsert: {
            args: Prisma.HighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          aggregate: {
            args: Prisma.HighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlight>
          }
          groupBy: {
            args: Prisma.HighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.HighlightCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightCountAggregateOutputType> | number
          }
        }
      }
      ActivityPhoto: {
        payload: Prisma.$ActivityPhotoPayload<ExtArgs>
        fields: Prisma.ActivityPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>
          }
          findFirst: {
            args: Prisma.ActivityPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>
          }
          findMany: {
            args: Prisma.ActivityPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>[]
          }
          create: {
            args: Prisma.ActivityPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>
          }
          createMany: {
            args: Prisma.ActivityPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>[]
          }
          delete: {
            args: Prisma.ActivityPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>
          }
          update: {
            args: Prisma.ActivityPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>
          }
          deleteMany: {
            args: Prisma.ActivityPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>[]
          }
          upsert: {
            args: Prisma.ActivityPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPhotoPayload>
          }
          aggregate: {
            args: Prisma.ActivityPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityPhoto>
          }
          groupBy: {
            args: Prisma.ActivityPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityPhotoCountAggregateOutputType> | number
          }
        }
      }
      TourPackage: {
        payload: Prisma.$TourPackagePayload<ExtArgs>
        fields: Prisma.TourPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          findFirst: {
            args: Prisma.TourPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          findMany: {
            args: Prisma.TourPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>[]
          }
          create: {
            args: Prisma.TourPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          createMany: {
            args: Prisma.TourPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>[]
          }
          delete: {
            args: Prisma.TourPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          update: {
            args: Prisma.TourPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          deleteMany: {
            args: Prisma.TourPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>[]
          }
          upsert: {
            args: Prisma.TourPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPackagePayload>
          }
          aggregate: {
            args: Prisma.TourPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourPackage>
          }
          groupBy: {
            args: Prisma.TourPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourPackageCountArgs<ExtArgs>
            result: $Utils.Optional<TourPackageCountAggregateOutputType> | number
          }
        }
      }
      TourPhoto: {
        payload: Prisma.$TourPhotoPayload<ExtArgs>
        fields: Prisma.TourPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>
          }
          findFirst: {
            args: Prisma.TourPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>
          }
          findMany: {
            args: Prisma.TourPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>[]
          }
          create: {
            args: Prisma.TourPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>
          }
          createMany: {
            args: Prisma.TourPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>[]
          }
          delete: {
            args: Prisma.TourPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>
          }
          update: {
            args: Prisma.TourPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>
          }
          deleteMany: {
            args: Prisma.TourPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>[]
          }
          upsert: {
            args: Prisma.TourPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPhotoPayload>
          }
          aggregate: {
            args: Prisma.TourPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourPhoto>
          }
          groupBy: {
            args: Prisma.TourPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<TourPhotoCountAggregateOutputType> | number
          }
        }
      }
      TourHighlight: {
        payload: Prisma.$TourHighlightPayload<ExtArgs>
        fields: Prisma.TourHighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourHighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourHighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>
          }
          findFirst: {
            args: Prisma.TourHighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourHighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>
          }
          findMany: {
            args: Prisma.TourHighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>[]
          }
          create: {
            args: Prisma.TourHighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>
          }
          createMany: {
            args: Prisma.TourHighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourHighlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>[]
          }
          delete: {
            args: Prisma.TourHighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>
          }
          update: {
            args: Prisma.TourHighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>
          }
          deleteMany: {
            args: Prisma.TourHighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourHighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourHighlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>[]
          }
          upsert: {
            args: Prisma.TourHighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourHighlightPayload>
          }
          aggregate: {
            args: Prisma.TourHighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourHighlight>
          }
          groupBy: {
            args: Prisma.TourHighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourHighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourHighlightCountArgs<ExtArgs>
            result: $Utils.Optional<TourHighlightCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      IATACode: {
        payload: Prisma.$IATACodePayload<ExtArgs>
        fields: Prisma.IATACodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IATACodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IATACodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>
          }
          findFirst: {
            args: Prisma.IATACodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IATACodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>
          }
          findMany: {
            args: Prisma.IATACodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>[]
          }
          create: {
            args: Prisma.IATACodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>
          }
          createMany: {
            args: Prisma.IATACodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IATACodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>[]
          }
          delete: {
            args: Prisma.IATACodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>
          }
          update: {
            args: Prisma.IATACodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>
          }
          deleteMany: {
            args: Prisma.IATACodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IATACodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IATACodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>[]
          }
          upsert: {
            args: Prisma.IATACodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IATACodePayload>
          }
          aggregate: {
            args: Prisma.IATACodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIATACode>
          }
          groupBy: {
            args: Prisma.IATACodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IATACodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IATACodeCountArgs<ExtArgs>
            result: $Utils.Optional<IATACodeCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    car?: CarOmit
    rentACar?: RentACarOmit
    activity?: ActivityOmit
    highlight?: HighlightOmit
    activityPhoto?: ActivityPhotoOmit
    tourPackage?: TourPackageOmit
    tourPhoto?: TourPhotoOmit
    tourHighlight?: TourHighlightOmit
    location?: LocationOmit
    iATACode?: IATACodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    rents: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rents?: boolean | CarCountOutputTypeCountRentsArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountRentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentACarWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    photos: number
    highlights: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | ActivityCountOutputTypeCountPhotosArgs
    highlights?: boolean | ActivityCountOutputTypeCountHighlightsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityPhotoWhereInput
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
  }


  /**
   * Count Type TourPackageCountOutputType
   */

  export type TourPackageCountOutputType = {
    photos: number
    highlights: number
  }

  export type TourPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | TourPackageCountOutputTypeCountPhotosArgs
    highlights?: boolean | TourPackageCountOutputTypeCountHighlightsArgs
  }

  // Custom InputTypes
  /**
   * TourPackageCountOutputType without action
   */
  export type TourPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackageCountOutputType
     */
    select?: TourPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourPackageCountOutputType without action
   */
  export type TourPackageCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourPhotoWhereInput
  }

  /**
   * TourPackageCountOutputType without action
   */
  export type TourPackageCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourHighlightWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    mileage: number | null
    seats: number | null
    doors: number | null
    year: number | null
    price: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    mileage: number | null
    seats: number | null
    doors: number | null
    year: number | null
    price: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    model: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    mileage: number | null
    fuel: string | null
    engine: string | null
    seats: number | null
    doors: number | null
    year: number | null
    transmission: string | null
    price: number | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    model: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    mileage: number | null
    fuel: string | null
    engine: string | null
    seats: number | null
    doors: number | null
    year: number | null
    transmission: string | null
    price: number | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    model: number
    description: number
    image: number
    createdAt: number
    mileage: number
    fuel: number
    engine: number
    seats: number
    doors: number
    year: number
    transmission: number
    price: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    mileage?: true
    seats?: true
    doors?: true
    year?: true
    price?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    mileage?: true
    seats?: true
    doors?: true
    year?: true
    price?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    model?: true
    description?: true
    image?: true
    createdAt?: true
    mileage?: true
    fuel?: true
    engine?: true
    seats?: true
    doors?: true
    year?: true
    transmission?: true
    price?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    model?: true
    description?: true
    image?: true
    createdAt?: true
    mileage?: true
    fuel?: true
    engine?: true
    seats?: true
    doors?: true
    year?: true
    transmission?: true
    price?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    model?: true
    description?: true
    image?: true
    createdAt?: true
    mileage?: true
    fuel?: true
    engine?: true
    seats?: true
    doors?: true
    year?: true
    transmission?: true
    price?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    model: string
    description: string
    image: string
    createdAt: Date
    mileage: number
    fuel: string
    engine: string
    seats: number
    doors: number
    year: number
    transmission: string
    price: number
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    mileage?: boolean
    fuel?: boolean
    engine?: boolean
    seats?: boolean
    doors?: boolean
    year?: boolean
    transmission?: boolean
    price?: boolean
    rents?: boolean | Car$rentsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    mileage?: boolean
    fuel?: boolean
    engine?: boolean
    seats?: boolean
    doors?: boolean
    year?: boolean
    transmission?: boolean
    price?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    mileage?: boolean
    fuel?: boolean
    engine?: boolean
    seats?: boolean
    doors?: boolean
    year?: boolean
    transmission?: boolean
    price?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    model?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    mileage?: boolean
    fuel?: boolean
    engine?: boolean
    seats?: boolean
    doors?: boolean
    year?: boolean
    transmission?: boolean
    price?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "description" | "image" | "createdAt" | "mileage" | "fuel" | "engine" | "seats" | "doors" | "year" | "transmission" | "price", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rents?: boolean | Car$rentsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      rents: Prisma.$RentACarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string
      description: string
      image: string
      createdAt: Date
      mileage: number
      fuel: string
      engine: string
      seats: number
      doors: number
      year: number
      transmission: string
      price: number
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rents<T extends Car$rentsArgs<ExtArgs> = {}>(args?: Subset<T, Car$rentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly model: FieldRef<"Car", 'String'>
    readonly description: FieldRef<"Car", 'String'>
    readonly image: FieldRef<"Car", 'String'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly mileage: FieldRef<"Car", 'Int'>
    readonly fuel: FieldRef<"Car", 'String'>
    readonly engine: FieldRef<"Car", 'String'>
    readonly seats: FieldRef<"Car", 'Int'>
    readonly doors: FieldRef<"Car", 'Int'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly transmission: FieldRef<"Car", 'String'>
    readonly price: FieldRef<"Car", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.rents
   */
  export type Car$rentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    where?: RentACarWhereInput
    orderBy?: RentACarOrderByWithRelationInput | RentACarOrderByWithRelationInput[]
    cursor?: RentACarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentACarScalarFieldEnum | RentACarScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model RentACar
   */

  export type AggregateRentACar = {
    _count: RentACarCountAggregateOutputType | null
    _avg: RentACarAvgAggregateOutputType | null
    _sum: RentACarSumAggregateOutputType | null
    _min: RentACarMinAggregateOutputType | null
    _max: RentACarMaxAggregateOutputType | null
  }

  export type RentACarAvgAggregateOutputType = {
    id: number | null
    carId: number | null
  }

  export type RentACarSumAggregateOutputType = {
    id: number | null
    carId: number | null
  }

  export type RentACarMinAggregateOutputType = {
    id: number | null
    carId: number | null
    pickupLocation: string | null
    dropoffLocation: string | null
    pickupDate: Date | null
    dropoffDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentACarMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    pickupLocation: string | null
    dropoffLocation: string | null
    pickupDate: Date | null
    dropoffDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentACarCountAggregateOutputType = {
    id: number
    carId: number
    pickupLocation: number
    dropoffLocation: number
    pickupDate: number
    dropoffDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentACarAvgAggregateInputType = {
    id?: true
    carId?: true
  }

  export type RentACarSumAggregateInputType = {
    id?: true
    carId?: true
  }

  export type RentACarMinAggregateInputType = {
    id?: true
    carId?: true
    pickupLocation?: true
    dropoffLocation?: true
    pickupDate?: true
    dropoffDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentACarMaxAggregateInputType = {
    id?: true
    carId?: true
    pickupLocation?: true
    dropoffLocation?: true
    pickupDate?: true
    dropoffDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentACarCountAggregateInputType = {
    id?: true
    carId?: true
    pickupLocation?: true
    dropoffLocation?: true
    pickupDate?: true
    dropoffDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentACarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentACar to aggregate.
     */
    where?: RentACarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentACars to fetch.
     */
    orderBy?: RentACarOrderByWithRelationInput | RentACarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentACarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentACars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentACars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentACars
    **/
    _count?: true | RentACarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentACarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentACarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentACarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentACarMaxAggregateInputType
  }

  export type GetRentACarAggregateType<T extends RentACarAggregateArgs> = {
        [P in keyof T & keyof AggregateRentACar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentACar[P]>
      : GetScalarType<T[P], AggregateRentACar[P]>
  }




  export type RentACarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentACarWhereInput
    orderBy?: RentACarOrderByWithAggregationInput | RentACarOrderByWithAggregationInput[]
    by: RentACarScalarFieldEnum[] | RentACarScalarFieldEnum
    having?: RentACarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentACarCountAggregateInputType | true
    _avg?: RentACarAvgAggregateInputType
    _sum?: RentACarSumAggregateInputType
    _min?: RentACarMinAggregateInputType
    _max?: RentACarMaxAggregateInputType
  }

  export type RentACarGroupByOutputType = {
    id: number
    carId: number
    pickupLocation: string
    dropoffLocation: string
    pickupDate: Date
    dropoffDate: Date
    createdAt: Date
    updatedAt: Date
    _count: RentACarCountAggregateOutputType | null
    _avg: RentACarAvgAggregateOutputType | null
    _sum: RentACarSumAggregateOutputType | null
    _min: RentACarMinAggregateOutputType | null
    _max: RentACarMaxAggregateOutputType | null
  }

  type GetRentACarGroupByPayload<T extends RentACarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentACarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentACarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentACarGroupByOutputType[P]>
            : GetScalarType<T[P], RentACarGroupByOutputType[P]>
        }
      >
    >


  export type RentACarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    pickupLocation?: boolean
    dropoffLocation?: boolean
    pickupDate?: boolean
    dropoffDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentACar"]>

  export type RentACarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    pickupLocation?: boolean
    dropoffLocation?: boolean
    pickupDate?: boolean
    dropoffDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentACar"]>

  export type RentACarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    pickupLocation?: boolean
    dropoffLocation?: boolean
    pickupDate?: boolean
    dropoffDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentACar"]>

  export type RentACarSelectScalar = {
    id?: boolean
    carId?: boolean
    pickupLocation?: boolean
    dropoffLocation?: boolean
    pickupDate?: boolean
    dropoffDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentACarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "pickupLocation" | "dropoffLocation" | "pickupDate" | "dropoffDate" | "createdAt" | "updatedAt", ExtArgs["result"]["rentACar"]>
  export type RentACarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type RentACarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type RentACarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $RentACarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentACar"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      pickupLocation: string
      dropoffLocation: string
      pickupDate: Date
      dropoffDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentACar"]>
    composites: {}
  }

  type RentACarGetPayload<S extends boolean | null | undefined | RentACarDefaultArgs> = $Result.GetResult<Prisma.$RentACarPayload, S>

  type RentACarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentACarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentACarCountAggregateInputType | true
    }

  export interface RentACarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentACar'], meta: { name: 'RentACar' } }
    /**
     * Find zero or one RentACar that matches the filter.
     * @param {RentACarFindUniqueArgs} args - Arguments to find a RentACar
     * @example
     * // Get one RentACar
     * const rentACar = await prisma.rentACar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentACarFindUniqueArgs>(args: SelectSubset<T, RentACarFindUniqueArgs<ExtArgs>>): Prisma__RentACarClient<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentACar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentACarFindUniqueOrThrowArgs} args - Arguments to find a RentACar
     * @example
     * // Get one RentACar
     * const rentACar = await prisma.rentACar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentACarFindUniqueOrThrowArgs>(args: SelectSubset<T, RentACarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentACarClient<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentACar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentACarFindFirstArgs} args - Arguments to find a RentACar
     * @example
     * // Get one RentACar
     * const rentACar = await prisma.rentACar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentACarFindFirstArgs>(args?: SelectSubset<T, RentACarFindFirstArgs<ExtArgs>>): Prisma__RentACarClient<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentACar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentACarFindFirstOrThrowArgs} args - Arguments to find a RentACar
     * @example
     * // Get one RentACar
     * const rentACar = await prisma.rentACar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentACarFindFirstOrThrowArgs>(args?: SelectSubset<T, RentACarFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentACarClient<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentACars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentACarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentACars
     * const rentACars = await prisma.rentACar.findMany()
     * 
     * // Get first 10 RentACars
     * const rentACars = await prisma.rentACar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentACarWithIdOnly = await prisma.rentACar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentACarFindManyArgs>(args?: SelectSubset<T, RentACarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentACar.
     * @param {RentACarCreateArgs} args - Arguments to create a RentACar.
     * @example
     * // Create one RentACar
     * const RentACar = await prisma.rentACar.create({
     *   data: {
     *     // ... data to create a RentACar
     *   }
     * })
     * 
     */
    create<T extends RentACarCreateArgs>(args: SelectSubset<T, RentACarCreateArgs<ExtArgs>>): Prisma__RentACarClient<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentACars.
     * @param {RentACarCreateManyArgs} args - Arguments to create many RentACars.
     * @example
     * // Create many RentACars
     * const rentACar = await prisma.rentACar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentACarCreateManyArgs>(args?: SelectSubset<T, RentACarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentACars and returns the data saved in the database.
     * @param {RentACarCreateManyAndReturnArgs} args - Arguments to create many RentACars.
     * @example
     * // Create many RentACars
     * const rentACar = await prisma.rentACar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentACars and only return the `id`
     * const rentACarWithIdOnly = await prisma.rentACar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentACarCreateManyAndReturnArgs>(args?: SelectSubset<T, RentACarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentACar.
     * @param {RentACarDeleteArgs} args - Arguments to delete one RentACar.
     * @example
     * // Delete one RentACar
     * const RentACar = await prisma.rentACar.delete({
     *   where: {
     *     // ... filter to delete one RentACar
     *   }
     * })
     * 
     */
    delete<T extends RentACarDeleteArgs>(args: SelectSubset<T, RentACarDeleteArgs<ExtArgs>>): Prisma__RentACarClient<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentACar.
     * @param {RentACarUpdateArgs} args - Arguments to update one RentACar.
     * @example
     * // Update one RentACar
     * const rentACar = await prisma.rentACar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentACarUpdateArgs>(args: SelectSubset<T, RentACarUpdateArgs<ExtArgs>>): Prisma__RentACarClient<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentACars.
     * @param {RentACarDeleteManyArgs} args - Arguments to filter RentACars to delete.
     * @example
     * // Delete a few RentACars
     * const { count } = await prisma.rentACar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentACarDeleteManyArgs>(args?: SelectSubset<T, RentACarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentACars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentACarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentACars
     * const rentACar = await prisma.rentACar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentACarUpdateManyArgs>(args: SelectSubset<T, RentACarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentACars and returns the data updated in the database.
     * @param {RentACarUpdateManyAndReturnArgs} args - Arguments to update many RentACars.
     * @example
     * // Update many RentACars
     * const rentACar = await prisma.rentACar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentACars and only return the `id`
     * const rentACarWithIdOnly = await prisma.rentACar.updateManyAndReturn({
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
    updateManyAndReturn<T extends RentACarUpdateManyAndReturnArgs>(args: SelectSubset<T, RentACarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentACar.
     * @param {RentACarUpsertArgs} args - Arguments to update or create a RentACar.
     * @example
     * // Update or create a RentACar
     * const rentACar = await prisma.rentACar.upsert({
     *   create: {
     *     // ... data to create a RentACar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentACar we want to update
     *   }
     * })
     */
    upsert<T extends RentACarUpsertArgs>(args: SelectSubset<T, RentACarUpsertArgs<ExtArgs>>): Prisma__RentACarClient<$Result.GetResult<Prisma.$RentACarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentACars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentACarCountArgs} args - Arguments to filter RentACars to count.
     * @example
     * // Count the number of RentACars
     * const count = await prisma.rentACar.count({
     *   where: {
     *     // ... the filter for the RentACars we want to count
     *   }
     * })
    **/
    count<T extends RentACarCountArgs>(
      args?: Subset<T, RentACarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentACarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentACar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentACarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentACarAggregateArgs>(args: Subset<T, RentACarAggregateArgs>): Prisma.PrismaPromise<GetRentACarAggregateType<T>>

    /**
     * Group by RentACar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentACarGroupByArgs} args - Group by arguments.
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
      T extends RentACarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentACarGroupByArgs['orderBy'] }
        : { orderBy?: RentACarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentACarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentACarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentACar model
   */
  readonly fields: RentACarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentACar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentACarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RentACar model
   */
  interface RentACarFieldRefs {
    readonly id: FieldRef<"RentACar", 'Int'>
    readonly carId: FieldRef<"RentACar", 'Int'>
    readonly pickupLocation: FieldRef<"RentACar", 'String'>
    readonly dropoffLocation: FieldRef<"RentACar", 'String'>
    readonly pickupDate: FieldRef<"RentACar", 'DateTime'>
    readonly dropoffDate: FieldRef<"RentACar", 'DateTime'>
    readonly createdAt: FieldRef<"RentACar", 'DateTime'>
    readonly updatedAt: FieldRef<"RentACar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentACar findUnique
   */
  export type RentACarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * Filter, which RentACar to fetch.
     */
    where: RentACarWhereUniqueInput
  }

  /**
   * RentACar findUniqueOrThrow
   */
  export type RentACarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * Filter, which RentACar to fetch.
     */
    where: RentACarWhereUniqueInput
  }

  /**
   * RentACar findFirst
   */
  export type RentACarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * Filter, which RentACar to fetch.
     */
    where?: RentACarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentACars to fetch.
     */
    orderBy?: RentACarOrderByWithRelationInput | RentACarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentACars.
     */
    cursor?: RentACarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentACars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentACars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentACars.
     */
    distinct?: RentACarScalarFieldEnum | RentACarScalarFieldEnum[]
  }

  /**
   * RentACar findFirstOrThrow
   */
  export type RentACarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * Filter, which RentACar to fetch.
     */
    where?: RentACarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentACars to fetch.
     */
    orderBy?: RentACarOrderByWithRelationInput | RentACarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentACars.
     */
    cursor?: RentACarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentACars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentACars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentACars.
     */
    distinct?: RentACarScalarFieldEnum | RentACarScalarFieldEnum[]
  }

  /**
   * RentACar findMany
   */
  export type RentACarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * Filter, which RentACars to fetch.
     */
    where?: RentACarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentACars to fetch.
     */
    orderBy?: RentACarOrderByWithRelationInput | RentACarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentACars.
     */
    cursor?: RentACarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentACars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentACars.
     */
    skip?: number
    distinct?: RentACarScalarFieldEnum | RentACarScalarFieldEnum[]
  }

  /**
   * RentACar create
   */
  export type RentACarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * The data needed to create a RentACar.
     */
    data: XOR<RentACarCreateInput, RentACarUncheckedCreateInput>
  }

  /**
   * RentACar createMany
   */
  export type RentACarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentACars.
     */
    data: RentACarCreateManyInput | RentACarCreateManyInput[]
  }

  /**
   * RentACar createManyAndReturn
   */
  export type RentACarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * The data used to create many RentACars.
     */
    data: RentACarCreateManyInput | RentACarCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentACar update
   */
  export type RentACarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * The data needed to update a RentACar.
     */
    data: XOR<RentACarUpdateInput, RentACarUncheckedUpdateInput>
    /**
     * Choose, which RentACar to update.
     */
    where: RentACarWhereUniqueInput
  }

  /**
   * RentACar updateMany
   */
  export type RentACarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentACars.
     */
    data: XOR<RentACarUpdateManyMutationInput, RentACarUncheckedUpdateManyInput>
    /**
     * Filter which RentACars to update
     */
    where?: RentACarWhereInput
    /**
     * Limit how many RentACars to update.
     */
    limit?: number
  }

  /**
   * RentACar updateManyAndReturn
   */
  export type RentACarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * The data used to update RentACars.
     */
    data: XOR<RentACarUpdateManyMutationInput, RentACarUncheckedUpdateManyInput>
    /**
     * Filter which RentACars to update
     */
    where?: RentACarWhereInput
    /**
     * Limit how many RentACars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentACar upsert
   */
  export type RentACarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * The filter to search for the RentACar to update in case it exists.
     */
    where: RentACarWhereUniqueInput
    /**
     * In case the RentACar found by the `where` argument doesn't exist, create a new RentACar with this data.
     */
    create: XOR<RentACarCreateInput, RentACarUncheckedCreateInput>
    /**
     * In case the RentACar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentACarUpdateInput, RentACarUncheckedUpdateInput>
  }

  /**
   * RentACar delete
   */
  export type RentACarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
    /**
     * Filter which RentACar to delete.
     */
    where: RentACarWhereUniqueInput
  }

  /**
   * RentACar deleteMany
   */
  export type RentACarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentACars to delete
     */
    where?: RentACarWhereInput
    /**
     * Limit how many RentACars to delete.
     */
    limit?: number
  }

  /**
   * RentACar without action
   */
  export type RentACarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentACar
     */
    select?: RentACarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentACar
     */
    omit?: RentACarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentACarInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    price: number | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    price: number | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    price: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    price?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    price?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    price?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    title: string
    description: string | null
    date: Date
    price: number
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    price?: boolean
    photos?: boolean | Activity$photosArgs<ExtArgs>
    highlights?: boolean | Activity$highlightsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    price?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    price?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    price?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "price", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Activity$photosArgs<ExtArgs>
    highlights?: boolean | Activity$highlightsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      photos: Prisma.$ActivityPhotoPayload<ExtArgs>[]
      highlights: Prisma.$HighlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      date: Date
      price: number
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Activity$photosArgs<ExtArgs> = {}>(args?: Subset<T, Activity$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highlights<T extends Activity$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly date: FieldRef<"Activity", 'DateTime'>
    readonly price: FieldRef<"Activity", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.photos
   */
  export type Activity$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    where?: ActivityPhotoWhereInput
    orderBy?: ActivityPhotoOrderByWithRelationInput | ActivityPhotoOrderByWithRelationInput[]
    cursor?: ActivityPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityPhotoScalarFieldEnum | ActivityPhotoScalarFieldEnum[]
  }

  /**
   * Activity.highlights
   */
  export type Activity$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    cursor?: HighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Highlight
   */

  export type AggregateHighlight = {
    _count: HighlightCountAggregateOutputType | null
    _avg: HighlightAvgAggregateOutputType | null
    _sum: HighlightSumAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  export type HighlightAvgAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type HighlightSumAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type HighlightMinAggregateOutputType = {
    id: number | null
    text: string | null
    activityId: number | null
  }

  export type HighlightMaxAggregateOutputType = {
    id: number | null
    text: string | null
    activityId: number | null
  }

  export type HighlightCountAggregateOutputType = {
    id: number
    text: number
    activityId: number
    _all: number
  }


  export type HighlightAvgAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type HighlightSumAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type HighlightMinAggregateInputType = {
    id?: true
    text?: true
    activityId?: true
  }

  export type HighlightMaxAggregateInputType = {
    id?: true
    text?: true
    activityId?: true
  }

  export type HighlightCountAggregateInputType = {
    id?: true
    text?: true
    activityId?: true
    _all?: true
  }

  export type HighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlight to aggregate.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Highlights
    **/
    _count?: true | HighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HighlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HighlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightMaxAggregateInputType
  }

  export type GetHighlightAggregateType<T extends HighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlight[P]>
      : GetScalarType<T[P], AggregateHighlight[P]>
  }




  export type HighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithAggregationInput | HighlightOrderByWithAggregationInput[]
    by: HighlightScalarFieldEnum[] | HighlightScalarFieldEnum
    having?: HighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightCountAggregateInputType | true
    _avg?: HighlightAvgAggregateInputType
    _sum?: HighlightSumAggregateInputType
    _min?: HighlightMinAggregateInputType
    _max?: HighlightMaxAggregateInputType
  }

  export type HighlightGroupByOutputType = {
    id: number
    text: string
    activityId: number
    _count: HighlightCountAggregateOutputType | null
    _avg: HighlightAvgAggregateOutputType | null
    _sum: HighlightSumAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  type GetHighlightGroupByPayload<T extends HighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightGroupByOutputType[P]>
        }
      >
    >


  export type HighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    activityId?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    activityId?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    activityId?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectScalar = {
    id?: boolean
    text?: boolean
    activityId?: boolean
  }

  export type HighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "activityId", ExtArgs["result"]["highlight"]>
  export type HighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type HighlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type HighlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $HighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Highlight"
    objects: {
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      activityId: number
    }, ExtArgs["result"]["highlight"]>
    composites: {}
  }

  type HighlightGetPayload<S extends boolean | null | undefined | HighlightDefaultArgs> = $Result.GetResult<Prisma.$HighlightPayload, S>

  type HighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightCountAggregateInputType | true
    }

  export interface HighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Highlight'], meta: { name: 'Highlight' } }
    /**
     * Find zero or one Highlight that matches the filter.
     * @param {HighlightFindUniqueArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightFindUniqueArgs>(args: SelectSubset<T, HighlightFindUniqueArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Highlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighlightFindUniqueOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightFindFirstArgs>(args?: SelectSubset<T, HighlightFindFirstArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Highlights
     * const highlights = await prisma.highlight.findMany()
     * 
     * // Get first 10 Highlights
     * const highlights = await prisma.highlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightWithIdOnly = await prisma.highlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightFindManyArgs>(args?: SelectSubset<T, HighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Highlight.
     * @param {HighlightCreateArgs} args - Arguments to create a Highlight.
     * @example
     * // Create one Highlight
     * const Highlight = await prisma.highlight.create({
     *   data: {
     *     // ... data to create a Highlight
     *   }
     * })
     * 
     */
    create<T extends HighlightCreateArgs>(args: SelectSubset<T, HighlightCreateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Highlights.
     * @param {HighlightCreateManyArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightCreateManyArgs>(args?: SelectSubset<T, HighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Highlights and returns the data saved in the database.
     * @param {HighlightCreateManyAndReturnArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Highlights and only return the `id`
     * const highlightWithIdOnly = await prisma.highlight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HighlightCreateManyAndReturnArgs>(args?: SelectSubset<T, HighlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Highlight.
     * @param {HighlightDeleteArgs} args - Arguments to delete one Highlight.
     * @example
     * // Delete one Highlight
     * const Highlight = await prisma.highlight.delete({
     *   where: {
     *     // ... filter to delete one Highlight
     *   }
     * })
     * 
     */
    delete<T extends HighlightDeleteArgs>(args: SelectSubset<T, HighlightDeleteArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Highlight.
     * @param {HighlightUpdateArgs} args - Arguments to update one Highlight.
     * @example
     * // Update one Highlight
     * const highlight = await prisma.highlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightUpdateArgs>(args: SelectSubset<T, HighlightUpdateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Highlights.
     * @param {HighlightDeleteManyArgs} args - Arguments to filter Highlights to delete.
     * @example
     * // Delete a few Highlights
     * const { count } = await prisma.highlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightDeleteManyArgs>(args?: SelectSubset<T, HighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Highlights
     * const highlight = await prisma.highlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightUpdateManyArgs>(args: SelectSubset<T, HighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights and returns the data updated in the database.
     * @param {HighlightUpdateManyAndReturnArgs} args - Arguments to update many Highlights.
     * @example
     * // Update many Highlights
     * const highlight = await prisma.highlight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Highlights and only return the `id`
     * const highlightWithIdOnly = await prisma.highlight.updateManyAndReturn({
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
    updateManyAndReturn<T extends HighlightUpdateManyAndReturnArgs>(args: SelectSubset<T, HighlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Highlight.
     * @param {HighlightUpsertArgs} args - Arguments to update or create a Highlight.
     * @example
     * // Update or create a Highlight
     * const highlight = await prisma.highlight.upsert({
     *   create: {
     *     // ... data to create a Highlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Highlight we want to update
     *   }
     * })
     */
    upsert<T extends HighlightUpsertArgs>(args: SelectSubset<T, HighlightUpsertArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightCountArgs} args - Arguments to filter Highlights to count.
     * @example
     * // Count the number of Highlights
     * const count = await prisma.highlight.count({
     *   where: {
     *     // ... the filter for the Highlights we want to count
     *   }
     * })
    **/
    count<T extends HighlightCountArgs>(
      args?: Subset<T, HighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighlightAggregateArgs>(args: Subset<T, HighlightAggregateArgs>): Prisma.PrismaPromise<GetHighlightAggregateType<T>>

    /**
     * Group by Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightGroupByArgs} args - Group by arguments.
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
      T extends HighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightGroupByArgs['orderBy'] }
        : { orderBy?: HighlightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Highlight model
   */
  readonly fields: HighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Highlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Highlight model
   */
  interface HighlightFieldRefs {
    readonly id: FieldRef<"Highlight", 'Int'>
    readonly text: FieldRef<"Highlight", 'String'>
    readonly activityId: FieldRef<"Highlight", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Highlight findUnique
   */
  export type HighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findUniqueOrThrow
   */
  export type HighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findFirst
   */
  export type HighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findFirstOrThrow
   */
  export type HighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findMany
   */
  export type HighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight create
   */
  export type HighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Highlight.
     */
    data: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
  }

  /**
   * Highlight createMany
   */
  export type HighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
  }

  /**
   * Highlight createManyAndReturn
   */
  export type HighlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Highlight update
   */
  export type HighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Highlight.
     */
    data: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
    /**
     * Choose, which Highlight to update.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight updateMany
   */
  export type HighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
  }

  /**
   * Highlight updateManyAndReturn
   */
  export type HighlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Highlight upsert
   */
  export type HighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Highlight to update in case it exists.
     */
    where: HighlightWhereUniqueInput
    /**
     * In case the Highlight found by the `where` argument doesn't exist, create a new Highlight with this data.
     */
    create: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
    /**
     * In case the Highlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
  }

  /**
   * Highlight delete
   */
  export type HighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter which Highlight to delete.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight deleteMany
   */
  export type HighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlights to delete
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to delete.
     */
    limit?: number
  }

  /**
   * Highlight without action
   */
  export type HighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
  }


  /**
   * Model ActivityPhoto
   */

  export type AggregateActivityPhoto = {
    _count: ActivityPhotoCountAggregateOutputType | null
    _avg: ActivityPhotoAvgAggregateOutputType | null
    _sum: ActivityPhotoSumAggregateOutputType | null
    _min: ActivityPhotoMinAggregateOutputType | null
    _max: ActivityPhotoMaxAggregateOutputType | null
  }

  export type ActivityPhotoAvgAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type ActivityPhotoSumAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type ActivityPhotoMinAggregateOutputType = {
    id: number | null
    url: string | null
    activityId: number | null
  }

  export type ActivityPhotoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    activityId: number | null
  }

  export type ActivityPhotoCountAggregateOutputType = {
    id: number
    url: number
    activityId: number
    _all: number
  }


  export type ActivityPhotoAvgAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type ActivityPhotoSumAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type ActivityPhotoMinAggregateInputType = {
    id?: true
    url?: true
    activityId?: true
  }

  export type ActivityPhotoMaxAggregateInputType = {
    id?: true
    url?: true
    activityId?: true
  }

  export type ActivityPhotoCountAggregateInputType = {
    id?: true
    url?: true
    activityId?: true
    _all?: true
  }

  export type ActivityPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityPhoto to aggregate.
     */
    where?: ActivityPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityPhotos to fetch.
     */
    orderBy?: ActivityPhotoOrderByWithRelationInput | ActivityPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityPhotos
    **/
    _count?: true | ActivityPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityPhotoMaxAggregateInputType
  }

  export type GetActivityPhotoAggregateType<T extends ActivityPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityPhoto[P]>
      : GetScalarType<T[P], AggregateActivityPhoto[P]>
  }




  export type ActivityPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityPhotoWhereInput
    orderBy?: ActivityPhotoOrderByWithAggregationInput | ActivityPhotoOrderByWithAggregationInput[]
    by: ActivityPhotoScalarFieldEnum[] | ActivityPhotoScalarFieldEnum
    having?: ActivityPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityPhotoCountAggregateInputType | true
    _avg?: ActivityPhotoAvgAggregateInputType
    _sum?: ActivityPhotoSumAggregateInputType
    _min?: ActivityPhotoMinAggregateInputType
    _max?: ActivityPhotoMaxAggregateInputType
  }

  export type ActivityPhotoGroupByOutputType = {
    id: number
    url: string
    activityId: number
    _count: ActivityPhotoCountAggregateOutputType | null
    _avg: ActivityPhotoAvgAggregateOutputType | null
    _sum: ActivityPhotoSumAggregateOutputType | null
    _min: ActivityPhotoMinAggregateOutputType | null
    _max: ActivityPhotoMaxAggregateOutputType | null
  }

  type GetActivityPhotoGroupByPayload<T extends ActivityPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityPhotoGroupByOutputType[P]>
        }
      >
    >


  export type ActivityPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    activityId?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityPhoto"]>

  export type ActivityPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    activityId?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityPhoto"]>

  export type ActivityPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    activityId?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityPhoto"]>

  export type ActivityPhotoSelectScalar = {
    id?: boolean
    url?: boolean
    activityId?: boolean
  }

  export type ActivityPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "activityId", ExtArgs["result"]["activityPhoto"]>
  export type ActivityPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type ActivityPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type ActivityPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $ActivityPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityPhoto"
    objects: {
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      activityId: number
    }, ExtArgs["result"]["activityPhoto"]>
    composites: {}
  }

  type ActivityPhotoGetPayload<S extends boolean | null | undefined | ActivityPhotoDefaultArgs> = $Result.GetResult<Prisma.$ActivityPhotoPayload, S>

  type ActivityPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityPhotoCountAggregateInputType | true
    }

  export interface ActivityPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityPhoto'], meta: { name: 'ActivityPhoto' } }
    /**
     * Find zero or one ActivityPhoto that matches the filter.
     * @param {ActivityPhotoFindUniqueArgs} args - Arguments to find a ActivityPhoto
     * @example
     * // Get one ActivityPhoto
     * const activityPhoto = await prisma.activityPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityPhotoFindUniqueArgs>(args: SelectSubset<T, ActivityPhotoFindUniqueArgs<ExtArgs>>): Prisma__ActivityPhotoClient<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityPhotoFindUniqueOrThrowArgs} args - Arguments to find a ActivityPhoto
     * @example
     * // Get one ActivityPhoto
     * const activityPhoto = await prisma.activityPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityPhotoClient<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityPhotoFindFirstArgs} args - Arguments to find a ActivityPhoto
     * @example
     * // Get one ActivityPhoto
     * const activityPhoto = await prisma.activityPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityPhotoFindFirstArgs>(args?: SelectSubset<T, ActivityPhotoFindFirstArgs<ExtArgs>>): Prisma__ActivityPhotoClient<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityPhotoFindFirstOrThrowArgs} args - Arguments to find a ActivityPhoto
     * @example
     * // Get one ActivityPhoto
     * const activityPhoto = await prisma.activityPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityPhotoClient<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityPhotos
     * const activityPhotos = await prisma.activityPhoto.findMany()
     * 
     * // Get first 10 ActivityPhotos
     * const activityPhotos = await prisma.activityPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityPhotoWithIdOnly = await prisma.activityPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityPhotoFindManyArgs>(args?: SelectSubset<T, ActivityPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityPhoto.
     * @param {ActivityPhotoCreateArgs} args - Arguments to create a ActivityPhoto.
     * @example
     * // Create one ActivityPhoto
     * const ActivityPhoto = await prisma.activityPhoto.create({
     *   data: {
     *     // ... data to create a ActivityPhoto
     *   }
     * })
     * 
     */
    create<T extends ActivityPhotoCreateArgs>(args: SelectSubset<T, ActivityPhotoCreateArgs<ExtArgs>>): Prisma__ActivityPhotoClient<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityPhotos.
     * @param {ActivityPhotoCreateManyArgs} args - Arguments to create many ActivityPhotos.
     * @example
     * // Create many ActivityPhotos
     * const activityPhoto = await prisma.activityPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityPhotoCreateManyArgs>(args?: SelectSubset<T, ActivityPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityPhotos and returns the data saved in the database.
     * @param {ActivityPhotoCreateManyAndReturnArgs} args - Arguments to create many ActivityPhotos.
     * @example
     * // Create many ActivityPhotos
     * const activityPhoto = await prisma.activityPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityPhotos and only return the `id`
     * const activityPhotoWithIdOnly = await prisma.activityPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityPhoto.
     * @param {ActivityPhotoDeleteArgs} args - Arguments to delete one ActivityPhoto.
     * @example
     * // Delete one ActivityPhoto
     * const ActivityPhoto = await prisma.activityPhoto.delete({
     *   where: {
     *     // ... filter to delete one ActivityPhoto
     *   }
     * })
     * 
     */
    delete<T extends ActivityPhotoDeleteArgs>(args: SelectSubset<T, ActivityPhotoDeleteArgs<ExtArgs>>): Prisma__ActivityPhotoClient<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityPhoto.
     * @param {ActivityPhotoUpdateArgs} args - Arguments to update one ActivityPhoto.
     * @example
     * // Update one ActivityPhoto
     * const activityPhoto = await prisma.activityPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityPhotoUpdateArgs>(args: SelectSubset<T, ActivityPhotoUpdateArgs<ExtArgs>>): Prisma__ActivityPhotoClient<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityPhotos.
     * @param {ActivityPhotoDeleteManyArgs} args - Arguments to filter ActivityPhotos to delete.
     * @example
     * // Delete a few ActivityPhotos
     * const { count } = await prisma.activityPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityPhotoDeleteManyArgs>(args?: SelectSubset<T, ActivityPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityPhotos
     * const activityPhoto = await prisma.activityPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityPhotoUpdateManyArgs>(args: SelectSubset<T, ActivityPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityPhotos and returns the data updated in the database.
     * @param {ActivityPhotoUpdateManyAndReturnArgs} args - Arguments to update many ActivityPhotos.
     * @example
     * // Update many ActivityPhotos
     * const activityPhoto = await prisma.activityPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityPhotos and only return the `id`
     * const activityPhotoWithIdOnly = await prisma.activityPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityPhoto.
     * @param {ActivityPhotoUpsertArgs} args - Arguments to update or create a ActivityPhoto.
     * @example
     * // Update or create a ActivityPhoto
     * const activityPhoto = await prisma.activityPhoto.upsert({
     *   create: {
     *     // ... data to create a ActivityPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityPhoto we want to update
     *   }
     * })
     */
    upsert<T extends ActivityPhotoUpsertArgs>(args: SelectSubset<T, ActivityPhotoUpsertArgs<ExtArgs>>): Prisma__ActivityPhotoClient<$Result.GetResult<Prisma.$ActivityPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityPhotoCountArgs} args - Arguments to filter ActivityPhotos to count.
     * @example
     * // Count the number of ActivityPhotos
     * const count = await prisma.activityPhoto.count({
     *   where: {
     *     // ... the filter for the ActivityPhotos we want to count
     *   }
     * })
    **/
    count<T extends ActivityPhotoCountArgs>(
      args?: Subset<T, ActivityPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityPhotoAggregateArgs>(args: Subset<T, ActivityPhotoAggregateArgs>): Prisma.PrismaPromise<GetActivityPhotoAggregateType<T>>

    /**
     * Group by ActivityPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityPhotoGroupByArgs} args - Group by arguments.
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
      T extends ActivityPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityPhotoGroupByArgs['orderBy'] }
        : { orderBy?: ActivityPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityPhoto model
   */
  readonly fields: ActivityPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityPhoto model
   */
  interface ActivityPhotoFieldRefs {
    readonly id: FieldRef<"ActivityPhoto", 'Int'>
    readonly url: FieldRef<"ActivityPhoto", 'String'>
    readonly activityId: FieldRef<"ActivityPhoto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ActivityPhoto findUnique
   */
  export type ActivityPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ActivityPhoto to fetch.
     */
    where: ActivityPhotoWhereUniqueInput
  }

  /**
   * ActivityPhoto findUniqueOrThrow
   */
  export type ActivityPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ActivityPhoto to fetch.
     */
    where: ActivityPhotoWhereUniqueInput
  }

  /**
   * ActivityPhoto findFirst
   */
  export type ActivityPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ActivityPhoto to fetch.
     */
    where?: ActivityPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityPhotos to fetch.
     */
    orderBy?: ActivityPhotoOrderByWithRelationInput | ActivityPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityPhotos.
     */
    cursor?: ActivityPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityPhotos.
     */
    distinct?: ActivityPhotoScalarFieldEnum | ActivityPhotoScalarFieldEnum[]
  }

  /**
   * ActivityPhoto findFirstOrThrow
   */
  export type ActivityPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ActivityPhoto to fetch.
     */
    where?: ActivityPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityPhotos to fetch.
     */
    orderBy?: ActivityPhotoOrderByWithRelationInput | ActivityPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityPhotos.
     */
    cursor?: ActivityPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityPhotos.
     */
    distinct?: ActivityPhotoScalarFieldEnum | ActivityPhotoScalarFieldEnum[]
  }

  /**
   * ActivityPhoto findMany
   */
  export type ActivityPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * Filter, which ActivityPhotos to fetch.
     */
    where?: ActivityPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityPhotos to fetch.
     */
    orderBy?: ActivityPhotoOrderByWithRelationInput | ActivityPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityPhotos.
     */
    cursor?: ActivityPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityPhotos.
     */
    skip?: number
    distinct?: ActivityPhotoScalarFieldEnum | ActivityPhotoScalarFieldEnum[]
  }

  /**
   * ActivityPhoto create
   */
  export type ActivityPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityPhoto.
     */
    data: XOR<ActivityPhotoCreateInput, ActivityPhotoUncheckedCreateInput>
  }

  /**
   * ActivityPhoto createMany
   */
  export type ActivityPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityPhotos.
     */
    data: ActivityPhotoCreateManyInput | ActivityPhotoCreateManyInput[]
  }

  /**
   * ActivityPhoto createManyAndReturn
   */
  export type ActivityPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityPhotos.
     */
    data: ActivityPhotoCreateManyInput | ActivityPhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityPhoto update
   */
  export type ActivityPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityPhoto.
     */
    data: XOR<ActivityPhotoUpdateInput, ActivityPhotoUncheckedUpdateInput>
    /**
     * Choose, which ActivityPhoto to update.
     */
    where: ActivityPhotoWhereUniqueInput
  }

  /**
   * ActivityPhoto updateMany
   */
  export type ActivityPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityPhotos.
     */
    data: XOR<ActivityPhotoUpdateManyMutationInput, ActivityPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ActivityPhotos to update
     */
    where?: ActivityPhotoWhereInput
    /**
     * Limit how many ActivityPhotos to update.
     */
    limit?: number
  }

  /**
   * ActivityPhoto updateManyAndReturn
   */
  export type ActivityPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * The data used to update ActivityPhotos.
     */
    data: XOR<ActivityPhotoUpdateManyMutationInput, ActivityPhotoUncheckedUpdateManyInput>
    /**
     * Filter which ActivityPhotos to update
     */
    where?: ActivityPhotoWhereInput
    /**
     * Limit how many ActivityPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityPhoto upsert
   */
  export type ActivityPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityPhoto to update in case it exists.
     */
    where: ActivityPhotoWhereUniqueInput
    /**
     * In case the ActivityPhoto found by the `where` argument doesn't exist, create a new ActivityPhoto with this data.
     */
    create: XOR<ActivityPhotoCreateInput, ActivityPhotoUncheckedCreateInput>
    /**
     * In case the ActivityPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityPhotoUpdateInput, ActivityPhotoUncheckedUpdateInput>
  }

  /**
   * ActivityPhoto delete
   */
  export type ActivityPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
    /**
     * Filter which ActivityPhoto to delete.
     */
    where: ActivityPhotoWhereUniqueInput
  }

  /**
   * ActivityPhoto deleteMany
   */
  export type ActivityPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityPhotos to delete
     */
    where?: ActivityPhotoWhereInput
    /**
     * Limit how many ActivityPhotos to delete.
     */
    limit?: number
  }

  /**
   * ActivityPhoto without action
   */
  export type ActivityPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPhoto
     */
    select?: ActivityPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityPhoto
     */
    omit?: ActivityPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityPhotoInclude<ExtArgs> | null
  }


  /**
   * Model TourPackage
   */

  export type AggregateTourPackage = {
    _count: TourPackageCountAggregateOutputType | null
    _avg: TourPackageAvgAggregateOutputType | null
    _sum: TourPackageSumAggregateOutputType | null
    _min: TourPackageMinAggregateOutputType | null
    _max: TourPackageMaxAggregateOutputType | null
  }

  export type TourPackageAvgAggregateOutputType = {
    id: number | null
    price: number | null
    peopleCount: number | null
    nightsCount: number | null
  }

  export type TourPackageSumAggregateOutputType = {
    id: number | null
    price: number | null
    peopleCount: number | null
    nightsCount: number | null
  }

  export type TourPackageMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    peopleCount: number | null
    audienceType: string | null
    nightsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourPackageMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    peopleCount: number | null
    audienceType: string | null
    nightsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourPackageCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    peopleCount: number
    audienceType: number
    nightsCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourPackageAvgAggregateInputType = {
    id?: true
    price?: true
    peopleCount?: true
    nightsCount?: true
  }

  export type TourPackageSumAggregateInputType = {
    id?: true
    price?: true
    peopleCount?: true
    nightsCount?: true
  }

  export type TourPackageMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    peopleCount?: true
    audienceType?: true
    nightsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourPackageMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    peopleCount?: true
    audienceType?: true
    nightsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourPackageCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    peopleCount?: true
    audienceType?: true
    nightsCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourPackage to aggregate.
     */
    where?: TourPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPackages to fetch.
     */
    orderBy?: TourPackageOrderByWithRelationInput | TourPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourPackages
    **/
    _count?: true | TourPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourPackageMaxAggregateInputType
  }

  export type GetTourPackageAggregateType<T extends TourPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateTourPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourPackage[P]>
      : GetScalarType<T[P], AggregateTourPackage[P]>
  }




  export type TourPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourPackageWhereInput
    orderBy?: TourPackageOrderByWithAggregationInput | TourPackageOrderByWithAggregationInput[]
    by: TourPackageScalarFieldEnum[] | TourPackageScalarFieldEnum
    having?: TourPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourPackageCountAggregateInputType | true
    _avg?: TourPackageAvgAggregateInputType
    _sum?: TourPackageSumAggregateInputType
    _min?: TourPackageMinAggregateInputType
    _max?: TourPackageMaxAggregateInputType
  }

  export type TourPackageGroupByOutputType = {
    id: number
    title: string
    description: string | null
    price: number
    peopleCount: number
    audienceType: string
    nightsCount: number
    createdAt: Date
    updatedAt: Date
    _count: TourPackageCountAggregateOutputType | null
    _avg: TourPackageAvgAggregateOutputType | null
    _sum: TourPackageSumAggregateOutputType | null
    _min: TourPackageMinAggregateOutputType | null
    _max: TourPackageMaxAggregateOutputType | null
  }

  type GetTourPackageGroupByPayload<T extends TourPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourPackageGroupByOutputType[P]>
            : GetScalarType<T[P], TourPackageGroupByOutputType[P]>
        }
      >
    >


  export type TourPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    peopleCount?: boolean
    audienceType?: boolean
    nightsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photos?: boolean | TourPackage$photosArgs<ExtArgs>
    highlights?: boolean | TourPackage$highlightsArgs<ExtArgs>
    _count?: boolean | TourPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourPackage"]>

  export type TourPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    peopleCount?: boolean
    audienceType?: boolean
    nightsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tourPackage"]>

  export type TourPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    peopleCount?: boolean
    audienceType?: boolean
    nightsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tourPackage"]>

  export type TourPackageSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    peopleCount?: boolean
    audienceType?: boolean
    nightsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "peopleCount" | "audienceType" | "nightsCount" | "createdAt" | "updatedAt", ExtArgs["result"]["tourPackage"]>
  export type TourPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | TourPackage$photosArgs<ExtArgs>
    highlights?: boolean | TourPackage$highlightsArgs<ExtArgs>
    _count?: boolean | TourPackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TourPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TourPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourPackage"
    objects: {
      photos: Prisma.$TourPhotoPayload<ExtArgs>[]
      highlights: Prisma.$TourHighlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      price: number
      peopleCount: number
      audienceType: string
      nightsCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tourPackage"]>
    composites: {}
  }

  type TourPackageGetPayload<S extends boolean | null | undefined | TourPackageDefaultArgs> = $Result.GetResult<Prisma.$TourPackagePayload, S>

  type TourPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourPackageCountAggregateInputType | true
    }

  export interface TourPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourPackage'], meta: { name: 'TourPackage' } }
    /**
     * Find zero or one TourPackage that matches the filter.
     * @param {TourPackageFindUniqueArgs} args - Arguments to find a TourPackage
     * @example
     * // Get one TourPackage
     * const tourPackage = await prisma.tourPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourPackageFindUniqueArgs>(args: SelectSubset<T, TourPackageFindUniqueArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourPackageFindUniqueOrThrowArgs} args - Arguments to find a TourPackage
     * @example
     * // Get one TourPackage
     * const tourPackage = await prisma.tourPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, TourPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageFindFirstArgs} args - Arguments to find a TourPackage
     * @example
     * // Get one TourPackage
     * const tourPackage = await prisma.tourPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourPackageFindFirstArgs>(args?: SelectSubset<T, TourPackageFindFirstArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageFindFirstOrThrowArgs} args - Arguments to find a TourPackage
     * @example
     * // Get one TourPackage
     * const tourPackage = await prisma.tourPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, TourPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourPackages
     * const tourPackages = await prisma.tourPackage.findMany()
     * 
     * // Get first 10 TourPackages
     * const tourPackages = await prisma.tourPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourPackageWithIdOnly = await prisma.tourPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourPackageFindManyArgs>(args?: SelectSubset<T, TourPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourPackage.
     * @param {TourPackageCreateArgs} args - Arguments to create a TourPackage.
     * @example
     * // Create one TourPackage
     * const TourPackage = await prisma.tourPackage.create({
     *   data: {
     *     // ... data to create a TourPackage
     *   }
     * })
     * 
     */
    create<T extends TourPackageCreateArgs>(args: SelectSubset<T, TourPackageCreateArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourPackages.
     * @param {TourPackageCreateManyArgs} args - Arguments to create many TourPackages.
     * @example
     * // Create many TourPackages
     * const tourPackage = await prisma.tourPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourPackageCreateManyArgs>(args?: SelectSubset<T, TourPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourPackages and returns the data saved in the database.
     * @param {TourPackageCreateManyAndReturnArgs} args - Arguments to create many TourPackages.
     * @example
     * // Create many TourPackages
     * const tourPackage = await prisma.tourPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourPackages and only return the `id`
     * const tourPackageWithIdOnly = await prisma.tourPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, TourPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourPackage.
     * @param {TourPackageDeleteArgs} args - Arguments to delete one TourPackage.
     * @example
     * // Delete one TourPackage
     * const TourPackage = await prisma.tourPackage.delete({
     *   where: {
     *     // ... filter to delete one TourPackage
     *   }
     * })
     * 
     */
    delete<T extends TourPackageDeleteArgs>(args: SelectSubset<T, TourPackageDeleteArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourPackage.
     * @param {TourPackageUpdateArgs} args - Arguments to update one TourPackage.
     * @example
     * // Update one TourPackage
     * const tourPackage = await prisma.tourPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourPackageUpdateArgs>(args: SelectSubset<T, TourPackageUpdateArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourPackages.
     * @param {TourPackageDeleteManyArgs} args - Arguments to filter TourPackages to delete.
     * @example
     * // Delete a few TourPackages
     * const { count } = await prisma.tourPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourPackageDeleteManyArgs>(args?: SelectSubset<T, TourPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourPackages
     * const tourPackage = await prisma.tourPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourPackageUpdateManyArgs>(args: SelectSubset<T, TourPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourPackages and returns the data updated in the database.
     * @param {TourPackageUpdateManyAndReturnArgs} args - Arguments to update many TourPackages.
     * @example
     * // Update many TourPackages
     * const tourPackage = await prisma.tourPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourPackages and only return the `id`
     * const tourPackageWithIdOnly = await prisma.tourPackage.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, TourPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourPackage.
     * @param {TourPackageUpsertArgs} args - Arguments to update or create a TourPackage.
     * @example
     * // Update or create a TourPackage
     * const tourPackage = await prisma.tourPackage.upsert({
     *   create: {
     *     // ... data to create a TourPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourPackage we want to update
     *   }
     * })
     */
    upsert<T extends TourPackageUpsertArgs>(args: SelectSubset<T, TourPackageUpsertArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageCountArgs} args - Arguments to filter TourPackages to count.
     * @example
     * // Count the number of TourPackages
     * const count = await prisma.tourPackage.count({
     *   where: {
     *     // ... the filter for the TourPackages we want to count
     *   }
     * })
    **/
    count<T extends TourPackageCountArgs>(
      args?: Subset<T, TourPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourPackageAggregateArgs>(args: Subset<T, TourPackageAggregateArgs>): Prisma.PrismaPromise<GetTourPackageAggregateType<T>>

    /**
     * Group by TourPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPackageGroupByArgs} args - Group by arguments.
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
      T extends TourPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourPackageGroupByArgs['orderBy'] }
        : { orderBy?: TourPackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourPackage model
   */
  readonly fields: TourPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends TourPackage$photosArgs<ExtArgs> = {}>(args?: Subset<T, TourPackage$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highlights<T extends TourPackage$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, TourPackage$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TourPackage model
   */
  interface TourPackageFieldRefs {
    readonly id: FieldRef<"TourPackage", 'Int'>
    readonly title: FieldRef<"TourPackage", 'String'>
    readonly description: FieldRef<"TourPackage", 'String'>
    readonly price: FieldRef<"TourPackage", 'Float'>
    readonly peopleCount: FieldRef<"TourPackage", 'Int'>
    readonly audienceType: FieldRef<"TourPackage", 'String'>
    readonly nightsCount: FieldRef<"TourPackage", 'Int'>
    readonly createdAt: FieldRef<"TourPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"TourPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TourPackage findUnique
   */
  export type TourPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackage to fetch.
     */
    where: TourPackageWhereUniqueInput
  }

  /**
   * TourPackage findUniqueOrThrow
   */
  export type TourPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackage to fetch.
     */
    where: TourPackageWhereUniqueInput
  }

  /**
   * TourPackage findFirst
   */
  export type TourPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackage to fetch.
     */
    where?: TourPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPackages to fetch.
     */
    orderBy?: TourPackageOrderByWithRelationInput | TourPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourPackages.
     */
    cursor?: TourPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourPackages.
     */
    distinct?: TourPackageScalarFieldEnum | TourPackageScalarFieldEnum[]
  }

  /**
   * TourPackage findFirstOrThrow
   */
  export type TourPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackage to fetch.
     */
    where?: TourPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPackages to fetch.
     */
    orderBy?: TourPackageOrderByWithRelationInput | TourPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourPackages.
     */
    cursor?: TourPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourPackages.
     */
    distinct?: TourPackageScalarFieldEnum | TourPackageScalarFieldEnum[]
  }

  /**
   * TourPackage findMany
   */
  export type TourPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter, which TourPackages to fetch.
     */
    where?: TourPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPackages to fetch.
     */
    orderBy?: TourPackageOrderByWithRelationInput | TourPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourPackages.
     */
    cursor?: TourPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPackages.
     */
    skip?: number
    distinct?: TourPackageScalarFieldEnum | TourPackageScalarFieldEnum[]
  }

  /**
   * TourPackage create
   */
  export type TourPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a TourPackage.
     */
    data: XOR<TourPackageCreateInput, TourPackageUncheckedCreateInput>
  }

  /**
   * TourPackage createMany
   */
  export type TourPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourPackages.
     */
    data: TourPackageCreateManyInput | TourPackageCreateManyInput[]
  }

  /**
   * TourPackage createManyAndReturn
   */
  export type TourPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * The data used to create many TourPackages.
     */
    data: TourPackageCreateManyInput | TourPackageCreateManyInput[]
  }

  /**
   * TourPackage update
   */
  export type TourPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a TourPackage.
     */
    data: XOR<TourPackageUpdateInput, TourPackageUncheckedUpdateInput>
    /**
     * Choose, which TourPackage to update.
     */
    where: TourPackageWhereUniqueInput
  }

  /**
   * TourPackage updateMany
   */
  export type TourPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourPackages.
     */
    data: XOR<TourPackageUpdateManyMutationInput, TourPackageUncheckedUpdateManyInput>
    /**
     * Filter which TourPackages to update
     */
    where?: TourPackageWhereInput
    /**
     * Limit how many TourPackages to update.
     */
    limit?: number
  }

  /**
   * TourPackage updateManyAndReturn
   */
  export type TourPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * The data used to update TourPackages.
     */
    data: XOR<TourPackageUpdateManyMutationInput, TourPackageUncheckedUpdateManyInput>
    /**
     * Filter which TourPackages to update
     */
    where?: TourPackageWhereInput
    /**
     * Limit how many TourPackages to update.
     */
    limit?: number
  }

  /**
   * TourPackage upsert
   */
  export type TourPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the TourPackage to update in case it exists.
     */
    where: TourPackageWhereUniqueInput
    /**
     * In case the TourPackage found by the `where` argument doesn't exist, create a new TourPackage with this data.
     */
    create: XOR<TourPackageCreateInput, TourPackageUncheckedCreateInput>
    /**
     * In case the TourPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourPackageUpdateInput, TourPackageUncheckedUpdateInput>
  }

  /**
   * TourPackage delete
   */
  export type TourPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
    /**
     * Filter which TourPackage to delete.
     */
    where: TourPackageWhereUniqueInput
  }

  /**
   * TourPackage deleteMany
   */
  export type TourPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourPackages to delete
     */
    where?: TourPackageWhereInput
    /**
     * Limit how many TourPackages to delete.
     */
    limit?: number
  }

  /**
   * TourPackage.photos
   */
  export type TourPackage$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    where?: TourPhotoWhereInput
    orderBy?: TourPhotoOrderByWithRelationInput | TourPhotoOrderByWithRelationInput[]
    cursor?: TourPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourPhotoScalarFieldEnum | TourPhotoScalarFieldEnum[]
  }

  /**
   * TourPackage.highlights
   */
  export type TourPackage$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    where?: TourHighlightWhereInput
    orderBy?: TourHighlightOrderByWithRelationInput | TourHighlightOrderByWithRelationInput[]
    cursor?: TourHighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourHighlightScalarFieldEnum | TourHighlightScalarFieldEnum[]
  }

  /**
   * TourPackage without action
   */
  export type TourPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPackage
     */
    select?: TourPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPackage
     */
    omit?: TourPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPackageInclude<ExtArgs> | null
  }


  /**
   * Model TourPhoto
   */

  export type AggregateTourPhoto = {
    _count: TourPhotoCountAggregateOutputType | null
    _avg: TourPhotoAvgAggregateOutputType | null
    _sum: TourPhotoSumAggregateOutputType | null
    _min: TourPhotoMinAggregateOutputType | null
    _max: TourPhotoMaxAggregateOutputType | null
  }

  export type TourPhotoAvgAggregateOutputType = {
    id: number | null
    tourPackageId: number | null
  }

  export type TourPhotoSumAggregateOutputType = {
    id: number | null
    tourPackageId: number | null
  }

  export type TourPhotoMinAggregateOutputType = {
    id: number | null
    url: string | null
    tourPackageId: number | null
  }

  export type TourPhotoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    tourPackageId: number | null
  }

  export type TourPhotoCountAggregateOutputType = {
    id: number
    url: number
    tourPackageId: number
    _all: number
  }


  export type TourPhotoAvgAggregateInputType = {
    id?: true
    tourPackageId?: true
  }

  export type TourPhotoSumAggregateInputType = {
    id?: true
    tourPackageId?: true
  }

  export type TourPhotoMinAggregateInputType = {
    id?: true
    url?: true
    tourPackageId?: true
  }

  export type TourPhotoMaxAggregateInputType = {
    id?: true
    url?: true
    tourPackageId?: true
  }

  export type TourPhotoCountAggregateInputType = {
    id?: true
    url?: true
    tourPackageId?: true
    _all?: true
  }

  export type TourPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourPhoto to aggregate.
     */
    where?: TourPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPhotos to fetch.
     */
    orderBy?: TourPhotoOrderByWithRelationInput | TourPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourPhotos
    **/
    _count?: true | TourPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourPhotoMaxAggregateInputType
  }

  export type GetTourPhotoAggregateType<T extends TourPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateTourPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourPhoto[P]>
      : GetScalarType<T[P], AggregateTourPhoto[P]>
  }




  export type TourPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourPhotoWhereInput
    orderBy?: TourPhotoOrderByWithAggregationInput | TourPhotoOrderByWithAggregationInput[]
    by: TourPhotoScalarFieldEnum[] | TourPhotoScalarFieldEnum
    having?: TourPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourPhotoCountAggregateInputType | true
    _avg?: TourPhotoAvgAggregateInputType
    _sum?: TourPhotoSumAggregateInputType
    _min?: TourPhotoMinAggregateInputType
    _max?: TourPhotoMaxAggregateInputType
  }

  export type TourPhotoGroupByOutputType = {
    id: number
    url: string
    tourPackageId: number
    _count: TourPhotoCountAggregateOutputType | null
    _avg: TourPhotoAvgAggregateOutputType | null
    _sum: TourPhotoSumAggregateOutputType | null
    _min: TourPhotoMinAggregateOutputType | null
    _max: TourPhotoMaxAggregateOutputType | null
  }

  type GetTourPhotoGroupByPayload<T extends TourPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], TourPhotoGroupByOutputType[P]>
        }
      >
    >


  export type TourPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    tourPackageId?: boolean
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourPhoto"]>

  export type TourPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    tourPackageId?: boolean
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourPhoto"]>

  export type TourPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    tourPackageId?: boolean
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourPhoto"]>

  export type TourPhotoSelectScalar = {
    id?: boolean
    url?: boolean
    tourPackageId?: boolean
  }

  export type TourPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "tourPackageId", ExtArgs["result"]["tourPhoto"]>
  export type TourPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }
  export type TourPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }
  export type TourPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }

  export type $TourPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourPhoto"
    objects: {
      tourPackage: Prisma.$TourPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      tourPackageId: number
    }, ExtArgs["result"]["tourPhoto"]>
    composites: {}
  }

  type TourPhotoGetPayload<S extends boolean | null | undefined | TourPhotoDefaultArgs> = $Result.GetResult<Prisma.$TourPhotoPayload, S>

  type TourPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourPhotoCountAggregateInputType | true
    }

  export interface TourPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourPhoto'], meta: { name: 'TourPhoto' } }
    /**
     * Find zero or one TourPhoto that matches the filter.
     * @param {TourPhotoFindUniqueArgs} args - Arguments to find a TourPhoto
     * @example
     * // Get one TourPhoto
     * const tourPhoto = await prisma.tourPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourPhotoFindUniqueArgs>(args: SelectSubset<T, TourPhotoFindUniqueArgs<ExtArgs>>): Prisma__TourPhotoClient<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourPhotoFindUniqueOrThrowArgs} args - Arguments to find a TourPhoto
     * @example
     * // Get one TourPhoto
     * const tourPhoto = await prisma.tourPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, TourPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourPhotoClient<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPhotoFindFirstArgs} args - Arguments to find a TourPhoto
     * @example
     * // Get one TourPhoto
     * const tourPhoto = await prisma.tourPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourPhotoFindFirstArgs>(args?: SelectSubset<T, TourPhotoFindFirstArgs<ExtArgs>>): Prisma__TourPhotoClient<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPhotoFindFirstOrThrowArgs} args - Arguments to find a TourPhoto
     * @example
     * // Get one TourPhoto
     * const tourPhoto = await prisma.tourPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, TourPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourPhotoClient<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourPhotos
     * const tourPhotos = await prisma.tourPhoto.findMany()
     * 
     * // Get first 10 TourPhotos
     * const tourPhotos = await prisma.tourPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourPhotoWithIdOnly = await prisma.tourPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourPhotoFindManyArgs>(args?: SelectSubset<T, TourPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourPhoto.
     * @param {TourPhotoCreateArgs} args - Arguments to create a TourPhoto.
     * @example
     * // Create one TourPhoto
     * const TourPhoto = await prisma.tourPhoto.create({
     *   data: {
     *     // ... data to create a TourPhoto
     *   }
     * })
     * 
     */
    create<T extends TourPhotoCreateArgs>(args: SelectSubset<T, TourPhotoCreateArgs<ExtArgs>>): Prisma__TourPhotoClient<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourPhotos.
     * @param {TourPhotoCreateManyArgs} args - Arguments to create many TourPhotos.
     * @example
     * // Create many TourPhotos
     * const tourPhoto = await prisma.tourPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourPhotoCreateManyArgs>(args?: SelectSubset<T, TourPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourPhotos and returns the data saved in the database.
     * @param {TourPhotoCreateManyAndReturnArgs} args - Arguments to create many TourPhotos.
     * @example
     * // Create many TourPhotos
     * const tourPhoto = await prisma.tourPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourPhotos and only return the `id`
     * const tourPhotoWithIdOnly = await prisma.tourPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, TourPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourPhoto.
     * @param {TourPhotoDeleteArgs} args - Arguments to delete one TourPhoto.
     * @example
     * // Delete one TourPhoto
     * const TourPhoto = await prisma.tourPhoto.delete({
     *   where: {
     *     // ... filter to delete one TourPhoto
     *   }
     * })
     * 
     */
    delete<T extends TourPhotoDeleteArgs>(args: SelectSubset<T, TourPhotoDeleteArgs<ExtArgs>>): Prisma__TourPhotoClient<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourPhoto.
     * @param {TourPhotoUpdateArgs} args - Arguments to update one TourPhoto.
     * @example
     * // Update one TourPhoto
     * const tourPhoto = await prisma.tourPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourPhotoUpdateArgs>(args: SelectSubset<T, TourPhotoUpdateArgs<ExtArgs>>): Prisma__TourPhotoClient<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourPhotos.
     * @param {TourPhotoDeleteManyArgs} args - Arguments to filter TourPhotos to delete.
     * @example
     * // Delete a few TourPhotos
     * const { count } = await prisma.tourPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourPhotoDeleteManyArgs>(args?: SelectSubset<T, TourPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourPhotos
     * const tourPhoto = await prisma.tourPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourPhotoUpdateManyArgs>(args: SelectSubset<T, TourPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourPhotos and returns the data updated in the database.
     * @param {TourPhotoUpdateManyAndReturnArgs} args - Arguments to update many TourPhotos.
     * @example
     * // Update many TourPhotos
     * const tourPhoto = await prisma.tourPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourPhotos and only return the `id`
     * const tourPhotoWithIdOnly = await prisma.tourPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, TourPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourPhoto.
     * @param {TourPhotoUpsertArgs} args - Arguments to update or create a TourPhoto.
     * @example
     * // Update or create a TourPhoto
     * const tourPhoto = await prisma.tourPhoto.upsert({
     *   create: {
     *     // ... data to create a TourPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourPhoto we want to update
     *   }
     * })
     */
    upsert<T extends TourPhotoUpsertArgs>(args: SelectSubset<T, TourPhotoUpsertArgs<ExtArgs>>): Prisma__TourPhotoClient<$Result.GetResult<Prisma.$TourPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPhotoCountArgs} args - Arguments to filter TourPhotos to count.
     * @example
     * // Count the number of TourPhotos
     * const count = await prisma.tourPhoto.count({
     *   where: {
     *     // ... the filter for the TourPhotos we want to count
     *   }
     * })
    **/
    count<T extends TourPhotoCountArgs>(
      args?: Subset<T, TourPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourPhotoAggregateArgs>(args: Subset<T, TourPhotoAggregateArgs>): Prisma.PrismaPromise<GetTourPhotoAggregateType<T>>

    /**
     * Group by TourPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPhotoGroupByArgs} args - Group by arguments.
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
      T extends TourPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourPhotoGroupByArgs['orderBy'] }
        : { orderBy?: TourPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourPhoto model
   */
  readonly fields: TourPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tourPackage<T extends TourPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourPackageDefaultArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TourPhoto model
   */
  interface TourPhotoFieldRefs {
    readonly id: FieldRef<"TourPhoto", 'Int'>
    readonly url: FieldRef<"TourPhoto", 'String'>
    readonly tourPackageId: FieldRef<"TourPhoto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourPhoto findUnique
   */
  export type TourPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * Filter, which TourPhoto to fetch.
     */
    where: TourPhotoWhereUniqueInput
  }

  /**
   * TourPhoto findUniqueOrThrow
   */
  export type TourPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * Filter, which TourPhoto to fetch.
     */
    where: TourPhotoWhereUniqueInput
  }

  /**
   * TourPhoto findFirst
   */
  export type TourPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * Filter, which TourPhoto to fetch.
     */
    where?: TourPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPhotos to fetch.
     */
    orderBy?: TourPhotoOrderByWithRelationInput | TourPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourPhotos.
     */
    cursor?: TourPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourPhotos.
     */
    distinct?: TourPhotoScalarFieldEnum | TourPhotoScalarFieldEnum[]
  }

  /**
   * TourPhoto findFirstOrThrow
   */
  export type TourPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * Filter, which TourPhoto to fetch.
     */
    where?: TourPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPhotos to fetch.
     */
    orderBy?: TourPhotoOrderByWithRelationInput | TourPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourPhotos.
     */
    cursor?: TourPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourPhotos.
     */
    distinct?: TourPhotoScalarFieldEnum | TourPhotoScalarFieldEnum[]
  }

  /**
   * TourPhoto findMany
   */
  export type TourPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * Filter, which TourPhotos to fetch.
     */
    where?: TourPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPhotos to fetch.
     */
    orderBy?: TourPhotoOrderByWithRelationInput | TourPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourPhotos.
     */
    cursor?: TourPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPhotos.
     */
    skip?: number
    distinct?: TourPhotoScalarFieldEnum | TourPhotoScalarFieldEnum[]
  }

  /**
   * TourPhoto create
   */
  export type TourPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a TourPhoto.
     */
    data: XOR<TourPhotoCreateInput, TourPhotoUncheckedCreateInput>
  }

  /**
   * TourPhoto createMany
   */
  export type TourPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourPhotos.
     */
    data: TourPhotoCreateManyInput | TourPhotoCreateManyInput[]
  }

  /**
   * TourPhoto createManyAndReturn
   */
  export type TourPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many TourPhotos.
     */
    data: TourPhotoCreateManyInput | TourPhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourPhoto update
   */
  export type TourPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a TourPhoto.
     */
    data: XOR<TourPhotoUpdateInput, TourPhotoUncheckedUpdateInput>
    /**
     * Choose, which TourPhoto to update.
     */
    where: TourPhotoWhereUniqueInput
  }

  /**
   * TourPhoto updateMany
   */
  export type TourPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourPhotos.
     */
    data: XOR<TourPhotoUpdateManyMutationInput, TourPhotoUncheckedUpdateManyInput>
    /**
     * Filter which TourPhotos to update
     */
    where?: TourPhotoWhereInput
    /**
     * Limit how many TourPhotos to update.
     */
    limit?: number
  }

  /**
   * TourPhoto updateManyAndReturn
   */
  export type TourPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * The data used to update TourPhotos.
     */
    data: XOR<TourPhotoUpdateManyMutationInput, TourPhotoUncheckedUpdateManyInput>
    /**
     * Filter which TourPhotos to update
     */
    where?: TourPhotoWhereInput
    /**
     * Limit how many TourPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourPhoto upsert
   */
  export type TourPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the TourPhoto to update in case it exists.
     */
    where: TourPhotoWhereUniqueInput
    /**
     * In case the TourPhoto found by the `where` argument doesn't exist, create a new TourPhoto with this data.
     */
    create: XOR<TourPhotoCreateInput, TourPhotoUncheckedCreateInput>
    /**
     * In case the TourPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourPhotoUpdateInput, TourPhotoUncheckedUpdateInput>
  }

  /**
   * TourPhoto delete
   */
  export type TourPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
    /**
     * Filter which TourPhoto to delete.
     */
    where: TourPhotoWhereUniqueInput
  }

  /**
   * TourPhoto deleteMany
   */
  export type TourPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourPhotos to delete
     */
    where?: TourPhotoWhereInput
    /**
     * Limit how many TourPhotos to delete.
     */
    limit?: number
  }

  /**
   * TourPhoto without action
   */
  export type TourPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPhoto
     */
    select?: TourPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPhoto
     */
    omit?: TourPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPhotoInclude<ExtArgs> | null
  }


  /**
   * Model TourHighlight
   */

  export type AggregateTourHighlight = {
    _count: TourHighlightCountAggregateOutputType | null
    _avg: TourHighlightAvgAggregateOutputType | null
    _sum: TourHighlightSumAggregateOutputType | null
    _min: TourHighlightMinAggregateOutputType | null
    _max: TourHighlightMaxAggregateOutputType | null
  }

  export type TourHighlightAvgAggregateOutputType = {
    id: number | null
    tourPackageId: number | null
  }

  export type TourHighlightSumAggregateOutputType = {
    id: number | null
    tourPackageId: number | null
  }

  export type TourHighlightMinAggregateOutputType = {
    id: number | null
    text: string | null
    tourPackageId: number | null
  }

  export type TourHighlightMaxAggregateOutputType = {
    id: number | null
    text: string | null
    tourPackageId: number | null
  }

  export type TourHighlightCountAggregateOutputType = {
    id: number
    text: number
    tourPackageId: number
    _all: number
  }


  export type TourHighlightAvgAggregateInputType = {
    id?: true
    tourPackageId?: true
  }

  export type TourHighlightSumAggregateInputType = {
    id?: true
    tourPackageId?: true
  }

  export type TourHighlightMinAggregateInputType = {
    id?: true
    text?: true
    tourPackageId?: true
  }

  export type TourHighlightMaxAggregateInputType = {
    id?: true
    text?: true
    tourPackageId?: true
  }

  export type TourHighlightCountAggregateInputType = {
    id?: true
    text?: true
    tourPackageId?: true
    _all?: true
  }

  export type TourHighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourHighlight to aggregate.
     */
    where?: TourHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourHighlights to fetch.
     */
    orderBy?: TourHighlightOrderByWithRelationInput | TourHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourHighlights
    **/
    _count?: true | TourHighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourHighlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourHighlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourHighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourHighlightMaxAggregateInputType
  }

  export type GetTourHighlightAggregateType<T extends TourHighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateTourHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourHighlight[P]>
      : GetScalarType<T[P], AggregateTourHighlight[P]>
  }




  export type TourHighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourHighlightWhereInput
    orderBy?: TourHighlightOrderByWithAggregationInput | TourHighlightOrderByWithAggregationInput[]
    by: TourHighlightScalarFieldEnum[] | TourHighlightScalarFieldEnum
    having?: TourHighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourHighlightCountAggregateInputType | true
    _avg?: TourHighlightAvgAggregateInputType
    _sum?: TourHighlightSumAggregateInputType
    _min?: TourHighlightMinAggregateInputType
    _max?: TourHighlightMaxAggregateInputType
  }

  export type TourHighlightGroupByOutputType = {
    id: number
    text: string
    tourPackageId: number
    _count: TourHighlightCountAggregateOutputType | null
    _avg: TourHighlightAvgAggregateOutputType | null
    _sum: TourHighlightSumAggregateOutputType | null
    _min: TourHighlightMinAggregateOutputType | null
    _max: TourHighlightMaxAggregateOutputType | null
  }

  type GetTourHighlightGroupByPayload<T extends TourHighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourHighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourHighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourHighlightGroupByOutputType[P]>
            : GetScalarType<T[P], TourHighlightGroupByOutputType[P]>
        }
      >
    >


  export type TourHighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    tourPackageId?: boolean
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourHighlight"]>

  export type TourHighlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    tourPackageId?: boolean
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourHighlight"]>

  export type TourHighlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    tourPackageId?: boolean
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourHighlight"]>

  export type TourHighlightSelectScalar = {
    id?: boolean
    text?: boolean
    tourPackageId?: boolean
  }

  export type TourHighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "tourPackageId", ExtArgs["result"]["tourHighlight"]>
  export type TourHighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }
  export type TourHighlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }
  export type TourHighlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourPackage?: boolean | TourPackageDefaultArgs<ExtArgs>
  }

  export type $TourHighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourHighlight"
    objects: {
      tourPackage: Prisma.$TourPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      tourPackageId: number
    }, ExtArgs["result"]["tourHighlight"]>
    composites: {}
  }

  type TourHighlightGetPayload<S extends boolean | null | undefined | TourHighlightDefaultArgs> = $Result.GetResult<Prisma.$TourHighlightPayload, S>

  type TourHighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourHighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourHighlightCountAggregateInputType | true
    }

  export interface TourHighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourHighlight'], meta: { name: 'TourHighlight' } }
    /**
     * Find zero or one TourHighlight that matches the filter.
     * @param {TourHighlightFindUniqueArgs} args - Arguments to find a TourHighlight
     * @example
     * // Get one TourHighlight
     * const tourHighlight = await prisma.tourHighlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourHighlightFindUniqueArgs>(args: SelectSubset<T, TourHighlightFindUniqueArgs<ExtArgs>>): Prisma__TourHighlightClient<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourHighlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourHighlightFindUniqueOrThrowArgs} args - Arguments to find a TourHighlight
     * @example
     * // Get one TourHighlight
     * const tourHighlight = await prisma.tourHighlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourHighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, TourHighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourHighlightClient<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourHighlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourHighlightFindFirstArgs} args - Arguments to find a TourHighlight
     * @example
     * // Get one TourHighlight
     * const tourHighlight = await prisma.tourHighlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourHighlightFindFirstArgs>(args?: SelectSubset<T, TourHighlightFindFirstArgs<ExtArgs>>): Prisma__TourHighlightClient<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourHighlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourHighlightFindFirstOrThrowArgs} args - Arguments to find a TourHighlight
     * @example
     * // Get one TourHighlight
     * const tourHighlight = await prisma.tourHighlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourHighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, TourHighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourHighlightClient<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourHighlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourHighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourHighlights
     * const tourHighlights = await prisma.tourHighlight.findMany()
     * 
     * // Get first 10 TourHighlights
     * const tourHighlights = await prisma.tourHighlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourHighlightWithIdOnly = await prisma.tourHighlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourHighlightFindManyArgs>(args?: SelectSubset<T, TourHighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourHighlight.
     * @param {TourHighlightCreateArgs} args - Arguments to create a TourHighlight.
     * @example
     * // Create one TourHighlight
     * const TourHighlight = await prisma.tourHighlight.create({
     *   data: {
     *     // ... data to create a TourHighlight
     *   }
     * })
     * 
     */
    create<T extends TourHighlightCreateArgs>(args: SelectSubset<T, TourHighlightCreateArgs<ExtArgs>>): Prisma__TourHighlightClient<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourHighlights.
     * @param {TourHighlightCreateManyArgs} args - Arguments to create many TourHighlights.
     * @example
     * // Create many TourHighlights
     * const tourHighlight = await prisma.tourHighlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourHighlightCreateManyArgs>(args?: SelectSubset<T, TourHighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourHighlights and returns the data saved in the database.
     * @param {TourHighlightCreateManyAndReturnArgs} args - Arguments to create many TourHighlights.
     * @example
     * // Create many TourHighlights
     * const tourHighlight = await prisma.tourHighlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourHighlights and only return the `id`
     * const tourHighlightWithIdOnly = await prisma.tourHighlight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourHighlightCreateManyAndReturnArgs>(args?: SelectSubset<T, TourHighlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourHighlight.
     * @param {TourHighlightDeleteArgs} args - Arguments to delete one TourHighlight.
     * @example
     * // Delete one TourHighlight
     * const TourHighlight = await prisma.tourHighlight.delete({
     *   where: {
     *     // ... filter to delete one TourHighlight
     *   }
     * })
     * 
     */
    delete<T extends TourHighlightDeleteArgs>(args: SelectSubset<T, TourHighlightDeleteArgs<ExtArgs>>): Prisma__TourHighlightClient<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourHighlight.
     * @param {TourHighlightUpdateArgs} args - Arguments to update one TourHighlight.
     * @example
     * // Update one TourHighlight
     * const tourHighlight = await prisma.tourHighlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourHighlightUpdateArgs>(args: SelectSubset<T, TourHighlightUpdateArgs<ExtArgs>>): Prisma__TourHighlightClient<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourHighlights.
     * @param {TourHighlightDeleteManyArgs} args - Arguments to filter TourHighlights to delete.
     * @example
     * // Delete a few TourHighlights
     * const { count } = await prisma.tourHighlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourHighlightDeleteManyArgs>(args?: SelectSubset<T, TourHighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourHighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourHighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourHighlights
     * const tourHighlight = await prisma.tourHighlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourHighlightUpdateManyArgs>(args: SelectSubset<T, TourHighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourHighlights and returns the data updated in the database.
     * @param {TourHighlightUpdateManyAndReturnArgs} args - Arguments to update many TourHighlights.
     * @example
     * // Update many TourHighlights
     * const tourHighlight = await prisma.tourHighlight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourHighlights and only return the `id`
     * const tourHighlightWithIdOnly = await prisma.tourHighlight.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourHighlightUpdateManyAndReturnArgs>(args: SelectSubset<T, TourHighlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourHighlight.
     * @param {TourHighlightUpsertArgs} args - Arguments to update or create a TourHighlight.
     * @example
     * // Update or create a TourHighlight
     * const tourHighlight = await prisma.tourHighlight.upsert({
     *   create: {
     *     // ... data to create a TourHighlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourHighlight we want to update
     *   }
     * })
     */
    upsert<T extends TourHighlightUpsertArgs>(args: SelectSubset<T, TourHighlightUpsertArgs<ExtArgs>>): Prisma__TourHighlightClient<$Result.GetResult<Prisma.$TourHighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourHighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourHighlightCountArgs} args - Arguments to filter TourHighlights to count.
     * @example
     * // Count the number of TourHighlights
     * const count = await prisma.tourHighlight.count({
     *   where: {
     *     // ... the filter for the TourHighlights we want to count
     *   }
     * })
    **/
    count<T extends TourHighlightCountArgs>(
      args?: Subset<T, TourHighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourHighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourHighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourHighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourHighlightAggregateArgs>(args: Subset<T, TourHighlightAggregateArgs>): Prisma.PrismaPromise<GetTourHighlightAggregateType<T>>

    /**
     * Group by TourHighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourHighlightGroupByArgs} args - Group by arguments.
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
      T extends TourHighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourHighlightGroupByArgs['orderBy'] }
        : { orderBy?: TourHighlightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourHighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourHighlight model
   */
  readonly fields: TourHighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourHighlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourHighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tourPackage<T extends TourPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourPackageDefaultArgs<ExtArgs>>): Prisma__TourPackageClient<$Result.GetResult<Prisma.$TourPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TourHighlight model
   */
  interface TourHighlightFieldRefs {
    readonly id: FieldRef<"TourHighlight", 'Int'>
    readonly text: FieldRef<"TourHighlight", 'String'>
    readonly tourPackageId: FieldRef<"TourHighlight", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourHighlight findUnique
   */
  export type TourHighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * Filter, which TourHighlight to fetch.
     */
    where: TourHighlightWhereUniqueInput
  }

  /**
   * TourHighlight findUniqueOrThrow
   */
  export type TourHighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * Filter, which TourHighlight to fetch.
     */
    where: TourHighlightWhereUniqueInput
  }

  /**
   * TourHighlight findFirst
   */
  export type TourHighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * Filter, which TourHighlight to fetch.
     */
    where?: TourHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourHighlights to fetch.
     */
    orderBy?: TourHighlightOrderByWithRelationInput | TourHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourHighlights.
     */
    cursor?: TourHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourHighlights.
     */
    distinct?: TourHighlightScalarFieldEnum | TourHighlightScalarFieldEnum[]
  }

  /**
   * TourHighlight findFirstOrThrow
   */
  export type TourHighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * Filter, which TourHighlight to fetch.
     */
    where?: TourHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourHighlights to fetch.
     */
    orderBy?: TourHighlightOrderByWithRelationInput | TourHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourHighlights.
     */
    cursor?: TourHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourHighlights.
     */
    distinct?: TourHighlightScalarFieldEnum | TourHighlightScalarFieldEnum[]
  }

  /**
   * TourHighlight findMany
   */
  export type TourHighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * Filter, which TourHighlights to fetch.
     */
    where?: TourHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourHighlights to fetch.
     */
    orderBy?: TourHighlightOrderByWithRelationInput | TourHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourHighlights.
     */
    cursor?: TourHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourHighlights.
     */
    skip?: number
    distinct?: TourHighlightScalarFieldEnum | TourHighlightScalarFieldEnum[]
  }

  /**
   * TourHighlight create
   */
  export type TourHighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a TourHighlight.
     */
    data: XOR<TourHighlightCreateInput, TourHighlightUncheckedCreateInput>
  }

  /**
   * TourHighlight createMany
   */
  export type TourHighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourHighlights.
     */
    data: TourHighlightCreateManyInput | TourHighlightCreateManyInput[]
  }

  /**
   * TourHighlight createManyAndReturn
   */
  export type TourHighlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * The data used to create many TourHighlights.
     */
    data: TourHighlightCreateManyInput | TourHighlightCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourHighlight update
   */
  export type TourHighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a TourHighlight.
     */
    data: XOR<TourHighlightUpdateInput, TourHighlightUncheckedUpdateInput>
    /**
     * Choose, which TourHighlight to update.
     */
    where: TourHighlightWhereUniqueInput
  }

  /**
   * TourHighlight updateMany
   */
  export type TourHighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourHighlights.
     */
    data: XOR<TourHighlightUpdateManyMutationInput, TourHighlightUncheckedUpdateManyInput>
    /**
     * Filter which TourHighlights to update
     */
    where?: TourHighlightWhereInput
    /**
     * Limit how many TourHighlights to update.
     */
    limit?: number
  }

  /**
   * TourHighlight updateManyAndReturn
   */
  export type TourHighlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * The data used to update TourHighlights.
     */
    data: XOR<TourHighlightUpdateManyMutationInput, TourHighlightUncheckedUpdateManyInput>
    /**
     * Filter which TourHighlights to update
     */
    where?: TourHighlightWhereInput
    /**
     * Limit how many TourHighlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourHighlight upsert
   */
  export type TourHighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the TourHighlight to update in case it exists.
     */
    where: TourHighlightWhereUniqueInput
    /**
     * In case the TourHighlight found by the `where` argument doesn't exist, create a new TourHighlight with this data.
     */
    create: XOR<TourHighlightCreateInput, TourHighlightUncheckedCreateInput>
    /**
     * In case the TourHighlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourHighlightUpdateInput, TourHighlightUncheckedUpdateInput>
  }

  /**
   * TourHighlight delete
   */
  export type TourHighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
    /**
     * Filter which TourHighlight to delete.
     */
    where: TourHighlightWhereUniqueInput
  }

  /**
   * TourHighlight deleteMany
   */
  export type TourHighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourHighlights to delete
     */
    where?: TourHighlightWhereInput
    /**
     * Limit how many TourHighlights to delete.
     */
    limit?: number
  }

  /**
   * TourHighlight without action
   */
  export type TourHighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourHighlight
     */
    select?: TourHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourHighlight
     */
    omit?: TourHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourHighlightInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
    type: string | null
    createdAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
    type: string | null
    createdAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    latitude: number
    longitude: number
    type: number
    createdAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    type?: true
    createdAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    type?: true
    createdAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    name: string
    latitude: number | null
    longitude: number | null
    type: string
    createdAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "latitude" | "longitude" | "type" | "createdAt", ExtArgs["result"]["location"]>

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      latitude: number | null
      longitude: number | null
      type: string
      createdAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly name: FieldRef<"Location", 'String'>
    readonly latitude: FieldRef<"Location", 'Float'>
    readonly longitude: FieldRef<"Location", 'Float'>
    readonly type: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
  }


  /**
   * Model IATACode
   */

  export type AggregateIATACode = {
    _count: IATACodeCountAggregateOutputType | null
    _avg: IATACodeAvgAggregateOutputType | null
    _sum: IATACodeSumAggregateOutputType | null
    _min: IATACodeMinAggregateOutputType | null
    _max: IATACodeMaxAggregateOutputType | null
  }

  export type IATACodeAvgAggregateOutputType = {
    id: number | null
  }

  export type IATACodeSumAggregateOutputType = {
    id: number | null
  }

  export type IATACodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    country: string | null
    createdAt: Date | null
  }

  export type IATACodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    country: string | null
    createdAt: Date | null
  }

  export type IATACodeCountAggregateOutputType = {
    id: number
    code: number
    name: number
    country: number
    createdAt: number
    _all: number
  }


  export type IATACodeAvgAggregateInputType = {
    id?: true
  }

  export type IATACodeSumAggregateInputType = {
    id?: true
  }

  export type IATACodeMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    country?: true
    createdAt?: true
  }

  export type IATACodeMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    country?: true
    createdAt?: true
  }

  export type IATACodeCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    country?: true
    createdAt?: true
    _all?: true
  }

  export type IATACodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IATACode to aggregate.
     */
    where?: IATACodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IATACodes to fetch.
     */
    orderBy?: IATACodeOrderByWithRelationInput | IATACodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IATACodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IATACodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IATACodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IATACodes
    **/
    _count?: true | IATACodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IATACodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IATACodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IATACodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IATACodeMaxAggregateInputType
  }

  export type GetIATACodeAggregateType<T extends IATACodeAggregateArgs> = {
        [P in keyof T & keyof AggregateIATACode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIATACode[P]>
      : GetScalarType<T[P], AggregateIATACode[P]>
  }




  export type IATACodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IATACodeWhereInput
    orderBy?: IATACodeOrderByWithAggregationInput | IATACodeOrderByWithAggregationInput[]
    by: IATACodeScalarFieldEnum[] | IATACodeScalarFieldEnum
    having?: IATACodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IATACodeCountAggregateInputType | true
    _avg?: IATACodeAvgAggregateInputType
    _sum?: IATACodeSumAggregateInputType
    _min?: IATACodeMinAggregateInputType
    _max?: IATACodeMaxAggregateInputType
  }

  export type IATACodeGroupByOutputType = {
    id: number
    code: string
    name: string
    country: string
    createdAt: Date
    _count: IATACodeCountAggregateOutputType | null
    _avg: IATACodeAvgAggregateOutputType | null
    _sum: IATACodeSumAggregateOutputType | null
    _min: IATACodeMinAggregateOutputType | null
    _max: IATACodeMaxAggregateOutputType | null
  }

  type GetIATACodeGroupByPayload<T extends IATACodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IATACodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IATACodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IATACodeGroupByOutputType[P]>
            : GetScalarType<T[P], IATACodeGroupByOutputType[P]>
        }
      >
    >


  export type IATACodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    country?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["iATACode"]>

  export type IATACodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    country?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["iATACode"]>

  export type IATACodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    country?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["iATACode"]>

  export type IATACodeSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    country?: boolean
    createdAt?: boolean
  }

  export type IATACodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "country" | "createdAt", ExtArgs["result"]["iATACode"]>

  export type $IATACodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IATACode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      country: string
      createdAt: Date
    }, ExtArgs["result"]["iATACode"]>
    composites: {}
  }

  type IATACodeGetPayload<S extends boolean | null | undefined | IATACodeDefaultArgs> = $Result.GetResult<Prisma.$IATACodePayload, S>

  type IATACodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IATACodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IATACodeCountAggregateInputType | true
    }

  export interface IATACodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IATACode'], meta: { name: 'IATACode' } }
    /**
     * Find zero or one IATACode that matches the filter.
     * @param {IATACodeFindUniqueArgs} args - Arguments to find a IATACode
     * @example
     * // Get one IATACode
     * const iATACode = await prisma.iATACode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IATACodeFindUniqueArgs>(args: SelectSubset<T, IATACodeFindUniqueArgs<ExtArgs>>): Prisma__IATACodeClient<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IATACode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IATACodeFindUniqueOrThrowArgs} args - Arguments to find a IATACode
     * @example
     * // Get one IATACode
     * const iATACode = await prisma.iATACode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IATACodeFindUniqueOrThrowArgs>(args: SelectSubset<T, IATACodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IATACodeClient<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IATACode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IATACodeFindFirstArgs} args - Arguments to find a IATACode
     * @example
     * // Get one IATACode
     * const iATACode = await prisma.iATACode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IATACodeFindFirstArgs>(args?: SelectSubset<T, IATACodeFindFirstArgs<ExtArgs>>): Prisma__IATACodeClient<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IATACode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IATACodeFindFirstOrThrowArgs} args - Arguments to find a IATACode
     * @example
     * // Get one IATACode
     * const iATACode = await prisma.iATACode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IATACodeFindFirstOrThrowArgs>(args?: SelectSubset<T, IATACodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IATACodeClient<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IATACodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IATACodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IATACodes
     * const iATACodes = await prisma.iATACode.findMany()
     * 
     * // Get first 10 IATACodes
     * const iATACodes = await prisma.iATACode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iATACodeWithIdOnly = await prisma.iATACode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IATACodeFindManyArgs>(args?: SelectSubset<T, IATACodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IATACode.
     * @param {IATACodeCreateArgs} args - Arguments to create a IATACode.
     * @example
     * // Create one IATACode
     * const IATACode = await prisma.iATACode.create({
     *   data: {
     *     // ... data to create a IATACode
     *   }
     * })
     * 
     */
    create<T extends IATACodeCreateArgs>(args: SelectSubset<T, IATACodeCreateArgs<ExtArgs>>): Prisma__IATACodeClient<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IATACodes.
     * @param {IATACodeCreateManyArgs} args - Arguments to create many IATACodes.
     * @example
     * // Create many IATACodes
     * const iATACode = await prisma.iATACode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IATACodeCreateManyArgs>(args?: SelectSubset<T, IATACodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IATACodes and returns the data saved in the database.
     * @param {IATACodeCreateManyAndReturnArgs} args - Arguments to create many IATACodes.
     * @example
     * // Create many IATACodes
     * const iATACode = await prisma.iATACode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IATACodes and only return the `id`
     * const iATACodeWithIdOnly = await prisma.iATACode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IATACodeCreateManyAndReturnArgs>(args?: SelectSubset<T, IATACodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IATACode.
     * @param {IATACodeDeleteArgs} args - Arguments to delete one IATACode.
     * @example
     * // Delete one IATACode
     * const IATACode = await prisma.iATACode.delete({
     *   where: {
     *     // ... filter to delete one IATACode
     *   }
     * })
     * 
     */
    delete<T extends IATACodeDeleteArgs>(args: SelectSubset<T, IATACodeDeleteArgs<ExtArgs>>): Prisma__IATACodeClient<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IATACode.
     * @param {IATACodeUpdateArgs} args - Arguments to update one IATACode.
     * @example
     * // Update one IATACode
     * const iATACode = await prisma.iATACode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IATACodeUpdateArgs>(args: SelectSubset<T, IATACodeUpdateArgs<ExtArgs>>): Prisma__IATACodeClient<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IATACodes.
     * @param {IATACodeDeleteManyArgs} args - Arguments to filter IATACodes to delete.
     * @example
     * // Delete a few IATACodes
     * const { count } = await prisma.iATACode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IATACodeDeleteManyArgs>(args?: SelectSubset<T, IATACodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IATACodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IATACodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IATACodes
     * const iATACode = await prisma.iATACode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IATACodeUpdateManyArgs>(args: SelectSubset<T, IATACodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IATACodes and returns the data updated in the database.
     * @param {IATACodeUpdateManyAndReturnArgs} args - Arguments to update many IATACodes.
     * @example
     * // Update many IATACodes
     * const iATACode = await prisma.iATACode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IATACodes and only return the `id`
     * const iATACodeWithIdOnly = await prisma.iATACode.updateManyAndReturn({
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
    updateManyAndReturn<T extends IATACodeUpdateManyAndReturnArgs>(args: SelectSubset<T, IATACodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IATACode.
     * @param {IATACodeUpsertArgs} args - Arguments to update or create a IATACode.
     * @example
     * // Update or create a IATACode
     * const iATACode = await prisma.iATACode.upsert({
     *   create: {
     *     // ... data to create a IATACode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IATACode we want to update
     *   }
     * })
     */
    upsert<T extends IATACodeUpsertArgs>(args: SelectSubset<T, IATACodeUpsertArgs<ExtArgs>>): Prisma__IATACodeClient<$Result.GetResult<Prisma.$IATACodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IATACodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IATACodeCountArgs} args - Arguments to filter IATACodes to count.
     * @example
     * // Count the number of IATACodes
     * const count = await prisma.iATACode.count({
     *   where: {
     *     // ... the filter for the IATACodes we want to count
     *   }
     * })
    **/
    count<T extends IATACodeCountArgs>(
      args?: Subset<T, IATACodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IATACodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IATACode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IATACodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IATACodeAggregateArgs>(args: Subset<T, IATACodeAggregateArgs>): Prisma.PrismaPromise<GetIATACodeAggregateType<T>>

    /**
     * Group by IATACode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IATACodeGroupByArgs} args - Group by arguments.
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
      T extends IATACodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IATACodeGroupByArgs['orderBy'] }
        : { orderBy?: IATACodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IATACodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIATACodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IATACode model
   */
  readonly fields: IATACodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IATACode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IATACodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IATACode model
   */
  interface IATACodeFieldRefs {
    readonly id: FieldRef<"IATACode", 'Int'>
    readonly code: FieldRef<"IATACode", 'String'>
    readonly name: FieldRef<"IATACode", 'String'>
    readonly country: FieldRef<"IATACode", 'String'>
    readonly createdAt: FieldRef<"IATACode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IATACode findUnique
   */
  export type IATACodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * Filter, which IATACode to fetch.
     */
    where: IATACodeWhereUniqueInput
  }

  /**
   * IATACode findUniqueOrThrow
   */
  export type IATACodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * Filter, which IATACode to fetch.
     */
    where: IATACodeWhereUniqueInput
  }

  /**
   * IATACode findFirst
   */
  export type IATACodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * Filter, which IATACode to fetch.
     */
    where?: IATACodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IATACodes to fetch.
     */
    orderBy?: IATACodeOrderByWithRelationInput | IATACodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IATACodes.
     */
    cursor?: IATACodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IATACodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IATACodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IATACodes.
     */
    distinct?: IATACodeScalarFieldEnum | IATACodeScalarFieldEnum[]
  }

  /**
   * IATACode findFirstOrThrow
   */
  export type IATACodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * Filter, which IATACode to fetch.
     */
    where?: IATACodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IATACodes to fetch.
     */
    orderBy?: IATACodeOrderByWithRelationInput | IATACodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IATACodes.
     */
    cursor?: IATACodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IATACodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IATACodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IATACodes.
     */
    distinct?: IATACodeScalarFieldEnum | IATACodeScalarFieldEnum[]
  }

  /**
   * IATACode findMany
   */
  export type IATACodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * Filter, which IATACodes to fetch.
     */
    where?: IATACodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IATACodes to fetch.
     */
    orderBy?: IATACodeOrderByWithRelationInput | IATACodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IATACodes.
     */
    cursor?: IATACodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IATACodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IATACodes.
     */
    skip?: number
    distinct?: IATACodeScalarFieldEnum | IATACodeScalarFieldEnum[]
  }

  /**
   * IATACode create
   */
  export type IATACodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * The data needed to create a IATACode.
     */
    data: XOR<IATACodeCreateInput, IATACodeUncheckedCreateInput>
  }

  /**
   * IATACode createMany
   */
  export type IATACodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IATACodes.
     */
    data: IATACodeCreateManyInput | IATACodeCreateManyInput[]
  }

  /**
   * IATACode createManyAndReturn
   */
  export type IATACodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * The data used to create many IATACodes.
     */
    data: IATACodeCreateManyInput | IATACodeCreateManyInput[]
  }

  /**
   * IATACode update
   */
  export type IATACodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * The data needed to update a IATACode.
     */
    data: XOR<IATACodeUpdateInput, IATACodeUncheckedUpdateInput>
    /**
     * Choose, which IATACode to update.
     */
    where: IATACodeWhereUniqueInput
  }

  /**
   * IATACode updateMany
   */
  export type IATACodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IATACodes.
     */
    data: XOR<IATACodeUpdateManyMutationInput, IATACodeUncheckedUpdateManyInput>
    /**
     * Filter which IATACodes to update
     */
    where?: IATACodeWhereInput
    /**
     * Limit how many IATACodes to update.
     */
    limit?: number
  }

  /**
   * IATACode updateManyAndReturn
   */
  export type IATACodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * The data used to update IATACodes.
     */
    data: XOR<IATACodeUpdateManyMutationInput, IATACodeUncheckedUpdateManyInput>
    /**
     * Filter which IATACodes to update
     */
    where?: IATACodeWhereInput
    /**
     * Limit how many IATACodes to update.
     */
    limit?: number
  }

  /**
   * IATACode upsert
   */
  export type IATACodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * The filter to search for the IATACode to update in case it exists.
     */
    where: IATACodeWhereUniqueInput
    /**
     * In case the IATACode found by the `where` argument doesn't exist, create a new IATACode with this data.
     */
    create: XOR<IATACodeCreateInput, IATACodeUncheckedCreateInput>
    /**
     * In case the IATACode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IATACodeUpdateInput, IATACodeUncheckedUpdateInput>
  }

  /**
   * IATACode delete
   */
  export type IATACodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
    /**
     * Filter which IATACode to delete.
     */
    where: IATACodeWhereUniqueInput
  }

  /**
   * IATACode deleteMany
   */
  export type IATACodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IATACodes to delete
     */
    where?: IATACodeWhereInput
    /**
     * Limit how many IATACodes to delete.
     */
    limit?: number
  }

  /**
   * IATACode without action
   */
  export type IATACodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IATACode
     */
    select?: IATACodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IATACode
     */
    omit?: IATACodeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarScalarFieldEnum: {
    id: 'id',
    model: 'model',
    description: 'description',
    image: 'image',
    createdAt: 'createdAt',
    mileage: 'mileage',
    fuel: 'fuel',
    engine: 'engine',
    seats: 'seats',
    doors: 'doors',
    year: 'year',
    transmission: 'transmission',
    price: 'price'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const RentACarScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    pickupLocation: 'pickupLocation',
    dropoffLocation: 'dropoffLocation',
    pickupDate: 'pickupDate',
    dropoffDate: 'dropoffDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentACarScalarFieldEnum = (typeof RentACarScalarFieldEnum)[keyof typeof RentACarScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    price: 'price'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const HighlightScalarFieldEnum: {
    id: 'id',
    text: 'text',
    activityId: 'activityId'
  };

  export type HighlightScalarFieldEnum = (typeof HighlightScalarFieldEnum)[keyof typeof HighlightScalarFieldEnum]


  export const ActivityPhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    activityId: 'activityId'
  };

  export type ActivityPhotoScalarFieldEnum = (typeof ActivityPhotoScalarFieldEnum)[keyof typeof ActivityPhotoScalarFieldEnum]


  export const TourPackageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    peopleCount: 'peopleCount',
    audienceType: 'audienceType',
    nightsCount: 'nightsCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourPackageScalarFieldEnum = (typeof TourPackageScalarFieldEnum)[keyof typeof TourPackageScalarFieldEnum]


  export const TourPhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    tourPackageId: 'tourPackageId'
  };

  export type TourPhotoScalarFieldEnum = (typeof TourPhotoScalarFieldEnum)[keyof typeof TourPhotoScalarFieldEnum]


  export const TourHighlightScalarFieldEnum: {
    id: 'id',
    text: 'text',
    tourPackageId: 'tourPackageId'
  };

  export type TourHighlightScalarFieldEnum = (typeof TourHighlightScalarFieldEnum)[keyof typeof TourHighlightScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const IATACodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    country: 'country',
    createdAt: 'createdAt'
  };

  export type IATACodeScalarFieldEnum = (typeof IATACodeScalarFieldEnum)[keyof typeof IATACodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    model?: StringFilter<"Car"> | string
    description?: StringFilter<"Car"> | string
    image?: StringFilter<"Car"> | string
    createdAt?: DateTimeFilter<"Car"> | Date | string
    mileage?: IntFilter<"Car"> | number
    fuel?: StringFilter<"Car"> | string
    engine?: StringFilter<"Car"> | string
    seats?: IntFilter<"Car"> | number
    doors?: IntFilter<"Car"> | number
    year?: IntFilter<"Car"> | number
    transmission?: StringFilter<"Car"> | string
    price?: FloatFilter<"Car"> | number
    rents?: RentACarListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    mileage?: SortOrder
    fuel?: SortOrder
    engine?: SortOrder
    seats?: SortOrder
    doors?: SortOrder
    year?: SortOrder
    transmission?: SortOrder
    price?: SortOrder
    rents?: RentACarOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    model?: StringFilter<"Car"> | string
    description?: StringFilter<"Car"> | string
    image?: StringFilter<"Car"> | string
    createdAt?: DateTimeFilter<"Car"> | Date | string
    mileage?: IntFilter<"Car"> | number
    fuel?: StringFilter<"Car"> | string
    engine?: StringFilter<"Car"> | string
    seats?: IntFilter<"Car"> | number
    doors?: IntFilter<"Car"> | number
    year?: IntFilter<"Car"> | number
    transmission?: StringFilter<"Car"> | string
    price?: FloatFilter<"Car"> | number
    rents?: RentACarListRelationFilter
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    mileage?: SortOrder
    fuel?: SortOrder
    engine?: SortOrder
    seats?: SortOrder
    doors?: SortOrder
    year?: SortOrder
    transmission?: SortOrder
    price?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    model?: StringWithAggregatesFilter<"Car"> | string
    description?: StringWithAggregatesFilter<"Car"> | string
    image?: StringWithAggregatesFilter<"Car"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    mileage?: IntWithAggregatesFilter<"Car"> | number
    fuel?: StringWithAggregatesFilter<"Car"> | string
    engine?: StringWithAggregatesFilter<"Car"> | string
    seats?: IntWithAggregatesFilter<"Car"> | number
    doors?: IntWithAggregatesFilter<"Car"> | number
    year?: IntWithAggregatesFilter<"Car"> | number
    transmission?: StringWithAggregatesFilter<"Car"> | string
    price?: FloatWithAggregatesFilter<"Car"> | number
  }

  export type RentACarWhereInput = {
    AND?: RentACarWhereInput | RentACarWhereInput[]
    OR?: RentACarWhereInput[]
    NOT?: RentACarWhereInput | RentACarWhereInput[]
    id?: IntFilter<"RentACar"> | number
    carId?: IntFilter<"RentACar"> | number
    pickupLocation?: StringFilter<"RentACar"> | string
    dropoffLocation?: StringFilter<"RentACar"> | string
    pickupDate?: DateTimeFilter<"RentACar"> | Date | string
    dropoffDate?: DateTimeFilter<"RentACar"> | Date | string
    createdAt?: DateTimeFilter<"RentACar"> | Date | string
    updatedAt?: DateTimeFilter<"RentACar"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type RentACarOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupLocation?: SortOrder
    dropoffLocation?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type RentACarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RentACarWhereInput | RentACarWhereInput[]
    OR?: RentACarWhereInput[]
    NOT?: RentACarWhereInput | RentACarWhereInput[]
    carId?: IntFilter<"RentACar"> | number
    pickupLocation?: StringFilter<"RentACar"> | string
    dropoffLocation?: StringFilter<"RentACar"> | string
    pickupDate?: DateTimeFilter<"RentACar"> | Date | string
    dropoffDate?: DateTimeFilter<"RentACar"> | Date | string
    createdAt?: DateTimeFilter<"RentACar"> | Date | string
    updatedAt?: DateTimeFilter<"RentACar"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type RentACarOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupLocation?: SortOrder
    dropoffLocation?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentACarCountOrderByAggregateInput
    _avg?: RentACarAvgOrderByAggregateInput
    _max?: RentACarMaxOrderByAggregateInput
    _min?: RentACarMinOrderByAggregateInput
    _sum?: RentACarSumOrderByAggregateInput
  }

  export type RentACarScalarWhereWithAggregatesInput = {
    AND?: RentACarScalarWhereWithAggregatesInput | RentACarScalarWhereWithAggregatesInput[]
    OR?: RentACarScalarWhereWithAggregatesInput[]
    NOT?: RentACarScalarWhereWithAggregatesInput | RentACarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RentACar"> | number
    carId?: IntWithAggregatesFilter<"RentACar"> | number
    pickupLocation?: StringWithAggregatesFilter<"RentACar"> | string
    dropoffLocation?: StringWithAggregatesFilter<"RentACar"> | string
    pickupDate?: DateTimeWithAggregatesFilter<"RentACar"> | Date | string
    dropoffDate?: DateTimeWithAggregatesFilter<"RentACar"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RentACar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentACar"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    price?: FloatFilter<"Activity"> | number
    photos?: ActivityPhotoListRelationFilter
    highlights?: HighlightListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    price?: SortOrder
    photos?: ActivityPhotoOrderByRelationAggregateInput
    highlights?: HighlightOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    price?: FloatFilter<"Activity"> | number
    photos?: ActivityPhotoListRelationFilter
    highlights?: HighlightListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    price?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    title?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    date?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    price?: FloatWithAggregatesFilter<"Activity"> | number
  }

  export type HighlightWhereInput = {
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    id?: IntFilter<"Highlight"> | number
    text?: StringFilter<"Highlight"> | string
    activityId?: IntFilter<"Highlight"> | number
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type HighlightOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    activityId?: SortOrder
    activity?: ActivityOrderByWithRelationInput
  }

  export type HighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    text?: StringFilter<"Highlight"> | string
    activityId?: IntFilter<"Highlight"> | number
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id">

  export type HighlightOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    activityId?: SortOrder
    _count?: HighlightCountOrderByAggregateInput
    _avg?: HighlightAvgOrderByAggregateInput
    _max?: HighlightMaxOrderByAggregateInput
    _min?: HighlightMinOrderByAggregateInput
    _sum?: HighlightSumOrderByAggregateInput
  }

  export type HighlightScalarWhereWithAggregatesInput = {
    AND?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    OR?: HighlightScalarWhereWithAggregatesInput[]
    NOT?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Highlight"> | number
    text?: StringWithAggregatesFilter<"Highlight"> | string
    activityId?: IntWithAggregatesFilter<"Highlight"> | number
  }

  export type ActivityPhotoWhereInput = {
    AND?: ActivityPhotoWhereInput | ActivityPhotoWhereInput[]
    OR?: ActivityPhotoWhereInput[]
    NOT?: ActivityPhotoWhereInput | ActivityPhotoWhereInput[]
    id?: IntFilter<"ActivityPhoto"> | number
    url?: StringFilter<"ActivityPhoto"> | string
    activityId?: IntFilter<"ActivityPhoto"> | number
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type ActivityPhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    activityId?: SortOrder
    activity?: ActivityOrderByWithRelationInput
  }

  export type ActivityPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityPhotoWhereInput | ActivityPhotoWhereInput[]
    OR?: ActivityPhotoWhereInput[]
    NOT?: ActivityPhotoWhereInput | ActivityPhotoWhereInput[]
    url?: StringFilter<"ActivityPhoto"> | string
    activityId?: IntFilter<"ActivityPhoto"> | number
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id">

  export type ActivityPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    activityId?: SortOrder
    _count?: ActivityPhotoCountOrderByAggregateInput
    _avg?: ActivityPhotoAvgOrderByAggregateInput
    _max?: ActivityPhotoMaxOrderByAggregateInput
    _min?: ActivityPhotoMinOrderByAggregateInput
    _sum?: ActivityPhotoSumOrderByAggregateInput
  }

  export type ActivityPhotoScalarWhereWithAggregatesInput = {
    AND?: ActivityPhotoScalarWhereWithAggregatesInput | ActivityPhotoScalarWhereWithAggregatesInput[]
    OR?: ActivityPhotoScalarWhereWithAggregatesInput[]
    NOT?: ActivityPhotoScalarWhereWithAggregatesInput | ActivityPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityPhoto"> | number
    url?: StringWithAggregatesFilter<"ActivityPhoto"> | string
    activityId?: IntWithAggregatesFilter<"ActivityPhoto"> | number
  }

  export type TourPackageWhereInput = {
    AND?: TourPackageWhereInput | TourPackageWhereInput[]
    OR?: TourPackageWhereInput[]
    NOT?: TourPackageWhereInput | TourPackageWhereInput[]
    id?: IntFilter<"TourPackage"> | number
    title?: StringFilter<"TourPackage"> | string
    description?: StringNullableFilter<"TourPackage"> | string | null
    price?: FloatFilter<"TourPackage"> | number
    peopleCount?: IntFilter<"TourPackage"> | number
    audienceType?: StringFilter<"TourPackage"> | string
    nightsCount?: IntFilter<"TourPackage"> | number
    createdAt?: DateTimeFilter<"TourPackage"> | Date | string
    updatedAt?: DateTimeFilter<"TourPackage"> | Date | string
    photos?: TourPhotoListRelationFilter
    highlights?: TourHighlightListRelationFilter
  }

  export type TourPackageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    peopleCount?: SortOrder
    audienceType?: SortOrder
    nightsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photos?: TourPhotoOrderByRelationAggregateInput
    highlights?: TourHighlightOrderByRelationAggregateInput
  }

  export type TourPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourPackageWhereInput | TourPackageWhereInput[]
    OR?: TourPackageWhereInput[]
    NOT?: TourPackageWhereInput | TourPackageWhereInput[]
    title?: StringFilter<"TourPackage"> | string
    description?: StringNullableFilter<"TourPackage"> | string | null
    price?: FloatFilter<"TourPackage"> | number
    peopleCount?: IntFilter<"TourPackage"> | number
    audienceType?: StringFilter<"TourPackage"> | string
    nightsCount?: IntFilter<"TourPackage"> | number
    createdAt?: DateTimeFilter<"TourPackage"> | Date | string
    updatedAt?: DateTimeFilter<"TourPackage"> | Date | string
    photos?: TourPhotoListRelationFilter
    highlights?: TourHighlightListRelationFilter
  }, "id">

  export type TourPackageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    peopleCount?: SortOrder
    audienceType?: SortOrder
    nightsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourPackageCountOrderByAggregateInput
    _avg?: TourPackageAvgOrderByAggregateInput
    _max?: TourPackageMaxOrderByAggregateInput
    _min?: TourPackageMinOrderByAggregateInput
    _sum?: TourPackageSumOrderByAggregateInput
  }

  export type TourPackageScalarWhereWithAggregatesInput = {
    AND?: TourPackageScalarWhereWithAggregatesInput | TourPackageScalarWhereWithAggregatesInput[]
    OR?: TourPackageScalarWhereWithAggregatesInput[]
    NOT?: TourPackageScalarWhereWithAggregatesInput | TourPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourPackage"> | number
    title?: StringWithAggregatesFilter<"TourPackage"> | string
    description?: StringNullableWithAggregatesFilter<"TourPackage"> | string | null
    price?: FloatWithAggregatesFilter<"TourPackage"> | number
    peopleCount?: IntWithAggregatesFilter<"TourPackage"> | number
    audienceType?: StringWithAggregatesFilter<"TourPackage"> | string
    nightsCount?: IntWithAggregatesFilter<"TourPackage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TourPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TourPackage"> | Date | string
  }

  export type TourPhotoWhereInput = {
    AND?: TourPhotoWhereInput | TourPhotoWhereInput[]
    OR?: TourPhotoWhereInput[]
    NOT?: TourPhotoWhereInput | TourPhotoWhereInput[]
    id?: IntFilter<"TourPhoto"> | number
    url?: StringFilter<"TourPhoto"> | string
    tourPackageId?: IntFilter<"TourPhoto"> | number
    tourPackage?: XOR<TourPackageScalarRelationFilter, TourPackageWhereInput>
  }

  export type TourPhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    tourPackageId?: SortOrder
    tourPackage?: TourPackageOrderByWithRelationInput
  }

  export type TourPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourPhotoWhereInput | TourPhotoWhereInput[]
    OR?: TourPhotoWhereInput[]
    NOT?: TourPhotoWhereInput | TourPhotoWhereInput[]
    url?: StringFilter<"TourPhoto"> | string
    tourPackageId?: IntFilter<"TourPhoto"> | number
    tourPackage?: XOR<TourPackageScalarRelationFilter, TourPackageWhereInput>
  }, "id">

  export type TourPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    tourPackageId?: SortOrder
    _count?: TourPhotoCountOrderByAggregateInput
    _avg?: TourPhotoAvgOrderByAggregateInput
    _max?: TourPhotoMaxOrderByAggregateInput
    _min?: TourPhotoMinOrderByAggregateInput
    _sum?: TourPhotoSumOrderByAggregateInput
  }

  export type TourPhotoScalarWhereWithAggregatesInput = {
    AND?: TourPhotoScalarWhereWithAggregatesInput | TourPhotoScalarWhereWithAggregatesInput[]
    OR?: TourPhotoScalarWhereWithAggregatesInput[]
    NOT?: TourPhotoScalarWhereWithAggregatesInput | TourPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourPhoto"> | number
    url?: StringWithAggregatesFilter<"TourPhoto"> | string
    tourPackageId?: IntWithAggregatesFilter<"TourPhoto"> | number
  }

  export type TourHighlightWhereInput = {
    AND?: TourHighlightWhereInput | TourHighlightWhereInput[]
    OR?: TourHighlightWhereInput[]
    NOT?: TourHighlightWhereInput | TourHighlightWhereInput[]
    id?: IntFilter<"TourHighlight"> | number
    text?: StringFilter<"TourHighlight"> | string
    tourPackageId?: IntFilter<"TourHighlight"> | number
    tourPackage?: XOR<TourPackageScalarRelationFilter, TourPackageWhereInput>
  }

  export type TourHighlightOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    tourPackageId?: SortOrder
    tourPackage?: TourPackageOrderByWithRelationInput
  }

  export type TourHighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourHighlightWhereInput | TourHighlightWhereInput[]
    OR?: TourHighlightWhereInput[]
    NOT?: TourHighlightWhereInput | TourHighlightWhereInput[]
    text?: StringFilter<"TourHighlight"> | string
    tourPackageId?: IntFilter<"TourHighlight"> | number
    tourPackage?: XOR<TourPackageScalarRelationFilter, TourPackageWhereInput>
  }, "id">

  export type TourHighlightOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    tourPackageId?: SortOrder
    _count?: TourHighlightCountOrderByAggregateInput
    _avg?: TourHighlightAvgOrderByAggregateInput
    _max?: TourHighlightMaxOrderByAggregateInput
    _min?: TourHighlightMinOrderByAggregateInput
    _sum?: TourHighlightSumOrderByAggregateInput
  }

  export type TourHighlightScalarWhereWithAggregatesInput = {
    AND?: TourHighlightScalarWhereWithAggregatesInput | TourHighlightScalarWhereWithAggregatesInput[]
    OR?: TourHighlightScalarWhereWithAggregatesInput[]
    NOT?: TourHighlightScalarWhereWithAggregatesInput | TourHighlightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourHighlight"> | number
    text?: StringWithAggregatesFilter<"TourHighlight"> | string
    tourPackageId?: IntWithAggregatesFilter<"TourHighlight"> | number
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    latitude?: FloatNullableFilter<"Location"> | number | null
    longitude?: FloatNullableFilter<"Location"> | number | null
    type?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    latitude?: FloatNullableFilter<"Location"> | number | null
    longitude?: FloatNullableFilter<"Location"> | number | null
    type?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
  }, "id" | "name">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    name?: StringWithAggregatesFilter<"Location"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Location"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Location"> | number | null
    type?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type IATACodeWhereInput = {
    AND?: IATACodeWhereInput | IATACodeWhereInput[]
    OR?: IATACodeWhereInput[]
    NOT?: IATACodeWhereInput | IATACodeWhereInput[]
    id?: IntFilter<"IATACode"> | number
    code?: StringFilter<"IATACode"> | string
    name?: StringFilter<"IATACode"> | string
    country?: StringFilter<"IATACode"> | string
    createdAt?: DateTimeFilter<"IATACode"> | Date | string
  }

  export type IATACodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type IATACodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: IATACodeWhereInput | IATACodeWhereInput[]
    OR?: IATACodeWhereInput[]
    NOT?: IATACodeWhereInput | IATACodeWhereInput[]
    name?: StringFilter<"IATACode"> | string
    country?: StringFilter<"IATACode"> | string
    createdAt?: DateTimeFilter<"IATACode"> | Date | string
  }, "id" | "code">

  export type IATACodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    _count?: IATACodeCountOrderByAggregateInput
    _avg?: IATACodeAvgOrderByAggregateInput
    _max?: IATACodeMaxOrderByAggregateInput
    _min?: IATACodeMinOrderByAggregateInput
    _sum?: IATACodeSumOrderByAggregateInput
  }

  export type IATACodeScalarWhereWithAggregatesInput = {
    AND?: IATACodeScalarWhereWithAggregatesInput | IATACodeScalarWhereWithAggregatesInput[]
    OR?: IATACodeScalarWhereWithAggregatesInput[]
    NOT?: IATACodeScalarWhereWithAggregatesInput | IATACodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IATACode"> | number
    code?: StringWithAggregatesFilter<"IATACode"> | string
    name?: StringWithAggregatesFilter<"IATACode"> | string
    country?: StringWithAggregatesFilter<"IATACode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IATACode"> | Date | string
  }

  export type CarCreateInput = {
    model: string
    description: string
    image: string
    createdAt?: Date | string
    mileage: number
    fuel: string
    engine: string
    seats: number
    doors: number
    year: number
    transmission: string
    price: number
    rents?: RentACarCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    model: string
    description: string
    image: string
    createdAt?: Date | string
    mileage: number
    fuel: string
    engine: string
    seats: number
    doors: number
    year: number
    transmission: string
    price: number
    rents?: RentACarUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    doors?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rents?: RentACarUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    doors?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rents?: RentACarUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    model: string
    description: string
    image: string
    createdAt?: Date | string
    mileage: number
    fuel: string
    engine: string
    seats: number
    doors: number
    year: number
    transmission: string
    price: number
  }

  export type CarUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    doors?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    doors?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RentACarCreateInput = {
    pickupLocation: string
    dropoffLocation: string
    pickupDate: Date | string
    dropoffDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutRentsInput
  }

  export type RentACarUncheckedCreateInput = {
    id?: number
    carId: number
    pickupLocation: string
    dropoffLocation: string
    pickupDate: Date | string
    dropoffDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentACarUpdateInput = {
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropoffLocation?: StringFieldUpdateOperationsInput | string
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dropoffDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutRentsNestedInput
  }

  export type RentACarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropoffLocation?: StringFieldUpdateOperationsInput | string
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dropoffDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentACarCreateManyInput = {
    id?: number
    carId: number
    pickupLocation: string
    dropoffLocation: string
    pickupDate: Date | string
    dropoffDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentACarUpdateManyMutationInput = {
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropoffLocation?: StringFieldUpdateOperationsInput | string
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dropoffDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentACarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropoffLocation?: StringFieldUpdateOperationsInput | string
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dropoffDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    title: string
    description?: string | null
    date?: Date | string
    price: number
    photos?: ActivityPhotoCreateNestedManyWithoutActivityInput
    highlights?: HighlightCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    date?: Date | string
    price: number
    photos?: ActivityPhotoUncheckedCreateNestedManyWithoutActivityInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    photos?: ActivityPhotoUpdateManyWithoutActivityNestedInput
    highlights?: HighlightUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    photos?: ActivityPhotoUncheckedUpdateManyWithoutActivityNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    date?: Date | string
    price: number
  }

  export type ActivityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type HighlightCreateInput = {
    text: string
    activity: ActivityCreateNestedOneWithoutHighlightsInput
  }

  export type HighlightUncheckedCreateInput = {
    id?: number
    text: string
    activityId: number
  }

  export type HighlightUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    activity?: ActivityUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type HighlightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type HighlightCreateManyInput = {
    id?: number
    text: string
    activityId: number
  }

  export type HighlightUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityPhotoCreateInput = {
    url: string
    activity: ActivityCreateNestedOneWithoutPhotosInput
  }

  export type ActivityPhotoUncheckedCreateInput = {
    id?: number
    url: string
    activityId: number
  }

  export type ActivityPhotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    activity?: ActivityUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type ActivityPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityPhotoCreateManyInput = {
    id?: number
    url: string
    activityId: number
  }

  export type ActivityPhotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type TourPackageCreateInput = {
    title: string
    description?: string | null
    price: number
    peopleCount: number
    audienceType: string
    nightsCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: TourPhotoCreateNestedManyWithoutTourPackageInput
    highlights?: TourHighlightCreateNestedManyWithoutTourPackageInput
  }

  export type TourPackageUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    peopleCount: number
    audienceType: string
    nightsCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: TourPhotoUncheckedCreateNestedManyWithoutTourPackageInput
    highlights?: TourHighlightUncheckedCreateNestedManyWithoutTourPackageInput
  }

  export type TourPackageUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    peopleCount?: IntFieldUpdateOperationsInput | number
    audienceType?: StringFieldUpdateOperationsInput | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: TourPhotoUpdateManyWithoutTourPackageNestedInput
    highlights?: TourHighlightUpdateManyWithoutTourPackageNestedInput
  }

  export type TourPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    peopleCount?: IntFieldUpdateOperationsInput | number
    audienceType?: StringFieldUpdateOperationsInput | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: TourPhotoUncheckedUpdateManyWithoutTourPackageNestedInput
    highlights?: TourHighlightUncheckedUpdateManyWithoutTourPackageNestedInput
  }

  export type TourPackageCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    peopleCount: number
    audienceType: string
    nightsCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourPackageUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    peopleCount?: IntFieldUpdateOperationsInput | number
    audienceType?: StringFieldUpdateOperationsInput | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    peopleCount?: IntFieldUpdateOperationsInput | number
    audienceType?: StringFieldUpdateOperationsInput | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPhotoCreateInput = {
    url: string
    tourPackage: TourPackageCreateNestedOneWithoutPhotosInput
  }

  export type TourPhotoUncheckedCreateInput = {
    id?: number
    url: string
    tourPackageId: number
  }

  export type TourPhotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    tourPackage?: TourPackageUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type TourPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    tourPackageId?: IntFieldUpdateOperationsInput | number
  }

  export type TourPhotoCreateManyInput = {
    id?: number
    url: string
    tourPackageId: number
  }

  export type TourPhotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TourPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    tourPackageId?: IntFieldUpdateOperationsInput | number
  }

  export type TourHighlightCreateInput = {
    text: string
    tourPackage: TourPackageCreateNestedOneWithoutHighlightsInput
  }

  export type TourHighlightUncheckedCreateInput = {
    id?: number
    text: string
    tourPackageId: number
  }

  export type TourHighlightUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    tourPackage?: TourPackageUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type TourHighlightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    tourPackageId?: IntFieldUpdateOperationsInput | number
  }

  export type TourHighlightCreateManyInput = {
    id?: number
    text: string
    tourPackageId: number
  }

  export type TourHighlightUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type TourHighlightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    tourPackageId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationCreateInput = {
    name: string
    latitude?: number | null
    longitude?: number | null
    type: string
    createdAt?: Date | string
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    latitude?: number | null
    longitude?: number | null
    type: string
    createdAt?: Date | string
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyInput = {
    id?: number
    name: string
    latitude?: number | null
    longitude?: number | null
    type: string
    createdAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IATACodeCreateInput = {
    code: string
    name: string
    country: string
    createdAt?: Date | string
  }

  export type IATACodeUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    country: string
    createdAt?: Date | string
  }

  export type IATACodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IATACodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IATACodeCreateManyInput = {
    id?: number
    code: string
    name: string
    country: string
    createdAt?: Date | string
  }

  export type IATACodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IATACodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RentACarListRelationFilter = {
    every?: RentACarWhereInput
    some?: RentACarWhereInput
    none?: RentACarWhereInput
  }

  export type RentACarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    mileage?: SortOrder
    fuel?: SortOrder
    engine?: SortOrder
    seats?: SortOrder
    doors?: SortOrder
    year?: SortOrder
    transmission?: SortOrder
    price?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    mileage?: SortOrder
    seats?: SortOrder
    doors?: SortOrder
    year?: SortOrder
    price?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    mileage?: SortOrder
    fuel?: SortOrder
    engine?: SortOrder
    seats?: SortOrder
    doors?: SortOrder
    year?: SortOrder
    transmission?: SortOrder
    price?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    mileage?: SortOrder
    fuel?: SortOrder
    engine?: SortOrder
    seats?: SortOrder
    doors?: SortOrder
    year?: SortOrder
    transmission?: SortOrder
    price?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    mileage?: SortOrder
    seats?: SortOrder
    doors?: SortOrder
    year?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type RentACarCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupLocation?: SortOrder
    dropoffLocation?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentACarAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
  }

  export type RentACarMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupLocation?: SortOrder
    dropoffLocation?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentACarMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    pickupLocation?: SortOrder
    dropoffLocation?: SortOrder
    pickupDate?: SortOrder
    dropoffDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentACarSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ActivityPhotoListRelationFilter = {
    every?: ActivityPhotoWhereInput
    some?: ActivityPhotoWhereInput
    none?: ActivityPhotoWhereInput
  }

  export type HighlightListRelationFilter = {
    every?: HighlightWhereInput
    some?: HighlightWhereInput
    none?: HighlightWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HighlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    price?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type HighlightCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    activityId?: SortOrder
  }

  export type HighlightAvgOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type HighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    activityId?: SortOrder
  }

  export type HighlightMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    activityId?: SortOrder
  }

  export type HighlightSumOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type ActivityPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    activityId?: SortOrder
  }

  export type ActivityPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type ActivityPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    activityId?: SortOrder
  }

  export type ActivityPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    activityId?: SortOrder
  }

  export type ActivityPhotoSumOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type TourPhotoListRelationFilter = {
    every?: TourPhotoWhereInput
    some?: TourPhotoWhereInput
    none?: TourPhotoWhereInput
  }

  export type TourHighlightListRelationFilter = {
    every?: TourHighlightWhereInput
    some?: TourHighlightWhereInput
    none?: TourHighlightWhereInput
  }

  export type TourPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourHighlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourPackageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    peopleCount?: SortOrder
    audienceType?: SortOrder
    nightsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    peopleCount?: SortOrder
    nightsCount?: SortOrder
  }

  export type TourPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    peopleCount?: SortOrder
    audienceType?: SortOrder
    nightsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourPackageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    peopleCount?: SortOrder
    audienceType?: SortOrder
    nightsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourPackageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    peopleCount?: SortOrder
    nightsCount?: SortOrder
  }

  export type TourPackageScalarRelationFilter = {
    is?: TourPackageWhereInput
    isNot?: TourPackageWhereInput
  }

  export type TourPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourPhotoSumOrderByAggregateInput = {
    id?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourHighlightCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourHighlightAvgOrderByAggregateInput = {
    id?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourHighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourHighlightMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    tourPackageId?: SortOrder
  }

  export type TourHighlightSumOrderByAggregateInput = {
    id?: SortOrder
    tourPackageId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type IATACodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type IATACodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IATACodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type IATACodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type IATACodeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RentACarCreateNestedManyWithoutCarInput = {
    create?: XOR<RentACarCreateWithoutCarInput, RentACarUncheckedCreateWithoutCarInput> | RentACarCreateWithoutCarInput[] | RentACarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RentACarCreateOrConnectWithoutCarInput | RentACarCreateOrConnectWithoutCarInput[]
    createMany?: RentACarCreateManyCarInputEnvelope
    connect?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
  }

  export type RentACarUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<RentACarCreateWithoutCarInput, RentACarUncheckedCreateWithoutCarInput> | RentACarCreateWithoutCarInput[] | RentACarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RentACarCreateOrConnectWithoutCarInput | RentACarCreateOrConnectWithoutCarInput[]
    createMany?: RentACarCreateManyCarInputEnvelope
    connect?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RentACarUpdateManyWithoutCarNestedInput = {
    create?: XOR<RentACarCreateWithoutCarInput, RentACarUncheckedCreateWithoutCarInput> | RentACarCreateWithoutCarInput[] | RentACarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RentACarCreateOrConnectWithoutCarInput | RentACarCreateOrConnectWithoutCarInput[]
    upsert?: RentACarUpsertWithWhereUniqueWithoutCarInput | RentACarUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: RentACarCreateManyCarInputEnvelope
    set?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
    disconnect?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
    delete?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
    connect?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
    update?: RentACarUpdateWithWhereUniqueWithoutCarInput | RentACarUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: RentACarUpdateManyWithWhereWithoutCarInput | RentACarUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: RentACarScalarWhereInput | RentACarScalarWhereInput[]
  }

  export type RentACarUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<RentACarCreateWithoutCarInput, RentACarUncheckedCreateWithoutCarInput> | RentACarCreateWithoutCarInput[] | RentACarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: RentACarCreateOrConnectWithoutCarInput | RentACarCreateOrConnectWithoutCarInput[]
    upsert?: RentACarUpsertWithWhereUniqueWithoutCarInput | RentACarUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: RentACarCreateManyCarInputEnvelope
    set?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
    disconnect?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
    delete?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
    connect?: RentACarWhereUniqueInput | RentACarWhereUniqueInput[]
    update?: RentACarUpdateWithWhereUniqueWithoutCarInput | RentACarUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: RentACarUpdateManyWithWhereWithoutCarInput | RentACarUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: RentACarScalarWhereInput | RentACarScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutRentsInput = {
    create?: XOR<CarCreateWithoutRentsInput, CarUncheckedCreateWithoutRentsInput>
    connectOrCreate?: CarCreateOrConnectWithoutRentsInput
    connect?: CarWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutRentsNestedInput = {
    create?: XOR<CarCreateWithoutRentsInput, CarUncheckedCreateWithoutRentsInput>
    connectOrCreate?: CarCreateOrConnectWithoutRentsInput
    upsert?: CarUpsertWithoutRentsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutRentsInput, CarUpdateWithoutRentsInput>, CarUncheckedUpdateWithoutRentsInput>
  }

  export type ActivityPhotoCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityPhotoCreateWithoutActivityInput, ActivityPhotoUncheckedCreateWithoutActivityInput> | ActivityPhotoCreateWithoutActivityInput[] | ActivityPhotoUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityPhotoCreateOrConnectWithoutActivityInput | ActivityPhotoCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityPhotoCreateManyActivityInputEnvelope
    connect?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
  }

  export type HighlightCreateNestedManyWithoutActivityInput = {
    create?: XOR<HighlightCreateWithoutActivityInput, HighlightUncheckedCreateWithoutActivityInput> | HighlightCreateWithoutActivityInput[] | HighlightUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutActivityInput | HighlightCreateOrConnectWithoutActivityInput[]
    createMany?: HighlightCreateManyActivityInputEnvelope
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
  }

  export type ActivityPhotoUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityPhotoCreateWithoutActivityInput, ActivityPhotoUncheckedCreateWithoutActivityInput> | ActivityPhotoCreateWithoutActivityInput[] | ActivityPhotoUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityPhotoCreateOrConnectWithoutActivityInput | ActivityPhotoCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityPhotoCreateManyActivityInputEnvelope
    connect?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
  }

  export type HighlightUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<HighlightCreateWithoutActivityInput, HighlightUncheckedCreateWithoutActivityInput> | HighlightCreateWithoutActivityInput[] | HighlightUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutActivityInput | HighlightCreateOrConnectWithoutActivityInput[]
    createMany?: HighlightCreateManyActivityInputEnvelope
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ActivityPhotoUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityPhotoCreateWithoutActivityInput, ActivityPhotoUncheckedCreateWithoutActivityInput> | ActivityPhotoCreateWithoutActivityInput[] | ActivityPhotoUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityPhotoCreateOrConnectWithoutActivityInput | ActivityPhotoCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityPhotoUpsertWithWhereUniqueWithoutActivityInput | ActivityPhotoUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityPhotoCreateManyActivityInputEnvelope
    set?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
    disconnect?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
    delete?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
    connect?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
    update?: ActivityPhotoUpdateWithWhereUniqueWithoutActivityInput | ActivityPhotoUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityPhotoUpdateManyWithWhereWithoutActivityInput | ActivityPhotoUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityPhotoScalarWhereInput | ActivityPhotoScalarWhereInput[]
  }

  export type HighlightUpdateManyWithoutActivityNestedInput = {
    create?: XOR<HighlightCreateWithoutActivityInput, HighlightUncheckedCreateWithoutActivityInput> | HighlightCreateWithoutActivityInput[] | HighlightUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutActivityInput | HighlightCreateOrConnectWithoutActivityInput[]
    upsert?: HighlightUpsertWithWhereUniqueWithoutActivityInput | HighlightUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: HighlightCreateManyActivityInputEnvelope
    set?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    disconnect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    delete?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    update?: HighlightUpdateWithWhereUniqueWithoutActivityInput | HighlightUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: HighlightUpdateManyWithWhereWithoutActivityInput | HighlightUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
  }

  export type ActivityPhotoUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityPhotoCreateWithoutActivityInput, ActivityPhotoUncheckedCreateWithoutActivityInput> | ActivityPhotoCreateWithoutActivityInput[] | ActivityPhotoUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityPhotoCreateOrConnectWithoutActivityInput | ActivityPhotoCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityPhotoUpsertWithWhereUniqueWithoutActivityInput | ActivityPhotoUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityPhotoCreateManyActivityInputEnvelope
    set?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
    disconnect?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
    delete?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
    connect?: ActivityPhotoWhereUniqueInput | ActivityPhotoWhereUniqueInput[]
    update?: ActivityPhotoUpdateWithWhereUniqueWithoutActivityInput | ActivityPhotoUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityPhotoUpdateManyWithWhereWithoutActivityInput | ActivityPhotoUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityPhotoScalarWhereInput | ActivityPhotoScalarWhereInput[]
  }

  export type HighlightUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<HighlightCreateWithoutActivityInput, HighlightUncheckedCreateWithoutActivityInput> | HighlightCreateWithoutActivityInput[] | HighlightUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutActivityInput | HighlightCreateOrConnectWithoutActivityInput[]
    upsert?: HighlightUpsertWithWhereUniqueWithoutActivityInput | HighlightUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: HighlightCreateManyActivityInputEnvelope
    set?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    disconnect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    delete?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    update?: HighlightUpdateWithWhereUniqueWithoutActivityInput | HighlightUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: HighlightUpdateManyWithWhereWithoutActivityInput | HighlightUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
  }

  export type ActivityCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<ActivityCreateWithoutHighlightsInput, ActivityUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutHighlightsInput
    connect?: ActivityWhereUniqueInput
  }

  export type ActivityUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<ActivityCreateWithoutHighlightsInput, ActivityUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutHighlightsInput
    upsert?: ActivityUpsertWithoutHighlightsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutHighlightsInput, ActivityUpdateWithoutHighlightsInput>, ActivityUncheckedUpdateWithoutHighlightsInput>
  }

  export type ActivityCreateNestedOneWithoutPhotosInput = {
    create?: XOR<ActivityCreateWithoutPhotosInput, ActivityUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutPhotosInput
    connect?: ActivityWhereUniqueInput
  }

  export type ActivityUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<ActivityCreateWithoutPhotosInput, ActivityUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutPhotosInput
    upsert?: ActivityUpsertWithoutPhotosInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutPhotosInput, ActivityUpdateWithoutPhotosInput>, ActivityUncheckedUpdateWithoutPhotosInput>
  }

  export type TourPhotoCreateNestedManyWithoutTourPackageInput = {
    create?: XOR<TourPhotoCreateWithoutTourPackageInput, TourPhotoUncheckedCreateWithoutTourPackageInput> | TourPhotoCreateWithoutTourPackageInput[] | TourPhotoUncheckedCreateWithoutTourPackageInput[]
    connectOrCreate?: TourPhotoCreateOrConnectWithoutTourPackageInput | TourPhotoCreateOrConnectWithoutTourPackageInput[]
    createMany?: TourPhotoCreateManyTourPackageInputEnvelope
    connect?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
  }

  export type TourHighlightCreateNestedManyWithoutTourPackageInput = {
    create?: XOR<TourHighlightCreateWithoutTourPackageInput, TourHighlightUncheckedCreateWithoutTourPackageInput> | TourHighlightCreateWithoutTourPackageInput[] | TourHighlightUncheckedCreateWithoutTourPackageInput[]
    connectOrCreate?: TourHighlightCreateOrConnectWithoutTourPackageInput | TourHighlightCreateOrConnectWithoutTourPackageInput[]
    createMany?: TourHighlightCreateManyTourPackageInputEnvelope
    connect?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
  }

  export type TourPhotoUncheckedCreateNestedManyWithoutTourPackageInput = {
    create?: XOR<TourPhotoCreateWithoutTourPackageInput, TourPhotoUncheckedCreateWithoutTourPackageInput> | TourPhotoCreateWithoutTourPackageInput[] | TourPhotoUncheckedCreateWithoutTourPackageInput[]
    connectOrCreate?: TourPhotoCreateOrConnectWithoutTourPackageInput | TourPhotoCreateOrConnectWithoutTourPackageInput[]
    createMany?: TourPhotoCreateManyTourPackageInputEnvelope
    connect?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
  }

  export type TourHighlightUncheckedCreateNestedManyWithoutTourPackageInput = {
    create?: XOR<TourHighlightCreateWithoutTourPackageInput, TourHighlightUncheckedCreateWithoutTourPackageInput> | TourHighlightCreateWithoutTourPackageInput[] | TourHighlightUncheckedCreateWithoutTourPackageInput[]
    connectOrCreate?: TourHighlightCreateOrConnectWithoutTourPackageInput | TourHighlightCreateOrConnectWithoutTourPackageInput[]
    createMany?: TourHighlightCreateManyTourPackageInputEnvelope
    connect?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
  }

  export type TourPhotoUpdateManyWithoutTourPackageNestedInput = {
    create?: XOR<TourPhotoCreateWithoutTourPackageInput, TourPhotoUncheckedCreateWithoutTourPackageInput> | TourPhotoCreateWithoutTourPackageInput[] | TourPhotoUncheckedCreateWithoutTourPackageInput[]
    connectOrCreate?: TourPhotoCreateOrConnectWithoutTourPackageInput | TourPhotoCreateOrConnectWithoutTourPackageInput[]
    upsert?: TourPhotoUpsertWithWhereUniqueWithoutTourPackageInput | TourPhotoUpsertWithWhereUniqueWithoutTourPackageInput[]
    createMany?: TourPhotoCreateManyTourPackageInputEnvelope
    set?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
    disconnect?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
    delete?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
    connect?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
    update?: TourPhotoUpdateWithWhereUniqueWithoutTourPackageInput | TourPhotoUpdateWithWhereUniqueWithoutTourPackageInput[]
    updateMany?: TourPhotoUpdateManyWithWhereWithoutTourPackageInput | TourPhotoUpdateManyWithWhereWithoutTourPackageInput[]
    deleteMany?: TourPhotoScalarWhereInput | TourPhotoScalarWhereInput[]
  }

  export type TourHighlightUpdateManyWithoutTourPackageNestedInput = {
    create?: XOR<TourHighlightCreateWithoutTourPackageInput, TourHighlightUncheckedCreateWithoutTourPackageInput> | TourHighlightCreateWithoutTourPackageInput[] | TourHighlightUncheckedCreateWithoutTourPackageInput[]
    connectOrCreate?: TourHighlightCreateOrConnectWithoutTourPackageInput | TourHighlightCreateOrConnectWithoutTourPackageInput[]
    upsert?: TourHighlightUpsertWithWhereUniqueWithoutTourPackageInput | TourHighlightUpsertWithWhereUniqueWithoutTourPackageInput[]
    createMany?: TourHighlightCreateManyTourPackageInputEnvelope
    set?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
    disconnect?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
    delete?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
    connect?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
    update?: TourHighlightUpdateWithWhereUniqueWithoutTourPackageInput | TourHighlightUpdateWithWhereUniqueWithoutTourPackageInput[]
    updateMany?: TourHighlightUpdateManyWithWhereWithoutTourPackageInput | TourHighlightUpdateManyWithWhereWithoutTourPackageInput[]
    deleteMany?: TourHighlightScalarWhereInput | TourHighlightScalarWhereInput[]
  }

  export type TourPhotoUncheckedUpdateManyWithoutTourPackageNestedInput = {
    create?: XOR<TourPhotoCreateWithoutTourPackageInput, TourPhotoUncheckedCreateWithoutTourPackageInput> | TourPhotoCreateWithoutTourPackageInput[] | TourPhotoUncheckedCreateWithoutTourPackageInput[]
    connectOrCreate?: TourPhotoCreateOrConnectWithoutTourPackageInput | TourPhotoCreateOrConnectWithoutTourPackageInput[]
    upsert?: TourPhotoUpsertWithWhereUniqueWithoutTourPackageInput | TourPhotoUpsertWithWhereUniqueWithoutTourPackageInput[]
    createMany?: TourPhotoCreateManyTourPackageInputEnvelope
    set?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
    disconnect?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
    delete?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
    connect?: TourPhotoWhereUniqueInput | TourPhotoWhereUniqueInput[]
    update?: TourPhotoUpdateWithWhereUniqueWithoutTourPackageInput | TourPhotoUpdateWithWhereUniqueWithoutTourPackageInput[]
    updateMany?: TourPhotoUpdateManyWithWhereWithoutTourPackageInput | TourPhotoUpdateManyWithWhereWithoutTourPackageInput[]
    deleteMany?: TourPhotoScalarWhereInput | TourPhotoScalarWhereInput[]
  }

  export type TourHighlightUncheckedUpdateManyWithoutTourPackageNestedInput = {
    create?: XOR<TourHighlightCreateWithoutTourPackageInput, TourHighlightUncheckedCreateWithoutTourPackageInput> | TourHighlightCreateWithoutTourPackageInput[] | TourHighlightUncheckedCreateWithoutTourPackageInput[]
    connectOrCreate?: TourHighlightCreateOrConnectWithoutTourPackageInput | TourHighlightCreateOrConnectWithoutTourPackageInput[]
    upsert?: TourHighlightUpsertWithWhereUniqueWithoutTourPackageInput | TourHighlightUpsertWithWhereUniqueWithoutTourPackageInput[]
    createMany?: TourHighlightCreateManyTourPackageInputEnvelope
    set?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
    disconnect?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
    delete?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
    connect?: TourHighlightWhereUniqueInput | TourHighlightWhereUniqueInput[]
    update?: TourHighlightUpdateWithWhereUniqueWithoutTourPackageInput | TourHighlightUpdateWithWhereUniqueWithoutTourPackageInput[]
    updateMany?: TourHighlightUpdateManyWithWhereWithoutTourPackageInput | TourHighlightUpdateManyWithWhereWithoutTourPackageInput[]
    deleteMany?: TourHighlightScalarWhereInput | TourHighlightScalarWhereInput[]
  }

  export type TourPackageCreateNestedOneWithoutPhotosInput = {
    create?: XOR<TourPackageCreateWithoutPhotosInput, TourPackageUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: TourPackageCreateOrConnectWithoutPhotosInput
    connect?: TourPackageWhereUniqueInput
  }

  export type TourPackageUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<TourPackageCreateWithoutPhotosInput, TourPackageUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: TourPackageCreateOrConnectWithoutPhotosInput
    upsert?: TourPackageUpsertWithoutPhotosInput
    connect?: TourPackageWhereUniqueInput
    update?: XOR<XOR<TourPackageUpdateToOneWithWhereWithoutPhotosInput, TourPackageUpdateWithoutPhotosInput>, TourPackageUncheckedUpdateWithoutPhotosInput>
  }

  export type TourPackageCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<TourPackageCreateWithoutHighlightsInput, TourPackageUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: TourPackageCreateOrConnectWithoutHighlightsInput
    connect?: TourPackageWhereUniqueInput
  }

  export type TourPackageUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<TourPackageCreateWithoutHighlightsInput, TourPackageUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: TourPackageCreateOrConnectWithoutHighlightsInput
    upsert?: TourPackageUpsertWithoutHighlightsInput
    connect?: TourPackageWhereUniqueInput
    update?: XOR<XOR<TourPackageUpdateToOneWithWhereWithoutHighlightsInput, TourPackageUpdateWithoutHighlightsInput>, TourPackageUncheckedUpdateWithoutHighlightsInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type RentACarCreateWithoutCarInput = {
    pickupLocation: string
    dropoffLocation: string
    pickupDate: Date | string
    dropoffDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentACarUncheckedCreateWithoutCarInput = {
    id?: number
    pickupLocation: string
    dropoffLocation: string
    pickupDate: Date | string
    dropoffDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentACarCreateOrConnectWithoutCarInput = {
    where: RentACarWhereUniqueInput
    create: XOR<RentACarCreateWithoutCarInput, RentACarUncheckedCreateWithoutCarInput>
  }

  export type RentACarCreateManyCarInputEnvelope = {
    data: RentACarCreateManyCarInput | RentACarCreateManyCarInput[]
  }

  export type RentACarUpsertWithWhereUniqueWithoutCarInput = {
    where: RentACarWhereUniqueInput
    update: XOR<RentACarUpdateWithoutCarInput, RentACarUncheckedUpdateWithoutCarInput>
    create: XOR<RentACarCreateWithoutCarInput, RentACarUncheckedCreateWithoutCarInput>
  }

  export type RentACarUpdateWithWhereUniqueWithoutCarInput = {
    where: RentACarWhereUniqueInput
    data: XOR<RentACarUpdateWithoutCarInput, RentACarUncheckedUpdateWithoutCarInput>
  }

  export type RentACarUpdateManyWithWhereWithoutCarInput = {
    where: RentACarScalarWhereInput
    data: XOR<RentACarUpdateManyMutationInput, RentACarUncheckedUpdateManyWithoutCarInput>
  }

  export type RentACarScalarWhereInput = {
    AND?: RentACarScalarWhereInput | RentACarScalarWhereInput[]
    OR?: RentACarScalarWhereInput[]
    NOT?: RentACarScalarWhereInput | RentACarScalarWhereInput[]
    id?: IntFilter<"RentACar"> | number
    carId?: IntFilter<"RentACar"> | number
    pickupLocation?: StringFilter<"RentACar"> | string
    dropoffLocation?: StringFilter<"RentACar"> | string
    pickupDate?: DateTimeFilter<"RentACar"> | Date | string
    dropoffDate?: DateTimeFilter<"RentACar"> | Date | string
    createdAt?: DateTimeFilter<"RentACar"> | Date | string
    updatedAt?: DateTimeFilter<"RentACar"> | Date | string
  }

  export type CarCreateWithoutRentsInput = {
    model: string
    description: string
    image: string
    createdAt?: Date | string
    mileage: number
    fuel: string
    engine: string
    seats: number
    doors: number
    year: number
    transmission: string
    price: number
  }

  export type CarUncheckedCreateWithoutRentsInput = {
    id?: number
    model: string
    description: string
    image: string
    createdAt?: Date | string
    mileage: number
    fuel: string
    engine: string
    seats: number
    doors: number
    year: number
    transmission: string
    price: number
  }

  export type CarCreateOrConnectWithoutRentsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutRentsInput, CarUncheckedCreateWithoutRentsInput>
  }

  export type CarUpsertWithoutRentsInput = {
    update: XOR<CarUpdateWithoutRentsInput, CarUncheckedUpdateWithoutRentsInput>
    create: XOR<CarCreateWithoutRentsInput, CarUncheckedCreateWithoutRentsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutRentsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutRentsInput, CarUncheckedUpdateWithoutRentsInput>
  }

  export type CarUpdateWithoutRentsInput = {
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    doors?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CarUncheckedUpdateWithoutRentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    fuel?: StringFieldUpdateOperationsInput | string
    engine?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    doors?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityPhotoCreateWithoutActivityInput = {
    url: string
  }

  export type ActivityPhotoUncheckedCreateWithoutActivityInput = {
    id?: number
    url: string
  }

  export type ActivityPhotoCreateOrConnectWithoutActivityInput = {
    where: ActivityPhotoWhereUniqueInput
    create: XOR<ActivityPhotoCreateWithoutActivityInput, ActivityPhotoUncheckedCreateWithoutActivityInput>
  }

  export type ActivityPhotoCreateManyActivityInputEnvelope = {
    data: ActivityPhotoCreateManyActivityInput | ActivityPhotoCreateManyActivityInput[]
  }

  export type HighlightCreateWithoutActivityInput = {
    text: string
  }

  export type HighlightUncheckedCreateWithoutActivityInput = {
    id?: number
    text: string
  }

  export type HighlightCreateOrConnectWithoutActivityInput = {
    where: HighlightWhereUniqueInput
    create: XOR<HighlightCreateWithoutActivityInput, HighlightUncheckedCreateWithoutActivityInput>
  }

  export type HighlightCreateManyActivityInputEnvelope = {
    data: HighlightCreateManyActivityInput | HighlightCreateManyActivityInput[]
  }

  export type ActivityPhotoUpsertWithWhereUniqueWithoutActivityInput = {
    where: ActivityPhotoWhereUniqueInput
    update: XOR<ActivityPhotoUpdateWithoutActivityInput, ActivityPhotoUncheckedUpdateWithoutActivityInput>
    create: XOR<ActivityPhotoCreateWithoutActivityInput, ActivityPhotoUncheckedCreateWithoutActivityInput>
  }

  export type ActivityPhotoUpdateWithWhereUniqueWithoutActivityInput = {
    where: ActivityPhotoWhereUniqueInput
    data: XOR<ActivityPhotoUpdateWithoutActivityInput, ActivityPhotoUncheckedUpdateWithoutActivityInput>
  }

  export type ActivityPhotoUpdateManyWithWhereWithoutActivityInput = {
    where: ActivityPhotoScalarWhereInput
    data: XOR<ActivityPhotoUpdateManyMutationInput, ActivityPhotoUncheckedUpdateManyWithoutActivityInput>
  }

  export type ActivityPhotoScalarWhereInput = {
    AND?: ActivityPhotoScalarWhereInput | ActivityPhotoScalarWhereInput[]
    OR?: ActivityPhotoScalarWhereInput[]
    NOT?: ActivityPhotoScalarWhereInput | ActivityPhotoScalarWhereInput[]
    id?: IntFilter<"ActivityPhoto"> | number
    url?: StringFilter<"ActivityPhoto"> | string
    activityId?: IntFilter<"ActivityPhoto"> | number
  }

  export type HighlightUpsertWithWhereUniqueWithoutActivityInput = {
    where: HighlightWhereUniqueInput
    update: XOR<HighlightUpdateWithoutActivityInput, HighlightUncheckedUpdateWithoutActivityInput>
    create: XOR<HighlightCreateWithoutActivityInput, HighlightUncheckedCreateWithoutActivityInput>
  }

  export type HighlightUpdateWithWhereUniqueWithoutActivityInput = {
    where: HighlightWhereUniqueInput
    data: XOR<HighlightUpdateWithoutActivityInput, HighlightUncheckedUpdateWithoutActivityInput>
  }

  export type HighlightUpdateManyWithWhereWithoutActivityInput = {
    where: HighlightScalarWhereInput
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyWithoutActivityInput>
  }

  export type HighlightScalarWhereInput = {
    AND?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
    OR?: HighlightScalarWhereInput[]
    NOT?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
    id?: IntFilter<"Highlight"> | number
    text?: StringFilter<"Highlight"> | string
    activityId?: IntFilter<"Highlight"> | number
  }

  export type ActivityCreateWithoutHighlightsInput = {
    title: string
    description?: string | null
    date?: Date | string
    price: number
    photos?: ActivityPhotoCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutHighlightsInput = {
    id?: number
    title: string
    description?: string | null
    date?: Date | string
    price: number
    photos?: ActivityPhotoUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutHighlightsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutHighlightsInput, ActivityUncheckedCreateWithoutHighlightsInput>
  }

  export type ActivityUpsertWithoutHighlightsInput = {
    update: XOR<ActivityUpdateWithoutHighlightsInput, ActivityUncheckedUpdateWithoutHighlightsInput>
    create: XOR<ActivityCreateWithoutHighlightsInput, ActivityUncheckedCreateWithoutHighlightsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutHighlightsInput, ActivityUncheckedUpdateWithoutHighlightsInput>
  }

  export type ActivityUpdateWithoutHighlightsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    photos?: ActivityPhotoUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutHighlightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    photos?: ActivityPhotoUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateWithoutPhotosInput = {
    title: string
    description?: string | null
    date?: Date | string
    price: number
    highlights?: HighlightCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutPhotosInput = {
    id?: number
    title: string
    description?: string | null
    date?: Date | string
    price: number
    highlights?: HighlightUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutPhotosInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutPhotosInput, ActivityUncheckedCreateWithoutPhotosInput>
  }

  export type ActivityUpsertWithoutPhotosInput = {
    update: XOR<ActivityUpdateWithoutPhotosInput, ActivityUncheckedUpdateWithoutPhotosInput>
    create: XOR<ActivityCreateWithoutPhotosInput, ActivityUncheckedCreateWithoutPhotosInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutPhotosInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutPhotosInput, ActivityUncheckedUpdateWithoutPhotosInput>
  }

  export type ActivityUpdateWithoutPhotosInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    highlights?: HighlightUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    highlights?: HighlightUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type TourPhotoCreateWithoutTourPackageInput = {
    url: string
  }

  export type TourPhotoUncheckedCreateWithoutTourPackageInput = {
    id?: number
    url: string
  }

  export type TourPhotoCreateOrConnectWithoutTourPackageInput = {
    where: TourPhotoWhereUniqueInput
    create: XOR<TourPhotoCreateWithoutTourPackageInput, TourPhotoUncheckedCreateWithoutTourPackageInput>
  }

  export type TourPhotoCreateManyTourPackageInputEnvelope = {
    data: TourPhotoCreateManyTourPackageInput | TourPhotoCreateManyTourPackageInput[]
  }

  export type TourHighlightCreateWithoutTourPackageInput = {
    text: string
  }

  export type TourHighlightUncheckedCreateWithoutTourPackageInput = {
    id?: number
    text: string
  }

  export type TourHighlightCreateOrConnectWithoutTourPackageInput = {
    where: TourHighlightWhereUniqueInput
    create: XOR<TourHighlightCreateWithoutTourPackageInput, TourHighlightUncheckedCreateWithoutTourPackageInput>
  }

  export type TourHighlightCreateManyTourPackageInputEnvelope = {
    data: TourHighlightCreateManyTourPackageInput | TourHighlightCreateManyTourPackageInput[]
  }

  export type TourPhotoUpsertWithWhereUniqueWithoutTourPackageInput = {
    where: TourPhotoWhereUniqueInput
    update: XOR<TourPhotoUpdateWithoutTourPackageInput, TourPhotoUncheckedUpdateWithoutTourPackageInput>
    create: XOR<TourPhotoCreateWithoutTourPackageInput, TourPhotoUncheckedCreateWithoutTourPackageInput>
  }

  export type TourPhotoUpdateWithWhereUniqueWithoutTourPackageInput = {
    where: TourPhotoWhereUniqueInput
    data: XOR<TourPhotoUpdateWithoutTourPackageInput, TourPhotoUncheckedUpdateWithoutTourPackageInput>
  }

  export type TourPhotoUpdateManyWithWhereWithoutTourPackageInput = {
    where: TourPhotoScalarWhereInput
    data: XOR<TourPhotoUpdateManyMutationInput, TourPhotoUncheckedUpdateManyWithoutTourPackageInput>
  }

  export type TourPhotoScalarWhereInput = {
    AND?: TourPhotoScalarWhereInput | TourPhotoScalarWhereInput[]
    OR?: TourPhotoScalarWhereInput[]
    NOT?: TourPhotoScalarWhereInput | TourPhotoScalarWhereInput[]
    id?: IntFilter<"TourPhoto"> | number
    url?: StringFilter<"TourPhoto"> | string
    tourPackageId?: IntFilter<"TourPhoto"> | number
  }

  export type TourHighlightUpsertWithWhereUniqueWithoutTourPackageInput = {
    where: TourHighlightWhereUniqueInput
    update: XOR<TourHighlightUpdateWithoutTourPackageInput, TourHighlightUncheckedUpdateWithoutTourPackageInput>
    create: XOR<TourHighlightCreateWithoutTourPackageInput, TourHighlightUncheckedCreateWithoutTourPackageInput>
  }

  export type TourHighlightUpdateWithWhereUniqueWithoutTourPackageInput = {
    where: TourHighlightWhereUniqueInput
    data: XOR<TourHighlightUpdateWithoutTourPackageInput, TourHighlightUncheckedUpdateWithoutTourPackageInput>
  }

  export type TourHighlightUpdateManyWithWhereWithoutTourPackageInput = {
    where: TourHighlightScalarWhereInput
    data: XOR<TourHighlightUpdateManyMutationInput, TourHighlightUncheckedUpdateManyWithoutTourPackageInput>
  }

  export type TourHighlightScalarWhereInput = {
    AND?: TourHighlightScalarWhereInput | TourHighlightScalarWhereInput[]
    OR?: TourHighlightScalarWhereInput[]
    NOT?: TourHighlightScalarWhereInput | TourHighlightScalarWhereInput[]
    id?: IntFilter<"TourHighlight"> | number
    text?: StringFilter<"TourHighlight"> | string
    tourPackageId?: IntFilter<"TourHighlight"> | number
  }

  export type TourPackageCreateWithoutPhotosInput = {
    title: string
    description?: string | null
    price: number
    peopleCount: number
    audienceType: string
    nightsCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    highlights?: TourHighlightCreateNestedManyWithoutTourPackageInput
  }

  export type TourPackageUncheckedCreateWithoutPhotosInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    peopleCount: number
    audienceType: string
    nightsCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    highlights?: TourHighlightUncheckedCreateNestedManyWithoutTourPackageInput
  }

  export type TourPackageCreateOrConnectWithoutPhotosInput = {
    where: TourPackageWhereUniqueInput
    create: XOR<TourPackageCreateWithoutPhotosInput, TourPackageUncheckedCreateWithoutPhotosInput>
  }

  export type TourPackageUpsertWithoutPhotosInput = {
    update: XOR<TourPackageUpdateWithoutPhotosInput, TourPackageUncheckedUpdateWithoutPhotosInput>
    create: XOR<TourPackageCreateWithoutPhotosInput, TourPackageUncheckedCreateWithoutPhotosInput>
    where?: TourPackageWhereInput
  }

  export type TourPackageUpdateToOneWithWhereWithoutPhotosInput = {
    where?: TourPackageWhereInput
    data: XOR<TourPackageUpdateWithoutPhotosInput, TourPackageUncheckedUpdateWithoutPhotosInput>
  }

  export type TourPackageUpdateWithoutPhotosInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    peopleCount?: IntFieldUpdateOperationsInput | number
    audienceType?: StringFieldUpdateOperationsInput | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: TourHighlightUpdateManyWithoutTourPackageNestedInput
  }

  export type TourPackageUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    peopleCount?: IntFieldUpdateOperationsInput | number
    audienceType?: StringFieldUpdateOperationsInput | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: TourHighlightUncheckedUpdateManyWithoutTourPackageNestedInput
  }

  export type TourPackageCreateWithoutHighlightsInput = {
    title: string
    description?: string | null
    price: number
    peopleCount: number
    audienceType: string
    nightsCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: TourPhotoCreateNestedManyWithoutTourPackageInput
  }

  export type TourPackageUncheckedCreateWithoutHighlightsInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    peopleCount: number
    audienceType: string
    nightsCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: TourPhotoUncheckedCreateNestedManyWithoutTourPackageInput
  }

  export type TourPackageCreateOrConnectWithoutHighlightsInput = {
    where: TourPackageWhereUniqueInput
    create: XOR<TourPackageCreateWithoutHighlightsInput, TourPackageUncheckedCreateWithoutHighlightsInput>
  }

  export type TourPackageUpsertWithoutHighlightsInput = {
    update: XOR<TourPackageUpdateWithoutHighlightsInput, TourPackageUncheckedUpdateWithoutHighlightsInput>
    create: XOR<TourPackageCreateWithoutHighlightsInput, TourPackageUncheckedCreateWithoutHighlightsInput>
    where?: TourPackageWhereInput
  }

  export type TourPackageUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: TourPackageWhereInput
    data: XOR<TourPackageUpdateWithoutHighlightsInput, TourPackageUncheckedUpdateWithoutHighlightsInput>
  }

  export type TourPackageUpdateWithoutHighlightsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    peopleCount?: IntFieldUpdateOperationsInput | number
    audienceType?: StringFieldUpdateOperationsInput | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: TourPhotoUpdateManyWithoutTourPackageNestedInput
  }

  export type TourPackageUncheckedUpdateWithoutHighlightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    peopleCount?: IntFieldUpdateOperationsInput | number
    audienceType?: StringFieldUpdateOperationsInput | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: TourPhotoUncheckedUpdateManyWithoutTourPackageNestedInput
  }

  export type RentACarCreateManyCarInput = {
    id?: number
    pickupLocation: string
    dropoffLocation: string
    pickupDate: Date | string
    dropoffDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentACarUpdateWithoutCarInput = {
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropoffLocation?: StringFieldUpdateOperationsInput | string
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dropoffDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentACarUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropoffLocation?: StringFieldUpdateOperationsInput | string
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dropoffDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentACarUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    pickupLocation?: StringFieldUpdateOperationsInput | string
    dropoffLocation?: StringFieldUpdateOperationsInput | string
    pickupDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dropoffDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityPhotoCreateManyActivityInput = {
    id?: number
    url: string
  }

  export type HighlightCreateManyActivityInput = {
    id?: number
    text: string
  }

  export type ActivityPhotoUpdateWithoutActivityInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityPhotoUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityPhotoUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightUpdateWithoutActivityInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type TourPhotoCreateManyTourPackageInput = {
    id?: number
    url: string
  }

  export type TourHighlightCreateManyTourPackageInput = {
    id?: number
    text: string
  }

  export type TourPhotoUpdateWithoutTourPackageInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TourPhotoUncheckedUpdateWithoutTourPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TourPhotoUncheckedUpdateManyWithoutTourPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TourHighlightUpdateWithoutTourPackageInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type TourHighlightUncheckedUpdateWithoutTourPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type TourHighlightUncheckedUpdateManyWithoutTourPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
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