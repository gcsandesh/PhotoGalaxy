const validatePassword = (password) => {
  if (!password) {
    return { message: "Password is required!" }
  }

  if (password.length < 8) {
    return { message: "Password must be at least 8 characters long!" }
  }

  if (password.length > 50) {
    return { message: "Password must be less than 50 characters long!" }
  }

  if (/\s+/.test(password)) {
    return { message: "Password cannot contain white spaces!" }
  }
}

module.exports = validatePassword
