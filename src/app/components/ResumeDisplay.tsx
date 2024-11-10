"use client";

import { useEffect, useState } from "react";

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

interface ResumeDisplayProps {
  data: ResumeData | null;
}

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ data }) => {
  const [shareableLink, setShareableLink] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      // Generate a shareable link (encode data in URL)
      const encodedData = encodeURIComponent(JSON.stringify(data));
      const url = `${window.location.origin}?data=${encodedData}`;
      setShareableLink(url);
    }
  }, [data]);

  const handleDownload = () => {
    if (!data) return;

    const content = `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Education: ${data.education}
      Experience: ${data.experience}
      Skills: ${data.skills}
    `;
    const blob = new Blob([content], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Resume.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyLink = () => {
    if (shareableLink) {
      navigator.clipboard.writeText(shareableLink).then(() => {
        setCopySuccess("Link copied!");
        setTimeout(() => setCopySuccess(null), 2000); // Clear message after 2 seconds
      });
    }
  };

  if (!data) return null;

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-2">Editable Resume</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Education:</strong> {data.education}</p>
      <p><strong>Experience:</strong> {data.experience}</p>
      <p><strong>Skills:</strong> {data.skills}</p>

      {shareableLink && (
        <div className="mt-4">
          <h3 className="font-bold">Shareable Link:</h3>
          <button
            onClick={handleCopyLink}
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2"
          >
            Copy Shareable Link
          </button>
          {copySuccess && <span className="text-green-600 ml-2">{copySuccess}</span>}
        </div>
      )}

      <button onClick={handleDownload} className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
        Download as PDF
      </button>
    </div>
  );
};

export default ResumeDisplay;
