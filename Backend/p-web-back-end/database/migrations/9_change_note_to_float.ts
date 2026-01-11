import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'evaluates'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.float('note', 3, 1).alter()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.specificType('note', 'tinyint').alter()
    })
  }
}
