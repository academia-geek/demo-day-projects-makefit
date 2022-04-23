import { RelatedRecipes } from './RelatedRecipes'
import { UploadPicture } from './UploadPicture'
import '../Styles/UploadPicture/styles.css'

export function AnalyzeImg() {
	return (
		<main>
			<h1>Upload a food picture and see what happens...</h1>
			<UploadPicture />
			<section>
				<h2>Nutrition profile of the average burger</h2>
				<span>Calories</span>
				<span>fat</span>
				<span>protein</span>
				<span>carbs</span>
			</section>
			<RelatedRecipes />
		</main>
	)
}
