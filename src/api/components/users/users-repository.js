const { User } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getUsers() {
  return User.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getUser(id) {
  return User.findById(id);
}

/**
 * Create new user
 * @param {string} name - Name
 * @param {string} email - Email
 * @param {string} password - Hashed password
 * @returns {Promise}
 */
async function createUser(name, email, password) {
  return User.create({
    name,
    email,
    password,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} name - Name
 * @param {string} email - Email
 * @returns {Promise}
 */
async function updateUser(id, name, email) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

/**
 * Check and match email with existing users
 *  @param {string} email - Email
 *  @returns {Promise}
 */

async function duplicateUser(email) {
  const users = await User.find({});

  // Checks if an element from getUser/User.find() has an email that matches
  // the email from the request
  const duplicate = users.some((user) => user.email === email);
  return duplicate;
}

/**
 *  Change User Password
 * @param {string} id - User ID
 * @param {string} password - Hashed password
 * @returns {Promise}
 */
async function changePassword(id, password) {
  return User.updateOne(
    { _id: id },
    {
      $set: {
        password,
      },
    }
  );
}

/**
 * Get user by id
 * @param {string} id - id
 * @returns {Promise}
 */
async function getUserById(id) {
  return User.findOne({ _id: id });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  duplicateUser,
  changePassword,
  getUserById,
};
