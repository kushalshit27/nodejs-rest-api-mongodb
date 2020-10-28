const apiResponse = require("../helpers/apiResponse");

exports.register = (req, res) => {
		try {
			var userData = req.body;
			return apiResponse.successResponseWithData(res,"Registration Successful.", userData);		
		} catch (err) {
		
			return apiResponse.ErrorResponse(res, err);
		}
	};


exports.login = (req, res) => {
		try {
			var userData = req.body;
			return apiResponse.successResponseWithData(res,"Login Successful.", userData);
		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}
	};
