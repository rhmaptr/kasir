import { sql } from 'drizzle-orm';
import { boolean, integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const transaksi = pgTable('transaksi', {
    transaksi_id: varchar('transaksi_id', {length: 50}).primaryKey(),
    petugas: integer('petugas').references(()=> petugas.nama, {onUpdate: 'cascade', onDelete: 'cascade'}),
    tanggal: timestamp('tanggal', {withTimezone: true}).default(sql`now()`),
    total: integer('total').default(0),
})

export const petugas = pgTable('petugas', {
    petugas_id: serial('petugas_id').primaryKey(),
    hak_akses: varchar('hak_akses', {length: 10}),
    nama: varchar('nama', {length: 25}),
    kata_sandi: varchar('kata_sandi', {length: 50}),
    no_hp: varchar('no_hp', {length: 20}),
})