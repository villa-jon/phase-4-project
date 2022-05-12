import React, {useState} from "react";

function EditPage({ blog, onSubmit }) {
  const [current, setCurrent] = useState(blog)

  const twittish = () => {
    console.log(current)
    return (
      <div>
        <Form>
          <div className="test" key={current.id}>
            <Form.Header as="h5">{current.name}</Form.Header>
            <Form.Body>
              <input
                value={current.post}
                onChange={(w) => setCurrent(w.target.value)}
              ></input>
            </Form.Body>
          </div>
          <Button
            onClick={
              onSubmit()
            }
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  };

  return <div>{twittish()}</div>;
}

export default EditPage;
