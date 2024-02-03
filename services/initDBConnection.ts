import { exit } from 'process'
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  database: 'diary',
  username: 'admin',
  password: 'DATABASE_PASSWORD',
  host: 'api.spo-diary.ru',
  port: 5432,
  dialect: 'postgres'
})

try {
  await sequelize.authenticate()
  console.log('Database: Connection succefully!')
} catch (err) {
  console.error('Ошибка подключения к Базе Данных: ', err)
  exit()
}
