import { Button, Form } from "react-bootstrap"
import { useField } from "../hooks"

const CreateNew = (props) => {
  
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
  
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
    }
    const handleReset = () => {
      content.onReset()
      author.onReset()
      info.onReset()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <Form.Group>
            <Form.Label>
                content
              </Form.Label>
              <Form.Control {...content}/>
              <Form.Label>
                author
              </Form.Label>
              <Form.Control {...author}/>
              <Form.Label>
                url for more info
              </Form.Label>
              <Form.Control {...info} />
  
            <Button variant="primary" type='submit'>create</Button>
            <Button variant="secondary" type='reset'>reset</Button>
          </Form.Group>
  
        </form>
      </div>
    )
  
  }
export default CreateNew