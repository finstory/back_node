const { findUserByEmail, createUser } = require("../services/userServices");
const { sendResponse, sendError } = require("../helpers/managerController");
const controller = {};

//GET ALL //
controller.usersGet = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await findUserByEmail(email);

    sendResponse(res, 200, result);
  } catch (error) {
    sendError(res, error);
  }
};

controller.usersPost = async (req, res) => {
  try {
    const { user } = req.body;
    console.log(user);
    const result = await createUser(user);
    sendResponse(res, 200, result);
  } catch (error) {
    sendError(res, error);
  }
};

// controller.userScrumGet = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await scrumGet(id);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(error.status || 404).json(error.payload || error.message);
//   }
// };

// // GET BY ID //
// controller.userById = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const result = await getById(id);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// //GET BY EMAIL//
// controller.userByEmail = async (req, res) => {
//   const email = req.params.email;
//   try {
//     const result = await getByEmail(email);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// controller.updatePasswordPut = async (req, res) => {
//   try {
//     const { email, password, new_password } = req.body;

//     const result = await changePassword(email, password, new_password);
//     sendResponse(res, 200, result);
//   } catch (error) {
//     sendError(res, error);
//   }
// };

// controller.userDelete = async (req, res) => {
//   try {
//     const { team_id, user_id } = req.body;
//     const result = await deleteUser(team_id, user_id, req.user_id_token);
//     res.status(200).json(result);
//   } catch (error) {
//     throw error;
//   }
// };

// controller.userPut = async (req, res) => {
//   try {
//     const { email, user } = req.body;
//     const result = await updateUser(email, user, req.user_id_token);
//     res.status(200).json(result);
//   } catch (error) {
//     throw error;
//   }
// };
module.exports = controller;
