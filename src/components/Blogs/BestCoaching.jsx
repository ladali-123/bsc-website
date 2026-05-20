

import { useMemo } from "react";
import banking from "../../assets/banking.png";

function BlogPage({ blogData }) {
  const html = useMemo(() => ({
    text1: blogData?.text1 || "",
    crux: blogData?.crux || "",
    hookText: blogData?.hookText || "",
    conclusion: blogData?.conclusion || "",
  }), [blogData]);

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
            <img
              src={blogData?.image}
              alt={blogData?.title}
              className="w-full h-auto rounded-2xl"
            />
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
          <div className="mt-8 text-gray-800 text-base leading-8" dangerouslySetInnerHTML={{ __html: html.text1 }} />
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

export default function BankingCoachingPatnaBlog() {

  const blogData = {
    title:
      "Best Banking Coaching in Patna – Why BSC Academy is the Right Choice for Banking Exam Preparation",

    description:
      "Looking for the best banking coaching in Patna? BSCAcademy offers expert guidance for SBI PO, IBPS Clerk, RBI, SSC, and other competitive exams with experienced faculty, mock tests, updated study material, and excellent results.",

    date: "2026-05-20",

    image: banking,

    link: "/blog/best-banking-coaching-in-patna-bscacademy",

    tags: [
      "Banking Coaching",
      "SBI PO",
      "IBPS",
      "RBI",
      "SSC",
      "BSCAcademy",
      "Patna",
      "Government Jobs",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        In today’s competitive world, banking jobs are among the most preferred career options in India.
        Every year, lakhs of students prepare for exams like SBI PO, SBI Clerk, IBPS PO, IBPS Clerk,
        RBI Assistant, and other government banking exams.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        However, cracking these exams requires the right strategy, proper guidance, consistent practice,
        and expert mentorship.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        If you are searching for the <strong>Best Banking Coaching in Patna</strong>,
        then BSCAcademy can be the perfect destination for your preparation.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        Why is Banking Coaching Important in Patna?
      </h2>

      <p>
        Many students start preparing for banking exams on their own, but after some time they struggle
        with consistency, proper guidance, and exam-level practice.
      </p>

      <p>
        Patna has become a major educational hub for competitive exam preparation.
        Due to increasing competition, students need structured preparation and expert support.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead>
          <tr style="background: #e5e7eb;">
            <th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">
              Benefits of Coaching
            </th>
            <th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">
              How BSCAcademy Helps
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 0.75rem;">
              Latest Exam Pattern Understanding
            </td>
            <td style="border: 1px solid #d1d5db; padding: 0.75rem;">
              Updated syllabus and exam-oriented preparation
            </td>
          </tr>

          <tr>
            <td style="border: 1px solid #d1d5db; padding: 0.75rem;">
              Improve Speed and Accuracy
            </td>
            <td style="border: 1px solid #d1d5db; padding: 0.75rem;">
              Shortcut tricks and regular practice
            </td>
          </tr>

          <tr>
            <td style="border: 1px solid #d1d5db; padding: 0.75rem;">
              Real Exam Practice
            </td>
            <td style="border: 1px solid #d1d5db; padding: 0.75rem;">
              Online and offline mock tests
            </td>
          </tr>

          <tr>
            <td style="border: 1px solid #d1d5db; padding: 0.75rem;">
              Confidence Building
            </td>
            <td style="border: 1px solid #d1d5db; padding: 0.75rem;">
              Performance analysis and doubt-solving support
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        Why BSCAcademy is Considered the Best Banking Coaching in Patna?
      </h2>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">
        1. Experienced Faculty Members
      </h3>

      <p>
        One of the biggest strengths of BSCAcademy is its highly experienced teaching team.
        Faculty members have years of experience preparing students for SBI, IBPS, RBI, SSC,
        and other competitive exams.
      </p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">
        2. Updated Study Material
      </h3>

      <p>
        Banking exam patterns change every year. BSCAcademy provides updated notes,
        practice sets, current affairs materials, and exam-oriented content according
        to the latest syllabus.
      </p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">
        3. Regular Mock Tests and Performance Analysis
      </h3>

      <ul>
        <li>Improve speed</li>
        <li>Increase accuracy</li>
        <li>Understand time management</li>
        <li>Analyze weak areas</li>
        <li>Gain real exam experience</li>
      </ul>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">
        4. Affordable Fee Structure
      </h3>

      <p>
        BSCAcademy aims to provide quality education at an affordable fee structure
        so students from all backgrounds can prepare without financial pressure.
      </p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">
        5. Competitive Learning Environment
      </h3>

      <p>
        The institute provides a positive and competitive atmosphere where students stay
        motivated and focused toward their goals.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        Banking Exams Covered at BSCAcademy
      </h2>

      <ul>
        <li>SBI PO Coaching</li>
        <li>SBI Clerk Coaching</li>
        <li>IBPS PO Coaching</li>
        <li>IBPS Clerk Coaching</li>
        <li>RBI Assistant Coaching</li>
        <li>RBI Grade B Coaching</li>
        <li>SSC Exams</li>
        <li>Railway Exams</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        SBI PO Coaching in Patna – Why Students Prefer BSCAcademy
      </h2>

      <p>
        SBI PO is one of the most prestigious banking jobs in India.
        BSCAcademy helps students with concept-based learning, speed math techniques,
        puzzle-solving methods, current affairs preparation, and interview guidance.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        IBPS Coaching in Patna – Smart Preparation Strategy
      </h2>

      <p>
        Competition in IBPS exams is increasing every year.
        BSCAcademy provides section-wise preparation, topic-wise mock tests,
        shortcut tricks, and time management strategies.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        Online and Offline Learning Support
      </h2>

      <p>
        BSCAcademy provides classroom coaching along with online support
        so students can continue preparation anytime and anywhere.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        BSCAcademy Patna Address and Contact Details
      </h2>

      <p>
        <strong>Website:</strong>
        <a href="https://bscacademy.com/" target="_blank">
          https://bscacademy.com/
        </a>
      </p>

      <p>
        <strong>Address:</strong><br/>
        Opposite AN College Main Gate, Boring Road, Patna
      </p>

      <p>
        <strong>Contact Number:</strong> 9798422293
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        Banking Exam Preparation Tips
      </h2>

      <ul>
        <li>Practice daily for at least 5–6 hours</li>
        <li>Attempt 2–3 mock tests every week</li>
        <li>Read current affairs regularly</li>
        <li>Focus on speed and accuracy</li>
        <li>Revise concepts consistently</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        Conclusion
      </h2>

      <p>
        If you are serious about building a career in the banking sector and searching for the
        <strong> Best Banking Coaching in Patna</strong>, then BSCAcademy can be a great choice.
      </p>

      <p>
        With experienced faculty, quality study materials, mock tests,
        doubt-solving support, and a competitive environment,
        BSCAcademy helps students prepare effectively for SBI, IBPS, RBI,
        SSC, and other competitive exams.
      </p>
    `,

    crux: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151; background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem;">
        <strong>
          BSCAcademy is one of the best banking coaching institutes in Patna,
          offering expert guidance for SBI, IBPS, RBI, SSC, and other government exams
          with experienced faculty, mock tests, updated study material, and affordable fees.
        </strong>
      </p>
    `,

    hookTitle: "Why Students Choose BSCAcademy in Patna",

    hookText: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        From experienced faculty to regular mock tests and affordable fees,
        BSCAcademy provides everything students need to crack banking exams successfully.
      </p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Experienced faculty for SBI, IBPS, RBI, SSC preparation</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Updated study material according to latest exam patterns</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Regular online and offline mock tests with analysis</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Affordable fee structure for students</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Positive and competitive classroom environment</span>",

      "<span style='font-size: 1.125rem; line-height: 1.8;'>Preparation for multiple government exams under one roof</span>",
    ],

    diagnosis: {
      title: "Why Students Need Banking Coaching",
      content: [
        "<span style='font-size: 1.125rem; line-height: 1.8;'>Understanding latest exam patterns and syllabus</span>",

        "<span style='font-size: 1.125rem; line-height: 1.8;'>Learning shortcut methods for calculations</span>",

        "<span style='font-size: 1.125rem; line-height: 1.8;'>Regular practice through mock tests</span>",

        "<span style='font-size: 1.125rem; line-height: 1.8;'>Building confidence for real exams</span>",

        "<span style='font-size: 1.125rem; line-height: 1.8;'>Performance tracking and improvement</span>",
      ],
    },

    remedies: {
      title: "Smart Preparation Tips for Banking Exams",
      content: [
        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Practice daily:</strong> Study consistently every day</span>",

        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Attempt mock tests:</strong> Improve speed and accuracy</span>",

        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Read current affairs:</strong> Important for banking awareness</span>",

        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Revise regularly:</strong> Retain concepts and formulas</span>",

        "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Follow expert guidance:</strong> Learn strategies from experienced teachers</span>",
      ],
    },

    conclusion: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Success in banking exams requires the right guidance, smart strategy,
        and continuous practice.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        BSCAcademy provides students with quality preparation, experienced mentorship,
        and a competitive learning environment to help them achieve their dream government job.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Start your preparation journey today with BSCAcademy and move one step closer to success.
      </p>
    `,

    faqs: [
      {
        question: "Which is the best banking coaching in Patna?",
        answer:
          "BSCAcademy is considered one of the best banking coaching institutes in Patna for SBI, IBPS, RBI, and SSC preparation.",
      },

      {
        question: "Does BSCAcademy provide SBI PO coaching?",
        answer:
          "Yes, BSCAcademy offers coaching for SBI PO, SBI Clerk, IBPS PO, IBPS Clerk, RBI, and other government exams.",
      },

      {
        question: "Are mock tests available at BSCAcademy?",
        answer:
          "Yes, regular online and offline mock tests are conducted for students.",
      },

      {
        question: "Can beginners start banking preparation at BSCAcademy?",
        answer:
          "Yes, the institute provides preparation from basic to advanced level.",
      },
    ],
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}