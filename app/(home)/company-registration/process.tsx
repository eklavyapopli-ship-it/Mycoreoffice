import { Timeline } from "@/components/timeline";
import { montserrat } from "@/lib/fontS";

export function Process() {
  const data = [
    {
      title: "STAGE-1",
      content: (
        <div className="space-y-4">
          <p className="text-black text-sm md:text-base">
            Start your company registration journey with MyCoreOffice by filling
            out the initial registration form. This helps collect basic
            information about your business and founders.
          </p>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <h4 className="font-semibold text-black mb-2">
              Information required
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-black text-sm md:text-base">
              <li>Proposed company name</li>
              <li>Founder / director details</li>
              <li>Contact information</li>
              <li>Business activity / industry</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <h4 className="font-semibold text-black mb-2">What happens next</h4>
            <p className="text-black text-sm md:text-base">
              Once the form is submitted, your details are reviewed and you are
              guided to the next step of providing required documents for
              verification.
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "STAGE-2",
      content: (
        <div className="space-y-4">
          <p className="text-black text-sm md:text-base">
            After completing the form, you will need to submit the necessary
            documents required for company registration.
          </p>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <h4 className="font-semibold text-black mb-2">
              Documents usually required
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-black text-sm md:text-base">
              <li>Identity proof of directors (PAN / Aadhaar)</li>
              <li>Address proof of directors</li>
              <li>Registered office address proof</li>
              <li>Passport size photographs</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <h4 className="font-semibold text-black mb-2">Verification</h4>
            <p className="text-black text-sm md:text-base">
              The submitted documents are reviewed and verified to ensure they
              meet regulatory requirements for company registration.
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "STAGE-3",
      content: (
        <div className="space-y-4">
          <p className="text-black text-sm md:text-base">
            Once documents are verified, you proceed to complete the payment for
            the company registration process.
          </p>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <h4 className="font-semibold text-black mb-2">Fees may include</h4>
            <ul className="list-disc pl-5 space-y-1 text-black text-sm md:text-base">
              <li>Government registration fees</li>
              <li>Processing and filing charges</li>
              <li>Digital signature and compliance fees</li>
              <li>Documentation and administrative costs</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <h4 className="font-semibold text-black mb-2">Confirmation</h4>
            <p className="text-black text-sm md:text-base">
              After payment is completed, your application is officially
              processed for company registration.
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "STAGE-4",
      content: (
        <div className="space-y-4">
          <p className="text-black text-sm md:text-base">
            Your company registration is completed and official documents are
            issued confirming the formation of your company.
          </p>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <h4 className="font-semibold text-black mb-2">
              What you will receive
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-black text-sm md:text-base">
              <li>Certificate of Incorporation</li>
              <li>Company Identification Number (CIN)</li>
              <li>Official registration confirmation</li>
              <li>Basic company incorporation documents</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <h4 className="font-semibold text-black mb-2">You're ready</h4>
            <p className="text-black text-sm md:text-base">
              Once registration is complete, your company is legally recognized
              and ready to begin operations.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto pt-16 pb-6 px-4 md:px-8 lg:px-10 text-center">
        <h2
          className={`text-2xl md:text-4xl tracking-wide text-black ${montserrat.className}`}
        >
          Company Registration <span className="bg-linear-to-r from-cyan-200 via-blue-400 to-blue-400  text-transparent bg-clip-text">PROCESS</span>
        </h2>
        <p className="mt-3 text-black/70 text-sm md:text-base">
          A simple step-by-step guide to registering your company with
          MyCoreOffice.
        </p>
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}