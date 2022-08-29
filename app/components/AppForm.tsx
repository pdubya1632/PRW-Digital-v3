import { Form, useActionData } from "remix";


export async function action({ request }) {
  //here, do something with the form data and return a value  
}

export default function Sign() {
  const data = useActionData(); //we access the return value of the action here

  return (
    <Form
      method="post"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <div>
        <label>
          Name: <input name="name" type="text" />
        </label>
      </div>
      <div>
        <label>
          Email: <input name="email" type="email" />
        </label>
      </div>
      <div>
        <label>
          Password: <input name="password" type="password" />
        </label>
      </div>
      <div>
        <label>
          Confirm Password: <input name="confirmPassword" type="password" />
        </label>
      </div>
      <button type="submit">Create Account</button>
    </Form>
  );
}