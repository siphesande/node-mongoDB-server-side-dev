dishRouter.route('/')

.get(Verify.verifyOrdinaryUser, function (req, res, next) {

   . . .

})

.post(Verify.verifyOrdinaryUser, function (req, res, next) {

   . . .

})

.delete(Verify.verifyOrdinaryUser, function (req, res, next) {

   . . .

});