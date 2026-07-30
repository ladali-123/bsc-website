import { useMemo } from "react";
import jagd from "../../assets/jagd.png";

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

        {/* Google My Business CTA - placed right after intro so it catches the eye first */}
        {blogData?.gmbLink && (
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {blogData?.gmbTitle || "Visit BSC Academy on Google Today!"}
              </h3>
              <p className="text-gray-600 mt-1">
                {blogData?.gmbText ||
                  "Check our latest reviews, timings, photos and directions on Google right now."}
              </p>
            </div>

            <a
              href={blogData.gmbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              View on Google →
            </a>
          </div>
        )}

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

export default function BSCAcademyBlog() {
  const blogData = {
    title:
      "Best Banking Coaching in Saguna More, Patna: BSC Academy – Your Launchpad to a Successful Banking Career",

    description:
      "Looking for the best banking coaching in Saguna More, Patna? Discover why BSC Academy is a top choice for IBPS PO, SBI Clerk, RBI Grade B, and other banking exams along with the best preparation books and strategies.",

    date: "2026-05-26",

    image: jagd,

    link: "/blog/best-banking-coaching-in-saguna-more-patna",

    // Google My Business CTA link (opens directly on click)
    gmbLink:
      "https://www.google.com/search?client=ms-android-samsung-rvo1&hs=epLq&sca_esv=9b2bce15ce0d44fb&cs=0&hl=en-IN&output=search&kgmid=/g/11bwf8w733&q=BSC+Coaching-+Best+Bank+SSC+Railway+Coaching+in+Patna+Bailey+Road&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/4&kgs=20e62a9933377722&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/4",
    gmbTitle: "Visit BSC Academy on Google Today!",
    gmbText:
      "Check our latest reviews, timings, photos and directions on Google Maps right now.",

    tags: [
      "BSC Academy",
      "Banking Coaching",
      "IBPS PO",
      "SBI Clerk",
      "RBI Grade B",
      "Patna Coaching",
      "Government Jobs",
      "Banking Exams",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Are you dreaming of a secure and prestigious government banking job in 2026? If you are searching for the <strong>best banking coaching in Saguna More, Patna</strong>, then <strong>BSC Academy</strong> is one name you will hear repeatedly.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        With increasing opportunities in public sector banks, the demand for proper guidance and smart preparation has become more important than ever.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Why Banking Sector Jobs Are in High Demand
      </h2>

      <p style="line-height: 1.9;">
        The banking industry is considered the backbone of India's economy. With lakhs of employees expected to retire in the coming years, public sector banks are projected to create nearly <strong>20 lakh new job opportunities</strong>.
      </p>

      <p style="line-height: 1.9;">
        This creates a massive opportunity for aspirants preparing for exams like <strong>IBPS PO, SBI Clerk, SBI PO, RRB, and RBI Grade B</strong>.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        BSC Academy: A Trusted Name in Banking Preparation
      </h2>

      <p style="line-height: 1.9;">
        BSC Academy has been guiding government exam aspirants for decades. The institute began its journey through the famous <strong>Banking Services Chronicle magazine</strong> in 1993 and later expanded into classroom coaching programs across India.
      </p>

      <p style="line-height: 1.9;">
        Today, the academy has <strong>37 centers across 26 cities</strong> including multiple branches in Patna such as Jagdeo Path, Anisabad, and Rajendra Nagar.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Why Students Prefer BSC Academy Jagdeo Path
      </h2>

      <ul style="padding-left: 1.2rem; line-height: 2;">
        <li>Experienced faculty for Banking and SSC preparation</li>
        <li>Interactive classroom learning approach</li>
        <li>Comprehensive preparation for IBPS, SBI, RBI, and SSC exams</li>
        <li>Regular mock tests and doubt-clearing sessions</li>
        <li>Special focus on weak students and concept clarity</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        BSC Academy Jagdeo Path – Address & Contact Details
      </h2>

      <div style="background:#f9fafb; padding:1.5rem; border-radius:14px; line-height:2;">
        <p><strong>Address:</strong> Opposite Ara Garden, Opposite St. Karens M. School, Ambedkar Path, Jagdeopath, Patna, Bihar - 800009.</p>

        
        <p><strong>Phone Number:</strong> 9798422296</p>

        <p><strong>Timings:</strong> Monday to Saturday (10:00 AM – 4:00 PM)</p>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Subjects Covered in Banking Coaching
      </h2>

      <ol style="padding-left: 1.2rem; line-height: 2;">
        <li><strong>Quantitative Aptitude</strong> – Arithmetic, Simplification, Data Interpretation</li>

        <li><strong>Reasoning Ability</strong> – Seating Arrangement, Puzzles, Logical Reasoning</li>

        <li><strong>English Language</strong> – Grammar, Vocabulary, Reading Comprehension</li>

        <li><strong>General & Banking Awareness</strong> – RBI Policies, Banking Terms, Current Affairs</li>
      </ol>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Best Books for Banking Exam Preparation
      </h2>

      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; margin-top:1rem; background:#f9fafb; min-width:700px;">

          <thead>
            <tr style="background:#e5e7eb;">

              <th style="border:1px solid #d1d5db; padding:14px; text-align:left;">
                Book Name
              </th>

              <th style="border:1px solid #d1d5db; padding:14px; text-align:left;">
                Author
              </th>

              <th style="border:1px solid #d1d5db; padding:14px; text-align:left;">
                Purpose
              </th>

            </tr>
          </thead>

          <tbody>

            <tr>
              <td style="border:1px solid #d1d5db; padding:14px;">
                Quantitative Aptitude for Competitive Examinations
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                R.S. Aggarwal
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                Arithmetic & Quant Practice
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #d1d5db; padding:14px;">
                A Modern Approach to Verbal & Non-Verbal Reasoning
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                R.S. Aggarwal
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                Reasoning Preparation
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #d1d5db; padding:14px;">
                Objective General English
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                S.P. Bakshi
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                English Grammar & Vocabulary
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #d1d5db; padding:14px;">
                Banking Awareness
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                Arihant Experts
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                Banking & Financial Awareness
              </td>
            </tr>

            <tr>
              <td style="border:1px solid #d1d5db; padding:14px;">
                Lucent's General Knowledge
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                Lucent
              </td>

              <td style="border:1px solid #d1d5db; padding:14px;">
                Static GK Preparation
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Online Mock Tests & Digital Preparation
      </h2>

      <p style="line-height: 1.9;">
        Along with classroom coaching, students should practice online mock tests regularly using platforms like Oliveboard and Testbook to improve speed, accuracy, and exam confidence.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem;">
        Final Verdict
      </h2>

      <p style="line-height: 1.9;">
        If you are a serious banking aspirant living near Jagdeo Path or anywhere in Patna, BSC Academy offers a structured environment, experienced faculty, and proper mentorship for competitive banking exams.
      </p>

      <p style="line-height: 1.9;">
        However, remember that coaching alone is not enough. Consistent self-study, mock tests, and standard books are equally important for success.
      </p>
    `,

    crux: `
      <div style="background:#f3f4f6; padding:1.5rem; border-left:4px solid #2563eb; border-radius:12px;">
        <p style="font-size:1.1rem; line-height:1.8; color:#374151;">
          BSC Academy Jagdeo Path is one of the leading banking coaching institutes in Patna offering preparation for IBPS, SBI, RBI, SSC, and other competitive exams with experienced faculty and comprehensive study support.
        </p>
      </div>
    `,

    hookTitle: "Why Choose BSC Academy for Banking Preparation?",

    hookText: `
      <p style="font-size:1.1rem; line-height:1.9; color:#374151;">
        BSC Academy combines classroom discipline, expert guidance, regular mock tests, and practical exam strategies to help students crack competitive banking exams efficiently.
      </p>
    `,

    keyPoints: [
      "<strong>37 centers across 26 cities</strong>",
      "<strong>Expert faculty</strong> for Banking & SSC exams",
      "<strong>Interactive learning environment</strong>",
      "<strong>Complete preparation</strong> for IBPS, SBI, RBI & SSC",
      "<strong>Top recommended banking books</strong> included in preparation strategy",
    ],

    conclusion: `
      <div style="background:#f8fafc; padding:1.5rem; border-radius:16px;">
        <p style="font-size:1.1rem; line-height:1.9; color:#374151;">
          Banking exams require smart preparation, consistency, and the right mentorship. BSC Academy Jagdeo Path provides a strong platform for aspirants aiming for successful careers in public sector banking and government jobs.
        </p>
      </div>
    `,

    faqs: [
      {
        question: "Does BSC Academy Jagdeo Path offer demo classes?",
        answer:
          "Yes, students can contact Mrs. Nutan Bukshi to schedule a demo class before enrollment.",
      },
      {
        question: "Is BSC Academy only for banking exams?",
        answer:
          "No, the academy also provides coaching for SSC, Railways, and other competitive exams.",
      },
      {
        question: "Which books are best for banking exam preparation?",
        answer:
          "R.S. Aggarwal for Quant and Reasoning, S.P. Bakshi for English, Arihant for Banking Awareness, and Lucent GK are highly recommended.",
      },
      {
        question: "Is coaching necessary for banking exams?",
        answer:
          "Coaching helps with strategy, discipline, mock tests, and doubt-solving, while self-study builds accuracy and confidence.",
      },
      {
        question: "How can I purchase the recommended books?",
        answer:
          "These books are available on Amazon, Flipkart, and local bookstores in Patna.",
      },
    ],
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}