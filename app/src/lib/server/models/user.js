/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} [password]
 * @property {string} name
 * @property {string} image
 * @property {string} token
 * @property {string} username
 */

/**
 * @param {Object} user
 * @param {string} user.email
 * @param {string} user.password
 * @returns {Promise<User>}
*/
async function getUser({ email, password }) {
  return {
    id: '1',
    email,
    name: 'Test User',
    image: 'https://avatars.githubusercontent.com/u/1?v=4',
    token: "token",
    username: "testuser"
  };
}