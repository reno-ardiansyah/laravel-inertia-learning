import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import TableThree from "@/Components/Tables/TableThree";
import DashboardLayout from "@/Layouts/DashboardLayout";

const Permission = () => {
return (
  <DashboardLayout>
    <Breadcrumb pageName="Tables" />
    <div className="flex flex-col gap-10">
        <TableThree />
      </div>
  </DashboardLayout>
);
}

export default Permission;