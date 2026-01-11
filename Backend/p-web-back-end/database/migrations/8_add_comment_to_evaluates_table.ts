import { BaseSchema } from '@adonisjs/lucid/schema'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSchema {
  protected tableName = 'evaluates'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('comment').nullable()
    })

    await db.rawQuery(`
      UPDATE evaluates
      SET comment = (
        SELECT comments.comment
        FROM comments
        WHERE comments.book_id = evaluates.book_id
          AND comments.user_id = evaluates.user_id
        LIMIT 1
      )
      WHERE comment IS NULL
    `)
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('comment')
    })
  }
}
