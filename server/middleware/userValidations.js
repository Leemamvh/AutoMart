export const validateUser = (req, res, next) => {
  const { firstname , lastname,email,phoneNumber,password } = req.body;
  let errors = {};

  Object.entries(req.body).forEach(entry => {
    if (entry[1] === '') {
      errors = {
        ...errors,
        [entry[0]]: `${entry[0]} cannot be empty`
      }
    }
  })
  console.log(errors)

}