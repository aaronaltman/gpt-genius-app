import { onClickSortCompanies } from "../_actions";

export default function HashtagListButton({ theCompanyName }: any) {
  // Fetch unique company names with count of comments

  return (
    <form action={onClickSortCompanies}>
      <input
        type="hidden"
        name="companyName"
        value={theCompanyName.companyName}
      />
      <button className="btn btn-ghost bg-accent hover:scale-105 hover:bg-white">
        #{theCompanyName.companyName}
      </button>
    </form>
  );
}
