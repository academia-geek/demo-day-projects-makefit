import { useGetPicture } from '../Hooks/useGetPicture'

export function UploadPicture() {
	const { picture, getPicture } = useGetPicture()
	return (
		<section className='upload'>
			<div className='wrapper'>
				<div className='file-preview'>
					<svg viewBox='0 0 1000 1000'>
						<path d='M745,353c-5.6,0-11.3,0.2-17.2,0.7C687.4,237.3,577.8,157,451,157c-162.1,0-294,131.9-294,294c0,2.1,0,4.1,0,6.2C72.6,479,10,555.8,10,647c0,108.1,87.9,196,196,196h245V618.3l-63.4,63.4c-9.6,9.6-22.1,14.4-34.6,14.4s-25.1-4.8-34.6-14.4c-19.2-19.2-19.2-50.1,0-69.3l147-147c4.6-4.6,9.9-8.1,16-10.6c12-4.9,25.5-4.9,37.4,0c6,2.5,11.4,6.1,16,10.6l147,147c19.2,19.2,19.2,50.1,0,69.3c-9.6,9.6-22.1,14.4-34.6,14.4s-25.1-4.8-34.6-14.4L549,618.3V843h196c135.1,0,245-109.9,245-245S880.1,353,745,353z'></path>
					</svg>
					<span className='help-text'>Choose file or drag &amp; drop here</span>
				</div>
			</div>
			<input onChange={getPicture} type='file' accept='image/*' className='file-input'></input>
			<img src={picture} alt='' />
		</section>
	)
}
