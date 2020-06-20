import axios from 'axios'

export const getStackoverflow = async () => {
	const { data } = await axios.get(
		'https://api.stackexchange.com/2.2/users/5428936?site=stackoverflow'
	)
	return data
}

export const getSpotify = async () => {
	const { data } = await axios.get('/.netlify/functions/spotify/')
	return data.items[0]
}

export const getMyAnimeList = async () => {
	const { data } = await axios.get(
		'https://api.jikan.moe/v3/user/KieranO/animelist?order_by=last_updated&order_by2=rated&sort=descending'
	)
	return data.anime[0]
}
