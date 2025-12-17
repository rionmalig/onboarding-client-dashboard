import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ReviewJobsTableBody from "./review-jobs-table-body";

export default async function ReviewJobsTable() {
    return (
    <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Client</TableHead>
            <TableHead className="font-semibold">Website</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Source</TableHead>
            <TableHead className="font-semibold">Created</TableHead>
            <TableHead className="font-semibold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <ReviewJobsTableBody />
      </Table>
    </div>
  );
}
