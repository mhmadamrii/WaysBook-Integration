const express = require('express')
const router = express.Router()
const { addBooks } = require('../controllers/books')
const { getProfile, updateProfile } = require('../controllers/profile')
const { register, login, checkAuth } = require('../controllers/auth')
const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

// Register & Login
router.post('/register', register)
router.post('/login', login)
router.get('/check-auth', auth, checkAuth);

// Book Route
router.post('/book', auth, uploadFile.fields([{name:"bookattachment", maxCount:1},{name:"thumbnail", maxCount:1},]), addBooks)

// Profile
router.patch('/profile', auth, uploadFile.single("image"), updateProfile)
router.get('/profile', auth, getProfile)

module.exports = router