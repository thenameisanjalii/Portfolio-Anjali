import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import certificationsData from "../data/certifications.json";

const cld = new Cloudinary({
  cloud: {
    //cloudName: "do9clx011", // Your cloud name
    cloudName: "dtrbp120h", // Your cloud name
  },
});

interface Certification {
  id: string | number;
  name: string;
  company: string;
  cloudinaryPublicId: string;
  companyLogoPublicId?: string;
  certificateLink?: string; // Add this field
}

interface RecentProjectsProps {
  id?: string;
}

const Certifications: React.FC<RecentProjectsProps> = ({ id }) => {
  const certifications = certificationsData as Certification[];

  return (
    <div
      id={id}
      className="certifications-list min-h-screen px-4 py-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        My Certifications
      </h2>
      <div className="certification-items-container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="certification-item bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center transition-all hover:scale-105 hover:shadow-xl"
          >
            {cert.companyLogoPublicId && (
              <div className="company-logo mb-4">
                <AdvancedImage
                  cldImg={cld
                    .image(cert.companyLogoPublicId)
                    .resize(fill().width(250).height(80))
                    .format("auto")
                    .quality("auto")}
                  alt={`${cert.company} Logo`}
                  className="rounded-[20px] object-contain w-[150px] p-2 border border-gray-200 dark:border-gray-700"
                />
              </div>
            )}

            <div className="cert-image mb-4">
              <AdvancedImage
                cldImg={cld
                  .image(cert.cloudinaryPublicId)
                  .resize(fill().width(200))
                  .format("auto")
                  .quality("auto")}
                alt={`${cert.company} ${cert.name} Certificate`}
                className="rounded-lg border border-gray-200 dark:border-gray-700"
              />
            </div>

            <div className="cert-details text-center">
              <p className="cert-name text-lg font-semibold text-gray-900 dark:text-gray-100">
                {cert.name}
              </p>
              <p className="cert-company text-sm text-gray-600 dark:text-gray-400">
                Issued by: {cert.company}
              </p>
              {cert.certificateLink && (
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
