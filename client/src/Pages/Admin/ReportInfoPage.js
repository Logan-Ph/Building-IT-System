import "../../css/mangeorder.css";
import ReportInfo from "../../Components/ReportInfo";
import CustomerCard from "../../Components/ProfileCard/CustomerCard";
import VendorCard from "../../Components/ProfileCard/VendorCard";
import ShipperCard from "../../Components/ProfileCard/ShipperCard";

export default function ReportInfoPage() {
  return (
    <>
      <section class="bg-gray-200">
        <div class="container mx-auto p-5">
          <h1 class="m-5 text-3xl font-light text-center">
            Account Information
          </h1>
          {/* <!-- Customer --> */}
          <CustomerCard />
          {/* <!-- Vendor --> */}
          <VendorCard />
          {/* <!-- Shipper --> */}
          <ShipperCard />
          {/* Report Section */}
          <ReportInfo />
        </div>
      </section>
    </>
  );
}
