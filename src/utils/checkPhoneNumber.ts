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

export async function checkPhoneNumber(phoneNumber: string) {
	// const key = '4d3dbfaff1bbb1105d571da1f439e42a';
	// const url = `//apilayer.net/api/validate?access_key=${key}&number=${phoneNumber}&country_code=RU`;
	const url = `https://api.apilayer.com/number_verification/validate?number=${phoneNumber}&country_code=RU`;
	const res = await fetch(url, {
		headers: { apikey: 'h251xrArhDXHnXRffbnqtDJwAA8Dhadf' }
	});
	const data: TNumverifyRes = await res.json();
	return data.valid;
}
