import { useMemo } from "react";
import govtjob from "../../assets/govtjob.png";
// NOTE: replace the image import above with your actual hero image for this
// blog (same pattern as sarkImg in your existing blog file).

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

export default function BSCAcademyGovtJobs2026Blog() {
  const blogData = {
    title:
      "SSC CGL, IBPS PO, RRB NTPC & Bihar Govt Jobs 2026: One Blog, All Syllabus & Vacancy Updates",

    description:
      "Preparing for SSC CGL, IBPS PO, RRB NTPC, or BPSC/BSSC at the same time? Here's every upcoming exam stage, vacancy count, and syllabus you need to track right now — with nothing outdated or already completed.",

    date: "2026-09-05",

    image: govtjob,

    link: "/blog/ssc-cgl-ibps-po-rrb-ntpc-bihar-jobs-2026",

    tags: [
      "SSC CGL 2026",
      "IBPS PO 2026",
      "RRB NTPC",
      "BPSC",
      "BSSC",
      "Government Exams",
      "Patna",
      "BSC Academy",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Government exam season in 2026 is moving fast, and if you are preparing from Patna, keeping track of four exams at once — SSC CGL, IBPS PO, RRB NTPC, and Bihar's own BPSC/BSSC — can get overwhelming. This blog pulls together everything that is currently <strong>upcoming</strong> across all four, so you know exactly what is coming next and what to prepare for right now, without wading through outdated dates or stages that have already passed.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        BSC Academy Patna has been guiding aspirants for Bank, SSC, Railway, and state-level exams from its Boring Road, Rajendra Nagar, and Jagdeo Path centers, and this guide brings together the latest vacancy numbers, syllabus, and what's next on the calendar for each exam.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">What's Coming Up Across Govt Exams Right Now</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>SSC CGL 2026</strong> — Tier 1 exam dates expected soon, exam itself in September, followed by Tier 2 in December.</li>
        <li><strong>IBPS PO 2026</strong> — Mains exam scheduled for <strong>4th October 2026</strong>; this is the stage to focus on right now.</li>
        <li><strong>RRB NTPC 2026-27</strong> — A brand-new recruitment cycle has just been approved, with the notification expected soon.</li>
        <li><strong>BPSC 72nd CCE</strong> — Preliminary exam now scheduled for <strong>25th October 2026</strong>.</li>
        <li><strong>BSSC CGL 4 / Inter Level</strong> — Exam dates expected between September and October 2026.</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">SSC CGL 2026 — Tier 1 &amp; Tier 2, What's Ahead</h2>
      <p>The SSC CGL 2026 notification covers <strong>12,256 vacancies</strong> across Group B and C posts in various central government departments. Applications are closed, and the Commission is expected to announce the exact Tier 1 exam dates shortly, with the exam itself taking place in <strong>September 2026</strong>. Once Tier 1 concludes, the <strong>Tier 2 exam is tentatively scheduled for December 2026</strong>.</p>
      <p>A key change this year: SSC has introduced <strong>sectional timing</strong>, meaning each section now has its own fixed time limit rather than one combined timer for the whole exam.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Section</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Key Topics</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Marks</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General Intelligence &amp; Reasoning</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Analogy, Classification, Series, Coding-Decoding</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General Awareness</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">History, Geography, Polity, Static GK, Current Affairs</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Quantitative Aptitude</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Number System, Algebra, Geometry, Trigonometry, DI</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">English Comprehension</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Grammar, Vocabulary, Comprehension, Error Spotting</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">IBPS PO 2026 — Mains Exam Coming Up on 4th October</h2>
      <p>For banking aspirants, the exam to focus on right now is the <strong>IBPS PO 2026 Mains, scheduled for 4th October 2026</strong>. This year's recruitment (CRP PO/MT-XVI) is for <strong>7,565 Probationary Officer/Management Trainee vacancies</strong> across 11 participating public sector banks.</p>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>What's new:</strong> The objective paper now has 170 questions instead of 145, and a new non-qualifying <strong>Personality Test</strong> has been added between Mains and Interview — your responses go to the interview panel in advance, so answer honestly.</div>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Section</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Key Topics</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Reasoning &amp; Computer Aptitude</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">High-level puzzles, seating arrangement, computer basics</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">English Language</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Advanced RC, vocabulary, error correction</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Quantitative Aptitude / DI</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Application-based DI, data sufficiency, caselets</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General/Banking Awareness</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Banking awareness, RBI circulars, current affairs</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Descriptive Paper</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Essay and letter/comprehension writing</td></tr>
        </tbody>
      </table>
      <p><strong>Salary:</strong> IBPS PO's basic pay starts at ₹48,480, working out to roughly ₹74,000–76,000 in-hand per month with allowances.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">RRB NTPC 2026-27 — A Brand-New Recruitment Cycle Is Starting</h2>
      <p>The Railway Board has approved <strong>5,165 vacancies</strong> for the RRB NTPC 2026-27 cycle — <strong>3,477 Graduate-level</strong> and <strong>1,688 Undergraduate-level</strong> posts — via an official letter dated 3rd September 2026.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Stage</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Timeline</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Vacancy indent process begins</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">From 7th September 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Indenting Units complete process</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">By 15th September 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">PCPO stage</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">16th–22nd September 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Indent process concludes</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">By 26th September 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Full CEN notification</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Expected soon after</td></tr>
        </tbody>
      </table>
      <p>Since the detailed notification hasn't been released yet, this is the ideal time to build your syllabus foundation before the official application window opens.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Bihar Govt Jobs — BPSC 72nd CCE, BSSC CGL &amp; Inter Level</h2>
      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">BPSC 72nd Combined Competitive Examination (CCE)</h3>
      <p><strong>Vacancies:</strong> 1,186 posts across various Bihar Government departments. <strong>Preliminary Exam:</strong> rescheduled and now confirmed for <strong>25th October 2026</strong>.</p>
      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">BSSC CGL (4th Cycle)</h3>
      <p><strong>Vacancies:</strong> revised to <strong>1,883 posts</strong>. <strong>Exam Date:</strong> expected between September and October 2026 — official date awaited.</p>
      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">BSSC Inter Level</h3>
      <p><strong>Mains Exam:</strong> tentatively scheduled for September 2026. <strong>Mains Result:</strong> expected around October 2026.</p>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>Good to know:</strong> Bihar exams follow a different reservation framework from central exams (separate categories for BC, EBC, SC, ST, and women), and many posts are filled through Zilla Parishads or Municipal Corporations rather than only through the BPSC CCE — always read each notification in full.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">How to Use the Next Few Weeks Wisely</h2>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>Prioritise by exam date, not preference</strong> — if IBPS PO Mains is on 4th October and RRB NTPC's notification is still pending, focus on IBPS PO first.</li>
        <li><strong>Build a rotating revision schedule</strong> — General Awareness and Reasoning overlap across SSC, Banking, and Railway exams.</li>
        <li><strong>Track official notification pages daily</strong> — especially for RRB NTPC and BSSC CGL, where exact dates are still pending.</li>
        <li><strong>Practice sectional timing</strong> — especially for SSC CGL's new per-section timer.</li>
        <li><strong>Don't skip Descriptive/Personality components</strong> — IBPS PO's Descriptive Paper and Personality Test are easy to underprepare for.</li>
      </ol>
    `,

    crux: `
      <div style="background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #dc2626; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>In short:</strong> SSC CGL Tier 1 (Sept) and Tier 2 (Dec), IBPS PO Mains (4th Oct), a fresh RRB NTPC 2026-27 cycle with 5,165 vacancies, and BPSC 72nd CCE Prelims (25th Oct) are all converging this quarter. BSC Academy Patna helps you prioritise and prepare for whichever combination applies to you.
        </p>
      </div>
    `,

    hookTitle: "Who Is This Blog For?",
    hookText: `
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Candidates juggling prep for more than one exam at the same time</li>
        <li>IBPS PO aspirants who cleared Prelims and are now targeting Mains</li>
        <li>SSC CGL candidates planning their Tier 1 to Tier 2 timeline</li>
        <li>Railway aspirants waiting for the new RRB NTPC 2026-27 notification</li>
        <li>Bihar-based students tracking BPSC and BSSC exam dates</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.8;">If any of these describe you, this blog is your one-stop tracker for the next few months.</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>SSC CGL:</strong> Tier 1 in September, Tier 2 in December — 12,256 vacancies.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>IBPS PO:</strong> Mains on 4th October — 7,565 vacancies, new Personality Test stage.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>RRB NTPC 2026-27:</strong> 5,165 vacancies approved, full notification expected after September's indent process.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>BPSC 72nd CCE:</strong> Prelims rescheduled to 25th October — 1,186 vacancies.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>BSSC CGL 4:</strong> 1,883 vacancies, exam date expected September–October.</span>",
    ],

    faqs: [
      {
        question: "Which exam should I prioritise right now, in September 2026?",
        answer:
          "If you've already cleared IBPS PO Prelims, the Mains exam on 4th October should be your top priority. If you're preparing for SSC CGL, focus on Tier 1 since its exam window is also in September.",
      },
      {
        question: "Has the RRB NTPC 2026-27 notification been released yet?",
        answer:
          "Not yet. Only the vacancy approval (5,165 posts) has come through, with the indent process running through September 2026. The full notification is expected once this process concludes.",
      },
      {
        question: "When is the BPSC 72nd CCE Preliminary exam now scheduled?",
        answer: "It has been rescheduled to 25th October 2026 after an earlier postponement.",
      },
      {
        question: "Is there a fixed date yet for BSSC CGL 4?",
        answer:
          "No official date has been announced yet — it's expected sometime between September and October 2026. Keep checking the official BSSC website for updates.",
      },
      {
        question: "What's new in the IBPS PO 2026 Mains exam compared to previous years?",
        answer:
          "The objective paper now has 170 questions instead of 145, and there's a new non-qualifying Personality Test between Mains and the Interview.",
      },
    ],

    conclusion: `
      <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          Notifications will keep changing, dates will keep shifting — but the one thing fully in your control is how consistently you show up for your preparation today.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          Keep going, one topic at a time, and let BSC Academy Patna help you turn this year's opportunities into your selection.
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