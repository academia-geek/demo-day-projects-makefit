export const fileUpload = async (file) => {
	const cloudUrl = 'https://api.cloudinary.com/v1_1/yessith/upload'

	const formData = new FormData()
	formData.append('upload_preset', 'estudiantes')
	formData.append('file', file)

	const response = await fetch(cloudUrl, {
		method: 'POST',
		body: formData,
	})

	const cloudResponse = await response.json()
	return cloudResponse.secure_url
}
