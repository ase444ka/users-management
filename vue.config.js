const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: isDev ? '/' : '/users-management/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Система управления пользователями',
    },
  },
}