import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Evaluate from '#models/evaluate'
import Book from '#models/book'
import User from '#models/user'
import Comment from '#models/comment'

export default class extends BaseSeeder {
  public async run() {
    const users = await User.all()
    const books = await Book.all()
    const comments = await Comment.all()

    const findComment = (bookId: number, userId: number) =>
      comments.find((comment) => comment.bookId === bookId && comment.userId === userId)?.comment ??
      null

    await Evaluate.createMany([
      {
        note: 5,
        bookId: books[0].id, // Le Petit Prince
        userId: users[0].id, // jean_dupont
        comment: findComment(books[0].id, users[0].id),
      },
      {
        note: 1,
        bookId: books[1].id, // 1984
        userId: users[2].id, // marie_martin
        comment: findComment(books[1].id, users[2].id),
      },
      {
        note: 3,
        bookId: books[2].id, // L'Étranger
        userId: users[3].id, // paul_bernard
        comment: findComment(books[2].id, users[3].id),
      },
      {
        note: 0,
        bookId: books[3].id, // Harry Potter
        userId: users[4].id, // sophie_dubois
        comment: findComment(books[3].id, users[4].id),
      },
      {
        note: 2,
        bookId: books[4].id, // Le Seigneur des Anneaux
        userId: users[1].id, // jean_dupont (même user que users[0] ? ici users[1] pour varier)
        comment: findComment(books[4].id, users[1].id),
      },
      {
        note: 4,
        bookId: books[5].id, // Sapiens
        userId: users[2].id, // marie_martin
        comment: findComment(books[5].id, users[2].id),
      },
      {
        note: 3,
        bookId: books[0].id, // Le Petit Prince
        userId: users[3].id, // paul_bernard
        comment: findComment(books[0].id, users[3].id),
      },
      {
        note: 1,
        bookId: books[1].id, // 1984
        userId: users[4].id, // sophie_dubois
        comment: findComment(books[1].id, users[4].id),
      },
      {
        note: 4,
        bookId: books[2].id, // L'Étranger
        userId: users[1].id, // jean_dupont
        comment: findComment(books[2].id, users[1].id),
      },
      {
        note: 2,
        bookId: books[3].id, // Harry Potter
        userId: users[2].id, // marie_martin
        comment: findComment(books[3].id, users[2].id),
      },
      {
        note: 1,
        bookId: books[4].id, // Le Seigneur des Anneaux
        userId: users[3].id, // paul_bernard
        comment: findComment(books[4].id, users[3].id),
      },
      {
        note: 5,
        bookId: books[5].id, // Sapiens
        userId: users[4].id, // sophie_dubois
        comment: findComment(books[5].id, users[4].id),
      },
      {
        note: 0,
        bookId: books[0].id, // Le Petit Prince
        userId: users[2].id, // marie_martin
        comment: findComment(books[0].id, users[2].id),
      },
      {
        note: 3,
        bookId: books[1].id, // 1984
        userId: users[3].id, // paul_bernard
        comment: findComment(books[1].id, users[3].id),
      },
      {
        note: 2,
        bookId: books[4].id, // Le Seigneur des Anneaux
        userId: users[4].id, // sophie_dubois
        comment: findComment(books[4].id, users[4].id),
      },
    ])
  }
}
