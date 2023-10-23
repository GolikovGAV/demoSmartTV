type TNumverifyRes = {
	valid: boolean;
	number: string;
	local_format: string;
	international_format: string;
	country_prefix: string;
	country_code: string;
	country_name: string;
	location: string;
	carrier: string;
	line_type: string;
};

export function checkPhoneNumber(phoneNumber: string) {
	const url = `https://api.apilayer.com/number_verification/validate?number=${phoneNumber}&country_code=RU`;
	return fetch(url, {
		headers: { apikey: 'h251xrArhDXHnXRffbnqtDJwAA8Dhadf' }
	})
		.then((res) => {
			return res.json();
		})
		.then((res: TNumverifyRes) => {
			return res.valid;
		});
}
