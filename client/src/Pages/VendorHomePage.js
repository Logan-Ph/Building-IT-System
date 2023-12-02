import VendorNav from "../Components/VendorNav";
export default function CheckoutPage() {
  return (
    <>
      <section>
        {/* <!-- Vendor Profile and Nav section --> */}
        <VendorNav/>

        {/* <!-- Banner --> */}
        <div class="md:container mx-auto grid grid-cols-4 gap-4">
          <div class="col-span-4">
            <img
              class="object-fill h-full w-full"
              src={require("../Components/images/banner1.jpg")}
              alt=""
            />
          </div>
          <div class="md:col-span-2 col-span-4">
            <img
              class="object-fill h-full w-full"
              src={require("../Components/images/banner2.webp")}
              alt=""
            />
          </div>
          <div class="md:col-span-2 col-span-4">
            <img
              class="object-fill h-full w-full"
              src={require("../Components/images/banner3.jpeg")}
              alt=""
            />
          </div>
          <div class="col-span-4">
            <img
              class="object-fill h-full w-full"
              src={require("../Components/images/banner1.jpg")}
              alt=""
            />
          </div>
        </div>

      </section>
    </>
  );
}
