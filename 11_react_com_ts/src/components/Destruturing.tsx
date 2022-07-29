interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
  // 8 - enum
  category: Category
}

export enum Category {
  JS = "Javascript",
  TS = "typesript",
  P = "python"
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        {tags.map(tag => (
          <span>#{tag}</span>
        ))}
      </div>
      categoria {category}
    </div>
  )
}

export default Destructuring