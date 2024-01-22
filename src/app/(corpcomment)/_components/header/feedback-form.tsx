export default function FeedbackForm() {
  return (
    <form className="">
      <label htmlFor="feedback" className="text-slate-900">
        Feedback
      </label>
      <textarea
        className="input text-slate-900 w-full h-16 resize-none p-4"
        placeholder="Enter Feedback..."
        id="feedback"
        name="feedback"
        spellCheck="false"
      />
      <div className="flex justify-between pb-10">
        <p>150 words</p>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}
