var axios  = require('axios');

var formID = "5c07fbc90097d44d9c13ec28";
var url = `https://api.netlify.com/api/v1/forms/${formID}/submissions/?access_token=${process.env.API_AUTH}`;

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        resolve({'submissions': response.data});
      })
      .catch((error) => {
        reject(error);
      });
  })
}
