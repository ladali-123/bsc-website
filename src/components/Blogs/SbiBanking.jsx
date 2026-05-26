import { useMemo } from "react";
import sbi from "../../assets/sbi.png";

function BlogPage({ blogData }) {
  const html = useMemo(
    () => ({
      text1: blogData?.text1 || "",
      crux: blogData?.crux || "",
      hookText: blogData?.hookText || "",
      conclusion: blogData?.conclusion || "",
    }),
    [blogData]
  );

  return (
    <div className="w-full bg-[#f4f6fb] py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
        <div className="flex flex-col gap-6">
          {/* Title */}
          <div>
            <div className="text-sm text-red-600 font-semibold">
              {blogData?.date}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
              {blogData?.title}
            </h1>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={blogData?.image}
              alt={blogData?.title}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              {blogData?.description}
            </p>

            {Array.isArray(blogData?.tags) &&
              blogData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {blogData.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#f3f4f6] text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
          </div>
        </div>

        {/* Main Content */}
        {html.text1 && (
          <div
            className="mt-8 text-gray-800 text-base leading-8"
            dangerouslySetInnerHTML={{ __html: html.text1 }}
          />
        )}

        {/* Crux */}
        {html.crux && (
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: html.crux }}
          />
        )}

        {/* Hook */}
        {blogData?.hookTitle && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              {blogData.hookTitle}
            </h2>

            {html.hookText && (
              <div
                className="mt-4 text-gray-800"
                dangerouslySetInnerHTML={{ __html: html.hookText }}
              />
            )}
          </div>
        )}

        {/* Key Points */}
        {Array.isArray(blogData?.keyPoints) &&
          blogData.keyPoints.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900">
                Key Points
              </h3>

              <ul className="mt-4 space-y-3">
                {blogData.keyPoints.map((p, idx) => (
                  <li
                    key={idx}
                    className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-4 text-gray-800"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </ul>
            </div>
          )}

        {/* FAQs */}
        {Array.isArray(blogData?.faqs) &&
          blogData.faqs.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900">
                FAQs
              </h3>

              <div className="mt-4 space-y-4">
                {blogData.faqs.map((f, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl p-4"
                  >
                    <div className="font-semibold text-gray-900">
                      {f.question}
                    </div>

                    <div className="mt-2 text-gray-700">
                      {f.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Conclusion */}
        {html.conclusion && (
          <div
            className="mt-10"
            dangerouslySetInnerHTML={{ __html: html.conclusion }}
          />
        )}
      </div>
    </div>
  );
}

export default function SBIApprenticeBlog() {
  const blogData = {
    title:
      "SBI Apprentice Recruitment 2026 – 7,150 Vacancies, Apply Online, Stipend, Exam Date",

    description:
      "SBI has released the official notification for 7,150 Apprentice posts across India. Apply online from May 19 to June 8, 2026. Monthly stipend ₹15,000. Check eligibility, exam pattern, and selection process.",

    date: "2026-05-22",

    image: sbi,

    link: "/blog/sbi-apprentice-recruitment-2026",

    tags: [
      "SBI",
      "Apprentice",
      "Banking Jobs",
      "Government Jobs",
      "Recruitment 2026",
      "SBI Careers",
      "Apprenticeship",
      "Stipend",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        The <strong>State Bank of India (SBI)</strong> has released the mega recruitment notification for <strong>7,150 Apprentice positions</strong> across India under the Apprentices Act, 1961.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Online applications are officially open from <strong>May 19, 2026</strong> and the last date to apply is <strong>June 8, 2026</strong>.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Important Dates
      </h2>

      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li><strong>Application Start:</strong> May 19, 2026</li>
        <li><strong>Last Date:</strong> June 8, 2026</li>
        <li><strong>Exam Date:</strong> July 2026</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Eligibility Criteria
      </h2>

      <p style="line-height: 1.9;">
        <strong>Educational Qualification:</strong> Bachelor's degree in any discipline from a recognised university.
      </p>

      <p style="line-height: 1.9;">
        <strong>Age Limit:</strong> 20–28 years as of April 1, 2026.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Stipend & Engagement
      </h2>

      <p style="line-height: 1.9;">
        Selected candidates will receive a monthly stipend of <strong>₹15,000</strong> during the one-year training period.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Selection Process
      </h2>

      <ol style="padding-left: 1.2rem; line-height: 2;">
        <li>Online Written Examination</li>
        <li>Local Language Test</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Exam Pattern (Online Written Test)
      </h2>

      <div style="overflow-x:auto;">
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; background: #f9fafb; min-width: 700px;">

          <thead>
            <tr style="background: #e5e7eb;">

              <th style="border: 1px solid #d1d5db; padding: 14px; text-align: center;">
                Subject
              </th>

              <th style="border: 1px solid #d1d5db; padding: 14px; text-align: center;">
                Questions
              </th>

              <th style="border: 1px solid #d1d5db; padding: 14px; text-align: center;">
                Marks
              </th>

              <th style="border: 1px solid #d1d5db; padding: 14px; text-align: center;">
                Duration
              </th>

            </tr>
          </thead>

          <tbody>

            <tr>
              <td style="border: 1px solid #d1d5db; padding: 14px;">
                General/Financial Awareness
              </td>

              <td style="border: 1px solid #d1d5db; padding: 14px; text-align:center;">
                25
              </td>

              <td style="border: 1px solid #d1d5db; padding: 14px; text-align:center;">
                25
              </td>

              <td 
                rowspan="4"
                style="border: 1px solid #d1d5db; padding: 14px; text-align:center; vertical-align: middle;"
              >
                60 min
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #d1d5db; padding: 14px;">
                General English
              </td>

              <td style="border: 1px solid #d1d5db; padding: 14px; text-align:center;">
                25
              </td>

              <td style="border: 1px solid #d1d5db; padding: 14px; text-align:center;">
                25
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #d1d5db; padding: 14px;">
                Quantitative Aptitude
              </td>

              <td style="border: 1px solid #d1d5db; padding: 14px; text-align:center;">
                25
              </td>

              <td style="border: 1px solid #d1d5db; padding: 14px; text-align:center;">
                25
              </td>
            </tr>

            <tr>
              <td style="border: 1px solid #d1d5db; padding: 14px;">
                Reasoning & Computer Aptitude
              </td>

              <td style="border: 1px solid #d1d5db; padding: 14px; text-align:center;">
                25
              </td>

              <td style="border: 1px solid #d1d5db; padding: 14px; text-align:center;">
                25
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <p style="margin-top: 1rem;">
        <strong>Negative Marking:</strong> 1/4th mark deducted for every wrong answer.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        State-wise Vacancies & Local Language
      </h2>

      <p style="line-height: 1.9;">
        Candidates can apply for only one state and should know the local language of that state.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        How to Apply
      </h2>

      <ol style="padding-left: 1.2rem; line-height: 2;">
        <li>Visit SBI Careers portal</li>
        <li>Complete registration</li>
        <li>Upload required documents</li>
        <li>Pay application fee</li>
        <li>Submit the form</li>
      </ol>
    `,

    crux: `
      <div style="background:#f3f4f6; padding:1.5rem; border-left:4px solid #2563eb; border-radius:12px;">
        <p style="font-size:1.1rem; line-height:1.8; color:#374151;">
          SBI Apprentice Recruitment 2026 offers 7,150 vacancies with ₹15,000 monthly stipend and one-year apprenticeship training.
        </p>
      </div>
    `,

    hookTitle: "Why Apply for SBI Apprentice 2026?",

    hookText: `
      <p style="font-size:1.1rem; line-height:1.9; color:#374151;">
        SBI Apprentice provides practical banking exposure, certificate benefits, and experience useful for future banking examinations.
      </p>
    `,

    keyPoints: [
      "<strong>7,150 vacancies</strong> across India",
      "<strong>Monthly stipend:</strong> ₹15,000",
      "<strong>One-year apprenticeship</strong>",
      "<strong>Online written examination</strong>",
      "<strong>Local language test required</strong>",
    ],

    conclusion: `
      <div style="background:#f8fafc; padding:1.5rem; border-radius:16px;">
        <p style="font-size:1.1rem; line-height:1.9; color:#374151;">
          SBI Apprentice Recruitment 2026 is a strong opportunity for graduates seeking banking experience and preparation for future government banking jobs.
        </p>
      </div>
    `,

    faqs: [
      {
        question: "Is SBI Apprentice permanent?",
        answer:
          "No, it is a one-year apprenticeship training program.",
      },
      {
        question: "What is the stipend?",
        answer: "₹15,000 per month.",
      },
      {
        question: "Is there negative marking?",
        answer:
          "Yes, 1/4th mark will be deducted for wrong answers.",
      },
    ],
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}