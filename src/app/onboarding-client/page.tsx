import PageLabel from "./_components/page-label";
import ReviewJobsTable from "./_components/review-jobs-table";
import SearchFilter from "./_components/search-filter";


const OnboardingClientPage = () => {
  return (
    <div className="space-y-6">
      <PageLabel />
      <SearchFilter />
      <ReviewJobsTable />
    </div>
  )
}

export default OnboardingClientPage;