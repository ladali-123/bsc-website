import { useMemo } from "react";
import ibpss from "../../assets/ibpss.png";

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
          {/* Title + Date on top */}
          <div>
            <div className="text-sm text-red-600 font-semibold">{blogData?.date}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
              {blogData?.title}
            </h1>
          </div>

          {/* Full image below */}
          <div className="w-full">
            {blogData?.image && (
              <img
                src={blogData?.image}
                alt={blogData?.title}
                className="w-full h-auto rounded-2xl"
              />
            )}
          </div>

          {/* Description + Tags below image */}
          <div>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">{blogData?.description}</p>

            {Array.isArray(blogData?.tags) && blogData.tags.length > 0 && (
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

        {html.text1 && (
          <div
            className="mt-8 text-gray-800 text-base leading-8"
            dangerouslySetInnerHTML={{ __html: html.text1 }}
          />
        )}

        {html.crux && (
          <div className="mt-8" dangerouslySetInnerHTML={{ __html: html.crux }} />
        )}

        {blogData?.hookTitle && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{blogData.hookTitle}</h2>
            {html.hookText && (
              <div
                className="mt-4 text-gray-800"
                dangerouslySetInnerHTML={{ __html: html.hookText }}
              />
            )}
          </div>
        )}

        {Array.isArray(blogData?.keyPoints) && blogData.keyPoints.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900">Key Points</h3>
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

        {Array.isArray(blogData?.faqs) && blogData.faqs.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900">FAQs</h3>
            <div className="mt-4 space-y-4">
              {blogData.faqs.map((f, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-4">
                  <div className="font-semibold text-gray-900">{f.question}</div>
                  <div className="mt-2 text-gray-700">{f.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {html.conclusion && (
          <div className="mt-10" dangerouslySetInnerHTML={{ __html: html.conclusion }} />
        )}
      </div>
    </div>
  );
}

export default function IBPSPO2026Blog() {
  const blogData = {
    title: "IBPS PO 2026 Notification Out: Apply Online for 6,715 Vacancies, Check Exam Date",

    description:
      "IBPS PO Notification 2026 has been released for a total of 6,715 posts. Check IBPS PO 2026 Important Dates, Eligibility, Apply Online Link, Exam Date, Salary and Selection Process — only on BSC Academy Patna.",

    date: "2026-07-01",

    image: ibpss,

    link: "/blog/ibps-po-2026-notification-bsc-academy-patna",

    tags: [
      "IBPS PO 2026",
      "Bank PO Exam",
      "Banking Coaching",
      "IBPS Notification",
      "Government Exams",
      "BSC Academy",
      "Patna",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        The Institute of Banking Personnel Selection (IBPS) has officially released the <strong>IBPS PO Notification 2026</strong> for recruitment of Probationary Officer (PO) / Management Trainee (MT) posts across Public Sector Banks in India. A total of <strong>6,715 vacancies</strong> have been announced this year, making it one of the biggest banking recruitment drives of the season.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        The Online Application link has also been activated on the official IBPS website. If you're planning to become a Bank PO, this blog by BSC Academy Patna breaks down everything you need to know about IBPS PO 2026 in simple terms.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">IBPS PO Notification 2026 Overview</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Particulars</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Details</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Conducting Body</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Institute of Banking Personnel Selection (IBPS)</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Post Name</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Probationary Officer (PO) / Management Trainee (MT)</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Exam Name</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">CRP PO/MT-XVI</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Total Vacancies</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">6,715</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Notification Date</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">June 30, 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Registration Starts</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">July 1, 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Last Date to Apply</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">July 21, 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Application Mode</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Online</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Selection Process</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Prelims, Mains, Interview</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Official Website</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">ibps.in</td></tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">IBPS PO Important Dates 2026</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Event</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Date</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Notification Released</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">June 30, 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Apply Online Begins</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">July 1, 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Last Date to Apply Online</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">July 21, 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Last Date for Fee Payment</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">July 21, 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Pre-Examination Training</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">August 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Prelims Admit Card</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">August 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Prelims Exam</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">22 & 23 August 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Prelims Result</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">September 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Mains Exam</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">October 4, 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Mains Result</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">October 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Interview</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">November 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Final Allotment</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">January 2027</td></tr>
        </tbody>
      </table>
      <p style="font-size: 0.95rem; color: #6b7280; margin-bottom: 1.5rem;"><em>Note: The dates above are based on the expected/tentative schedule. Always cross-check the final dates on the official notification at ibps.in.</em></p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">IBPS PO Vacancy 2026</h2>
      <p>A total of 6,715 posts will be filled across several Public Sector Banks, including:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Bank of Baroda</li>
        <li>Bank of India</li>
        <li>Bank of Maharashtra</li>
        <li>Canara Bank</li>
        <li>Central Bank of India</li>
        <li>Indian Bank</li>
        <li>Indian Overseas Bank</li>
        <li>Punjab National Bank</li>
        <li>Punjab & Sind Bank</li>
        <li>UCO Bank</li>
        <li>Union Bank of India</li>
      </ul>
      <p>For the exact bank-wise and category-wise vacancy breakup, refer to the official notification.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">IBPS PO Eligibility 2026</h2>
      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Educational Qualification</h3>
      <p>Graduation in any discipline from a recognised university. Final-year students who do not hold a degree by the specified date will not be considered eligible.</p>
      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Age Limit</h3>
      <p>Minimum Age: 20 years &nbsp;|&nbsp; Maximum Age: 30 years. Age relaxation is applicable to reserved category candidates as per government norms.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">IBPS PO Apply Online 2026</h2>
      <p>The online application process began on July 1, 2026. Here's the step-by-step process:</p>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Visit the official IBPS website.</li>
        <li>Click on the CRP PO/MT-XVI recruitment link.</li>
        <li>Complete the online registration.</li>
        <li>Verify registration via OTP/Email.</li>
        <li>Fill out the application form carefully.</li>
        <li>Upload photograph, signature, thumb impression and handwritten declaration.</li>
        <li>Pay the application fee.</li>
        <li>Submit the form and download the confirmation page for future reference.</li>
      </ol>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Application Fee</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Category</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Fee</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">SC/ST/PwBD</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">₹175</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General/OBC/EWS</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">₹850</td></tr>
        </tbody>
      </table>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Documents Required</h3>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Passport-size photograph</li>
        <li>Signature</li>
        <li>Left thumb impression</li>
        <li>Handwritten declaration</li>
        <li>Graduation certificate/marksheet</li>
        <li>Valid ID proof</li>
        <li>Category certificate (if applicable)</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">IBPS PO Exam Date 2026</h2>
      <p><strong>Prelims Exam:</strong> August 22, 2026 &amp; August 23, 2026</p>
      <p><strong>Mains Exam:</strong> October 4, 2026</p>
      <p>The exam will be conducted in online mode across various centres nationwide.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">IBPS PO Salary 2026</h2>
      <p>Becoming an IBPS PO is one of the most attractive career options in the banking sector. The starting Basic Pay is approximately ₹48,480, with a pay scale ranging from ₹48,480–₹85,920. Including allowances, the in-hand salary typically ranges between ₹74,000 and ₹82,000 per month, depending on the posting location.</p>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Post</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Salary Details</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">PO / MT</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Basic Pay: ₹48,480</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Allowances</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">DA, HRA, CCA, Medical Benefits, LTC, Newspaper Allowance, Furniture Allowance, etc.</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Estimated Gross Salary</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">₹76,000 – ₹82,000 per month</td></tr>
        </tbody>
      </table>
    `,

    crux: `
      <div style="background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>IBPS PO Notification 2026</strong> has been released for 6,715 vacancies, with online applications open from July 1 to July 21, 2026. <strong>BSC Academy Patna</strong> offers complete IBPS PO coaching — Prelims, Mains and Interview — with experienced faculty, daily mock tests and updated study material.
        </p>
      </div>
    `,

    hookTitle: "Who Should Apply for IBPS PO 2026?",
    hookText: `
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Graduates aged between 20 and 30 years looking for a stable banking career</li>
        <li>Final-year graduation students planning ahead for next year's cycle</li>
        <li>Working professionals who want to switch to a government banking job</li>
        <li>Repeat aspirants who want to crack Prelims and Mains this attempt</li>
        <li>First-time aspirants who have no idea where to begin their preparation</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.8;">If you fall into any of these categories — keep reading. This blog is written for you.</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>6,715 Vacancies:</strong> One of the largest IBPS PO recruitment drives in recent years.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Apply by July 21, 2026:</strong> Don't miss the online application window.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>3-Stage Selection:</strong> Prelims, Mains and Interview — each stage needs a different strategy.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Sectional Cut-offs:</strong> You must clear the minimum marks in every section separately.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Attractive Salary:</strong> In-hand pay of around ₹74,000–₹82,000 per month plus allowances.</span>",
    ],

    faqs: [
      {
        question: "Has the IBPS PO Notification 2026 been released?",
        answer:
          "Yes, the IBPS PO Notification 2026 has been released and the online application process has begun.",
      },
      {
        question: "What is the last date to apply online for IBPS PO 2026?",
        answer: "The last date to apply is July 21, 2026.",
      },
      {
        question: "How many total vacancies are there in IBPS PO 2026?",
        answer: "A total of 6,715 vacancies have been announced.",
      },
      {
        question: "What is the IBPS PO Selection Process 2026?",
        answer: "The selection process includes Prelims, Mains and Interview.",
      },
      {
        question: "What is the IBPS PO Salary 2026?",
        answer:
          "The starting in-hand salary is approximately ₹74,000–₹82,000 per month, along with several allowances.",
      },
      {
        question: "Where should I prepare for IBPS PO 2026?",
        answer:
          "BSC Academy Patna offers complete IBPS PO 2026 coaching with expert faculty, updated study material, and regular test series. Contact us today for a free demo class.",
      },
    ],

  conclusion: `
  <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
    <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #111827;">Get Free Counselling at BSC Academy Patna</h2>
    <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
      BSC Academy Patna has been training students for Banking and SSC exams since 1993, offering complete IBPS PO 2026 preparation — from Prelims and Mains to Interview — backed by experienced faculty, updated study material, regular test series, and personalised interview guidance.
    </p>
    <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
      Seats are strictly limited to maintain quality of teaching and personal attention for every student. Don't let another year pass by — take action today.
    </p>

    <div style="background: #eef2ff; padding: 1.25rem; border-radius: 0.75rem; margin: 1.5rem 0;">
      <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #1f2937;">
        <strong>Get Free Counselling Today</strong> — just share your name and mobile number, and our counsellor will get back to you within 24 hours to answer all your questions: batch timings, course fee, demo class, study material and interview guidance.
      </p>
    </div>

    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); border-radius: 1rem; padding: 2rem; margin-top: 1.5rem; text-align: center;">
      <h3 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; margin: 0 0 0.75rem 0;">You Too Deserve a Seat in the Bank — Make It Happen</h3>
      <p style="font-size: 1.05rem; line-height: 1.7; color: #dbeafe; max-width: 32rem; margin: 0 auto 1.5rem auto;">Every successful IBPS PO once started exactly where you are now. The right guidance can turn your preparation into a selection. Reach out to BSC Academy Patna today and take the first step toward cracking IBPS PO 2026.</p>
      <a href="https://bscacademypatna.com/contact" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#ffffff;color:#1e3a8a;font-weight:600;font-size:1rem;padding:0.85rem 2rem;border-radius:0.6rem;text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,0.15);">Contact Us Now →</a>
      <div style="margin-top: 1.75rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2); display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem;">
        <span style="color: #e0e7ff; font-size: 0.95rem;">📍 Boring Road, Opp. A.N. College, Patna, Bihar – 800001</span>
        <span style="color: #e0e7ff; font-size: 0.95rem;">🏢 Branches: Rajendra Nagar &amp; Jagdeopath, Patna</span>
      </div>
    </div>
  </div>
`,
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}