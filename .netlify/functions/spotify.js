import axios from 'axios'
import qs from 'qs'

const RECENTLY_PLAYED_ENDPOINT =
	'https://api.spotify.com/v1/me/player/recently-played'
const REFRESH_ENDPOINT = 'https://accounts.spotify.com/api/token'

/** 
    Access tokens only last for 1hour so no use storing them in env
    Instead we just request new access_token when we need the spotify data
    as we don't want to store the tokens client side (allows users to view my data)
 */
exports.handler = async () =>
	axios({
		method: 'post',
		url: REFRESH_ENDPOINT,
		data: qs.stringify({
			grant_type: 'refresh_token',
			refresh_token: process.env.REFRESH_TOKEN,
		}),
		headers: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			Authorization: process.env.SPOTIFY_AUTHORIZATION,
		},
	})
		.then(response =>
			axios({
				method: 'get',
				url: RECENTLY_PLAYED_ENDPOINT,
				config: qs.stringify({ limit: 1 }),
				headers: {
					Authorization: `Bearer ${response.data.access_token}`,
				},
			})
				.then(response => {
					return { statusCode: 200, body: JSON.stringify(response.data) }
				})
				.catch(err => console.log('err', err))
		)
		.catch(err => console.log('err', err))
