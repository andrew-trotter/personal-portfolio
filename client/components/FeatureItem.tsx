interface Props {
  name: string
}

function FeatureItem({name}: Props) {
  return(
    <div className="feature-item">{name}</div>
  )
}

export default FeatureItem