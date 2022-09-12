import type { ActionFunction } from '@remix-run/node'
import { makeDomainFunction } from 'remix-domains'
import { Form, formAction } from 'remix-forms'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  message: z.string().min(1),
})

const mutation = makeDomainFunction(schema)(async (values) => (
  await saveMyValues(values) /* or anything else */
))

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: '/',
  })

export default function () {
  return (
    <main className="grid sm:grid-cols-1 md:grid-cols-3 p-7 gap-4">
      <div className="md:col-span-2">
        <h2 className="text-4xl">
          Let's work together! I'd love to hear about your project and see how I can help.
        </h2>
      </div>
      <div>
        <Form schema={schema} />  
      </div>
    </main>
  )
}
