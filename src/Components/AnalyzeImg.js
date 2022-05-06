import { useGetPicture } from '../Hooks/useGetPicture'
import { UploadPicture } from './UploadPicture'
import { AnalysisResults } from './AnalysisResults'
import styles from '../Styles/UploadPicture/analyzeImg.module.scss'

export function AnalyzeImg() {
	const { results, picture, loading, error, haveData, getPicture } = useGetPicture()

	return (
		<main className={styles.upload_main}>
			<h1>Upload a photo or image of your favorite food dish and see what happens...</h1>
			<p>
				let the MakeFit food analyzer generate and expose healthy recipe variants that match the
				analyzed image, while teaching the nutritional values that it includes.
			</p>
			<UploadPicture getPicture={getPicture} picture={picture}>
				<AnalysisResults data={results} haveData={haveData} loading={loading} error={error} />
			</UploadPicture>
		</main>
	)
}
