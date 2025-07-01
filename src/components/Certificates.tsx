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
      <h2 className="text-3xl font-bold mb-8 text-center text-theme-neutral-900 dark:text-white">
        My Certifications
      </h2>
      <div className="certification-items-container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="certification-item bg-gradient-to-br from-theme-yellow-50 to-theme-yellow-100 dark:bg-gradient-to-br dark:from-theme-yellow-900/10 dark:to-theme-yellow-900/10 border border-theme-yellow-200 dark:border-theme-yellow-700/30 rounded-xl shadow-md p-6 flex flex-col items-center transition-all hover:scale-105 hover:shadow-xl hover:shadow-theme-yellow-200/20 dark:hover:shadow-theme-yellow-800/20"
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
              <p className="cert-name text-lg font-semibold text-theme-neutral-900 dark:text-white">
                {cert.name}
              </p>
              <p className="cert-company text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                Issued by: {cert.company}
              </p>
              {cert.certificateLink && (
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 bg-gradient-to-r from-theme-yellow-600 to-theme-yellow-700 text-white rounded-lg hover:from-theme-yellow-700 hover:to-theme-yellow-800 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
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
