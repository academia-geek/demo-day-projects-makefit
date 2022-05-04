import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import styles from '../Styles/Details/details.module.scss'

export function TypeOfDiet({ diet, validate }) {
	return (
		<div className={`${styles.diet_item} ${!validate ? styles.red : null}  `}>
			{validate ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
			<span>{diet}</span>
		</div>
	)
}
