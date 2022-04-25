import { useGetPicture } from '../Hooks/useGetPicture'
import { UploadPicture } from './UploadPicture'
import { AnalysisResults } from './AnalysisResults'
import '../Styles/UploadPicture/styles.css'

export function AnalyzeImg() {
	const { results, picture, loading, error, haveData, getPicture } = useGetPicture()

	return (
		<main>
			<h1>Upload a food picture and see what happens...</h1>
			<UploadPicture getPicture={getPicture} picture={picture}>
				<AnalysisResults data={results} haveData={haveData} loading={loading} error={error} />
			</UploadPicture>
		</main>
	)
}
