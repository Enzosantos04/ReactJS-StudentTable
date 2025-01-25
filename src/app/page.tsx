import { Table } from "@/components/table";
import { students } from "@/data/data";

export default function page() {
  return (
    <div className="">
      <Table student={students} />
    </div>
  );
}
