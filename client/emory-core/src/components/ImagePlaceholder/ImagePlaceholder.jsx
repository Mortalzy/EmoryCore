import "./ImagePlaceholder.css"
import {X} from 'lucide-react'

const ImagePlaceholder = (props) => {
    const {
        productName
    } = props

    return (
        <div className="img-placeholder">
            <X className="img-placeholder__icon"/>
        </div>
    )
}

export default ImagePlaceholder