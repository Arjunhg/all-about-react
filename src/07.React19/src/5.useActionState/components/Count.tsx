import { useActionState } from 'react';

async function submitFeedback(prevState:any, formData:any) {
  const feedback = formData.get('feedback');
  // Simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return `Submitted: ${feedback}`;
}

export default function FeedbackForm() {
  const [state, formAction, isPending] = useActionState(submitFeedback, '');

  return (
    <form action={formAction}>
      <textarea name="feedback" placeholder="Your feedback..." required />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
      {state && !isPending && <p>{state}</p>}
    </form>
  );
}
