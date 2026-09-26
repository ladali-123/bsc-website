import { useMemo } from "react";
import bankingprep from "../../assets/bankingprep.png";

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

        {/* Branded Contact Us card — uses the site's red / navy / gold identity */}
        <ContactUsCard />
      </div>
    </div>
  );
}

/**
 * ContactUsCard
 * Styled to match the BSC Academy brand system used on the homepage banner:
 * deep red base, navy supporting tone, gold/yellow accent, white text on
 * the red panel. Built as its own component so it can be reused across
 * every blog page, not just this one.
 */
function ContactUsCard() {
  const branches = [
    {
      name: "Rajendra Nagar",
      phone: "97984 22292",
      address: "Grand Arya Complex, Ground Floor, Behind Kotak Mahindra Bank, Arya Kumar Road, Rajendra Nagar, Patna - 800016",
    },
    {
      name: "Boring Road",
      phone: "97984 22293",
      address: "Shakti Commercial Complex, A-3, West Boring Canal Road, Nearby Bharat Petrol Pump, Patna, Bihar 800001",
    },
    {
      name: "Jagdeo Path",
      phone: "97984 22296",
      address: "Ambedkar Path, opp. Ara Garden, Jagdeo Path, Rukanpura, Patna, Bihar 800014",
    },
  ];

  return (
    <div className="mt-12 relative overflow-hidden rounded-3xl bg-[#8c0e12]">
      {/* Diagonal gold accent stripe, echoing the homepage banner */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rotate-45 bg-[#f5b400] opacity-90"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#b91218] via-[#8c0e12] to-[#5c0a0d]"
        aria-hidden="true"
      />

      <div className="relative p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="inline-block text-xs font-bold tracking-wide text-[#1e2a52] bg-[#f5b400] px-3 py-1 rounded-full">
              Admissions Open
            </span>
            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-white leading-snug">
              Talk to BSC Academy Before Your Next Exam
            </h3>
            <p className="mt-2 text-white/85 max-w-xl">
              Not sure which exam to prioritise or which batch fits your schedule? Call your
              nearest center or reach out online — our counsellors will help you build a plan.
            </p>
          </div>

          <a
            href="https://bscacademypatna.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center bg-[#f5b400] text-[#1e2a52] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {branches.map((b) => (
            <div
              key={b.name}
              className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-sm"
            >
              <div className="text-white font-bold">{b.name}</div>
              <a
                href={`tel:+91${b.phone.replace(/\s/g, "")}`}
                className="mt-1 inline-block text-[#f5b400] font-semibold hover:underline"
              >
                {b.phone}
              </a>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">{b.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BSCAcademyBankingPrepBlog() {
  const blogData = {
    title: "How to Prepare for Banking Exams: A Step-by-Step Strategy Guide by BSC Academy Patna",

    description:
      "IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B — no matter which banking exam you're targeting, here's a complete section-wise breakdown of exam pattern, subject-wise strategy, a weekly timetable, and mistakes to avoid.",

    date: "2026-09-15",

    image: bankingprep,

    link: "/blog/how-to-prepare-for-banking-exams",

    tags: [ 
      "Banking Exams",
      "IBPS PO",
      "IBPS Clerk",
      "SBI PO",
      "RBI Grade B",
      "Exam Preparation",
      "Patna",
      "BSC Academy",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        The banking sector continues to be one of the most secure and respected career options in India. Every year, lakhs of students apply for exams like IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, and RBI Grade B — yet very few actually clear them, mainly due to a lack of the right strategy. This guide walks you section-wise through how to prepare for banking exams — covering syllabus, exam pattern, subject-wise strategy, a study timetable, and useful tips.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        If you're based in Patna and looking to seriously prepare for banking exams, <strong>BSC Academy Patna</strong> offers experienced faculty, structured study material, and regular mock tests across its Boring Road, Rajendra Nagar, and Jagdeo Path centers.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">1. Which Banking Exams Are There?</h2>
      <p>Before you begin your preparation, it's important to understand the major banking exams conducted in India so you can plan according to your goal.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Exam Name</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Conducting Body</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Post</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Eligibility</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">IBPS PO</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">IBPS</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Probationary Officer (Public Sector Banks)</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Graduate</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">IBPS Clerk</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">IBPS</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Clerk (Public Sector Banks)</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Graduate</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">IBPS RRB</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">IBPS</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Officer/Office Assistant (Regional Rural Banks)</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Graduate</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">SBI PO</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">SBI</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Probationary Officer</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Graduate</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">SBI Clerk</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">SBI</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Junior Associate</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Graduate</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">RBI Grade B</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">RBI</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Officer Grade B</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Graduate (min. 60%)</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">RBI Assistant</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">RBI</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Assistant</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Graduate</td></tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">2. What Is the Exam Pattern for Banking Exams?</h2>
      <p>Most banking exams are conducted in two or three stages: <strong>Prelims → Mains → Interview (for some exams)</strong>. Below is a general pattern applicable to PO-level exams.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Stage</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Sections</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Total Questions</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Total Marks</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Duration</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Prelims</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Reasoning, Quant, English</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">100</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">100</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">60 minutes</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Mains</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Reasoning &amp; Computer, Data Analysis, English, GA, Descriptive</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">155–200 (varies)</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">200–250</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Approx. 3 hours</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Interview/Group Exercise</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">100</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">15–20 minutes</td></tr>
        </tbody>
      </table>
      <p>Clerk-level exams generally don't include an interview, and the difficulty level is slightly lower, but the overall pattern remains similar.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">3. How to Prepare for Banking Exams (Step-by-Step)</h2>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Step 1: Understand the Syllabus and Exam Pattern Thoroughly</h3>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Start by reading the official notification and noting down the complete syllabus.</li>
        <li>Carefully understand the exam pattern, marking scheme, and negative marking rules.</li>
        <li>Analyze the cut-off trends of the last 2–3 years so you know what score to target.</li>
      </ol>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Step 2: Create a Realistic Study Plan</h3>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Build a daily study schedule that allocates time to every subject.</li>
        <li>List your weak and strong topics — give more time to weak areas.</li>
        <li>Set weekly and monthly targets, not just daily ones.</li>
        <li>Keep one revision day every week without fail.</li>
      </ol>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Step 3: Prepare Subject-Wise</h3>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>Quantitative Aptitude</strong> — Start with basic concepts (number system, percentage, ratio, simplification), then move on to Data Interpretation and Arithmetic. Work on both speed and accuracy.</li>
        <li><strong>Reasoning Ability</strong> — Puzzles and seating arrangement carry the highest weightage, so practice them daily. Also cover syllogism, coding-decoding, and inequality.</li>
        <li><strong>English Language</strong> — Revise grammar rules, read one editorial daily (for vocabulary and reading speed), and practice reading comprehension, cloze test, and error detection.</li>
        <li><strong>General Awareness / Banking Awareness</strong> — Revise current affairs (last 6 months) and static banking awareness (RBI policies, financial terms, committees) daily. Prepare a monthly current affairs capsule.</li>
        <li><strong>Computer Knowledge</strong> — Cover basic computer fundamentals, MS Office, internet, and banking-related computer terms.</li>
      </ol>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Step 4: Practice Mock Tests and Previous Year Papers</h3>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Take at least 2–3 full-length mock tests every week.</li>
        <li>Do a detailed analysis after every mock test — identify which topics need more work.</li>
        <li>Take sectional tests as well to improve time management.</li>
        <li>Solve previous year papers from at least the last 5 years.</li>
      </ol>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Step 5: Focus on Revision and Speed Building</h3>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Stop starting new topics about a month before the exam — focus only on revision.</li>
        <li>Prepare short notes and formula sheets you can revise quickly before the exam.</li>
        <li>Work on calculation speed along with accuracy.</li>
      </ol>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Step 6: Take Care of Your Health and Mindset</h3>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Get proper sleep and follow a healthy diet — both are essential for mental sharpness.</li>
        <li>Avoid negative thoughts and unnecessary comparisons with others.</li>
        <li>Practice staying calm for exam day — take mock tests under exam-like conditions.</li>
      </ol>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">4. Sample Weekly Study Timetable</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Day</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Quant</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Reasoning</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">English</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">GA/Banking Awareness</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Mock Test/Revision</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Monday</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1 hr</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">30 min</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Tuesday</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1 hr</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">30 min</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Wednesday</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1 hr</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">30 min</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Sectional Test</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Thursday</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1 hr</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">30 min</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Friday</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1.5 hrs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1 hr</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">30 min</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Saturday</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Revision</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Revision</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Revision</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Revision</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Full Mock Test</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Sunday</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Weekly Current Affairs Recap</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Mock Test Analysis</td></tr>
        </tbody>
      </table>
      <p style="font-size: 0.95rem; color: #6b7280;"><em>This is a sample timetable; adjust it based on your own job/college schedule.</em></p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">5. Common Mistakes to Avoid During Preparation</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Focusing too much on one subject while ignoring the others.</li>
        <li>Not analyzing your performance after mock tests.</li>
        <li>Leaving current affairs for the last moment.</li>
        <li>Studying random topics without a clear strategy.</li>
        <li>Guessing answers randomly without considering negative marking.</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">6. Why Choose BSC Academy Patna?</h2>
      <p>BSC Academy Patna is one of the most trusted institutes in Patna for banking and competitive exam coaching. Here's what you get:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Experienced, result-oriented faculty</li>
        <li>Updated study material designed as per the latest exam pattern</li>
        <li>Regular mock tests and sectional tests</li>
        <li>Doubt-clearing sessions and personalized attention</li>
        <li>Interview preparation and guidance (for PO-level exams)</li>
      </ul>
      <p>Whether you're a beginner or have already given a few attempts, the right guidance and a structured approach can help you crack your banking exam.</p>
    `,

    crux: `
      <div style="background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #dc2626; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>In short:</strong> Cracking a banking exam is less about last-minute cramming and more about a consistent, subject-wise routine — Quant, Reasoning, English, and General/Banking Awareness practiced daily, backed by weekly mock tests and honest analysis. BSC Academy Patna helps you build and stick to exactly this kind of routine.
        </p>
      </div>
    `,

    hookTitle: "Who Is This Blog For?",
    hookText: `
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>First-time aspirants who don't know where to start with banking exam prep</li>
        <li>Candidates preparing for IBPS PO, IBPS Clerk, SBI PO, or SBI Clerk</li>
        <li>RBI Grade B/Assistant aspirants looking for a structured study plan</li>
        <li>Repeaters who want to fix gaps from their last attempt</li>
        <li>Working professionals trying to balance a job with exam preparation</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.8;">If any of these describe you, this guide gives you a ready framework to follow from today.</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Exam Pattern:</strong> Prelims (100 marks, 60 mins) → Mains (200–250 marks, ~3 hrs) → Interview (for PO-level exams).</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Subject Split:</strong> Quant, Reasoning, English, General/Banking Awareness, and Computer Knowledge — practiced daily, not in isolation.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Mock Tests:</strong> 2–3 full-length mocks every week, with detailed post-test analysis, are non-negotiable.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Last Month:</strong> Stop new topics, focus purely on revision, formula sheets, and speed.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Common Mistake:</strong> Ignoring current affairs and negative marking strategy costs the most marks.</span>",
    ],

    faqs: [
      {
        question: "How many months are enough to prepare for a banking exam?",
        answer:
          "For most banking Prelims + Mains exams, 4–6 months of consistent, structured preparation is generally sufficient if you're starting from a reasonable base. Repeaters with a solid foundation can often prepare in less time by focusing purely on mock tests and weak areas.",
      },
      {
        question: "Which subject should I start with as a beginner?",
        answer:
          "Start with Quantitative Aptitude and Reasoning basics, since these take the longest to build speed in. English and Banking Awareness can be built alongside through daily reading and current affairs revision.",
      },
      {
        question: "How many mock tests should I take before the exam?",
        answer:
          "Aim for at least 2–3 full-length mock tests per week in the months leading up to the exam, along with regular sectional tests, and always review your mistakes after each one.",
      },
      {
        question: "Is coaching necessary, or can I prepare on my own?",
        answer:
          "Self-preparation is possible, but structured coaching helps with a fixed schedule, expert doubt-clearing, updated material, and regular mock tests — all of which can meaningfully cut down your preparation time.",
      },
      {
        question: "What is the ideal daily study time for banking exam preparation?",
        answer:
          "6–7 hours a day works well for full-time aspirants, while working professionals can still clear these exams with 3–4 focused hours daily, provided the time is used consistently and with a clear plan.",
      },
    ],

    conclusion: `
      <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          Banking exams reward consistency far more than intensity in the last few days. A clear subject-wise routine, regular mock tests, and honest self-analysis will take you further than any last-minute shortcut.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          Start today, one subject at a time, and let BSC Academy Patna help you turn this preparation into your selection.
        </p>
      </div>
    `,
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}