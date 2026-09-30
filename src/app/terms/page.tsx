export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Use</h1>
            <p className="text-sm text-gray-500">Aishwaraya Hostels Website</p>
            <p className="text-sm text-gray-500">Last Updated: 13-03-2026</p>
          </div>

          <p className="text-gray-700">
            Welcome to the website of Aishwaraya Hostels. By accessing or using our website
            and services, you agree to comply with the following Terms of Use. If you do not
            agree with these terms, please discontinue using our website.
          </p>

          <ol className="list-decimal ml-5 space-y-4 text-gray-700">
            <li>
              <p className="font-semibold text-gray-900">About Aishwaraya Hostels</p>
              <p>
                Aishwaraya Hostels provides paying guest (PG) accommodation services for students,
                working professionals, and job seekers in Chennai through multiple hostel branches.
              </p>
              <p className="mt-2">
                This website is intended to provide information about hostel facilities and
                amenities, allow users to submit enquiries or booking requests, and provide
                contact and branch location information. Submitting a request on the website
                does not guarantee accommodation until confirmed by the hostel management.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Eligibility</p>
              <p>
                By using this website, you confirm that you are at least 18 years old, or you are
                using the website with the consent of a parent or guardian. Aishwaraya Hostels
                reserves the right to accept or decline accommodation requests based on
                availability and hostel policies.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Booking Requests</p>
              <p>
                The website allows users to submit booking or enquiry requests. Submitting a request
                does not create a legally binding accommodation agreement. Accommodation is confirmed
                only after approval by hostel management. Our team may contact you by phone or
                WhatsApp to confirm your details. Prices are not displayed on the website and will
                be communicated directly by the hostel management.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">User Responsibilities</p>
              <p>
                Users agree to provide accurate and truthful information, not misuse the enquiry or
                booking system, and not attempt to access restricted areas of the website.
                Aishwaraya Hostels may restrict access to users who misuse the platform.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Intellectual Property</p>
              <p>
                All website content including logos, images, text, design elements, layout, and
                interface are the property of Aishwaraya Hostels and may not be copied or reused
                without permission.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Limitation of Liability</p>
              <p>
                Aishwaraya Hostels will not be liable for temporary website downtime, errors or
                omissions in website information, or booking requests that do not result in
                confirmed accommodation. Accommodation agreements are handled directly between the
                tenant and hostel management.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Third-Party Services</p>
              <p>
                The website may integrate third-party services including Google Maps and WhatsApp.
                These services operate under their own policies and Aishwaraya Hostels is not
                responsible for their practices.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Changes to Terms</p>
              <p>
                We may update these Terms of Use periodically. Updates will be posted on this page
                with the updated effective date. Your continued use of the website indicates
                acceptance of the revised terms.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Contact Information</p>
              <p>
                Aishwaraya Hostels, Tambaram, Chennai, Tamil Nadu
              </p>
              <p>Email: aishwaryahostels@gmail.com</p>
              <p>Phone: +91 90434 56234</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
