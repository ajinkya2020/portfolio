function TitleComponent(props: { title: string }) {
  return (
    <div className="font-bold text-xs text-yellow-600">{props.title}</div>
  )
}

export default TitleComponent