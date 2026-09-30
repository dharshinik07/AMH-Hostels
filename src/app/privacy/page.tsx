export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-sm text-gray-500">Aishwaraya Hostels</p>
            <p className="text-sm text-gray-500">Last Updated: 13-03-2026</p>
          </div>

          <p className="text-gray-700">
            Aishwaraya Hostels respects your privacy and is committed to protecting your personal
            information. This policy explains how we collect, use, and protect information when
            you use our website.
          </p>

          <ol className="list-decimal ml-5 space-y-4 text-gray-700">
            <li>
              <p className="font-semibold text-gray-900">Information We Collect</p>
              <p>
                When you interact with our website, we may collect personal information you
                voluntarily provide, including name, phone number, email address, hostel category
                preference, room and sharing preference, and food option preference. This information
                may be collected when submitting a booking request, submitting an enquiry form, or
                contacting us through the website.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">How We Use Your Information</p>
              <p>
                The information collected may be used to respond to enquiries, process accommodation
                requests, contact users regarding hostel availability, and improve our website and
                services. Your information will only be used for hostel-related communication.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Data Storage</p>
              <p>
                During the prototype or demonstration phase, some information may be stored locally
                within the website system. In the production environment, data may be securely stored
                in a database maintained by the hostel administration.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Data Sharing</p>
              <p>
                Aishwaraya Hostels does not sell, rent, or trade personal information. Information
                may only be shared with hostel management staff and authorized administrative
                personnel involved in accommodation processing.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Third-Party Services</p>
              <p>
                Our website may use third-party services including Google Maps for displaying hostel
                locations and WhatsApp for communication with hostel staff. These services operate
                under their own privacy policies.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Data Security</p>
              <p>
                We implement reasonable security practices to protect user information. However, no
                online system can guarantee absolute security and users should avoid sharing
                sensitive personal data unnecessarily.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">User Rights</p>
              <p>
                Users may request access to their stored information, correction of incorrect data,
                or deletion of submitted information. Requests can be made by contacting us.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Updates to Privacy Policy</p>
              <p>
                This Privacy Policy may be updated periodically. Any changes will be reflected on
                this page with the updated date.
              </p>
            </li>
            <li>
              <p className="font-semibold text-gray-900">Contact Us</p>
              <p>Aishwaraya Hostels, Tambaram, Chennai</p>
              <p>Email: aishwaryahostels@gmail.com</p>
              <p>Phone: +91 90434 56234</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
