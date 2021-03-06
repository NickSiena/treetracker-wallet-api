const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const assert = require("assert");
const TrustModel = require('../models/Trust');
const expect = require("expect-runtime");
const helper = require("./utils");
const WalletModel = require("../models/Wallet");
const JWTModel = require("../services/JWTService");
const TokenModel = require("../models/Token");


// Routes that require logged in status

// router.get('/tree',
//   [
//     check('limit', 'Invalid limit number').optional().isNumeric({ min: 1, max: 1000 }),
//     check('wallet', 'Invalid wallet name').optional().isAlphanumeric(),
//   ],
//   authController.verifyJWT,
//   authController.checkAccess('list_trees'),
//   userController.getTrees,
//   (req, res) => res.status(200).json(res.locals.trees));

// router.get('/account',
//   authController.verifyJWT,
//   authController.checkAccess('accounts'),
//   userController.getAccounts,
//   (req, res) => res.status(200).json(res.locals.accounts));

// router.post('/account',
//   [
//     check('wallet', 'Invalid wallet name').isAlphanumeric()
//   ],
//   authController.verifyJWT,
//   authController.checkAccess('manage_accounts'),
//   userController.addAccount,
//   (_, res) => {
//     assert(res.locals);
//     assert(res.locals.response);
//     res.status(200).json(res.locals.response);
//   });

// router.post('/transfer',
//   [
//     check('tokens[*].*').isUUID(),
//     check('sender_wallet', 'Invalid Sender wallet name').isAlphanumeric(),
//     check('receiver_wallet', 'Invalid Reciever wallet name').isAlphanumeric()
//   ],
//   authController.verifyJWT,
//   authController.checkAccess('manage_accounts'),
//   userController.transfer,
//   (_, res) => {
//     assert(res.locals);
//     assert(res.locals.response);
//     res.status(200).json(res.locals.response);
//   });

// router.post('/send',
// [
//   check('tokens[*].*').isUUID(),
//   check('receiver_wallet', 'Invalid Receiver wallet name').isAlphanumeric(),
// ],
//   authController.verifyJWT,
//   authController.checkAccess('manage_accounts'),
//   userController.send,
//   (_, res) => {
//     assert(res.locals);
//     assert(res.locals.response);
//     res.status(200).json(res.locals.response);
//   });

// router.post('/transfer/bundle',
//   [
//     check('bundle_size').isNumeric(),
//     check('sender_wallet', 'Invalid Sender wallet name').isAlphanumeric(),
//     check('receiver_wallet', 'Invalid Reciever wallet name').isAlphanumeric()
//   ],
//   authController.verifyJWT,
//   authController.checkAccess('manage_accounts'),
//   userController.transferBundle,
//   (_, res) => {
//     assert(res.locals);
//     assert(res.locals.response);
//     res.status(200).json(res.locals.response);
//   });

// router.get('/history',
//   [
//     check('token').isUUID()
//   ],
//   authController.verifyJWT,
//   authController.checkAccess('manage_accounts'),
//   userController.history,
//   (_, res) => {
//     assert(res.locals);
//     assert(res.locals.response);
//     res.status(200).json(res.locals.response);
//   });



module.exports = router;
