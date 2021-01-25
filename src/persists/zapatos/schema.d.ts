/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos (v3.3.0), and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 101 }

  type JSONSelectableFromSelectable<T> = { [K in keyof T]:
    Date extends T[K] ? Exclude<T[K], Date> | db.DateString :
    Date[] extends T[K] ? Exclude<T[K], Date[]> | db.DateString[] :
    T[K]
  };

  /* === schema: public === */

  /* --- enums --- */


  /* --- tables --- */

  export namespace events {
    export type Table = 'events';
    export interface Selectable {
      id: string;
      title: string;
      description: string;
      details: db.JSONValue;
      location_name: string;
      capacity: number;
      latitude: number | null;
      longitude: number | null;
      facebook_link: string | null;
      instagram_link: string | null;
      website_link: string | null;
    }
    export interface Whereable {
      id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      title?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      description?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      details?: db.JSONValue | db.Parameter<db.JSONValue> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, db.JSONValue | db.Parameter<db.JSONValue> | db.SQLFragment | db.ParentColumn>;
      location_name?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      capacity?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      latitude?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      longitude?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      facebook_link?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      instagram_link?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      website_link?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      title: string | db.Parameter<string> | db.SQLFragment;
      description: string | db.Parameter<string> | db.SQLFragment;
      details: db.JSONValue | db.Parameter<db.JSONValue> | db.SQLFragment;
      location_name: string | db.Parameter<string> | db.SQLFragment;
      capacity: number | db.Parameter<number> | db.SQLFragment;
      latitude?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      longitude?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment;
      facebook_link?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      instagram_link?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      website_link?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.DefaultType | db.SQLFragment>;
      title?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      description?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      details?: db.JSONValue | db.Parameter<db.JSONValue> | db.SQLFragment | db.SQLFragment<any, db.JSONValue | db.Parameter<db.JSONValue> | db.SQLFragment>;
      location_name?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      capacity?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      latitude?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      longitude?: number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | null | db.DefaultType | db.SQLFragment>;
      facebook_link?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      instagram_link?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      website_link?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
    }
    export interface JSONSelectable extends JSONSelectableFromSelectable<Selectable> { }
    export type UniqueIndex = 'events_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = db.GenericSQLExpression | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Table | Whereable | Column;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* === cross-table types === */

  export type Table = events.Table;
  export type Selectable = events.Selectable;
  export type Whereable = events.Whereable;
  export type Insertable = events.Insertable;
  export type Updatable = events.Updatable;
  export type UniqueIndex = events.UniqueIndex;
  export type Column = events.Column;
  export type AllTables = [events.Table];
  export type AllMaterializedViews = [];


  export type SelectableForTable<T extends Table> = {
    events: events.Selectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    events: events.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    events: events.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    events: events.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    events: events.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    events: events.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    events: events.SQL;
  }[T];

}
