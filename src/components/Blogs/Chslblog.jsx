import { useMemo } from "react";
import chslblog from "../../assets/chslblog.png";

/* ---------- tiny inline icons (no external deps) ---------- */
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);
const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

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
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_-12px_rgba(122,15,22,0.15)] p-6 md:p-12">
        <div className="flex flex-col gap-6">
          {/* Badge + Date + Title */}
          <div>
            <div className="flex items-center gap-3">
              {blogData?.badge && (
                <span className="text-[11px] font-semibold tracking-wide uppercase bg-[#7A0F16]/10 text-[#7A0F16] px-3 py-1 rounded-full">
                  {blogData.badge}
                </span>
              )}
              <span className="text-sm text-gray-500 font-medium">{blogData?.date}</span>
            </div>
            <h1 className="text-3xl md:text-[2.5rem] font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
              {blogData?.title}
            </h1>
          </div>

          {/* Full image below */}
          <div className="w-full">
            {blogData?.image && (
              <img
                src={blogData?.image}
                alt={blogData?.title}
                className="w-full h-auto rounded-2xl border border-gray-100"
              />
            )}
          </div>

          {/* Description + Tags below image */}
          <div>
            <p className="text-gray-600 text-lg mt-2 leading-relaxed border-l-2 border-[#7A0F16]/30 pl-4">
              {blogData?.description}
            </p>

            {Array.isArray(blogData?.tags) && blogData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {blogData.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-[#f3f4f6] text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
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
            className="mt-10 text-gray-800 text-base leading-8 chsl-rich-content"
            dangerouslySetInnerHTML={{ __html: html.text1 }}
          />
        )}

        {html.crux && (
          <div className="mt-10" dangerouslySetInnerHTML={{ __html: html.crux }} />
        )}

        {blogData?.hookTitle && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 pb-3 border-b border-gray-100">
              {blogData.hookTitle}
            </h2>
            {html.hookText && (
              <div
                className="mt-5 text-gray-800 chsl-rich-content"
                dangerouslySetInnerHTML={{ __html: html.hookText }}
              />
            )}
          </div>
        )}

        {Array.isArray(blogData?.keyPoints) && blogData.keyPoints.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900">Key Points</h3>
            <ul className="mt-5 space-y-3">
              {blogData.keyPoints.map((p, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-[#faf7f5] border border-[#7A0F16]/10 rounded-2xl p-4 text-gray-800"
                >
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#7A0F16] text-white text-xs flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(blogData?.faqs) && blogData.faqs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900">FAQs</h3>
            <div className="mt-5 space-y-3">
              {blogData.faqs.map((f, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-5 hover:border-[#7A0F16]/30 transition-colors">
                  <div className="font-semibold text-gray-900 flex gap-2">
                    <span className="text-[#7A0F16]">Q.</span>
                    {f.question}
                  </div>
                  <div className="mt-2 text-gray-600 pl-5">{f.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {html.conclusion && (
          <div className="mt-12" dangerouslySetInnerHTML={{ __html: html.conclusion }} />
        )}

        {/* Contact / Admission CTA Card */}
        {blogData?.contact && (
          <div className="mt-12 relative overflow-hidden rounded-[1.75rem] bg-[#7A0F16]">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-[#F4C542]" />

            <div className="relative px-7 py-9 md:px-12 md:py-12">
              <span className="inline-block text-[#F4C542] text-xs font-semibold tracking-wide">
                {blogData.contact.eyebrow}
              </span>

              <h3 className="mt-3 text-white text-2xl md:text-[2rem] font-bold leading-snug max-w-xl">
                {blogData.contact.headline}
              </h3>

              <p className="mt-4 text-[#F3D9DA] text-base md:text-lg leading-relaxed max-w-xl">
                {blogData.contact.message}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={blogData.contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[#7A0F16] font-semibold px-7 py-3 rounded-full hover:bg-[#F4C542] transition-colors duration-200 w-fit"
                >
                  {blogData.contact.buttonText}
                </a>
              </div>

              <p className="mt-8 text-[#F3D9DA]/80 text-sm italic max-w-xl border-t border-white/15 pt-5">
                {blogData.contact.closingLine}
              </p>
            </div>
          </div>
        )}

        {/* Our Branches */}
        {Array.isArray(blogData?.branches) && blogData.branches.length > 0 && (
          <div className="mt-6 rounded-[1.75rem] bg-[#1a1a2e] px-7 py-9 md:px-12 md:py-10">
            <h3 className="text-white text-xl font-bold mb-7">Visit Us at Any of Our Branches</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogData.branches.map((b, idx) => (
                <div key={idx} className={idx !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}>
                  <h4 className="text-white font-semibold text-base mb-4">{b.name}</h4>
                  <div className="space-y-3 text-sm text-white/80">
                    <a href={`tel:${b.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                      <span className="text-[#F4C542]"><PhoneIcon /></span>
                      {b.phone}
                    </a>
                    <a href={`mailto:${b.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors break-all">
                      <span className="text-[#F4C542] flex-shrink-0"><MailIcon /></span>
                      {b.email}
                    </a>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#F4C542] flex-shrink-0 mt-0.5"><PinIcon /></span>
                      <span>{b.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* scoped styling for the CMS-style rich text blocks (tables, headings) */}
      <style>{`
        .chsl-rich-content h2 { color: #1f2937; }
        .chsl-rich-content h3 { color: #1f2937; }
        .chsl-rich-content p { text-align: justify; line-height: 1.9; }
        .chsl-rich-content ul li, .chsl-rich-content ol li { text-align: justify; line-height: 1.9; margin-bottom: 0.9rem; }
        .chsl-rich-content ul li:last-child, .chsl-rich-content ol li:last-child { margin-bottom: 0; }
        .chsl-rich-content ul, .chsl-rich-content ol { margin-bottom: 1.75rem; }
        .chsl-rich-content table { border-radius: 0.75rem; overflow: hidden; }
        .chsl-rich-content thead tr { background: #7A0F16 !important; }
        .chsl-rich-content thead th { color: #ffffff !important; border-color: #7A0F16 !important; font-weight: 600; }
        .chsl-rich-content tbody tr:nth-child(even) { background: #faf7f5; }
      `}</style>
    </div>
  );
}

export default function ChslBlog() {
  const blogData = {
    badge: "SSC Exams",

    title: "SSC CHSL 2026 Notification Out: How to Start Your Preparation Today",

    description:
      "The SSC CHSL 2026 notification is officially out — this is your complete, section-wise guide to the exam pattern, subject-wise strategy, a realistic study plan, and how BSC Academy Patna's structured guidance can take you from aspirant to selected candidate.",

    date: "25 September 2026",

    image: chslblog,

    link: "/blog/ssc-chsl-2026-preparation-guide",

    tags: [
      "SSC CHSL 2026",
      "SSC Coaching",
      "Government Exams",
      "Exam Strategy",
      "BSC Academy",
      "Patna",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        The Staff Selection Commission (SSC) has officially released the SSC CHSL 2026 notification, opening the door for thousands of 12th-pass candidates across Bihar and the country to compete for central government posts like Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO).
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every year, lakhs of students apply for this exam — but only a small percentage actually clear both tiers. The difference between those who succeed and those who don't is rarely talent. It is almost always structure, consistency, and the right guidance. If you are serious about this opportunity, here is everything you need to know — the exam pattern, subject-wise strategy, a realistic study plan, and how the right coaching can change your entire outcome.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">1. Understanding the Exam Structure</h2>
      <p>SSC CHSL is conducted in two stages, followed by a skill/typing test:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Stage</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Type</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Nature</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Tier 1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Computer-Based Test (CBT)</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Qualifying / Screening</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Tier 2</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Computer-Based Test (CBT)</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Merit-Determining</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Skill / Typing Test</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Practical</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Qualifying</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Document Verification</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Final Stage</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Mandatory</td></tr>
        </tbody>
      </table>

      <p>Understanding this structure matters because most students only prepare seriously for Tier 1 and then panic when Tier 2 arrives — even though Tier 2 is what actually decides your final merit and selection.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">2. Tier 1 Exam Pattern (Section-Wise)</h2>
      <p>Tier 1 has 100 questions across 4 sections, to be completed in 60 minutes (80 minutes for PwBD candidates), with 0.50 negative marking per wrong answer.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Section</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Subject</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Questions</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Marks</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General Intelligence (Reasoning)</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">25</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">2</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General Awareness</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">25</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">3</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Quantitative Aptitude</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">25</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">4</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">English Language</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">25</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr style="background: #faf7f5; font-weight: 600;"><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Total</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;"></td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">100</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">200</td></tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">3. Tier 2 Exam Pattern (Session-Wise, Module-Wise)</h2>
      <p>Tier 2 decides your final merit, so it carries far more weight than most candidates realize.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Session</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Section</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Subject</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Questions</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Time</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Session 1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Section 1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Mathematical Abilities</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">30</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;" rowspan="2">1 hour</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Session 1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Section 1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Reasoning & General Intelligence</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">30</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Session 1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Section 2</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">English Language & Comprehension</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">40</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">1 hour</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Session 1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Section 2</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General Awareness</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">20</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;"></td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Session 1</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Section 3</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Computer Knowledge</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">15</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">15 minutes</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Session 2</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Section 3</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Skill Test / Typing Test</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">—</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">15–25 minutes</td></tr>
        </tbody>
      </table>
      <p style="font-size: 0.95rem; color: #6b7280;">Negative marking of 1 mark applies in Section 1, Section 2, and Module 1 of Section 3 in Tier 2.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">4. Subject-Wise Preparation Strategy</h2>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">General Intelligence & Reasoning</h3>
      <p>Focus on analogies, coding-decoding, blood relations, series, syllogism, and direction sense. This section rewards daily practice more than theory — the more puzzles you solve, the faster your brain starts recognizing patterns.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Quantitative Aptitude / Mathematical Abilities</h3>
      <p>Build your base in number systems, percentage, profit-loss, time-speed-distance, and geometry before moving to advanced-level mixed problems for Tier 2. Don't skip basics just to reach "advanced" topics — CHSL rewards accuracy over difficulty.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">English Language</h3>
      <p>Grammar (tenses, error detection, sentence improvement) and vocabulary (synonyms, antonyms, one-word substitution) should be revised daily in small doses. Reading comprehension and cloze tests need regular passage practice.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">General Awareness</h3>
      <p>Static GK (history, geography, polity, economy) plus current affairs of the last 6–8 months. This is the most time-efficient section if studied consistently — a little every day beats a lot right before the exam.</p>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">Computer Knowledge (Tier 2 only)</h3>
      <p>Basics of hardware, software, MS Office, internet, and shortcuts — a scoring section if prepared properly since it needs less depth than other subjects.</p>

      <div style="background: #faf7f5; padding: 1.1rem 1.25rem; border-radius: 0.75rem; margin: 1rem 0; border-left: 3px solid #7A0F16;"><strong style="color:#7A0F16;">Pro Tip:</strong> The biggest mistake candidates make is studying everything but testing nothing. Mock tests are not optional — they are how you find out what you actually know versus what you think you know.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">5. A Realistic Study Plan</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li><strong>Daily:</strong> 1 hour Reasoning, 1 hour Quant, 30 minutes English, 30 minutes GA/current affairs</li>
        <li><strong>Weekly:</strong> At least 2 sectional mock tests + 1 full-length mock test</li>
        <li><strong>Monthly:</strong> A revision week to go back over weak topics identified from mock analysis</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">6. Common Mistakes to Avoid</h2>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Ignoring Tier 2 preparation until after Tier 1 results</li>
        <li>Studying GK without daily current affairs revision</li>
        <li>Skipping typing/skill test practice until the last moment</li>
        <li>Attempting every question instead of managing time and accuracy</li>
        <li>Not analyzing mistakes after mock tests — just taking test after test without reviewing</li>
      </ol>
    `,

    crux: `
      <div style="background-color: #faf7f5; padding: 1.5rem; border-left: 4px solid #7A0F16; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>SSC CHSL 2026</strong> rewards structure and accuracy far more than raw hours. Master Tier 1 fundamentals, give Tier 2 the same seriousness from day one, and let regular mock tests — not guesswork — decide your revision plan.
        </p>
      </div>
    `,

    hookTitle: "How BSC Academy Will Guide Your Preparation",
    hookText: `
      <p style="font-size: 1.125rem; line-height: 1.9; text-align: justify; margin-bottom: 1.75rem; color: #374151;">This is exactly where most self-study plans collapse — not because students lack effort, but because they lack structure, feedback, and someone to course-correct them along the way. At BSC Academy, here's what your preparation actually looks like:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0 0 1.75rem 0;">
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Section-wise Live Classes</strong> — Reasoning, Quant, English, and GA taught separately by dedicated faculty, so you build real depth instead of jumping randomly between topics.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Daily Doubt-Clearing Sessions</strong> — You will never be stuck on a concept for days. Faculty is available to resolve doubts directly, one-on-one and in groups.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Full-Length & Sectional Mock Tests</strong> — Regular mocks that simulate the actual Tier 1 and Tier 2 interface, so exam-day pressure feels familiar, not new.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Detailed Performance Analysis</strong> — After every mock, get a breakdown of accuracy, speed, and weak areas, so your next week of study is targeted, not random.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Rank & Progress Tracking</strong> — See exactly where you stand compared to other serious aspirants.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Daily Current Affairs & GK Updates</strong> — Curated, exam-relevant updates so GA prep never feels overwhelming.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Dedicated Typing/Skill Test Practice</strong> — Focused sessions for the Tier 2 skill/typing component, a stage most institutes ignore until it's too late.</li>
        <li style="line-height: 1.9; text-align: justify; color: #374151;"><strong>Personal Mentorship</strong> — Regular guidance sessions to keep you motivated, accountable, and on track through the entire preparation cycle.</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.9; text-align: justify; color: #374151;">This isn't just a coaching class — it's a complete system built to take you from "I want to clear this exam" to "I am ready for this exam."</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Tier 1:</strong> 100 questions, 200 marks, 60 minutes — accuracy matters more than speed alone.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Tier 2:</strong> Decides your final merit — don't treat it as an afterthought.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Structured faculty + daily doubt sessions</strong> — never stay stuck on a concept.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Regular mock tests + performance analysis</strong> — preparation becomes data-driven, not guesswork.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Success Formula:</strong> Consistency + Mock Tests + Revision + Expert Guidance.</span>",
    ],

    faqs: [
      {
        question: "I have just passed 12th. Can I apply for SSC CHSL 2026?",
        answer:
          "Yes — SSC CHSL is specifically designed for 12th-pass candidates aiming for LDC, JSA, and DEO posts in central government departments.",
      },
      {
        question: "Which is more important, Tier 1 or Tier 2?",
        answer:
          "Tier 1 is qualifying in nature, but Tier 2 is what actually decides your final merit. Both need serious, structured preparation from the start.",
      },
      {
        question: "How many hours should I study daily?",
        answer:
          "Quality matters more than quantity. A focused 5 to 6 hours of daily study with regular mock tests is more than enough for most aspirants. Consistency over months is the key.",
      },
      {
        question: "What if I have failed a government exam before?",
        answer:
          "Failure is just feedback. Many of our top selections are students who failed once or twice before joining us. The right strategy, honest self-analysis, and consistent practice always turn things around.",
      },
      {
        question: "Does BSC Academy help with the Tier 2 skill/typing test as well?",
        answer:
          "Yes — we run dedicated, focused sessions for the Tier 2 skill and typing test, a stage most institutes overlook until it's too late.",
      },
    ],

    conclusion: `
      <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          Every year, someone from a small town, with an ordinary background and an extraordinary will, clears this exam and changes their family's life forever. That person could be you — but only if you start today, not "next Monday" or "after the notification comes properly." The notification is already out. The only thing left is your decision.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          If you have ever dreamt of a stable government job, of making your parents proud, of finally saying "I did it" — this is your sign to stop waiting and start preparing, seriously, from today.
        </p>
      </div>
    `,

    contact: {
      eyebrow: "Admissions Open — SSC CHSL 2026 Batch",
      headline: "If this is your dream, don't let it stay a dream.",
      message:
        "Take admission today and let BSC Academy's structured classes, daily doubt sessions, and regular mock tests turn your preparation into a real selection.",
      buttonText: "Contact Us Now",
      link: "https://bscacademypatna.com/contact",
      closingLine:
        "Your future self will thank you for starting today, not someday.",
    },

    branches: [
      {
        name: "Rajendra Nagar - Branch",
        phone: "97984 22292",
        email: "bscacademypatna4@gmail.com",
        address:
          "Grand Arya Complex, Ground Floor, Behind Kotak Mahindra Bank, Arya Kumar Road, Rajendra Nagar, Patna - 800016",
      },
      {
        name: "Boring Road - Branch",
        phone: "97984 22293",
        email: "bscacademypatna4@gmail.com",
        address:
          "Shakti Commercial Complex, A 3, West Boring Canal Road, Nearby Bharat Petrol Pump, Patna, Bihar 800001",
      },
      {
        name: "Jagdeo Path - Branch",
        phone: "97984 22296",
        email: "bscacademypatna4@gmail.com",
        address:
          "Ambedkar Path, opp. Ara Garden, Jagdeo Path, Rukanpura, Patna, Bihar 800014",
      },
    ],
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}    