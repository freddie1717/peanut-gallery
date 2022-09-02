const express = require('express')
const router = express.Router()
const reviewsController = require('../controllers/reviews') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, reviewsController.getReviews)
router.get('/newReview', ensureAuth, reviewsController.newReview)
router.put('/getPoster', reviewsController.getPoster)

router.get('/allReviews', ensureAuth, reviewsController.allReviews)

router.post('/createReview', reviewsController.createReview)

router.delete('/deleteReview', reviewsController.deleteReview)



module.exports = router